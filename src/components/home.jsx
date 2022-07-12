import "./characters.css";
import { useEffect, useState } from "react"
import CharactersList from "./charactersList";
import urlBase from "../urlBase";
import utils from "../utils";

function Characters() {

  const [characters, setCharacters] = useState(null);
  const [page, setPage] = useState(1);
  const urlApi = `${urlBase}/people?page=${page}`

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(urlApi);
      if (response.status !== 200) return;
      const data = await response.json();
      setCharacters(data.results);
    }
    getData();

  }, [urlApi, page]);
  const handleChangePage = num => {
    setPage(state => {
      if (Number(state + num) >= 1) {
        setCharacters(null);
        return Number(state + num);
      } else return state;
    });
  }

  const favs = utils.getFavorites();

  return <div className="container" >
    <h2>Characters list</h2>
    <CharactersList list={characters} favorites={favs} />
    <div className="flex" >
      <div className="flex flex-align-center margin-y-sm margin-auto" >
        <button onClick={() => handleChangePage(-1)}
          disabled={true && !characters}
          className="btn padding-x-md padding-y-sm font-md" >-</button>
        <span className="padding-x-md" >Page {page}</span>
        <button onClick={() => handleChangePage(1)}
          disabled={true && !characters}
          className="btn padding-x-md padding-y-sm font-md" >+</button>
      </div>
    </div >
  </div >
}

export default Characters;