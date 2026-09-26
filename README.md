# frameworks-ConsultadeAlunoporID
**API de Gestão de Alunos para a cadeira de Programação Com Frameworks Web.**

## Desenvolvida usando
* **Node.js + Express:** para construção do servidor e rotas.
* **Prisma ORM + SQLite:** para a modelagem e manipulação do banco de dados relacional.
* **Zod:** por sua validação rigorosa dos dados de entrada.

## Extra
Foi feito também uma tela para facilitar consultas e **criações**.
- **Front-end:** com página estática (HTML, JavaScript e Tailwind CSS) servida pelo próprio Express.
- **Rota POST para Cadastro:** novo endpoint integrado para adicionar alunos ao banco de dados.
- **Matrícula Automática:** criada uma lógica de negócio que gera uma matrícula única automaticamente baseada no ano, semestre e curso do aluno.

## Como Rodar o Projeto
### 1. Clone o repositório
Clone este repositório no seu computador:
```
git clone https://github.com/ohomemcodigos/frameworks-ConsultadeAlunoporID.git 
```

###  2. Instale as dependências
Abra o terminal na pasta do projeto e execute:
```
npm install
```

### 3. Popule o banco de dados
Caso queira popular o banco de dados com os alunos iniciais de teste, execute no terminal:
```
node seed.js
```

### 4. Inicie o servidor
Execute o seguinte comando:
```
npx nodemon src/index.js
```

### 5. Acesse a aplicação
Acesse no navegador (ou pelo VSCode):
```
http://localhost:3000
```

>A interface da aplicação estará disponível para uso!