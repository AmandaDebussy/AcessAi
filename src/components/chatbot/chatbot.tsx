import { useState } from "react"; //useEffect
import styles from "./chatbot.module.css";
import Images from "../images";






interface Message {
  text: string;
  sender: "user" | "bot";
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);


  // const //[mensagemAparecendo,setMensagemAparecendo]= useState(true)

  // useEffect(()=>{

  //   const time = setTimeout(() => {
  //     setMensagemAparecendo(false)
  //   },1000);

  //   return ()=>{
  //     clearTimeout(time);
  //   }
  // },[]);



  
  const [messages, setMessages] = useState<Message[]>([
    { 
      text: "Oi, eu sou o Livrinho!\n Como eu Posso te ajudar? \n\n - com ansiedade \n - estrutura do trabalho\n - slides \n - oratória.", 
      sender: "bot" 
    }
  ]);

  const [input, setInput] = useState("");

  function handleSend() {
    if (!input.trim()) return;

    const userMessage: Message = { text: input, sender: "user" };
    const botMessage: Message = {
      text: getBotResponse(input),
      sender: "bot"
    };

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInput("");
  }






  function getBotResponse(text: string) {
    const lower = text.toLowerCase();

    const temas = {
      ansiedade: ["ansiedade", "nervoso", "medo", "inseguro"],
      estrutura: ["estrutura", "trabalho", "organizar", "organização"],
      slides: ["slide", "slides", "apresentação", "visual"],
      oratoria: ["oratória","oratoria", "falar", "voz", "postura"],
      obrigada: ["obrigado","obrigada","valeu pela ajuda"]
    };



    if (temas.ansiedade.some(p => lower.includes(p))) {
      return "É normal sentir ansiedade. Treine antes, organize um roteiro e respire profundamente antes de começar.";
    }

    if (temas.estrutura.some(p => lower.includes(p))) {
      return "Organize seu trabalho em: Introdução, Desenvolvimento e Conclusão. Seja claro e direto.";
    }

    if (temas.slides.some(p => lower.includes(p))) {
      return "Use pouco texto, fontes grandes e imagens que apoiem sua fala. Slides são apoio, não roteiro.";
    }

    if (temas.oratoria.some(p => lower.includes(p))) {
      return "Fale devagar, mantenha contato visual e evite ler os slides. Pratique em voz alta.";
    }
     if(temas.obrigada.some(p=>lower.includes(p))){
       return "Eu que agradeço pela paciencia, te desejo sucesso na sua caminhada! 🧡 "
     }
   

    return "Não entendi muito bem 😅 Você pode perguntar sobre ansiedade, estrutura, slides ou oratória.";
  }


  
  return (
    <>
      <div 
        className={styles.chatButton} 
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* {mensagemAparecendo &&(
          <div className={styles.messagem}>
            Oi, Sou o livrinho!
          </div>
        )} */}
        <img src={Images.livrinho} alt="" />
      </div>
      

      {isOpen && (
        <div className={styles.chatContainer}>
          <div className={styles.chatHeader}>
            Assistente Livrinho
          </div>

          <div className={styles.chatMessages}>
            {messages.map((msg, index) => (
              <div
                key={index}
                className={
                  msg.sender === "user"
                    ? styles.userMessage
                    : styles.botMessage
                }
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className={styles.chatInputArea}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Digite sua dúvida..."
            />
            <button onClick={handleSend}>
              Enviar
            </button>
          </div>
        </div>
      )}
    </>
  );
}