
const getFavorites = () => {
  return JSON.parse(localStorage.getItem("favorites"));
}
const setFavorites = (list) => {
  return localStorage.setItem("favorites", JSON.stringify(list));
}

const toggleFavorite = (character) => {
  const oldFavorites = getFavorites();
  if (!oldFavorites) return setFavorites([character]);

  const newList = oldFavorites.filter(favorite => favorite.url !== character.url);

  if (oldFavorites.length === newList.length) newList.push(character);
  return setFavorites(newList);
}
const utils = {
  getFavorites,
  toggleFavorite,
};
export default utils;