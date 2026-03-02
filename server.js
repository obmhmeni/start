const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Database = require('better-sqlite3');

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname));

// Create / Connect Database
const db = new Database('database.db');

// Create Table
db.prepare(`
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        email TEXT,
        password TEXT
    )
`).run();

// Register API
app.post('/register', (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.json({ message: "All fields required!" });
    }

    const stmt = db.prepare(
        "INSERT INTO users (name, email, password) VALUES (?, ?, ?)"
    );

    stmt.run(name, email, password);

    res.json({ message: "User Registered Successfully 🚀" });
});

// Start Server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
