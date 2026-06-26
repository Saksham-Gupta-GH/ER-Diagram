# Interactive Database Schema Viewer

An interactive, web-based tool for visualizing and exploring PostgreSQL database schemas. This tool automatically groups database tables into logical modules and generates interactive Mermaid ER diagrams.

## Features

*   **Interactive ER Diagrams**: Automatically generated Entity-Relationship diagrams using Mermaid.js.
*   **Modular View**: Tables are grouped into logical business modules (e.g., Bookings, Payments, Staff) for easier navigation.
*   **Live Code Editor**: View, copy, and dynamically edit the underlying Mermaid syntax. If you make a mistake, use the Undo feature to revert changes.
*   **Table Inspector**: Click on any table chip or diagram node to view detailed schemas (Columns, Data Types, Nullability, Primary Keys).
*   **Search**: Instantly search across all tables in the database.
*   **Pan & Zoom**: SVG diagrams support full panning and zooming for large schemas.

## Important Note on Relationships

The relationships drawn in these diagrams represent **formal Foreign Key constraints** as defined in the PostgreSQL database. 

**Implicit Relationships:** This tool *does not* automatically draw lines for implicit relationships (e.g., a `venueId` column that lacks a formal `FOREIGN KEY` constraint in the database). Tables that lack formal constraints will appear in the "Isolated Tables" section of their module. You can use the built-in Mermaid Live Editor (`</> View Mermaid Code`) to manually add these relationships for visualization purposes.

## Understanding the Diagrams

This viewer uses standard **Crow's Foot Notation**:
*   `||--o{` : **One-to-Many** (e.g., One User has Many Bookings)
*   `||--||` : **One-to-One** 
*   `}o--o{` : **Many-to-Many**

## Development

Since this is a static, single-page application (`index.html`), no build steps are required. Simply open `index.html` in your browser.

**To deploy:**
You can deploy this instantly on Vercel, Netlify, or GitHub Pages as a static site.
