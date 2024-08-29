const Produto = require('../models/produtoModel');

exports.getProdutos = (req, res) => {
    Produto.getAll((err, results) => {
        if (err) throw err;
        res.json(results);
    });
};

exports.getProdutoById = (req, res) => {
    const id = req.params.id;
    Produto.getById(id, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
};

exports.createProduto = (req, res) => {
    const data = req.body;
    Produto.create(data, (err, result) => {
        if (err) throw err;
        res.json({ id: result.insertId, ...data });
    });
};

exports.updateProduto = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    Produto.update(id, data, (err, result) => {
        if (err) throw err;
        res.json({ id, ...data });
    });
};

exports.deleteProduto = (req, res) => {
    const id = req.params.id;
    Produto.delete(id, (err, result) => {
        if (err) throw err;
        res.json({ message: 'Produto deletado com sucesso.' });
    });
};
