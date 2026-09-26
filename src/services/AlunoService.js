const prisma = require('../prisma');
const AlunoNaoEncontradoError = require('../errors/AlunoNaoEncontradoError');

async function buscarPorId(id) {
  //requisito 4: método findUnique do Prisma para buscar o aluno pelo ID
  const aluno = await prisma.aluno.findUnique({
    where: { id: id }
  });

  //requisito 6: caso o aluno não exista, vai ser lançada a exceção personalizada
  if (!aluno) {
    throw new AlunoNaoEncontradoError();
  }

  return aluno;
}

module.exports = { buscarPorId };