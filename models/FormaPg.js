const mongoose = require('mongoose')

const schema = mongoose.Schema({
    nome: {
        type: String,
    }
})

const FormaPg = mongoose.model('FormaPg', schema)

module.exports = FormaPg