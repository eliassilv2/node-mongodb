const mongoose = require('mongoose')

const schema = mongoose.Schema({
    nome: {
        type: String,
    }
})

const Tipo = mongoose.model('Tipo', schema)

module.exports = Tipo