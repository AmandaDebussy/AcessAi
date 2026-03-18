
import StyleNavBar from './navbar2.module.css'
import Images from '../images.tsx'
import { Link } from "react-router-dom";
import { useState , useEffect , useRef } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { GoSun } from "react-icons/go";
import { LuMoon } from "react-icons/lu";




interface NavbarProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}


function NavBarPag2({ darkMode, setDarkMode }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  
  
  
  const menuRef = useRef<HTMLElement>(null);
  
  useEffect(()=>{

     function handleClickOutside(event:MouseEvent){
          if(menuRef.current && !menuRef.current.contains(event.target as Node)){
            setMenuOpen(false);
          }
     }

     document.addEventListener("mousedown", handleClickOutside);

    return()=>{
    document.removeEventListener("mousedown", handleClickOutside);
    }

  });
    



  return (
    <header className={StyleNavBar.BackGroundNavBar}>
      <div className={StyleNavBar.ContentLinks}>
        <img src={Images.bookiconPag} alt="iconpag" className={StyleNavBar.logo} />

        <nav ref={menuRef} className={`${StyleNavBar.navContainer} ${menuOpen ? StyleNavBar.active : ""}`}>
          <ul>
           {/* Sessão: Orientação Acadêmica */}
             <li><Link to="/" className="fw-bold" >Inicio</Link></li>
            <li><Link to="/basecon" onClick={()=>setMenuOpen(false)}>Como montar um trabalho escolar</Link></li>
            <li><Link to="/formatabnt" onClick={()=>setMenuOpen(false)}>Formatação nas normas da ABNT</Link></li>
            <li><Link to="/Apresentrabalho" onClick={()=>setMenuOpen(false)}>Dicas para apresentar um trabalho</Link></li>
            <li><Link to="/organizarestudo" onClick={()=>setMenuOpen(false)}>Como organizar os estudos</Link></li>
            <li><Link to="/gerenciaTempo" onClick={()=>setMenuOpen(false)}>Técnicas de gerenciamento de tempo</Link></li>

            {/* Sessão: Vida Universitária */}
            <li><Link to="/escolherfaculdade" onClick={()=>setMenuOpen(false)}>Como escolher uma faculdade</Link></li>
            <li><Link to="/curso-ideal" onClick={()=>setMenuOpen(false)}>Qual curso escolher?</Link></li>
            <li><Link to="/enem" onClick={()=>setMenuOpen(false)}>Dicas para o ENEM e vestibulares</Link></li>
            <li><Link to="/bolsas-estudo" onClick={()=>setMenuOpen(false)}>Bolsas de estudo e financiamento</Link></li>
            <li><Link to="/vida-campus" onClick={()=>setMenuOpen(false)}>Vida universitária e adaptação</Link></li>

            {/* Sessão: Carreira e Profissão */}
            <li><Link to="/curriculo" onClick={()=>setMenuOpen(false)}>Como montar um currículo</Link></li>
            <li><Link to="/entrevista" onClick={()=>setMenuOpen(false)}>Dicas para entrevista de emprego</Link></li>
            <li><Link to="/primeiro-emprego" onClick={()=>setMenuOpen(false)}>Conquistando o primeiro emprego</Link></li>
            <li><Link to="/soft-skills" onClick={()=>setMenuOpen(false)}>O que são Soft Skills e Hard Skills</Link></li>
            <li><Link to="/portfolios" onClick={()=>setMenuOpen(false)}>Criando um portfólio profissional</Link></li>

              {/* Sessão: Desenvolvimento Pessoal */}
            <li><Link to="/motivacao" onClick={()=>setMenuOpen(false)}>Mantendo a motivação nos estudos</Link></li>
            <li><Link to="/saude-mental" onClick={()=>setMenuOpen(false)}>Cuidados com a saúde mental</Link></li>
            <li><Link to="/planejamento-futuro" onClick={()=>setMenuOpen(false)}>Planejando o futuro profissional</Link></li>
            <li><Link to="/habitos-saudaveis" onClick={()=>setMenuOpen(false)}>Hábitos saudáveis na rotina</Link></li>
 
            {/* Sessão: Tecnologia e Ferramentas */}
            <li><Link to="/ferramentas-online" onClick={()=>setMenuOpen(false)}>Ferramentas online úteis</Link></li>
            <li><Link to="/modelos-prontos" onClick={()=>setMenuOpen(false)}>Modelos de currículos e trabalhos</Link></li>
            <li><Link to="/seguranca-digital" onClick={()=>setMenuOpen(false)}>Segurança digital e privacidade</Link></li>
      

          </ul>
        </nav>

        <div className={StyleNavBar.ContentMenu}>
           
          <div className={StyleNavBar.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <IoClose size={28} /> : <GiHamburgerMenu size={28} />}

          </div>
           <button onClick={() => setDarkMode(!darkMode)} className="theme-toggle">
            {darkMode ? <GoSun /> : <LuMoon />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default NavBarPag2;
