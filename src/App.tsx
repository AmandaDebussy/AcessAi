import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NavBarMain from './components/navbar/navbar';
import NavBarPag2 from './components/OtherNavbar/navbar2';
import HomePag from './pages/homepag/home';
import TrilhaEstudo from './pages/TrilhaDeEstudo/TrilhaEstudo';
import Duvidas from './pages/duvidas/Duvidas';
import Sobre from './pages/sobre/sobre';
import BaseConhecimento from './pages/baseconhecimento//baseconhecimentomain/basecon';

import FormatContentAbnt from './pages/baseconhecimento/baseconhecimentomain/formatacaoAbnt/formatabnt'
import Apresentrabalho from './pages/baseconhecimento/baseconhecimentomain/Apresentrabalho/apresentrabalho';
import OrganizaEstudo from './pages/baseconhecimento/baseconhecimentomain/organizarestudo/OrgEstudo';
// import bolsaEstudo from './pages/baseconhecimento/baseconhecimentomain/bolsaEstudo';
// import CuidadoSaudeMental from './pages/baseconhecimento/baseconhecimentomain/CuidadoSaudeMental';
// import cursoEscolher from './pages/baseconhecimento/baseconhecimentomain/cursoescolher';
// import CuidadoSaudeMental from './pages/baseconhecimento/baseconhecimentomain/CuidadoSaudeMental';
// import dicasEmprego from './pages/baseconhecimento/baseconhecimentomain/DicasEmprego';
// import dicasEnem from './pages/baseconhecimento/baseconhecimentomain/dicasEnem';
import EscolhaFaculdade from './pages/baseconhecimento/baseconhecimentomain/escolherfaculdade/EscolhaFacul';
// import FerramentasOnline from './pages/baseconhecimento/baseconhecimentomain/FerramentasOnline';
// import futuroProfissional from './pages/baseconhecimento/baseconhecimentomain/futuroProfissional';
// import  from './pages/baseconhecimento/baseconhecimentomain/'
import GerenciaTempo from './pages/baseconhecimento/baseconhecimentomain/gerenciaTempo/gerenciaTempo';
// import HabitoSaudavel from './pages/baseconhecimento/baseconhecimentomain/HabitosSaudaveis';
// import modeloCurriculo from './pages/baseconhecimento/baseconhecimentomain/ModelodeCurriculo';
// import montarCurriculo from './pages/baseconhecimento/baseconhecimentomain/montarCurriculo';
// import motivacaoEstudo from './pages/baseconhecimento/baseconhecimentomain/MotivacaoEstudo';
// import organizacaoEstudo from './pages/baseconhecimento/baseconhecimentomain/organizarestudo';
// import PortifolioProf from './pages/baseconhecimento/baseconhecimentomain/PortifolioProfissional';
// import PrimeiroEmprego  from './pages/baseconhecimento/baseconhecimentomain/PrimeiroEmprego';
// import SegurancaDigital from './pages/baseconhecimento/baseconhecimentomain/SegurançaDigital';
// import SofteHard from './pages/baseconhecimento/baseconhecimentomain/SoftSkillseHardSlkills';
// import VidaUni from './pages/baseconhecimento/baseconhecimentomain/vidauniversitaria';





import ScrollToAnchor from './components/scholltop/scrolltop';

function MainLayout({ children, darkMode, setDarkMode }: { children: React.ReactNode; darkMode: boolean; setDarkMode: React.Dispatch<React.SetStateAction<boolean>> }) {
  return (
    <>
      <NavBarMain darkMode={darkMode} setDarkMode={setDarkMode} />
      {children}
    </>
  );
}


function OtherContentDarkLight({ children, darkMode, setDarkMode }: { children: React.ReactNode; darkMode: boolean; setDarkMode: React.Dispatch<React.SetStateAction<boolean>> }) {
  return (
    <>
      <NavBarPag2 darkMode={darkMode} setDarkMode={setDarkMode} />
      {children}
    </>
  );
}

function AppContent() {
  const [darkMode, setDarkMode] = useState(false);


  // dark mode
  useEffect(() => {
    if (darkMode) document.body.classList.add('DarkMode');
    else document.body.classList.remove('DarkMode');
  }, [darkMode]);

  return (
    <Routes>
      <Route path="/"element={<MainLayout darkMode={darkMode} setDarkMode={setDarkMode}>
        <HomePag />
          </MainLayout>
        }
      />

<Route path="/TrilhaDeEstudo"element={<MainLayout darkMode={darkMode} setDarkMode={setDarkMode}>
        < TrilhaEstudo/>
          </MainLayout>
        }
      />

      <Route path="/duvidas"element={<MainLayout darkMode={darkMode} setDarkMode={setDarkMode}>
        <Duvidas/>
          </MainLayout>
        }
      />

      <Route path="/sobre"element={<MainLayout darkMode={darkMode} setDarkMode={setDarkMode}>
        < Sobre/>
          </MainLayout>
        }
      />







{/* //outro estilo de darkmode */}
      
      <Route path="/basecon"element={<OtherContentDarkLight darkMode={darkMode} setDarkMode={setDarkMode}>
            <BaseConhecimento />
          </OtherContentDarkLight>
        }
      />
      <Route path="/formatabnt"element={<OtherContentDarkLight darkMode={darkMode} setDarkMode={setDarkMode}>
            <FormatContentAbnt/>
          </OtherContentDarkLight>
        }
      />

        <Route path="/Apresentrabalho"element={<OtherContentDarkLight darkMode={darkMode} setDarkMode={setDarkMode}>
            <Apresentrabalho/>
          </OtherContentDarkLight>
        }
      />

<Route path="/organizarestudo"element={<OtherContentDarkLight darkMode={darkMode} setDarkMode={setDarkMode}>
            <OrganizaEstudo/>
          </OtherContentDarkLight>
        }
      />


      <Route path="/gerenciaTempo"element={<OtherContentDarkLight darkMode={darkMode} setDarkMode={setDarkMode}>
            <GerenciaTempo/>
          </OtherContentDarkLight>
        }
      />


     <Route path="/escolherfaculdade" element={<OtherContentDarkLight darkMode={darkMode} setDarkMode={setDarkMode}>
          <EscolhaFaculdade/>
        </OtherContentDarkLight>
        }
      />



    </Routes>
    
    
  );
}


function App() {
  return (
    <BrowserRouter>
    <ScrollToAnchor />
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
