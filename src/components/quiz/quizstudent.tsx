import { useState } from "react";
import stylequiz from "./quizstudent.module.css";

type Categoria = "organizacao" | "escrita" | "normas" | "pesquisa";

interface Opcao {
  texto: string;
  categoria: Categoria;
  valor: number;
  opcao:string;
}

const descricoes: Record<Categoria, string> = {
  organizacao:
    "PERFIL: ORGANIZAÇÃO EM DESENVOLVIMENTO 📅\n\nVocê possui potencial para planejar melhor suas atividades acadêmicas. Desenvolver uma rotina estruturada, definir prioridades e administrar prazos com mais estratégia pode elevar significativamente seu desempenho.",

  escrita:
    "PERFIL: EVOLUÇÃO NA COMUNICAÇÃO ESCRITA ✍️\n\nVocê demonstra boas ideias e capacidade crítica, mas pode fortalecer a clareza, coesão e organização dos seus textos. Investir em revisão e estruturação fará seus trabalhos alcançarem outro nível.",

  normas:
    "PERFIL: APRIMORAMENTO TÉCNICO NAS NORMAS 📚\n\nVocê pode evoluir na atenção aos detalhes técnicos exigidos em trabalhos acadêmicos. Dominar formatação, citações e padronizações trará mais credibilidade e qualidade às suas produções.",

  pesquisa:
    "PERFIL: DESENVOLVIMENTO EM PESQUISA ACADÊMICA 🔎\n\nVocê tem espaço para aprimorar sua estratégia de busca e seleção de fontes. Utilizar bases confiáveis e organizar melhor as referências pode transformar completamente seus resultados."
};

export default function QuizAluno() {
  const [mostrarQuiz, setMostrarQuiz] = useState(false);
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [respostas, setRespostas] = useState<Opcao[]>([]);
  const [resultado, setResultado] = useState<Categoria | null>(null);

  const perguntas = [
   {
    pergunta: "Quando recebe um trabalho, você:",
    opcoes: [
      { texto: "Começa no mesmo dia e organiza etapas", categoria: "organizacao", valor: 0 },
      { texto: "Planeja começar depois", categoria: "organizacao", valor: 1 },
      { texto: "Deixa para última hora", categoria: "organizacao", valor: 2 }
    ]
  },
  {
    pergunta: "Ao escrever um texto você:",
    opcoes: [
      { texto: "Cria um roteiro antes de iniciar", categoria: "organizacao", valor: 0 },
      { texto: "Escreve direto e revisa depois", categoria: "escrita", valor: 1 },
      { texto: "Tem dificuldade para organizar ideias", categoria: "escrita", valor: 2 }
    ]
  },
  {
    pergunta: "Sobre normas acadêmicas (ABNT, referências, formatação):",
    opcoes: [
      { texto: "Reviso todos os detalhes técnicos", categoria: "normas", valor: 0 },
      { texto: "Confiro apenas o básico", categoria: "normas", valor: 1 },
      { texto: "Costumo errar formatação", categoria: "normas", valor: 2 }
    ]
  },
  {
    pergunta: "Quando pesquisa referências, você:",
    opcoes: [
      { texto: "Utiliza bases científicas confiáveis", categoria: "pesquisa", valor: 0 },
      { texto: "Pesquisa principalmente no Google", categoria: "pesquisa", valor: 1 },
      { texto: "Tem dificuldade em encontrar fontes confiáveis", categoria: "pesquisa", valor: 2 }
    ]
  },
  {
    pergunta: "Como você organiza seus estudos semanais?",
    opcoes: [
      { texto: "Tenho cronograma definido", categoria: "organizacao", valor: 0 },
      { texto: "Organizo mentalmente", categoria: "organizacao", valor: 1 },
      { texto: "Não tenho planejamento fixo", categoria: "organizacao", valor: 2 }
    ]
  },
  {
    pergunta: "Quando recebe feedback do professor:",
    opcoes: [
      { texto: "Analiso e aplico as melhorias", categoria: "escrita", valor: 0 },
      { texto: "Leio, mas nem sempre aplico", categoria: "escrita", valor: 1 },
      { texto: "Tenho dificuldade em ajustar o texto", categoria: "escrita", valor: 2 }
    ]
  },
  {
    pergunta: "Sobre citações e referências:",
    opcoes: [
      { texto: "Faço corretamente e confiro padrão", categoria: "normas", valor: 0 },
      { texto: "Às vezes cometo pequenos erros", categoria: "normas", valor: 1 },
      { texto: "Tenho muita dificuldade com isso", categoria: "normas", valor: 2 }
    ]
  },
  {
    pergunta: "Ao iniciar uma pesquisa acadêmica você:",
    opcoes: [
      { texto: "Define palavras-chave estratégicas", categoria: "pesquisa", valor: 0 },
      { texto: "Busca termos genéricos", categoria: "pesquisa", valor: 1 },
      { texto: "Não sabe por onde começar", categoria: "pesquisa", valor: 2 }
    ]
  },
  {
    pergunta: "Você revisa seu trabalho antes de entregar?",
    opcoes: [
      { texto: "Sempre reviso conteúdo e formatação", categoria: "normas", valor: 0 },
      { texto: "Reviso rapidamente", categoria: "escrita", valor: 1 },
      { texto: "Raramente reviso", categoria: "escrita", valor: 2 }
    ]
  },
  {
    pergunta: "Quando o prazo está apertado você:",
    opcoes: [
      { texto: "Mantém organização e foco", categoria: "organizacao", valor: 0 },
      { texto: "Fica pressionado mas entrega", categoria: "organizacao", valor: 1 },
      { texto: "Se desorganiza e atrasa", categoria: "organizacao", valor: 2 }
    ]
  }
];



  function responder(opcao: Opcao) {
    const novasRespostas = [...respostas, opcao];
    setRespostas(novasRespostas);

    if (perguntaAtual + 1 < perguntas.length) {
      setPerguntaAtual(perguntaAtual + 1);
    } else {
      calcularPerfil(novasRespostas);
    }
  }



  function calcularPerfil(respostasFinais: Opcao[]) {
    const pontuacao: Record<Categoria, number> = {
      organizacao: 0,
      escrita: 0,
      normas: 0,
      pesquisa: 0
    };

    respostasFinais.forEach((r) => {
      pontuacao[r.categoria] += r.valor;
    });

    let maiorCategoria: Categoria = "organizacao";
    let maiorValor = -1;

    for (const categoria in pontuacao) {
      const cat = categoria as Categoria;
      if (pontuacao[cat] > maiorValor) {
        maiorValor = pontuacao[cat];
        maiorCategoria = cat;
      }
    }

    setResultado(maiorCategoria);
  }


  function reiniciarQuiz() {
    setPerguntaAtual(0);
    setRespostas([]);
    setResultado(null);
    setMostrarQuiz(false);
  }




  return (
    <div className={stylequiz.backgroundQuizColor}>
      {!mostrarQuiz && (
        <section className={stylequiz.quizContainer}>
          <button
            className={stylequiz.buttonStyleMode}
            onClick={() => setMostrarQuiz(true)}
          >
            Iniciar Teste de Perfil Acadêmico
          </button>
        </section>
      )}

      {mostrarQuiz && !resultado && (
        <section className={stylequiz.quizContainer}>
          <p className={stylequiz.progress}>
            Pergunta {perguntaAtual + 1} de {perguntas.length}
          </p>

          <h3 className={stylequiz.question}>
            {perguntas[perguntaAtual].pergunta}
          </h3>

          <div className={stylequiz.optionsContainer}>
            {perguntas[perguntaAtual].opcoes.map((opcao, index) => (
              <button
                key={index}
                className={stylequiz.optionButton}
                onClick={() => responder(opcao)}
              >
                {opcao.texto}
              </button>
            ))}
          </div>
        </section>
      )}

      {resultado && (
        <section className={stylequiz.quizContainer}>
          <h2 className={stylequiz.resultTitle}>
            Resultado do Seu Perfil
          </h2>

          <p className={stylequiz.resultText}>
            {descricoes[resultado]}
          </p>

          <button
            className={stylequiz.buttonStyleMode}
            onClick={reiniciarQuiz}
          >
            Refazer Teste
          </button>
        </section>
      )}
    </div>
  );
}