import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';

import Header from './layout/Header/Header';
import Sobre from './pages/sobre'
import Servico from './pages/servico'
import Contato from './pages/contato'
import Home from './pages/home/Home'

function App() {
  return (    
    <Router>         
      <Header />
        <Routes>
              <Route path='/' element={<Home />} />            
              <Route path='/sobre' element={<Sobre />} />   
              <Route path='/servico' element={<Servico />} />                
              <Route path='/contato' element={<Contato />} />                           
        </Routes>        
  </Router>  
  );
}

export default App;
