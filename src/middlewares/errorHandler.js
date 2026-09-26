const AlunoNaoEncontradoError = require('../errors/AlunoNaoEncontradoError');
const { ZodError } = require('zod');

function errorHandler(err, req, res, next) {
  
  //requisitos 6 e 7: trata a exceção de aluno inexistente que dá no 404
  if (err instanceof AlunoNaoEncontradoError) {
    return res.status(err.statusCode).json({ message: err.message });
  }

  //requisito 8: trata a exceção de validação do Zod que retorna o 400
  if (err instanceof ZodError) {
    return res.status(400).json({ 
      message: 'Erro de validação nos dados', 
      detalhes: err.issues.map(issue => `${issue.path[0]}: ${issue.message}`)
    });
  }
  console.error('Erro interno:', err);
  return res.status(500).json({ message: 'Erro interno do servidor.' });
}

module.exports = errorHandler;