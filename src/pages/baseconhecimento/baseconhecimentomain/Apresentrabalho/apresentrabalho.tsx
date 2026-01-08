import HighlightText from '../../../../components/Marcatext/hightlight'
import  MyButton  from '../../../../components/buttonfunction/buttonreact'
import StyleTrabalho from './trabalho.module.css'
import FooterPag from '../../../../components/footer/footer'
// import Images from '../../../../components/images'


export default function Apresentrabalho(){
 
   return(
  <>
<div className={StyleTrabalho.backgroundpag}>
   <section className={StyleTrabalho.container}>
      <div className={StyleTrabalho.text}>
        <h1>Dicas para apresentar um trabalho Academico</h1>
         <p>Sabe aquele frio na barriga só de pensar em apresentar  trabalho para a turma e professores? <br />
            Hoje trouxemos algumas dicas para te ajudar a encarar essa!
         </p>
      </div>
    </section>
    <article className={StyleTrabalho.containertext}>
      <div className={StyleTrabalho.textcontent2}>
        {/* <h1>Como montar um trabalho escolar ?</h1> */}
         <p>Durante a graduação ou a pós-graduação, é comum precisar apresentar trabalhos acadêmicos seja em sala de aula ou em seminários externos.
           E é justamente aí que surgem muitas dúvidas: como montar uma apresentação de qualidade? Como controlar o nervosismo ao falar em público, seja para poucas ou muitas pessoas?
          Apresentar nem sempre é simples, mas calma: estamos aqui para te ajudar!
         </p>
      {/*a partir  daqui as classes*/}
      <section className={StyleTrabalho.containersection2}>
      <div className={StyleTrabalho.section2}>
        <h1>1. Estude profundamente o tema </h1>
         <p>Para fazer uma boa apresentação, o mais importante é conhecer bem o assunto. Dedique um tempo para revisar, pesquisar e compreender cada ponto do conteúdo.
 <HighlightText> Mesmo que você já tenha estudado bastante, revisar antes da apresentação ajuda a reforçar informações e evitar que algo importante passe despercebido.</HighlightText></p>
      </div>
    </section>


    <section className={StyleTrabalho.containersection2}>
      <div className={StyleTrabalho.section2}>
        <h1>2. Prefira temas que você domina</h1>
         <p>Se tiver liberdade para escolher o tema, opte por algo familiar. Muita gente escolhe um assunto que tem curiosidade, mas ainda não domina e isso pode prejudicar a segurança na hora de falar.
          <HighlightText>Escolher um conteúdo que você já conhece aumenta sua confiança e facilita sua explicação.</HighlightText></p>
      </div>
    </section>


     <section className={StyleTrabalho.containersection2}>
      <div className={StyleTrabalho.section2}>
        <h1>3. Treine sua apresentação</h1>
         <p>Praticar faz toda a diferença. Apresente o trabalho para amigos e colegas de classe, familiares ou até para você mesma na frente do espelho.
            Esses ensaios ajudam a corrigir falhas, ajustar a fala e identificar pontos que precisam de mais clareza. Além disso, as perguntas dos outros podem te preparar melhor para o dia oficial.</p>
         </div>
       </section>


    <section className={StyleTrabalho.containersection2}>
      <div className={StyleTrabalho.section2}>
        <h1>4. Utilize recursos visuais</h1>

         <p>Evite ler textos longos durante a apresentação. Em vez disso, use <HighlightText> slides com tópicos curtos, imagens, vídeos, gráficos ou mapas mentais.</HighlightText>
Esses elementos deixam a apresentação mais leve, prendem a atenção do público e servem como guia para você lembrar o que deve ser dito.</p>

         </div>
       </section>
    <section className={StyleTrabalho.containersection2}>
      <div className={StyleTrabalho.section2}>
        <h1>5. Observe outras apresentações</h1>
        
         <p>Assista colegas apresentando ou acompanhe outras exposições do evento. Isso te ajuda a perceber o que funciona, o que pode ser melhorado e como diferentes pessoas estruturam suas falas.</p>
         
         </div>
       </section>

    <section className={StyleTrabalho.containersection2}>
      <div className={StyleTrabalho.section2}>
        <h1>6.Se prossível, evite ser o primeiro </h1>
         <p>Para quem sente insegurança, deixar outras pessoas apresentarem antes pode ajudar a se ambientar.
           Assistindo aos primeiros trabalhos, você entende o clima da banca ou da sala e se sente mais confortável quando chegar sua vez.</p>
         </div>
       </section>

           <section className={StyleTrabalho.containersection2}>
      <div className={StyleTrabalho.section2}>
        <h1>7.Vá direto ao ponto </h1>
         <p>Organize os tópicos que você pretende abordar e apresente apenas o que é necessário.
            Ser objetivo não significa falar pouco significa <HighlightText>manter o foco, evitando explicações exageradas ou informações que fogem do tema.</HighlightText></p>
         </div>
       </section>

        <section className={StyleTrabalho.containersection2}>
      <div className={StyleTrabalho.section2}>
        <h1>8.Interaja com o público </h1>
         <p>Conversar com a plateia, fazer perguntas simples ou pedir um retorno rápido pode deixar sua apresentação mais natural e dinâmica.
            Essa interação quebra o gelo e ajuda a transmitir mais confiança.</p>
         </div>
       </section>

           <section className={StyleTrabalho.containersection2}>
      <div className={StyleTrabalho.section2}>
        <h1>9.Acredite no seu próprio trabalho</h1>
         <p>Confie no que você estudou e produziu. Muitas vezes achamos que não sabemos o suficiente, mas a dedicação que você teve até chegar ali já mostra que você tem conhecimento para apresentar.
Lembre-se: ninguém espera que você saiba tudo, apenas que explique bem o que você pesquisou.</p>
         </div>
       </section>

    <section className={StyleTrabalho.containersection2}>
      <div className={StyleTrabalho.section2}>
        <h1>10.Construa um bom encerramento</h1>
         <p>Finalize de forma clara: sinalize que está concluindo, apresente suas considerações finais e, 
            se for o caso, indique possíveis desdobramentos futuros da pesquisa. 
            Um bom fechamento transmite segurança e mostra domínio do percurso do trabalho.</p>
         </div>
       </section>

        <section className={StyleTrabalho.containersection2}>
      <div className={StyleTrabalho.section2}>
        <h1>Para finalizar 😎 </h1>
         <p>A apresentação tem começo, meio e fim e manter a energia durante toda a fala é essencial. Treine os momentos de maior destaque, organize sua fala e aceite que <span className="fw-bold">você já fez um ótimo trabalho até aqui.</span> 
             <br />Agora é só enfrentar o nervosismo e compartilhar seu conhecimento com outras pessoas!🎉 </p>
         </div>
       </section>

    <section className={StyleTrabalho.containersectiontextarea}>
      <div className={StyleTrabalho.sectiontextarea}>
        <h1>Gostou desse conteudo?</h1>
<br />
        <div className={StyleTrabalho.buttomcunstomtext}>
          <MyButton></MyButton>
        </div>
        
         </div>
       </section>
       
   <section className={StyleTrabalho.containersectiontextarea}>
      <div className={StyleTrabalho.sectionwithcite}>
         </div>
       </section>
     </div>

  </article>
<footer>
  <FooterPag></FooterPag>
</footer>
</div>
        </>
    )
}
