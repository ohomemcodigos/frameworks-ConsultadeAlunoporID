function gerarMatricula(nomeDoCurso) {
  const dataAtual = new Date();
  const ano = dataAtual.getFullYear();
  const semestre = dataAtual.getMonth() < 6 ? '1' : '2';
  
  const prefixo = nomeDoCurso ? nomeDoCurso.substring(0, 4).toUpperCase() : 'ALUN';
  const aleatorio = Math.floor(Math.random() * 10000).toString().padStart(4, '0');

  return `${prefixo}${ano}${semestre}${aleatorio}`;
}

module.exports = { gerarMatricula };