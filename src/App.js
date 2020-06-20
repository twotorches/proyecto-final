import React from 'react';
import logo from './logo.svg';
import './App.css';
import Formulario from './Components/Formulario/Formulario';
import Carta from './Components/Carta/Carta';
import About from './Components/About/About';
import Navbar from './Components/Navbar/Navbar';
import Info from './Components/Info/Info';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      


      
      <Router>

       <Navbar />
<Switch>
  <Route exact path="/">
  <Formulario />
  </Route>
  <Route exact path="/carta/:idParams">
  <Carta />
  </Route>
  <Route exact path="/about">
  <About />
  </Route>
  <Route exact path="/info">
  <Info />
  </Route>
</Switch>

      </Router>


        {/*
        aquí el footer 
        */}
      
    </div>
  );
}

export default App;
