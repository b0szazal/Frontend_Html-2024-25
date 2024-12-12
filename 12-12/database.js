import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('./database.sqlite');

const initializeDB = async () => {
    await dbRun('CREATE TABLE IF NOT EXISTS products (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, description TEXT ,image TEXT, price REAL)')
}

function dbQuery(sql, params = []) {
    return new Promise((resolve, reject) => {
        db.all(sql, params, (err, rows) => {
            if (err) reject(err);
            else resolve(rows);
        });
    });
}

function dbRun(sql, params = []) {
    return new Promise((resolve, reject) => {
        db.run(sql, params, err => {
            if (err) reject(err);
            else resolve(this);
        });
    });
}

export { initializeDB, dbQuery, dbRun, db };
