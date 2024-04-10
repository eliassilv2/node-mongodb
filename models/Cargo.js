const mongoose = require('mongoose')

const schema = mongoose.Schema({
    nome: {
        type: String,
    }
})

const Cargo = mongoose.model('Cargo', schema)

module.exports = Cargo