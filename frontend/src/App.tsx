import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import Profil from './pages/profil/Profil';
import Projects from './pages/projects/Projects';
import Contact from './pages/contact/Contact';
import Menu from './pages/menu/Menu';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
