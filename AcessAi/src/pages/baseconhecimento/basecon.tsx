import basecon from './basecon.module.css'
import HighlightText from '../../components/Marcatext/hightlight'
import  MyButton  from '../../components/buttonfunction/buttonreact'
import Images from '../../components/images'

function BaseConhecimento(){

  const YearAtual = new Date().getFullYear();



    return(
  <>
<div className={basecon.backgroundpag}>
   <section className={basecon.container}>
      <div className={basecon.text}>
        <h1>Como montar um trabalho escolar ?</h1>
         <p>A importacia da elaboração do trabalho escolar e o impacto
          no aprendizado
         </p>
      </div>
    </section>
    <article className={basecon.containertext}>
      <div className={basecon.textcontent2}>
        {/* <h1>Como montar um trabalho escolar ?</h1> */}
         <p>Para fazer um trabalho escolar a primeira coisa que você precisa é 
          garantir que sabe estruturá-lo, ou seja,
           saber quais são as suas partes e o que cada uma
            delas precisa conter.
         </p>
         <p>
          Um bom trabalho escolar tem <span className="fw-bold">6 partes essenciais:</span>
         </p>
            <div className={basecon.contentsumary}>
        <ul>
          <li>Capa;</li>
          <li>Sumário;</li>
          <li>Introdução;</li>
          <li>Desenvolvimento;</li>
          <li>Conclusão;</li>
          <li>Bibliografia</li>
        </ul>
      </div>


      {/*a partir  daqui as classes*/}
      <section className={basecon.containersection2}>
      <div className={basecon.section2}>
        <h1>1. Capa: identificação</h1>
         <p>A capa é a identificação do trabalho. Ela deve conter:</p>
      </div>
      <div className={basecon.contentsumary}>
        <ul>
          <li>nome do aluno ou dos alunos, se for um trabalho de grupo</li>
          <li>nome da escola</li>
          <li>nome do professor e disciplina</li>
          <li>data do trabalho</li>
        </ul>
      </div>
    </section>


    <section className={basecon.containersection2}>
      <div className={basecon.section2}>
        <h1>2. Sumário: estrutura</h1>
         <p>O sumário mostra como o trabalho foi estruturado, indicando as páginas de cada uma das suas partes.</p>

         <p>Lembrando que o número da <HighlightText>página não deve ser impresso na folha do sumário.</HighlightText> A impressão das
           páginas deve ser feita apenas a partir da introdução.</p>

         <p>Apesar de algumas pessoas usarem o índice para fazer isso e 
          confundir ambos, o índice é, na verdade, a lista de temas abordados no trabalho. Esses temas são listados em ordem alfabética e são acompanhados com o número da página onde o tema se encontra.</p>

         <p>Por isso, num trabalho escolar, o que usamos para localizar uma parte específica do trabalho é o sumário.</p>
      </div>
    </section>


     <section className={basecon.containersection2}>
      <div className={basecon.section2}>
        <h1>3. Introdução: definição dos objetivos</h1>
         <p>A introdução é um texto curto que deve indicar qual o assunto abordado no trabalho, bem como explicar o seu objetivo.</p>

         <p>Apesar de ser uma das partes iniciais do trabalho, a introdução deve 
          ser escrita depois da sua finalização, porque só assim você garantirá que 
           não esqueceu
           de inserir nada do que contemplou no seu desenvolvimento</p>

         <p><HighlightText>Deixar para escrever a introdução no final também evita o erro de mencionar algo sobre o qual você decidiu não escrever depois.</HighlightText> </p>

         </div>
       </section>


    <section className={basecon.containersection2}>
      <div className={basecon.section2}>
        <h1>4.Desenvolvimento: o trabalho em si</h1>

         <p>O desenvolvimento contém o trabalho em si. É nessa parte que 
          você deve escrever o que aprendeu com as pesquisas que realizou 
          para atender à proposta
           de trabalho solicitada pelo professor.</p>

         <p>Antes de começar, pense bem no tema, faça pesquisas, leia e planeje a estrutura do seu trabalho. Só depois de montar a estrutura, comece a escrever.</p>

         <p><HighlightText>Não faça cópias de livros ou outras fontes consultadas. Com base nas 
          pesquisas que realizou escreva o seu próprio texto.</HighlightText> Esteja atento para 
          a redação de um texto coeso, coerente e sem erros de português.</p>

         </div>
       </section>



    <section className={basecon.containersection2}>
      <div className={basecon.section2}>
        <h1>5. Conclusão: resultado final</h1>
        
         <p>A conclusão finaliza o trabalho, devendo destacar as suas ideias principais. 
          Ela deve indicar quais as considerações tiradas
           como resultado da pesquisa que foi realizada.</p>

         <p>Breve como o texto da introdução, nessa parte, o objetivo do trabalho deve
           ser retomado, indicando se o mesmo foi alcançado, o que foi aprendido, se
            o tema é abrangente
           e que outras pesquisas poderiam ser feitas.</p>

         </div>
       </section>

    <section className={basecon.containersection2}>
      <div className={basecon.section2}>
        <h1>6. Bibliografia: fontes pesquisadas</h1>
        
         
         <p>A bibliografia contém a lista do material consultado para a elaboração do trabalho - livros, jornais, revistas, sites.</p>
         <br />
         <p className="fw-bold">Como fazer a bibliografia?</p>
         
         <p>Para fazer a bibliografia, você deve indicar os elementos necessários para
           a sua identificação da seguinte forma:</p>

        <p>Último sobrenome do autor em letras maiúsculas, nome e outros sobrenomes. Título em negrito, grifo ou itálico. Edição (se houver). Cidade da publicação: Editora, data.</p>

         <p>Exemplo: BOSI, Alfredo. História Concisa da Literatura Brasileira. 38. ed. São Paulo: Cultrix, 1994.</p>
         <p>Lembrando que depois de identificar as fontes consultadas, as mesmas devem ser inseridas na bibliografia em ordem alfabética.</p>
         <p> Para saber mais sobre cada elemento da bibliografia, leia <a href='https://editoraviseu.com/como-escrever-uma-biografia-5-passos/' className={basecon.textcolorhref} target="_blank" rel="noopener">Bibliografia: o que é e como fazer?</a></p>
         </div>
       </section>



    <section className={basecon.containersectiontextarea}>
      <div className={basecon.sectiontextarea}>
        <h1>Gostou desse conteudo?</h1>
<br />
        <div className={basecon.buttomcunstomtext}>
          <MyButton></MyButton>
        </div>
        
         </div>
       </section>
        <section className={basecon.containersectiontextarea}>
      <div className={basecon.sectionwithcite}>

        <p><cite>Texto de: Márcia Fernandes
Professora, produz conteúdos educativos desde 2015.
 Licenciada em Letras pela Universidade Católica de Santos (habilitação para Ensino Fundamental II e Ensino Médio) e formada no Curso de Magistério (habilitação para Educação Infantil e Ensino Fundamental I).</cite></p>
         </div>
       </section>
     </div>

  </article>
  <footer>
      <div className='BackgroundFooter'>
        <div className='footercontent'>
             <img src={Images.logofooter} alt="logo" />
        </div>
<div className='contentfooterright'>
  <p>''A mente que se abre para uma ideia
             nunca volta ao seu tamanho origina'' <span className='contentAutor'>Albert Einstein</span></p>
</div>
       <div className='footerbottom'>
       <p>Acessai® {YearAtual}. Todos os direitos reservados.</p>
     </div>
      </div>
    </footer>
</div>
        </>
    )
}






export default BaseConhecimento