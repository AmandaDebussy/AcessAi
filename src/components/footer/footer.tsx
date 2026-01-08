import Images from "../images";
import StyleFooter from './footer.module.css'   

export default function FooterPag(){
     
    const YearAtual = new Date().getFullYear();

    return(
        <footer>
  <div className={StyleFooter.BackgroundFooter}>
    
    <div className={StyleFooter.footercontent}>
      <img src={Images.logofooter} alt="logo" />
    </div>

    <div className={StyleFooter.contentfooterright}>
      <p>
        "A mente que se abre para uma ideia nunca volta ao seu tamanho original"
        <span className={StyleFooter.contentAutor}>
          Albert Einstein
        </span>
      </p>
    </div>

    <div className={StyleFooter.footerbottom}>
      <p>Acessai® {YearAtual}. Todos os direitos reservados.</p>
    </div>

  </div>
</footer>
    )
}