const Database = require('sqlite-async');

function execute(db){
    return db.exec(`
        CREATE TABLE IF NOT EXISTS schools(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            lat TEXT,
            lng TEXT,
            name TEXT,
            about TEXT,
            whatsapp TEXT,
            images TEXT
        );
        CREATE TABLE IF NOT EXISTS users(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            images TEXT,
            nome TEXT,
            CPF TEXT,
            email TEXT,
            telefone TEXT,
            nacimento TEXT,
            cargo INTEGER,
            endereco TEXT,
            uf TEXT
        );
    `)
    
}

module.exports = Database.open(__dirname + '/database.sqlite').then(execute)