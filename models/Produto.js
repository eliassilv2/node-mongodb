const mongoose = require('mongoose')

const schema = mongoose.Schema({
    nome: {
        type:String,
        require: true,
        minLenght: 2,
        maxLenght: 10
    },
    preco: {
        type: Number,
        default: 0,
        min: [0, 'Mais fácil'],
        match: /^\d+(\.\d{1,2})?$/,
    },    
    tamanho: String,
    tipo: {
        type: String,
        enum: ['Bebidas', 'Pizzas', 'Massas', 'Sobremesas']
    },
    ingredientes: [String] 
})

const Produto = mongoose.model('Produto', schema)

module.exports = Produto 