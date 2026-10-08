function FiltroTurma({ turmas, turmaSelecionada, onChange }) {
  return (
    <select
      value={turmaSelecionada}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="">Todas as turmas</option>
      {turmas.map((turma) => (
        <option key={turma} value={turma}>
          {turma}
        </option>
      ))}
    </select>
  );
}

export default FiltroTurma;
