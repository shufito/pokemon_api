import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import "./pokemonDetails.css"

const Pokemondetails = () => {
const [dados,setDados] = useState([]);
const params = useParams();

const PokemonUrl = (`https://pokeapi.co/api/v2/pokemon/${params.taskTittle}`);

useEffect(()=>{
    axios.get(PokemonUrl).then(resposta => setDados(resposta)); 
},[PokemonUrl]);

console.log(dados)

if(dados.length === 0 ){
    return  <div>-</div>
}


    return ( 
        <>
            <div className="container col-xl-10 col-xxl-8 px-4">
              <div className="row align-items-center g-lg-5 my-3 bg-white p-3 rounded">
                <div className="col-lg-6 text-center text-lg-start fundo-img mt-0">
                    <img src={dados.data.sprites.other["official-artwork"].front_default} alt="ok" className="w-100 imagem-fluid"/>
                </div>
                <div className="col-md-6 mx-auto col-lg-6 mt-0">
                    <div className='row row-cols-2'>
                        <div className='col-12'>
                            <h2 className='display-6 fw-bold '>{dados.data.name}</h2>
                        </div>
                        <div>
                            <h3 className="fw-bold mb-0 fs-4">Altura</h3>
                            <p>{(dados.data.height/10).toFixed(1)} M</p>
                        </div>
                        <div>
                            <h3 className="fw-bold mb-0 fs-4">Peso</h3>
                            <p>{(dados.data.weight/10).toFixed(1)} KG</p>
                        </div>
                        <div>
                            <h3 className="fw-bold mb-0 fs-4">Habilidades</h3>
                            <p>{dados.data.abilities.map(typeInfo => typeInfo.ability.name).join(" | ")}</p>
                        </div>
                        <div>
                            <h3 className="fw-bold mb-0 fs-4">Tipos</h3>
                            <p className=''>{dados.data.types.map(typeInfo => (<span key={typeInfo.type.name} className={`badge fs-6 fw-normal me-2 ${typeInfo.type.name}`} >{typeInfo.type.name}</span>))}</p>  
                        </div> 
                    </div>
                    {dados.data.stats.map(statsInfo => (
                        <div key={statsInfo.stat.name} className='my-2'>
                            <span>{statsInfo.stat.name}</span>
                            <div className="progress"  role="progressbar" aria-label={"label"} aria-valuenow={0}aria-valuemin={0} aria-valuemax={100} >
                                <div className="progress-bar" style={{ width: `${((statsInfo.base_stat - 0) / (200 - 0)) * 100}%` }}>
                                    {"label" && <span className="progress-label" style={{left: `${((statsInfo.base_stat - 7) / (200 - 0)) * 100}%`}}>{`${statsInfo.base_stat}`}</span>}
                                </div>
                            </div>
                        </div>
                    ))}   
                </div>         
              </div>
            </div>
        </>
     );

    }
    
export default Pokemondetails;