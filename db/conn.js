const mongoose = require('mongoose')

async function main(){

    try {
        await mongoose.connect('mongodb+srv://eliassouza:panqueca1412@cluster0.ewthqu5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        console.log('Banco OK');        
    } catch (error) {
        console.log('Erro: ' + error);
    }

}

module.exports = main