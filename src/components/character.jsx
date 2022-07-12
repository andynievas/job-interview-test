import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import urlApi from "../urlBase";
import Spinner from "./spinner";
import StarIcon from "./starIcon";
import StarOffIcon from "./starOffIcon";
import utils from "../utils";

function Character() {

  const [character, setCharacter] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const { characterId } = useParams();
  const favorites = utils.getFavorites();

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`${urlApi}/people/${characterId}`);
      if (response.status !== 200) return;
      const data = await response.json();
      setCharacter(data);
    }
    getData();

  }, [characterId]);

  useEffect(() => {
    if (character && favorites) setIsFavorite(favorites.some(elem => elem.url === character.url));
  }, [character, favorites]);

  const handleToggleFavorite = () => {
    utils.toggleFavorite(character);
    setIsFavorite((state) => !state);
  };

  return <div className="container" >
    <Link to="/" className="display-inline-block margin-y-sm padding-y-sm" >Go back</Link>
    {character ? <div id="character-info" className="character" >
      <div className="flex flex-between" >
        <h3>{character.name}</h3>
        <button className="btn favorite-btn" onClick={handleToggleFavorite}>
          <div className="favorite-icon active">
            {isFavorite ? <StarIcon color="yellow" fill="yellow" />
              : <StarIcon color="yellow" />}
          </div>
          <div className="favorite-icon hover">
            {isFavorite ? <StarOffIcon color="yellow" />
              : <StarIcon color="yellow" fill="yellow" />
            }
          </div>
        </button>
      </div>
      <p>Birth date {character.birth_year}</p>
      <p>Amount of films: {character.films ? character.films.length : 0}</p>
      <p>Height: {character.height} | Mass: {character.mass}</p>
    </div>
      : <Spinner />}
  </div>
}

export default Character;
