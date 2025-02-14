import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('./database.sqlite');

async function serialize(){
    await dbRun("CREATE TABLE IF NOT EXISTS plants (id INTEGER PRIMARY KEY AUTOINCREMENT , nev TEXT, eveloE BOOLEAN, kategoria TEXT , ar INTEGER)");

    //("INSERT INTO plants (nev, eveloE, kategoria, ar) VALUES (?,?,?,?)", ["fa", true, "fa", "1"]);
}


function dbQuery(sql, params){
    return new Promise((resolve, reject) => {
        db.all(sql, params, (err, rows) => {
            if (err) reject(err);
            else resolve(rows);
        });
    });
}

function dbRun(sql, params){
    return new Promise((resolve, reject) => {
        db.run(sql, params, err => {
            if (err) reject(err);
            else resolve(this);
        });
    });
}

export { serialize, dbRun, dbQuery, db };