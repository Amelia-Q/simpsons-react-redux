import initialState from "./initialState";
import { SET_API_DATA, ON_LIKE_TOGGLE, DELETE } from "./types";

export function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_API_DATA: {
      const _state = { ...state };
      _state.characters = action.payload;
      return _state;
    }

    case ON_LIKE_TOGGLE:
      const index = state.characters.findIndex((character) => {
        return character.quote === action.payload;
      });
      const _characters = { ...state.characters };
      _characters[index].liked = !_characters[index].liked;
      return { ...state, characters: _characters };

    case DELETE: {
      const index = state.characters.findIndex((character) => {
        return character.quote === action.payload;
      });
      const _characters = { ...state.characters };
      _characters.splice(index, 1);
      return { ...state, characters: _characters };
    }
    default:
      console.log("Reducer type not known, probably a typo");
      return state;
  }
}
