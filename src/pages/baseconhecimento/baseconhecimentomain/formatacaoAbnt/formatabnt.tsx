import formatContent from './formatabnt.module.css'
import HighlightText from '../../../../components/Marcatext/hightlight'
import  MyButton  from '../../../../components/buttonfunction/buttonreact'
import Images from '../../../../components/images'
import AbntGenerator from '../../../../components/abngerador/AbntGenerator'
import FooterPag from '../../../../components/footer/footer'

export default function FormatContentAbnt(){




    return(
  <>
<div className={formatContent.backgroundpag}>
   <section className={formatContent.container}>
      <div className={formatContent.text}>
        <h1>Normas e regras da ABNT:</h1>
         <p>regras de formatação para fazer seus trabalhos acadêmicos sem complicação
         </p>
      </div>
    </section>
    <article className={formatContent.containertext}>
      <div className={formatContent.textcontent2}>
        {/* <h1>Como montar um trabalho escolar ?</h1> */}
         <p>Para a elaboração de trabalhos acadêmicos, a norma utilizada da 
            ABNT (Associação brasileira de normas técnicas) é a
             14724. Essa norma especifica, em detalhe, 
            qual a estrutura e os elementos que o trabalho deve conter.
         </p>
         <p>
         <HighlightText> Lembrando que há universidades que têm exigências específicas e, neste caso, o aluno deve se informar a respeito delas.</HighlightText>
         </p>

      {/*a partir  daqui as classes*/}
      <section className={formatContent.containersection2}>
      <div className={formatContent.section2}>
        <h1>1. Estrutura do trabalho acadêmico</h1>
         <p>Os trabalhos devem ser estruturados conforme mostra a imagem abaixo:</p>
      </div>
      <div className={formatContent.contentsumary}>
        <img src={Images.estruturatrab} alt="estrutua do trabalho" />
         <ul>
          <li>Nome do Autor;</li>
          <li>Titulo;</li>
          <li>Cidade da instituição;</li>
          <li>Ano do trabalho.</li>
        </ul>
        <img src={Images.capatrab} alt="estrutua do trabalho" />
      </div>
    </section>


    <section className={formatContent.containersection2}>
      <div className={formatContent.section2}>
        <h1>2. Lombada</h1>
         <p>O título da lombada deve ser centralizado e impresso no mesmo sentido do nome do autor. Apresentada conforme a ABNT NBR 12225,
           a lombada deve conter os seguintes elementos:</p>
       <div className={formatContent.contentsumary}>
         <ul>
          <li>Nome do Autor;</li>
          <li>Titulo;</li>
          <li>Cidade da instituição;</li>
          <li>Ano do trabalho.</li>
        </ul>
         <img src={Images.lombada} alt="lombada do trabalho" />
      </div>
      </div>
    </section>


     <section className={formatContent.containersection2}>
      <div className={formatContent.section2}>
        <h1>3. Folha do rosto</h1>
         <p>A parte da frente deve conter:</p>

        <div className={formatContent.contentsumary}>
         <ul>
          <li>Nome do Autor;</li>
          <li>Titulo;</li>
          <li>Tipo de trabalho (dissertação, TCC), objetivo (aprovação em disciplina, grau pretendido), nome da instituição, área de concentração;</li>
          <li>Nome do orientador;</li>
          <li>Cidade da instituição;</li>
          <li>Ano do trabalho.</li>
        </ul>
      </div>
       <p>A parte de trás deve conter:
Dados de catalogação-na-publicação, conforme o Código de Catalogação Anglo-Americano.</p>
       <img src={Images.rosto} alt="folha de rosto do trabalho" />
         </div>
       </section>


    <section className={formatContent.containersection2}>
      <div className={formatContent.section2}>
        <h1>4. Errata</h1>

         <p>Inserida depois da folha de rosto (elemento obrigatório), a errata pode ser apresentada em folha solta ou encartada ao trabalho. Deve conter:</p>

        <div className={formatContent.contentsumary}>
         <ul>
          <li>Nome do Autor;</li>
          <li>Titulo;</li>
          <li>Tipo de trabalho (dissertação, TCC), objetivo (aprovação em disciplina, grau pretendido), nome da instituição, área de concentração;</li>
          <li>Cidade da instituição;</li>
          <li>Ano do trabalho.</li>
          <li>Texto da errata.</li>
        </ul>
         <img src={Images.errata} alt="folha de errata" />
      </div>


         </div>
       </section>



    <section className={formatContent.containersection2}>
      <div className={formatContent.section2}>
        <h1>5. Folha de aprovação</h1>
        
        <div className={formatContent.contentsumary}>
         <ul>
          <li>Nome do Autor;</li>
          <li>Titulo;</li>
          <li>Tipo de trabalho (dissertação, TCC), objetivo (aprovação em disciplina, grau pretendido), nome da instituição, área de concentração;</li>
          <li>Data de Aprovação</li>
          <li>Nome, titulação e assinatura dos elementos que fazem parte da banca examinadora e respectivas instituições.</li>
        </ul>
         <img src={Images.aprovacao} alt="folha de aprovacao" />
      </div>

         </div>
       </section>

    <section className={formatContent.containersection2}>
      <div className={formatContent.section2}>
        <h1>6. Dedicatória</h1>
         <p>Deve ser inserida depois da folha de aprovação, que é um elemento obrigatório. A dedicatória não tem título.</p>
        <img src={Images.dedicatoria} alt="folha de agradecimento" />
         </div>
       </section>

    <section className={formatContent.containersection2}>
      <div className={formatContent.section2}>
        <h1>7. Epígrafe</h1>
         <p>Elaborados conforme a ABNT NBR 6028, os resumos devem conter <HighlightText>objetivo, método, resultados e conclusões do trabalho.</HighlightText></p>
         <p>Preferencialmente em um único parágrafo, e contendo entre 150 a 500 palavras, devem ser escritos na voz ativa e na terceira pessoa do singular.</p>
         <p>Os resumos são finalizados pelas <strong>palavras-chave,</strong> as quais devem ser separadas entre si por pontos.</p>
        <img src={Images.epigrafe} alt="folha epigrafe" />
         </div>
       </section>

      <section className={formatContent.containersection2}>
      <div className={formatContent.section2}>
        <h1>8. Listas de ilustrações e tabelas</h1>
         <p>Os títulos das listas de ilustrações e tabelas devem ser centralizados. As listas, apresentada pela ordem das ilustrações ou tabelas inseridas no trabalho, deve conter:</p>
         <div className={formatContent.contentsumary}>
         <ul>
          <li>Designação de cada item por nome específico (seguido por travessão);</li>
          <li>Titulo;</li>
          <li>Número da página.</li>
        </ul>
      </div>
        <img src={Images.ilustracao} alt="folha de ilustracao" />
         <br />
          <img src={Images.tabela} alt="folha de tabela" />
         </div>
       </section>


    <section className={formatContent.containersection2}>
      <div className={formatContent.section2}>
        <h1>9. Lista de abreviaturas e siglas</h1>
         <p>As siglas devem ser apresentadas em ordem alfabética, seguidas da forma por extenso. O título da lista de abreviaturas e siglas deve ser centralizado.</p>
         <img src={Images.sigras} alt="folha de siglas" />
         </div>
       </section>

     <section className={formatContent.containersection2}>
      <div className={formatContent.section2}>
        <h1>10. Lista de símbolos</h1>
         <p>Apresentada pela ordem dos símbolos inseridos no trabalho, seguido do seu significado. O título da lista de símbolos deve ser centralizado.</p>
         <img src={Images.simbolos} alt="folha de simbolos" />
         </div>
       </section>

        <section className={formatContent.containersection2}>
      <div className={formatContent.section2}>
        <h1>11. Sumario</h1>
         <p>Elaborado conforme a ABNT NBR 6027.</p>
         <p>Os elementos pré-textuais — folha de rosto, folha de aprovação, resumos na língua portuguesa e estrangeira — não podem ser incluídos no sumário.</p>
         <img src={Images.sumario} alt="folha de sumarios" />
         </div>
       </section>

          <section className={formatContent.containersection2}>
      <div className={formatContent.section2}>
        <h1>12. Elementos textuais </h1>
          <div className={formatContent.contentsumary}>
         <ul>
          <li><strong>Introdução:</strong> Parte do texto em que é feita a delimitação do tema do trabalho;</li>
          <li><strong>Desenvolvimento:</strong> Exposição do assunto tratado no trabalho de forma detalhada;</li>
          <li><strong>Conclusão:</strong> Encerramento do texto, que contempla os resultados sobre os estudos realizados ao longo do trabalho.</li>
        </ul>
      <img src={Images.textuais} alt="folha textuais" />
      </div>
         </div>
       </section>


    <section className={formatContent.containersection2}>
      <div className={formatContent.section2}>
        <h1>13. Elementos textuais </h1>
        <p>Elaboradas conforme a ABNT NBR 6023. As referências devem conter:</p>
          <div className={formatContent.contentsumary}>
         <ul>
          <li>Autoria;</li>
          <li>Título;</li>
          <li>Edição;</li>
          <li>Cidade da publicação;</li>
          <li>Editora;</li>
          <li>Data.</li>

        </ul>
      <img src={Images.referencias} alt="folha referencias" />
      </div>
         </div>
       </section>
       <section className={formatContent.containersection2}>
      <div className={formatContent.section2}>
         <AbntGenerator/>
         </div>
       </section>

            <section className={formatContent.containersection2}>
      <div className={formatContent.section2}>
        <h1>14. Glossario </h1>
         <p>Deve ser apresentado em ordem alfabética. O título do glossário deve ser centralizado</p>
          <img src={Images.anexo} alt="folha apendice" />
         </div>
       </section>
               <section className={formatContent.containersection2}>
      <div className={formatContent.section2}>
        <h1>15. Indice </h1>
         <p>Apresentado no fim do trabalho, o índice deve ser elaborado conforme a ABNT NBR 6034 e o seu título deve ser centralizado.</p>
          <p>O índice pode ser organizado por autores, assuntos, títulos, entre outros.</p>
          <img src={Images.indice} alt="folha de indice" />
         </div>
       </section>

       <section className={formatContent.containersection2}>
      <div className={formatContent.section2}>
        <h1>16. Formatação</h1>
         <p className="fs-4"><strong>Papel de cores:</strong></p>

      </div>
      <div className={formatContent.contentsumary}>
         <ul>
          <li>Texto a preto (ilustrações podem ter outras cores);</li>
          <li>Papel, branco ou reciclado, no formato A4;</li>
          <li>Impressão: introdução, desenvolvimento e conclusão, bem como as referências, devem ser preferencialmente impressos frente e verso.</li>
        </ul>
      </div>
         <div className={formatContent.contentsumary}>
        <p className="fs-4"><strong>Margens</strong></p>
         <ul>
          <li>Parte da frente da folha:</li>
          <li >do lado esquerdo, na parte superior, devem ter 3 cm;</li>
          <li>do lado direito, na parte inferior, devem ter 2 cm.</li>
        </ul>
          <ul>
          <li>Parte de trás da folha::</li>
          <li >do lado direito, na parte superior, devem ter 3 cm;</li>
          <li>do lado esquerdo, na parte inferior, devem ter 2 cm.</li>
        </ul>
      <p className="fs-4 fw-bold">Fonte</p>
      <p>Tamanho 12.</p>
      <p className="fs-4 fw-bold">Exceções</p>
      <p> <HighlightText>  Citações com mais de três linhas, notas de rodapé, páginas, dados internacionais de catalogação-na-publicação, legendas e fontes — que devem ter tamanho menor, mas devem ser uniformes entre si.</HighlightText></p>
         <br />
      <p className="fs-4 fw-bold">Páginas</p>
      <p>A numeração impressa deve ser inserida a partir da introdução do trabalho.</p>
      <p>Isso quer dizer que folhas de rosto e de aprovação, resumos e sumário devem ser contados, mas não devem conter a impressão da página.</p>
      <p>A página deve ser inserida no canto superior direito. O último algarismo da página deve ficar a 2 cm da borda da folha.</p>
      <br />
      <p><strong>Além disso, é preciso saber que:</strong></p>
        <div className={formatContent.contentsumary}>
         <ul>
          <li> <HighlightText>Numeração de trabalhos impressos na parte da frente da folha:</HighlightText> somente as folhas da frente devem ser contadas;</li>
          <li><HighlightText>Numeração de trabalhos impressos frente e verso:</HighlightText></li>
          <li>impressão das páginas devem ser inseridas na parte da frente da folha - no canto superior direito;</li>
          <li>impressão das páginas devem ser inseridas na parte de trás da folha - no canto superior esquerdo.</li>

        </ul>
      </div>


      </div>
    </section>








    <section className={formatContent.containersectiontextarea}>
      <div className={formatContent.sectiontextarea}>
        <h1>Gostou desse conteudo?</h1>
<br />
        <div className={formatContent.buttomcunstomtext}>
          <MyButton></MyButton>
        </div>
        
         </div>
       </section>
        <section className={formatContent.containersectiontextarea}>
      <div className={formatContent.sectionwithcite}>

        <p><cite>Texto de: Márcia Fernandes
Professora, produz conteúdos educativos desde 2015.
 Licenciada em Letras pela Universidade Católica de Santos (habilitação para Ensino Fundamental II e Ensino Médio) e formada no Curso de Magistério (habilitação para Educação Infantil e Ensino Fundamental I).</cite></p>
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


