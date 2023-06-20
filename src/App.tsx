import './App.css'
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About/About';
import Work from './components/Work/Work';


function App() {
  

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/work" element={<Work/>}/>
      </Routes>
      <Navbar/>
    </div>
  )
}

export default App
