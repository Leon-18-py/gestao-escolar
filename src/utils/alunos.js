export const notaMinima = 7;

export function filtrarPorNome(alunos, busca) {
  const termo = busca.trim().toLowerCase();
  return alunos.filter((a) => a.nome.toLowerCase().includes(termo));
}

export function filtrarPorTurma(alunos, turma) {
  if (turma === "") return alunos;
  return alunos.filter((a) => a.turma === turma);
}

export function situacao(nota) {
  return nota >= notaMinima ? "Aprovado" : "Em recuperação";
}

export function gerarMatricula(quantidade) {
  const ano = new Date().getFullYear();
  return `${ano}${String(quantidade + 1).padStart(4, "0")}`;
}
