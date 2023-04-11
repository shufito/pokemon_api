import React from 'react';
import { useNavigate } from 'react-router-dom';
import './pokemon.css';
import '../App.css'; 

const Pokemon = ({details} ) => {
    const navigate = useNavigate();
    
    const handleClickCard = () => {
      navigate(`/pokemon_api/${details.id}`); 
    }  

    if (details === null) {
      return <div>-</div>;
    }

    return (  
      <>
      <div className='col'>   
        <div className={`card h-100 shadow-sm text-center px-2 bounce ${details.types[0].type.name}`} onClick={handleClickCard}>
            <img src={details.sprites.other["official-artwork"].front_default} className='img-fluid' alt={details.name}/>
            <div className='card-body text-white'>
                <h5 className="card-title">
                  {(details.name).charAt(0).toUpperCase() + (details.name).slice(1)} 
                </h5>
                <h6 className="card-subtitle mb-1 fs-6">
                    #{(details.id).toString().padStart(3, '0')}
                  </h6>
                <p className="card-text">
                  {details.types.map((typeInfo) => typeInfo.type.name).join(" | ")}
                </p> 
            </div>
        </div>  
      </div>   
      </>
    )   
  };

export default Pokemon;