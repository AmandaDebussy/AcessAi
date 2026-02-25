import './home.css';
import Images from '../../components/images';
import { BsBook, BsSearch, BsStar } from 'react-icons/bs'
import FooterPag from '../../components/footer/footer'
// import  NavBarMain from  '../../components/navbar/navbar'
// import { useEffect,useState } from 'react';


function HomePag() {
  
  

  return (
    <>

    {/*first content of the pag*/}
  <div className='backgroundpag'>
   <section className='container'>
      <div className='text'>
        <h1>AcessAi.</h1>
         <h2> Seu manual amigável de instruções acadêmicas </h2>
         <p>Estudar nunca foi tão acessível e prático.</p>
      </div>
      <div className='imagecontainer'>
        <img src={Images.GirlHappy} alt="Estudante sorrindo" />
      </div>
    </section>
  {/*card with content*/}
<section>
      <div className='featurescontainer'>
      <div className='card'>
        <div className='contentinsidecard'>
        <i><BsBook size={44}/></i>
        <p>
          Aqui você encontra ajuda para organizar e fortalecer seus estudos
          acadêmicos.
        </p>
      </div>
      </div>

      <div className='card'>
        <div className='contentinsidecard'>
        <i><BsSearch size={44}/></i>
        <p>
          Pesquise sua dúvida e encontre respostas claras e confiáveis.
        </p>
      </div>
      </div>
      <div className='card'>
        <div className='contentinsidecard'>
          <i><BsStar size={44}/></i>
        <p>
          Feito com todo carinho, pensando em facilitar sua jornada de
          aprendizado.
        </p>
       </div>
      </div>
    </div>
</section>
    <section className='containerothersection'>
      <div className='textothersection'>
        <h1>AcessE de qualquer lugar !</h1>
         <h2> Tenha seu manual acadêmico acessível a qualquer hora, em qualquer dispositivo. </h2>
      </div>
      <div className='imagecontainerothersection'>
        <img src={Images.GirlWithBook} alt="Estudante sorrindo" />
      </div>
    </section>


    <section>
      <div className='featurescontainerSecondCard'>
         <h2>Qual é nosso objetivO ?</h2>
      <div className='cardswrapper'>
      <div className='cardSecond'>
        <div className='contentinsidecard'>
        <p>
          Auxiliar estudantes na <span className='ColorTextCard'> elaboração de trabalhos
           acadêmicos</span> , com suporte em estrutura, formatação e organização.
        </p>
      </div>
      </div>

      <div className='cardSecond'>
        <div className='contentinsidecard'>
        <p>
          Orientar no uso de normas, <span className='ColorTextCard'> facilitar a
           pesquisa </span> e oferecer ferramentas de 
          apoio para a produção acadêmica.
        </p>
      </div>
      </div>
      <div className='cardSecond'>
        <div className='contentinsidecard'>
        <p>
          Promover autonomia, democratizar o conhecimento e  
          <span className='ColorTextCard'> incentivar a inclusão educacional em diferentes níveis.</span>
        </p>
       </div>
      </div>
      </div>
    </div>
    </section>
    <section className='containerothersection3'>
      <div className='imagecontainerothersection3'>
        <img src={Images.girlallbooks} alt="Estudante sorrindo" />
      </div>
      <div className='textothersection3'>
        <h1>Tudo isso feito para vocÊ !</h1>
         <h2> Porque conhecimento é livre.
          <br />
              Assim como voce é livre
              para aprender! </h2>
      </div>
    </section>
    <div>
       <FooterPag/>
    </div>
    </div>
    </>
  )
}

export default HomePag

