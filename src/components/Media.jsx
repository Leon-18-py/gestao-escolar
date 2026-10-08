import { useState } from "react";

function Media() {
  const [nota1, setNota1] = useState("");
  const [nota2, setNota2] = useState("");
  const [nota3, setNota3] = useState("");

  const [resultado, setResultado] = useState(null);
  const [erro, setErro] = useState("");

  function media() {
    const notas = [nota1, nota2, nota3];

    if (notas.some((n) => n === "")) {
      setResultado(null);
      setErro("Preencha as três notas.");
      return;
    }

    const valores = notas.map(Number);
    if (valores.some((n) => n < 0 || n > 10)) {
      setResultado(null);
      setErro("As notas devem estar entre 0 e 10.");
      return;
    }

    const soma = valores[0] + valores[1] + valores[2];
    setResultado(soma / valores.length);
    setErro("");
  }

  return (
    <div>
      <input
        type="number"
        min="0"
        max="10"
        step="0.1"
        placeholder="Primeira nota"
        value={nota1}
        onChange={(e) => setNota1(e.target.value)}
      />

      <input
        type="number"
        min="0"
        max="10"
        step="0.1"
        placeholder="Segunda nota"
        value={nota2}
        onChange={(e) => setNota2(e.target.value)}
      />

      <input
        type="number"
        min="0"
        max="10"
        step="0.1"
        placeholder="Terceira nota"
        value={nota3}
        onChange={(e) => setNota3(e.target.value)}
      />

      <button onClick={media}>Calcular média</button>

      {erro && <p>{erro}</p>}

      {resultado !== null && (
        <>
          <p>Média: {resultado.toFixed(1)}</p>
          <p>Situação: {resultado >= 7 ? "Aprovado" : "Em recuperação"}</p>
        </>
      )}
    </div>
  );
}

export default Media;