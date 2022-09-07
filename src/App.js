import { Routes, Route } from "react-router-dom"
import './App.css';
import Home from "./components/Home"
import Aboutus from './components/Aboutus';
import Offers from './components/Offers';
import Contacts from './components/Contacts';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path ="/" element={ <Home />} />
        <Route path ="/about" element={ <Aboutus />} />
        <Route path ="/offers" element={ <Offers />} />
        <Route path ="/contacts" element={ <Contacts />} />
      </Routes>
    
   
    </div>
  );
}

export default App;
