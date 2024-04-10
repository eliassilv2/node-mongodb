
const mongoose = require('mongoose')

const schema = mongoose.Schema({
    produto: {
        type: String,
    },
    comanda: {
        type: String
    }
})

const ProdutoComanda = mongoose.model('ProdutoComanda', schema)

module.exports = ProdutoComanda