import "./characters.css";
import { Link } from "react-router-dom";
import Spinner from "./spinner";
import StarIcon from "./starIcon";

function Characters({ list, favorites = [], isLoading=false }) {
  const getId = url => {
    const { pathname } = new URL(url);
    return pathname.substring(12, pathname.length - 1)
  }
  const capitalize = str => str[0].toUpperCase() + str.substring(1, str.length);

  return <div className="container" >
    <div className="characters-list" >
      {isLoading ? <Spinner />
       : list ? list.map(character => <Link
        className="character hover half-width-and-equal-gaps"
        to={`/character/${getId(character.url)}`}
        key={character.url} >
        <div className="flex flex-between" >
          <p><b>{character.name}</b></p>
          {favorites && favorites.some(fav => fav.url === character.url) ?
            < StarIcon size="20" color="yellow" fill="yellow" />
            : null}
        </div>
        <span>Gender: {capitalize(character.gender)}</span>
        <span className="separator" > | </span>
        <span>Birth date: {character.birth_year}</span>
      </Link>) : <div>Empty list</div>}

    </div>
  </div>
}

export default Characters;
