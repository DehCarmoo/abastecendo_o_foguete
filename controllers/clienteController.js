const Cliente = require('../models/clienteModel');

exports.getClientes = (req, res) => {
    Cliente.getAll((err, results) => {
        if (err) throw err;
        res.json(results);
    });
};

exports.getClienteById = (req, res) => {
    const id = req.params.id;
    Cliente.getById(id, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
};

exports.createCliente = (req, res) => {
    const data = req.body;
    Cliente.create(data, (err, result) => {
        if (err) throw err;
        res.json({ id: result.insertId, ...data });
    });
};

exports.updateCliente = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    Cliente.update(id, data, (err, result) => {
        if (err) throw err;
        res.json({ id, ...data });
    });
};

exports.deleteCliente = (req, res) => {
    const id = req.params.id;
    Cliente.delete(id, (err, result) => {
        if (err) throw err;
        res.json({ message: 'Cliente deletado com sucesso.' });
    });
};
