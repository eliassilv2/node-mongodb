const mongoose = require('mongoose')

const schema = mongoose.Schema({
    produto: {
        type: String,
    },
    ingrediente: {
        type: String
    }
})

const ProdutoIngrediente = mongoose.model('ProdutoIngrediente', schema)

module.exports = ProdutoIngrediente