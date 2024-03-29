

export default function Character(props){
    const { characters, setCharacters } =props;

    const resetCharacters = () => {
        setCharacters(null);
    };
   
    return(
        <div className="characters"> 
            <h1>Personajes</h1>
            <span className="back-home" onClick={resetCharacters}>Volver a home</span>
            <div className="container-characters">
                {characters.map((character,index)=> (//return implicito
                    <div className="character-container" key={index}>
                        <div>
                            <img src={character.image} alt={character.name}/>
                        </div>
                        <div>
                            <h3>{character.name}</h3>
                            <h6>
                                {character.status==="Alive" ? (// "?"" equivalente a if
                                    <>
                                    <span className="alive"/>
                                    Alive
                                    </>
                                ): (//":" equivalente a else
                                    <>
                                    <span className="dead"/>
                                    Dead
                                    </>
                                 
                                )}
                            </h6>
                            <p>
                                <span className="text-grey">Episodios:</span>
                                <span >{character.episode.length}</span>{/*extrae la cantidad de episodios en que aparece el personaje*/}
                            </p>
                            <p>
                                <span className="text-grey">Especie:</span>
                                <span>{character.species}</span>
                            </p>
                        <div/>
                    </div>
            </div>       
          ))}
          </div>
          <span className="back-home" onClick={resetCharacters}>Volver a home</span>
        </div>

    );
}