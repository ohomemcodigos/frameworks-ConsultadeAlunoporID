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

//extra
async function cadastrarAluno(req, res) {
  const schema = z.object({
    nome: z.string()
      .min(3, "Nome muito curto"),
    email: z.string()
      .email("E-mail inválido"),
    curso: z.string()
      .optional(),
    cpf: z.string()
      .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, "O CPF deve estar no formato 000.000.000-00")
      .optional(),
    idade: z.number()
      .int()
      .optional(),
    telefone: z.string()
      .regex(/^\(\d{2}\) \d{4,5}-\d{4}$/, "O telefone deve estar no formato (00) 00000-0000")
      .optional(),
    estado: z.string()
      .optional(),
    pais: z.string()
      .default("Brasil")
  });
  
  const dadosValidados = schema.parse(req.body);
  const novoAluno = await AlunoService.criarAluno(dadosValidados);
  
  return res.status(201).json(novoAluno);
}

module.exports = { consultarAluno,cadastrarAluno };