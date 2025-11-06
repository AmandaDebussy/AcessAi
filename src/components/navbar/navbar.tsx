import StyleNavBar from './navbar.module.css'
import Images from '../images.tsx'
import { Link } from "react-router-dom";
import { useState} from 'react'
import { GiHamburgerMenu } from "react-icons/gi"
import { IoClose } from "react-icons/io5"
import { GoSun } from "react-icons/go";
import { LuMoon } from "react-icons/lu";






interface NavbarProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}




function NavBarPag({ darkMode, setDarkMode }: NavbarProps) {


  const [menuOpen, setMenuOpen] = useState(false);
  
  
  return (
    <header className={StyleNavBar.BackGroundNavBar}>
      <div className={StyleNavBar.ContentLinks}>
        <img src={Images.bookiconPag} alt="iconpag" className={StyleNavBar.logo} />

        <nav className={`${StyleNavBar.navContainer} ${menuOpen ? StyleNavBar.active : ""}`}>
          
          <ul>
            <li><Link to="/">Início</Link></li>
            <li><Link to ="/BaseCon">Base de Conhecimento</Link></li>
            <li><Link to="">Trilha de Estudo</Link></li>
            <li><Link to="">Dúvidas</Link></li>
            <li><Link to="">Sobre</Link></li>
          </ul>
        </nav>
      <div className={StyleNavBar.ContentMenu}>
        <div className={StyleNavBar.hamburger}onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <IoClose size={28} /> : <GiHamburgerMenu size={28} />}
        </div>

        <button onClick={() => setDarkMode(!darkMode)} className="theme-toggle">
           {darkMode ? <GoSun/> :<LuMoon/>}
          </button>
        </div>
      </div>
    </header>
  )
}

export default NavBarPag
