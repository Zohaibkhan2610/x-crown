import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar/Navbar'
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
      <Route path='/' Component={Home}/>
      </Routes>
    </Router>
  );
}

export default App;
