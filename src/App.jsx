//Oj vad jag har haft det svårt att förstå JavaScript och detta program. Har startat om flera gånger då min sida bara blir vit efter ett tag 
// och jag inte listat ut vart jag har lagt fel komponet någonstans.  Det är därför mitt projekt inte är klart. Hade kommit kanske långt innan jag fick problem och bestämmde mig för att 
// börja om. Och nu är jag lite fastnat. Jag siktar på att göra komplettering. 
import './App.css'
import Header from './components/Header'
import Showcase from './components/Showcase'
import Footer from './components/Footer'

import Home from './pages/Home'
import Contacts from './pages/Contacts'

import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
    <Header/>

    <Footer/>
    <Routes>
      <Route path="/" element={<Home/> } />
      <Route path="/contacts" element={<Contacts/>} />
    </Routes>
  </BrowserRouter>

   
  )
}

export default App



