import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter,Routes, Route, } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './assets/pages/Home';
import Contact from './assets/pages/Contact';
import NotFound from './assets/pages/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
            <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/contacts' element={<Contact/>} />
            <Route path='*' element={<NotFound/>} />
          </Routes>
       </BrowserRouter>
    </React.StrictMode>

);
