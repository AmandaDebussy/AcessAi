import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NavBarMain from './components/navbar/navbar';
import NavBarPag2 from './components/OtherNavbar/navbar2';
import HomePag from './pages/homepag/home';
import BaseConhecimento from './pages/baseconhecimento/basecon';


function MainLayout({ children, darkMode, setDarkMode }: { children: React.ReactNode; darkMode: boolean; setDarkMode: React.Dispatch<React.SetStateAction<boolean>> }) {
  return (
    <>
      <NavBarMain darkMode={darkMode} setDarkMode={setDarkMode} />
      {children}
    </>
  );
}


function BaseConLayout({ children, darkMode, setDarkMode }: { children: React.ReactNode; darkMode: boolean; setDarkMode: React.Dispatch<React.SetStateAction<boolean>> }) {
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
      <Route path="/baseCon"element={<BaseConLayout darkMode={darkMode} setDarkMode={setDarkMode}>
            <BaseConhecimento />
          </BaseConLayout>
        }
      />
    </Routes>
  );
}


function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
