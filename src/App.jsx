import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Header from './componentes/header';
import Footer from './componentes/footer';
import Pokemondetails from './componentes/pokemonDetails';
import Pokedex from './componentes/pokedex';

function App() {

  return (<>

      <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Pokedex/>}/>
        <Route path="pokemon_api/:taskTittle" element={<Pokemondetails />} />
      </Routes>  
      <Footer/>
    </Router>
    
    </>);
  
};

export default App;
