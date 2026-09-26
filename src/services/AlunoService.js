const prisma = require('../prisma');
const AlunoNaoEncontradoError = require('../errors/AlunoNaoEncontradoError');
const { gerarMatricula } = require('../utils/geradorDeMatricula'); //extra

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

//extra
async function criarAluno(dados) {
  const novaMatricula = gerarMatricula(dados.curso);
  const aluno = await prisma.aluno.create({
    data: { ...dados, matricula: novaMatricula }
  });
  return aluno;
}

module.exports = { buscarPorId, criarAluno };