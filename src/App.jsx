import './App.css';
import { Routes, Route, } from 'react-router-dom';
import Home from "./assets/pages/Home";
import About from "./assets/pages/About";
import Contact from "./assets/pages/Contact";
import Service from "./assets/pages/Service";
import NotFound from "./assets/pages/NotFound";
import Footerbody from './body/footerbody'

import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return ( 
      <div className="App"> 
        <Navbar/>
        <Routes>
            <Route path="/" element={< Home/>} />
            <Route path="/about" element={< About/>} />
            <Route path="/contact" element={< Contact/>} />
            <Route path="/service" element={< Service/>} />
            <Route path="/notfound" element={< NotFound/>} />
        </Routes>
        <Footerbody/>
        <Footer/>
        </div>
   
   )
}

  

export default App



