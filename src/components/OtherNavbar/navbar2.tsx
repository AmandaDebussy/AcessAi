
import StyleNavBar from './navbar2.module.css'
import Images from '../images.tsx'
import { Link } from "react-router-dom";
import { useState } from 'react';
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

  return (
    <header className={StyleNavBar.BackGroundNavBar}>
      <div className={StyleNavBar.ContentLinks}>
        <img src={Images.bookiconPag} alt="iconpag" className={StyleNavBar.logo} />

        <nav className={`${StyleNavBar.navContainer} ${menuOpen ? StyleNavBar.active : ""}`}>
          <ul>
           {/* Sessão: Orientação Acadêmica */}
             <li><Link to="/" className="fw-bold">Inicio</Link></li>
            <li><Link to="/basecon">Como montar um trabalho escolar</Link></li>
            <li><Link to="/formatabnt">Formatação nas normas da ABNT</Link></li>
            <li><Link to="/Apresentrabalho">Dicas para apresentar um trabalho</Link></li>
            <li><Link to="/organizarestudo">Como organizar os estudos</Link></li>
            <li><Link to="/gerenciaTempo">Técnicas de gerenciamento de tempo</Link></li>

            {/* Sessão: Vida Universitária */}
            <li><Link to="/faculdade">Como escolher uma faculdade</Link></li>
            <li><Link to="/curso-ideal">Qual curso escolher?</Link></li>
            <li><Link to="/enem">Dicas para o ENEM e vestibulares</Link></li>
            <li><Link to="/bolsas-estudo">Bolsas de estudo e financiamento</Link></li>
            <li><Link to="/vida-campus">Vida universitária e adaptação</Link></li>

            {/* Sessão: Carreira e Profissão */}
            <li><Link to="/curriculo">Como montar um currículo</Link></li>
            <li><Link to="/entrevista">Dicas para entrevista de emprego</Link></li>
            <li><Link to="/primeiro-emprego">Conquistando o primeiro emprego</Link></li>
            <li><Link to="/soft-skills">O que são Soft Skills e Hard Skills</Link></li>
            <li><Link to="/portfolios">Criando um portfólio profissional</Link></li>

              {/* Sessão: Desenvolvimento Pessoal */}
            <li><Link to="/motivacao">Mantendo a motivação nos estudos</Link></li>
            <li><Link to="/saude-mental">Cuidados com a saúde mental</Link></li>
            <li><Link to="/planejamento-futuro">Planejando o futuro profissional</Link></li>
            <li><Link to="/habitos-saudaveis">Hábitos saudáveis na rotina</Link></li>
 
            {/* Sessão: Tecnologia e Ferramentas */}
            <li><Link to="/ferramentas-online">Ferramentas online úteis</Link></li>
            <li><Link to="/modelos-prontos">Modelos de currículos e trabalhos</Link></li>
            <li><Link to="/seguranca-digital">Segurança digital e privacidade</Link></li>
      

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
