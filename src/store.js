export const actionTypes = {
  getCharacters: 'GET_CHARACTERS',
  getPlanets: 'GET_PLANETS',
  getVehicles: 'GET_VEHICLES',
  addToFav: 'ADD_TO_FAV',
  deleteFav: 'DELETE_FAV',
};

export const initialStore = () => {
  return {
    favorites: [],
    characters: [],
    planets: [],
    vehicles: [],
  };
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case actionTypes.getCharacters:
      return {
        ...store,
        characters: action.payload,
      };
    case actionTypes.getPlanets:
      return {
        ...store,
        planets: action.payload,
      };
    case actionTypes.getVehicles:
      return {
        ...store,
        vehicles: action.payload,
      };

    case actionTypes.addToFav:
      const favNamesArr = [];
      for (const favObj of store.favorites) {
        favNamesArr.push(favObj.name);
      }
      if (!favNamesArr.includes(action.payload.name)) {
        return {
          ...store,
          favorites: [
            ...store.favorites,
            { name: action.payload.name, isFavFunction: action.payload.setIsfavorite },
          ],
        };
      } else {
        return store;
      }

    case actionTypes.deleteFav:
      const updatedFavArray = store.favorites.filter(({ name }) => name !== action.payload);
      return {
        ...store,
        favorites: updatedFavArray,
      };

    default:
      throw Error('Unknown action.');
  }
}