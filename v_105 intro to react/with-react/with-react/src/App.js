import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Footer from './components/Footer';
import Navbarr from './components/Navbarr';


function App() {
  const [value, setvalue] = useState(0)

  return (
    <div className="App">
      <Navbarr/>
      <div>{value}</div>
      <button onClick={()=>{setvalue(value + 1)}}>click me</button>
      <Footer/>
    </div>
  );
}

export default App;
