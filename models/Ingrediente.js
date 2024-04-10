const mongoose = require('mongoose')

const schema = mongoose.Schema({
    nome: {
        type: String,
    },
    descricao: {
        type: String
    }
})

const Ingrediente = mongoose.model('Ingrediente', schema)

module.exports = Ingrediente