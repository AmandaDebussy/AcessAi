import HighlightText from '../../../../components/Marcatext/hightlight'
import  MyButton  from '../../../../components/buttonfunction/buttonreact'
import StyleEstudo from './estudo.module.css'
import FooterPag from '../../../../components/footer/footer'


export default function OrganizaEstudo(){



    return(
  <>
<div className={StyleEstudo.backgroundpag}>
   <section className={StyleEstudo.container}>
      <div className={StyleEstudo.text}>
        <h1>Como organizar os estudos de forma prática </h1>
         <p>Manter uma rotina de estudos organizada pode parecer um desafio, especialmente diante de <br />  tantas disciplinas, prazos e responsabilidades do dia a dia.
         </p>
      </div>
    </section>
    <article className={StyleEstudo.containertext}>
      <div className={StyleEstudo.textcontent2}>
        {/* <h1>Como montar um trabalho escolar ?</h1> */}
         <p>Pensando nisso, reunimos orientações práticas que podem auxiliar estudantes a 
            organizar melhor seus estudos, desenvolver autonomia e tornar o 
            processo de aprendizagem mais eficiente e menos sobrecarregado.
         </p>
      {/*a partir  daqui as classes*/}
      <section className={StyleEstudo.containersection2}>
      <div className={StyleEstudo.section2}>
        <h1 style={{fontSize:"2rem",lineHeight: "1.2", wordBreak: "break-all" ,whiteSpace:"pre-wrap" }}>1. Defina objetivos claros de estudo</h1>
         <p>A organização dos estudos começa pela definição de objetivos. Saber exatamente o que se pretende aprender ajuda a direcionar o tempo e evita a sensação de estudo sem propósito.
<HighlightText>Estabelecer metas claras torna o processo mais focado e produtivo.</HighlightText></p>
      </div>
    </section>


    <section className={StyleEstudo.containersection2}>
      <div className={StyleEstudo.section2}>
        <h1 style={{fontSize:"2rem",lineHeight: "1.2", wordBreak: "break-all" ,whiteSpace:"pre-wrap" }}> 2. Planeje sua rotina de estudos</h1>
         <p>Criar um planejamento semanal ou diário permite distribuir os conteúdos de forma equilibrada. Isso evita acúmulo de tarefas e contribui para a constância, mesmo em períodos com pouco tempo disponível.</p>
      </div>
    </section>


     <section className={StyleEstudo.containersection2}>
      <div className={StyleEstudo.section2}>
        <h1 style={{fontSize:"2rem",lineHeight: "1.2", wordBreak: "break-all" ,whiteSpace:"pre-wrap" }}>3. Divida o conteúdo em partes menores</h1>
         <p>Estudar grandes volumes de conteúdo de uma só vez pode gerar cansaço e dificuldade de concentração. Dividir o material em etapas menores facilita a compreensão e torna o estudo mais acessível.</p>
         </div>
       </section>


    <section className={StyleEstudo.containersection2}>
      <div className={StyleEstudo.section2}>
        <h1 style={{fontSize:"2rem",lineHeight: "1.2", wordBreak: "break-all" ,whiteSpace:"pre-wrap" }}>4. Organize o ambiente de estudo</h1>

         <p>O local onde se estuda influencia diretamente o rendimento. Um ambiente organizado, silencioso e com poucos estímulos externos favorece a concentração e melhora a produtividade durante o estudo.
<HighlightText>Pequenas mudanças no ambiente podem gerar grandes resultados.</HighlightText></p>

         </div>
       </section>
    <section className={StyleEstudo.containersection2}>
      <div className={StyleEstudo.section2}>
        <h1 style={{fontSize:"2rem",lineHeight: "1.2", wordBreak: "break-all" ,whiteSpace:"pre-wrap" }}>5. Utilize métodos de estudo ativos</h1>
        
         <p>Estratégias como resumos, esquemas, mapas mentais e explicações com palavras próprias ajudam a fixar o conteúdo. O estudante passa a participar ativamente do processo de aprendizagem, e não apenas a consumir informações.</p>
         
         </div>
       </section>

    <section className={StyleEstudo.containersection2}>
      <div className={StyleEstudo.section2}>
        <h1 style={{fontSize:"2rem",lineHeight: "1.2", wordBreak: "break-all" ,whiteSpace:"pre-wrap" }}>6. Estabeleça pausas regulares </h1>
         <p>Pausas curtas durante o estudo são fundamentais para manter a atenção e evitar a fadiga mental. Estudar por períodos moderados, intercalados com descansos, contribui para um melhor aproveitamento do tempo.</p>
         </div>
       </section>

           <section className={StyleEstudo.containersection2}>
      <div className={StyleEstudo.section2}>
        <h1 style={{fontSize:"2rem",lineHeight: "1.2", wordBreak: "break-all" ,whiteSpace:"pre-wrap" }}>7. Revise os conteúdos com frequência </h1>
         <p>A revisão periódica é essencial para consolidar o aprendizado. Retomar os principais pontos estudados evita o esquecimento e fortalece a memória de longo prazo.
<HighlightText>Revisar não é recomeçar, é reforçar.</HighlightText></p>
         </div>
       </section>

        <section className={StyleEstudo.containersection2}>
      <div className={StyleEstudo.section2}>
        <h1 style={{fontSize:"2rem",lineHeight: "1.2", wordBreak: "break-all" ,whiteSpace:"pre-wrap" }}>8. Evite comparações com outros <br/> estudantes</h1>
         <p>Cada pessoa possui seu próprio ritmo de aprendizagem. Comparações constantes podem gerar ansiedade e desmotivação, comprometendo o processo de estudo. O foco deve estar no progresso individual.</p>
         </div>
       </section>

           <section className={StyleEstudo.containersection2}>
      <div className={StyleEstudo.section2}>
        <h1 style={{fontSize:"2rem",lineHeight: "1.2", wordBreak: "break-all" ,whiteSpace:"pre-wrap" }}>9. Desenvolva autonomia e disciplina</h1>
         <p>Organizar os estudos exige responsabilidade e comprometimento. Desenvolver autonomia permite que o estudante identifique dificuldades, ajuste estratégias e mantenha a constância mesmo diante de desafios.</p>
         </div>
       </section>

    <section className={StyleEstudo.containersection2}>
      <div className={StyleEstudo.section2}>
        <h1 style={{fontSize:"2rem",lineHeight: "1.2", wordBreak: "break-all" ,whiteSpace:"pre-wrap" }}>10. Respeite seus limites e recomece <br /> quando necessário</h1>
         <p>Nem sempre o planejamento será seguido à risca, e isso faz parte do processo. Reconhecer limites, ajustar a rotina e recomeçar quando necessário é fundamental para manter uma organização sustentável ao longo do tempo.</p>
         </div>
       </section>

        <section className={StyleEstudo.containersection2}>
      <div className={StyleEstudo.section2}>
        <h1 style={{fontSize:"2rem",lineHeight: "1.2", wordBreak: "break-all" ,whiteSpace:"pre-wrap" }}>Para finalizar 😎 </h1>
         <p>Organizar os estudos de forma prática não significa seguir regras rígidas, mas construir hábitos possíveis e consistentes. Com planejamento, disciplina e autoconhecimento, o estudo se torna mais leve, eficiente e alinhado aos objetivos pessoais e acadêmicos.
<br />O mais importante é lembrar que todo progresso começa com pequenos passos!🎉 </p>
         </div>
       </section>

    <section className={StyleEstudo.containersectiontextarea}>
      <div className={StyleEstudo.sectiontextarea}>
        <h1>Gostou desse conteudo?</h1>
<br />
        <div className={StyleEstudo.buttomcunstomtext}>
          <MyButton></MyButton>
        </div>
        
         </div>
       </section>
       
   <section className={StyleEstudo.containersectiontextarea}>
      <div className={StyleEstudo.sectionwithcite}>
         </div>
       </section>
     </div>

  </article>
  <footer>
    <FooterPag/>
    </footer>
</div>
        </>
    )
}
