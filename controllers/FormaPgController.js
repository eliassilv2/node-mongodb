const { json } = require("express");
const FormaPg = require("../models/FormaPg}")

const FormaPgController = {
    getAll: async (req, res) => {
        res.json(await FormaPg.find())
    },
    get: async (req, res) => {

        try {
            res.json(await FormaPg.findById(req.params.id))
        } catch (error) {
            res.status(404).json({ error: 'Não encontrado' })
        }
    },

    create: async (req, res) => {

        try {
            res.json(await FormaPg.create(req.body))
        } catch (error) {
            res.status(400).json(error)
        }
    },

    update: async (req, res) => {

        try {
            res.json(await FormaPg.findByIdAndUpdate(req.params.id, req.body))
        } catch (error) {
            res.status(404).json({ error: 'Não encontrado' })
        }
    },

    delete: async (req, res) => {

        try {
            res.json(await FormaPg.findByIdAndDelete(req.params.id))
        } catch (error) {
            res.status(404).json({ error: 'Não encontrado' })
        }
    },
}

module.exports = FormaPgController