import { ADD_FAVORITE, DELETE_FAVORITE } from "./action-types";

const initialState = {
  myFavorites: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
      };
    case DELETE_FAVORITE:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (char) => char.id !== action.payload
        ), //nos vamos a quedar con todos menos el id que conincida con ese id
      };

    default: //siempre retorna una copia del state
      return { ...state };
  }
};

export default reducer;
