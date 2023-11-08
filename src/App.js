import imageRickMorty from './img/rick-morty.png';
import './App.css';
import { useState } from 'react';
import Characters from './components/Characters';

function App() {
  const [characters,setCharacters] =useState(null);
  const reqApi= async ()=>{//funcionalidad para peticiones
    const api=await fetch ('https://rickandmortyapi.com/api/character');
    const characterApi=await api.json();
   
    setCharacters(characterApi.results);//guardamos en el estado los results del fetch
   
   
  }
  return (
    <div className="App">
      <header className="App-header">
       <h1 className='"title'>Rick & Morty</h1>
       {characters ? (//si characters tiene algo
        <Characters characters={characters} setCharacters={setCharacters}/>
       ) : (//sino
       <>    
        <img src={imageRickMorty} alt ="Rick & Morty" className='img-home'/>
        <button onClick={reqApi} className='btn-search'>Buscar personajes</button>
       </>
       )}
      </header>
    </div>
  );
}

export default App;
