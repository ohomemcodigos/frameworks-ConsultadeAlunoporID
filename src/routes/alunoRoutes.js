const express = require('express');
const AlunoController = require('../controllers/AlunoController');

const router = express.Router();

//requisito 1: criar um endpoint GET
router.get('/alunos/:id', AlunoController.consultarAluno);
//extra
router.post('/alunos', AlunoController.cadastrarAluno);

module.exports = router;