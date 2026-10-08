import { useState } from "react";
import './App.css'
import Media from "./components/Media"
import Cadastro from './components/Cadastro'
import ListaAlunos from './components/ListaAlunos'
import FiltroTurma from './components/FiltroTurma'
import PesquisaNome from './components/PesquisaNome'

import {
  filtrarPorNome,
  filtrarPorTurma,
  gerarMatricula,
} from "./utils/alunos";

function App() {
  const [alunos, setAlunos] = useState([]);
  const [busca, setBusca] = useState("");
  const [turmaSelecionada, setTurmaSelecionada] = useState("");

  function cadastrarAluno(dados) {
    const novoAluno = { ...dados, matricula: gerarMatricula(alunos.length) };
    setAlunos([...alunos, novoAluno]);
  }

  const turmas = [...new Set(alunos.map((a) => a.turma))];

  const alunosExibidos = filtrarPorTurma(
    filtrarPorNome(alunos, busca),
    turmaSelecionada
  );

  return (
    <>
      <section id="center">
        <div className="hero">
          <h1>Gestão escolar</h1>
        </div>

        <Cadastro onCadastrar={cadastrarAluno} />

        <div>
          <PesquisaNome busca={busca} onChange={setBusca} />
          <FiltroTurma
            turmas={turmas}
            turmaSelecionada={turmaSelecionada}
            onChange={setTurmaSelecionada}
          />
        </div>

        <Media alunos={alunosExibidos} />
        <ListaAlunos alunos={alunosExibidos} />
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}

export default App;
