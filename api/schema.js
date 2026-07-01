const { Client } = require('pg');

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        // Fetch from the EC2 micro-server over HTTP
        const response = await fetch('http://3.110.193.238:5001/api/schema');
        
        if (!response.ok) {
            throw new Error(`EC2 server responded with status ${response.status}`);
        }
        
        const data = await response.json();
        return res.status(200).json(data);
    } catch (error) {
        console.error('Fetch Error:', error);
        return res.status(500).json({ error: 'Failed to fetch schema from EC2', details: error.message });
    }
}
