//en la linea del video, este documento sustituye al App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Importación de componentes: Layout, Home, About, Contact, Portfolio, Dashboard. a mi archivo App.jsx {React} //Papel Principal.
import Layout from './components/Layout/index.jsx'; 
import Home from './components/Home/index.jsx'; 
import About from './components/About/index.jsx';
import Contact from './components/Contact/index.jsx'
import Portfolio from './components/Portfolio'
import Dashboard from './components/Dashboard'

import './App.scss'



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
           <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/dashboard" element={<Dashboard />} /> 
        </Route>
      </Routes>
    </>
  )
}

export default App
