class AlunoNaoEncontradoError extends Error {
  constructor() {
    //requisito 6: caso o aluno não exista, deverá ser lançada uma exceção personalizada
    super('Aluno não encontrado');
    this.name = 'AlunoNaoEncontradoError';
    this.statusCode = 404;
  }
}

module.exports = AlunoNaoEncontradoError;