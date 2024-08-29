const db = require('../config');

const Produto = {
    getAll: (callback) => {
        db.query('SELECT * FROM Produtos', callback);
    },
    getById: (id, callback) => {
        db.query('SELECT * FROM Produtos WHERE id = ?', [id], callback);
    },
    create: (data, callback) => {
        db.query('INSERT INTO Produtos SET ?', data, callback);
    },
    update: (id, data, callback) => {
        db.query('UPDATE Produtos SET ? WHERE id = ?', [data, id], callback);
    },
    delete: (id, callback) => {
        db.query('DELETE FROM Produtos WHERE id = ?', [id], callback);
    }
};

module.exports = Produto;
