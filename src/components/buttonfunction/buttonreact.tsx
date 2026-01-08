import {useState} from "react"; //useId, tirei do textArea
import './button.css';
import Images from "../images";
import CommentsBox  from "../contentsbox/content";

export default function MyButton(){

const [mostrarmensagem,setMensagem] = useState<null | string>(null);
// const textArea = useId();
 
function button(opcao: "sim" | "nao") {
     setMensagem(opcao);
     setMensagem(mostrarmensagem === opcao ? null : opcao);
   }

   
    return(
        <>

     {mostrarmensagem === "sim" &&  <> <p style={{ display: "block" }} className="fw-bold">Valeu pelo sim 😄 🎉</p>
    
     <img src={Images.gifcomemoracao} alt="comemoraçao" className="ImageGif"/>
     </>
     }


     {mostrarmensagem === "nao" && 
     <>
     <p style={{ display: "block" }} className="fw-bold">Poxa, que pena 😢 
        <br />Deixe seu comentario para melhorias </p>
     {/* <textarea name="TextoHere" id={textArea}/> */}

     
    <CommentsBox visible={mostrarmensagem === "nao"} />
     <br />
     {/* <button className="colorcunston">Enviar</button> */}
     </>
     }
   
     <div className="cunstombuttonstyle">
     <button onClick={() =>  button("sim")}>SIM</button>
     <button onClick={() =>  button("nao")}>NÃO</button>
     </div>
    </>
    
    )


}

