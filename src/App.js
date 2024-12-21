import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './Components/Home';
import { useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar'
import AOS from 'aos';
import 'aos/dist/aos.css';
import FrreTrail from './Components/Registration/FrreTrail';
import Contact from './Components/Registration/Contact';
function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <Router>
      <Navbar/>
      <Routes>
      <Route path='/' Component={Home}/>
      <Route path='/FreeTrail' Component={FrreTrail}/>
      <Route path='/Contact' Component={Contact}/>
      </Routes>
    </Router>
  );
}

export default App;
