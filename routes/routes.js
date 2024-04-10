const express = require('express')
const Produto = require('../models/Produto')
const ProdutoController = require('../controllers/ProdutoController')
const ClienteController = require('../controllers/ClienteController')
const ComdandaController = require('../controllers/ComandaController')
const FuncionarioController = require('../controllers/FuncionarioController')
const CargoController = require('../controllers/CargoController')
const IngredienteController = require('../controllers/IngredienteController')
const TipoController = require('../controllers/TipoController')
const FormaPgController = require('../controllers/FormaPgController')
const ProdutoComandaController = require('../controllers/ProdutoComandaController')
const ProdutoIngredienteController = require('../controllers/ProdutoIngredienteController')
const router = express.Router()

router.get('/', function(req, res){
    res.json({})
})

//Cargo
router.get('/cargo', (req, res) => CargoController.getAll(req, res))
router.post('/cargo', (req, res) => CargoController.create(req, res))
router.get('/cargo/:id', (req, res) => CargoController.get(req, res))
router.put('/cargo/:id', (req, res) => CargoController.update(req, res))
router.delete('/cargo/:id', (req, res) => CargoController.delete(req, res))

//Cliente
router.get('/cliente', (req, res) => ClienteController.getAll(req, res))
router.post('/cliente', (req, res) => ClienteController.create(req, res))
router.get('/cliente/:id', (req, res) => ClienteController.get(req, res))
router.put('/cliente/:id', (req, res) => ClienteController.update(req, res))
router.delete('/cliente/:id', (req, res) => ClienteController.delete(req, res))

//Comanda
router.get('/comanda', (req, res) => ComdandaController.getAll(req, res))
router.post('/comanda', (req, res) => ComdandaController.create(req, res))
router.get('/comanda/:id', (req, res) => ComdandaController.get(req, res))
router.put('/comanda/:id', (req, res) => ComdandaController.update(req, res))
router.delete('/comanda/:id', (req, res) => ComdandaController.delete(req, res))

//Forma de Pagamento
router.get('/formapg', (req, res) => FormaPgController.getAll(req, res))
router.post('/formapg', (req, res) => FormaPgController.create(req, res))
router.get('/formapg/:id', (req, res) => FormaPgController.get(req, res))
router.put('/formapg/:id', (req, res) => FormaPgController.update(req, res))
router.delete('/formapg/:id', (req, res) => FormaPgController.delete(req, res))

//Funcionario
router.get('/funcionario', (req, res) => FuncionarioController.getAll(req, res))
router.post('/funcionario', (req, res) => FuncionarioController.create(req, res))
router.get('/funcionario/:id', (req, res) => FuncionarioController.get(req, res))
router.put('/funcionario/:id', (req, res) => FuncionarioController.update(req, res))
router.delete('/funcionario/:id', (req, res) => FuncionarioController.delete(req, res))

//Ingrediente
router.get('/ingrediente', (req, res) => IngredienteController.getAll(req, res))
router.post('/ingrediente', (req, res) => IngredienteController.create(req, res))
router.get('/ingrediente/:id', (req, res) => IngredienteController.get(req, res))
router.put('/ingrediente/:id', (req, res) => IngredienteController.update(req, res))
router.delete('/ingrediente/:id', (req, res) => IngredienteController.delete(req, res))

//Produtos
router.get('/produtos', (req, res) => ProdutoController.getAll(req, res))
router.post('/produtos', (req, res) => ProdutoController.create(req, res))
router.get('/produtos/:id', (req, res) => ProdutoController.get(req, res))
router.put('/produtos/:id', (req, res) => ProdutoController.update(req, res))
router.delete('/produtos/:id', (req, res) => ProdutoController.delete(req, res))

//Produtos Comandas
router.get('/produtocomanda', (req, res) => ProdutoComandaController.getAll(req, res))
router.post('/produtocomanda', (req, res) => ProdutoComandaController.create(req, res))
router.get('/produtocomanda/:id', (req, res) => ProdutoComandaController.get(req, res))
router.put('/produtocomanda/:id', (req, res) => ProdutoComandaController.update(req, res))
router.delete('/produtocomanda/:id', (req, res) => ProdutoComandaController.delete(req, res))

//Produtos Ingrediente
router.get('/produtoingrediente', (req, res) => ProdutoIngredienteController.getAll(req, res))
router.post('/produtoingrediente', (req, res) => ProdutoIngredienteController.create(req, res))
router.get('/produtoingrediente/:id', (req, res) => ProdutoIngredienteController.get(req, res))
router.put('/produtoingrediente/:id', (req, res) => ProdutoIngredienteController.update(req, res))
router.delete('/produtoingrediente/:id', (req, res) => ProdutoIngredienteController.delete(req, res))

//Tipo
router.get('/tipo', (req, res) => TipoController.getAll(req, res))
router.post('/tipo', (req, res) => TipoController.create(req, res))
router.get('/tipo/:id', (req, res) => TipoController.get(req, res))
router.put('/tipo/:id', (req, res) => TipoController.update(req, res))
router.delete('/tipo/:id', (req, res) => TipoController.delete(req, res))



module.exports = router