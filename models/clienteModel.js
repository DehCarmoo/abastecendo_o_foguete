const db = require('../config');

const Cliente = {
    getAll: (callback) => {
        db.query('SELECT * FROM Clientes', callback);
    },
    getById: (id, callback) => {
        db.query('SELECT * FROM Clientes WHERE id = ?', [id], callback);
    },
    create: (data, callback) => {
        db.query('INSERT INTO Clientes SET ?', data, callback);
    },
    update: (id, data, callback) => {
        db.query('UPDATE Clientes SET ? WHERE id = ?', [data, id], callback);
    },
    delete: (id, callback) => {
        db.query('DELETE FROM Clientes WHERE id = ?', [id], callback);
    }
};

module.exports = Cliente;
