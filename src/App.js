
import './App.css';
import Navbar from './components/Navbar';
import { Routes , Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Skill from './pages/Skill';
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
        <Routes>
          <Route path='/about' element={<About/>}/>
        </Routes>
        <Routes>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
        <Routes>
          <Route path='/projects' element={<Projects/>}/>
        </Routes>
        <Routes>
          <Route path='/skill' element={<Skill/>}/>
        </Routes>
      <Footer />
    </div>
  );
}

export default App;