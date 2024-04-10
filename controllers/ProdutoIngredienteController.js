const { json } = require("express");
const ProdutoIngrediente = require("../models/ProdutoIngrediente}")

const ProdutoIngredienteController = {
    getAll: async (req, res) => {
        res.json(await ProdutoIngrediente.find())
    },
    get: async (req, res) => {

        try {
            res.json(await ProdutoIngrediente.findById(req.params.id))
        } catch (error) {
            res.status(404).json({ error: 'Não encontrado' })
        }
    },

    create: async (req, res) => {

        try {
            res.json(await ProdutoIngrediente.create(req.body))
        } catch (error) {
            res.status(400).json(error)
        }
    },

    update: async (req, res) => {

        try {
            res.json(await ProdutoIngrediente.findByIdAndUpdate(req.params.id, req.body))
        } catch (error) {
            res.status(404).json({ error: 'Não encontrado' })
        }
    },

    delete: async (req, res) => {

        try {
            res.json(await ProdutoIngrediente.findByIdAndDelete(req.params.id))
        } catch (error) {
            res.status(404).json({ error: 'Não encontrado' })
        }
    },
}

module.exports = ProdutoIngredienteController