import {useState} from 'react';
import StyleDuvidas from './duvidas.module.css';
import Images from '../../components/images';
import FooterPag from '../../components/footer/footer'



export default function Duvidas(){

interface Pergunta {
  pergunta: string
  resposta: string
}

  const [ativo, setAtivo] = useState<number | null>(null)

  const toggle = (index: number): void => {
    setAtivo(ativo === index ? null : index)
  }

  const perguntas: Pergunta[] = [
    {
      pergunta: "O que é o projeto AcessAi?",
      resposta:
        "O AcessAi é uma plataforma criada para auxiliar estudantes na organização, estruturação e produção de trabalhos acadêmicos."
    },
    {
      pergunta: "O AcessAi substitui orientação de professores?",
      resposta:
        "Não. O projeto é uma ferramenta de apoio que auxilia no entendimento das normas, mas não substitui orientação acadêmica."
    },
    {
      pergunta: "O acesso é gratuito?",
      resposta:
        "Sim. Nosso objetivo é democratizar o acesso ao conhecimento e tornar o aprendizado mais acessível."
    },
    {
  pergunta: "O AcessAi é para qualquer público?",
  resposta:
    "Sim. O AcessAi foi pensado para estudantes de diferentes níveis de ensino, desde o ensino médio até o ensino superior, além de qualquer pessoa que deseje aprender mais sobre produção acadêmica."
},
{
  pergunta: "O AcessAi ajuda na formatação ABNT?",
  resposta:
    "Sim. A plataforma orienta na aplicação de normas acadêmicas, incluindo estruturação de trabalhos, organização de referências e boas práticas de formatação."
},
{
  pergunta: "Preciso criar conta para usar o AcessAi?",
  resposta:
    "Não necessariamente. O objetivo do projeto é facilitar o acesso à informação. Caso futuramente haja funcionalidades personalizadas, o cadastro poderá ser solicitado."
},
{
  pergunta: "O AcessAi escreve trabalhos para o aluno?",
  resposta:
    "Não. O projeto não produz trabalhos prontos. Ele oferece orientação, organização e suporte para que o próprio estudante desenvolva sua autonomia acadêmica."
},
{
  pergunta: "O AcessAi é confiável?",
  resposta:
    "Sim. O projeto foi desenvolvido com foco em clareza, responsabilidade acadêmica e democratização do conhecimento, priorizando informações organizadas e acessíveis."
},
{
  pergunta: "Posso acessar pelo celular?",
  resposta:
    "Sim. A plataforma foi pensada para ser acessível em diferentes dispositivos, permitindo que o usuário estude de qualquer lugar."
},
{
  pergunta: "O AcessAi terá novas funcionalidades no futuro?",
  resposta:
    "Sim. O projeto pode evoluir com o tempo, incluindo novas ferramentas, melhorias de usabilidade e recursos voltados à organização acadêmica."
}
  ]










  return(
    <>
      <div className={StyleDuvidas.backgroundpag}>

        <section className={StyleDuvidas.container}>
          <div className={StyleDuvidas.text}>
            <h1>DúvidAs sobre NóS ?</h1>
            <h2>Transparência e orientação para que você compreenda nosso propósito e sua jornada.</h2>
            <p>Sério, isso é importante para nós ;D.</p>
          </div>

          <div className={StyleDuvidas.imagecontainer}>
            <img src={Images.MulherDuvida} alt="Estudante pensativa com duvida" />
          </div>
        </section>
<div className={StyleDuvidas.linecontainerleft}></div>
     <section className={StyleDuvidas.duvidasSection}>

  <div className={StyleDuvidas.duvidaCard}>
    <span className={StyleDuvidas.linhaLaranja}></span>
    <p>
      Aqui iremos tirar suas dúvidas, para que você entenda o porquê
      do nosso propósito
    </p>
  </div>

  <div className={StyleDuvidas.duvidaCardCenter}>
    <p>
      Agimos de forma clara, transparente e acima de tudo, com cuidado
      para que todo tipo de informação seja acessível e clara
    </p>
    <span className={StyleDuvidas.linhaLaranjaRight}></span>
  </div>

  <div className={StyleDuvidas.duvidaCard}>
    <span className={StyleDuvidas.linhaLaranja}></span>
    <p>
      Queremos que você se sinta acolhido, preparado para o que vier
      e consiga alcançar sua meta ;D
    </p>
  </div>

</section>
<div className={StyleDuvidas.linecontainer}></div>
 <section className={StyleDuvidas.topicosSection}>
      
      <h2 className={StyleDuvidas.tituloTopicos}>
        Tópicos de Dúvidas
      </h2>

      <div className={StyleDuvidas.accordionContainer}>
        {perguntas.map((item, index) => (
          <div key={index} className={StyleDuvidas.accordionItem}>
            
            <button
              className={StyleDuvidas.accordionPergunta}
              onClick={() => toggle(index)}
            >
              {item.pergunta}
              <span className={StyleDuvidas.icon}>
                {ativo === index ? "−" : "+"} {/*mudar icones para reacticon ou bootstrap*/}
              </span>
            </button>

            <div
              className={`${StyleDuvidas.accordionResposta} ${
                ativo === index ? StyleDuvidas.ativo : ""
              }`}
            >
              <p>{item.resposta}</p>
            </div>

          </div>
        ))}
      </div>

    </section>
      <div>
         <FooterPag/>
      </div>

      </div>
    </>
  )
}