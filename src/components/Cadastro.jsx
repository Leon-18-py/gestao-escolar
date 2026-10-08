import { useState } from "react";

function Cadastro({ onCadastrar }) {
  const [nome, setNome] = useState("");
  const [turma, setTurma] = useState("");
  const [nota, setNota] = useState("");
  const [erro, setErro] = useState("");

  function cadastrar() {
    if (nome.trim() === "" || turma.trim() === "" || nota === "") {
      setErro("Preencha nome, turma e nota.");
      return;
    }

    if(nome.length < 3){
      setErro("Nome inválido")
      return
    }

    if (Number(nota) < 0 || Number(nota) > 10) {
      setErro("A nota deve estar entre 0 e 10.");
      return;
    }

    onCadastrar({
      nome: nome.trim(),
      turma: turma.trim(),
      nota: Number(nota),
    });

    setNome("");
    setTurma("");
    setNota("");
    setErro("");
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Nome do aluno"
        value={nome}
        onChange={(e) => setNome(e.target.value.replace(/[^\p{L}\s'-]/gu, ""))}
      />

      <input
        type="text"
        placeholder="Turma (ex.: 1º Ano A)"
        value={turma}
        onChange={(e) => setTurma(e.target.value)}
      />

      <input
        type="number"
        min="0"
        max="10"
        step="0.1"
        placeholder="Nota"
        value={nota}
        onChange={(e) => setNota(e.target.value)}
      />

      <button onClick={cadastrar}>Cadastrar</button>

      {erro && <p>{erro}</p>}
    </div>
  );
}

export default Cadastro
