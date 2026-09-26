const { z } = require('zod');
const AlunoService = require('../services/AlunoService');

async function consultarAluno(req, res) {
  //requisitos 2 e 3: o parâmetro id que foi recebido pela URL deve ser obrigatoriamente numérico e validado pelo Zod
  const schema = z.object({
    id: z.coerce.number().int().positive() //função corse = parse
  });

  const { id } = schema.parse(req.params);

  const aluno = await AlunoService.buscarPorId(id);

  //requisito 5: se o aluno for encontrado: a API deverá retornar os dados com status HTTP 200
  return res.status(200).json(aluno);
}

module.exports = { consultarAluno };