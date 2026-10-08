function PesquisaNome({ busca, onChange }) {
  return (
    <input
      type="search"
      placeholder="Pesquisar por nome"
      value={busca}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default PesquisaNome;
