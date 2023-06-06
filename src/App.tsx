import './App.css'
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About/About';
import Work from './components/Work/Work';
import Contact from './components/Contact';

function App() {
  

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/work" element={<Work/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Navbar/>
    </div>
  )
}

export default App
