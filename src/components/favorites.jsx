import "./favorite.css";
import CharactersList from "./charactersList";
import { Link } from "react-router-dom";
import utils from "../utils";

function Favorites() {

  const favorites = utils.getFavorites();

  return <div className="container" >
    <h2>Favorites</h2>
    {favorites && favorites.length > 0 ? <CharactersList list={favorites} favorites={favorites} />
      : <div>
        <h3>Add your favorites characters from the main page</h3>
        <Link to="/" >Home</Link>
      </div>}
  </div>
}

export default Favorites;
