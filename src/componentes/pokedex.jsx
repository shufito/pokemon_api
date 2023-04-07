import React, { useEffect, useState } from 'react';
import axios from "axios";
import Pokemon from './pokemon';

const Pokedex = () => {
  // estados iniciais
  const [list, setList] = useState([]); // array vazio de pokemons
  const [filter, setFilter] = useState(''); // filtro inicialmente vazio
  const [filteredData, setFilteredData] = useState([]); // array filtrado vazio
  const [isLoading, setIsLoading] = useState(true); // adicionando o estado isLoading

  useEffect(() => {
    // busca os pokemons da API e aguarda a resposta
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=40&offset=0')
      .then((resposta) => {
        const array = [...resposta.data.results];

        // para cada item do array de resultados, busca mais informações do pokemon
        const promisesArray = array.map((item) => {
          return axios.get(item.url);
        });

        // após receber as informações de todos os pokemons, atualiza os estados de lista e dados filtrados
        Promise.all(promisesArray).then((values) => {
          setList(values);
          setFilteredData(values);
          setIsLoading(false);
        });
      });
    }, []);

  // função para atualizar o estado de filtro
  const handleSearch = (event) => {
    const { value } = event.target;
    setFilter(value);
    if (!value) {
      // se o filtro estiver vazio, exibe todos os pokemons
      setFilteredData(list);
    } else {
      // caso contrário, filtra os pokemons de acordo com o valor do filtro
      const lowerCaseValue = value.toLowerCase();
      const filteredResults = list.filter((item) =>
        item.data.name.includes(lowerCaseValue) ||
        item.data.types.some((type) => type.type.name.includes(lowerCaseValue))
      );
      setFilteredData(filteredResults);
    }
    setIsLoading(false);
  };

  return (
    <>
      <div className='container'>
        <div className='my-4 d-flex justify-content-center align-items-center'>
          <input
            type="text"
            className='form-control w-auto'
            placeholder="Pesquisar..."
            onChange={handleSearch}
            value={filter}
          />
        </div>
      </div>
      <div className="container my-4">
        {isLoading ? (
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Carregando...</span>
            </div>
          </div>
        ) : (
          <div className='row row-cols-lg-5 row-cols-md-4 g-3'>
            {filteredData.map((item) => (
              <div key={item.data.name} className={item.data.name}>
                <Pokemon details={item.data} />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Pokedex;
