const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'coffeeNasa',
    password: '123456',
    database: 'cafeteria'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Conectado ao banco de dados MySQL.');
});

module.exports = connection;
