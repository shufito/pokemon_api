import React, { useEffect, useState } from 'react';
import axios from "axios";
import Pokemon from './pokemon';

const Pokedex = () => {

    const [list,setlist] = useState([]);

  useEffect(()=>{

    axios.get('https://pokeapi.co/api/v2/pokemon?limit=55&offset=0')
    .then((resposta) => {const Array = [...resposta.data.results];
    
    const promisesArray = Array.map((item)=>{
      return axios.get(item.url);
    });
    
    Promise.all(promisesArray).then((values) => {
      setlist(values);
    })
    
    });

  },[]);

    return ( <>
        <div className="container my-4">
            <div className='row row-cols-lg-5 row-cols-md-4 g-3'>
              {list.map((item) => (
              <div key={item.data.name}>
              <Pokemon details={item.data} />
              </div>
              ))}
            </div>
        </div>
    </> );
}
 
export default Pokedex;