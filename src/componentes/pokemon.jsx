import React from 'react';
import { useNavigate } from 'react-router-dom';
import './pokemon.css';
import '../App.css'; 

const Pokemon = ({details} ) => {
    const navigate = useNavigate();
    
    const handleClickCard = () => {
      navigate(`/pokemon_api/${details.name}`); 
    }  

    if (details === null) {
      return <div>-</div>;
    }

    return (  
      <>
      <div className='col'>   
        <div className={`card h-100 shadow-sm text-center px-2 bounce ${details.types[0].type.name}`} onClick={handleClickCard}>
            <img src={details.sprites.front_default} className='card-img-top img-fluid' alt={details.name}/>
            <div className='card-body text-white'>
                <h5 className="card-title">{details.name}</h5>
                <p className="card-text">
                  Tipo: {details.types.map(typeInfo => typeInfo.type.name).join(" | ")}
                </p> 
            </div>
        </div>  
      </div>   
      </>
    )   
  };

export default Pokemon;