const { Client } = require('pg');

export default async function handler(req, res) {
    // Only allow GET requests
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        const client = new Client({
            host: process.env.DB_HOST || 'movira-postgres.czmmae6y80d2.ap-south-1.rds.amazonaws.com',
            port: parseInt(process.env.DB_PORT || '5432'),
            database: process.env.DB_NAME || 'movira',
            user: process.env.DB_USER || 'movira_admin',
            password: process.env.DB_PASSWORD, // Ensure this is set in Vercel env vars!
            ssl: {
                rejectUnauthorized: false
            }
        });

        await client.connect();

        // 1. Get all columns
        const colsRes = await client.query(`
            SELECT table_schema, table_name, column_name, data_type, is_nullable
            FROM information_schema.columns
            WHERE table_schema IN ('public', 'crm')
            ORDER BY table_name, ordinal_position;
        `);

        // 2. Get Primary Keys
        const pksRes = await client.query(`
            SELECT kcu.table_schema, kcu.table_name, kcu.column_name
            FROM information_schema.table_constraints tc
            JOIN information_schema.key_column_usage kcu
              ON tc.constraint_name = kcu.constraint_name
              AND tc.table_schema = kcu.table_schema
            WHERE tc.constraint_type = 'PRIMARY KEY'
              AND tc.table_schema IN ('public', 'crm');
        `);
        const pks = new Set(pksRes.rows.map(r => `${r.table_schema}.${r.table_name}.${r.column_name}`));

        // 3. Get Foreign Keys
        const fksRes = await client.query(`
            SELECT
                tc.table_schema, tc.table_name, kcu.column_name,
                ccu.table_schema AS foreign_table_schema,
                ccu.table_name AS foreign_table_name,
                ccu.column_name AS foreign_column_name
            FROM information_schema.table_constraints AS tc
            JOIN information_schema.key_column_usage AS kcu
              ON tc.constraint_name = kcu.constraint_name
              AND tc.table_schema = kcu.table_schema
            JOIN information_schema.constraint_column_usage AS ccu
              ON ccu.constraint_name = tc.constraint_name
              AND ccu.table_schema = tc.table_schema
            WHERE tc.constraint_type = 'FOREIGN KEY'
              AND tc.table_schema IN ('public', 'crm');
        `);

        const tables = {};
        for (const row of colsRes.rows) {
            if (!tables[row.table_name]) {
                let module = '1. Venues, Staff & System Administration';
                if (row.table_schema === 'crm') {
                    if (row.table_name.includes('automation') || row.table_name.includes('job') || row.table_name.includes('queue') || row.table_name.includes('log')) {
                        module = '8. CRM Automation & Infrastructure';
                    } else {
                        module = '7. CRM Marketing & Contacts';
                    }
                }

                tables[row.table_name] = {
                    name: row.table_name,
                    schema: row.table_schema,
                    module: module,
                    columns: []
                };
            }
            tables[row.table_name].columns.push({
                name: row.column_name,
                type: row.data_type,
                nullable: row.is_nullable,
                is_pk: pks.has(`${row.table_schema}.${row.table_name}.${row.column_name}`)
            });
        }

        const relations = [];
        for (const row of fksRes.rows) {
            relations.push({
                from: row.table_name,
                fromColumn: row.column_name,
                to: row.foreign_table_name,
                toColumn: row.foreign_column_name,
                module: tables[row.table_name] ? tables[row.table_name].module : 'Unknown'
            });
        }

        await client.end();

        return res.status(200).json({ tables, relations });
    } catch (error) {
        console.error('Database Error:', error);
        return res.status(500).json({ error: 'Failed to fetch schema from database', details: error.message });
    }
}
