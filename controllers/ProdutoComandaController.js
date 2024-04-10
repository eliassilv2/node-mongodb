const { json } = require("express");
const ProdutoComanda = require("../models/ProdutoComanda}")

const ProdutoComandaController = {
    getAll: async (req, res) => {
        res.json(await ProdutoComanda.find())
    },
    get: async (req, res) => {

        try {
            res.json(await ProdutoComanda.findById(req.params.id))
        } catch (error) {
            res.status(404).json({ error: 'Não encontrado' })
        }
    },

    create: async (req, res) => {

        try {
            res.json(await ProdutoComanda.create(req.body))
        } catch (error) {
            res.status(400).json(error)
        }
    },

    update: async (req, res) => {

        try {
            res.json(await ProdutoComanda.findByIdAndUpdate(req.params.id, req.body))
        } catch (error) {
            res.status(404).json({ error: 'Não encontrado' })
        }
    },

    delete: async (req, res) => {

        try {
            res.json(await ProdutoComanda.findByIdAndDelete(req.params.id))
        } catch (error) {
            res.status(404).json({ error: 'Não encontrado' })
        }
    },
}

module.exports = ProdutoComandaController