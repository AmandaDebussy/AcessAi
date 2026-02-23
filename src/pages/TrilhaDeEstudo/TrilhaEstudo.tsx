import trilhadeestudo from './trilhadeestudoStyle.module.css';
import Images from '../../components/images';
// import { BsBook, BsSearch, BsStar } from 'react-icons/bs'
import FooterPag from '../../components/footer/footer'
import QuizAluno from '../../components/quiz/quizstudent'




export default function TrilhaEstudo(){


// const YearAtual = new Date().getFullYear();




     return(
<div className={trilhadeestudo.backgroundpag}>
  <section className={trilhadeestudo.container}>
  <div className={trilhadeestudo.imagecontainer}>
    
    <img src={Images.map} alt="Mapa"className={trilhadeestudo.mainImage}/>

    <img src={Images.vetordebolinhas} alt="Bolinhas decorativas"className={trilhadeestudo.bolinhas}/>

  </div>

  <div className={trilhadeestudo.text}>
    <h1>Trilha de Estudo.</h1>
    <h2>Seu caminho estratégico 
        para transformar esforço em conquista.</h2>
    {/* <p>Estudar nunca foi tão acessível e prático.</p> */}
  </div>
</section>


  <section className={trilhadeestudo.containerothersection}>
    <div className={trilhadeestudo.imagecontainerothersection}>
      <img src={Images.rapazcaminhando} alt="rapaz caminhando na montanha" />
    </div>
    <div className={trilhadeestudo.textothersection}>
      <h1>Defina o Seu Objetivo!</h1>
      <h2>
        Escolha sua meta, prazo e nível atual para criar uma base estratégica.
      </h2>
    </div>
  </section>

  <section className={trilhadeestudo.containerothersection3}>

    <div className={trilhadeestudo.textothersection3}>
      <h1>Diagnóstico InteligentE!</h1>
      <h2>
       Identifique seus pontos fortes e prioridades com análise direcionada.
      </h2>
    </div>
    <div className={trilhadeestudo.imagecontainerothersection3}>
      <img src={Images.alvo} alt="Estudante sorrindo" />
    </div>
    </section>
          <section>
                <QuizAluno/>
          </section>
  <section>
    <div className={trilhadeestudo.featurescontainerSecondCard}>
      {/* <h2>Qual é nosso objetivO ?</h2> */}

      <div className={trilhadeestudo.cardswrapper}>
        <div className={trilhadeestudo.cardSecond}>
          <div className={trilhadeestudo.contentinsidecard}>
            <p>
              Auxiliar estudantes na <span className={trilhadeestudo.ColorTextCard}>elaboração de trabalhos acadêmicos</span>, com suporte em estrutura, formatação e organização.
            </p>
          </div>
        </div>

        <div className={trilhadeestudo.cardSecond}>
          <div className={trilhadeestudo.contentinsidecard}>
            <p>
              Orientar no uso de normas, <span className={trilhadeestudo.ColorTextCard}>facilitar a pesquisa</span> e oferecer ferramentas de apoio para a produção acadêmica.
            </p>
          </div>
        </div>

        <div className={trilhadeestudo.cardSecond}>
          <div className={trilhadeestudo.contentinsidecard}>
            <p>
              Promover autonomia, democratizar o conhecimento e <span className={trilhadeestudo.ColorTextCard}>incentivar a inclusão educacional em diferentes níveis.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <FooterPag />
</div>
     )
}