const { PrismaClient } = require('./prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.aluno.deleteMany();
  
  await prisma.aluno.create({
    data: {
      nome: 'Leon S. Kennedy',
      idade: 21,
      estado: 'Illinois',
      pais: 'EUA',
      email: 'residetesdomal98@gmail.com',
      telefone: '(312) 944-8900',
      matricula: 'RPD1998',
      curso: 'Segurança Pública',
      ativo: true,
    },
  });

  console.log('Aluno(s) inserido(s) com sucesso no banco de dados!');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });