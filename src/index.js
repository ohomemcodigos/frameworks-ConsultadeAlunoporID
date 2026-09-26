require('express-async-errors');
const express = require('express');
const alunoRoutes = require('./routes/alunoRoutes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(express.json());
//extra
app.use(express.static('public'));

app.use(alunoRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`
Servidor ativo.\nAcesse atráves da porta: http://localhost:${PORT}
    `);
});