import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import "./pokemonDetails.css"

const Pokemondetails = () => {
const [dados,setDados] = useState([]);
const params = useParams();

const url = (`https://pokeapi.co/api/v2/pokemon/${params.taskTittle}`);
useEffect(()=>{
    axios.get(url).then(resposta => setDados(resposta));
});


if(dados.length === 0 ){
    return  <div>-</div>
}

    return ( 
        <>
            <div className="container col-xl-10 col-xxl-8 px-4">
              <div className="row align-items-center g-lg-5 my-3 bg-white p-3 rounded">
              <div className="col-lg-6 text-center text-lg-start fundo-img mt-0">
                  <img src={dados.data.sprites.front_default} alt="ok" className="w-100 imagem-fluid"/>
              </div>
              <div className="col-md-6 mx-auto col-lg-6 mt-0">
                  <ul>
                      <li>
                          <span>altura </span>
                          <span>{dados.data.height}</span>
                      </li>
                      <li>
                          <span>peso </span>
                          <span>{dados.data.weight}</span>
                      </li>
                      <li>
                          <span>habilidades </span>
                          <span>{dados.data.abilities.map(typeInfo => typeInfo.ability.name).join(" | ")}</span>
                      </li>
                      <li>
                          <span>tipos </span>
                          <span>{dados.data.types.map(typeInfo => typeInfo.type.name).join(" | ")}</span>
                      </li>
                  </ul>
              </div>
              </div>
            </div>
        </>
     );

    }
    
export default Pokemondetails;