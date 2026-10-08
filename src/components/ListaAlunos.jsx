import { situacao } from "../utils/alunos";

const celula = { padding: "6px 12px" };

function ListaAlunos({ alunos }) {
  if (alunos.length === 0) {
    return <p>Nenhum aluno para exibir.</p>;
  }

  return (
    <table style={{ margin: "0 auto", borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th style={celula}>Matrícula</th>
          <th style={celula}>Nome</th>
          <th style={celula}>Turma</th>
          <th style={celula}>Nota</th>
          <th style={celula}>Situação</th>
        </tr>
      </thead>
      <tbody>
        {alunos.map((aluno) => (
          <tr key={aluno.matricula}>
            <td style={celula}>{aluno.matricula}</td>
            <td style={celula}>{aluno.nome}</td>
            <td style={celula}>{aluno.turma}</td>
            <td style={celula}>{aluno.nota.toFixed(1)}</td>
            <td style={celula}>{situacao(aluno.nota)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ListaAlunos;
