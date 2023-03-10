import { initialState } from "./initialState";
import { SET_API_DATA, TOGGLE_LIKE, DELETE, SET_SORT_ORDER } from "./types";

export function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_API_DATA: {
      return { ...state, simpsons: action.payload };
    }

    case TOGGLE_LIKE:
      const index = state.simpsons.findIndex(
        (item) => item.quote === action.payload
      );

      const simpsons = [...state.simpsons];
      simpsons[index].liked = !simpsons[index].liked;
      return { ...state, simpsons };

    case DELETE: {
      const index = state.simpsons.findIndex(
        (item) => item.quote === action.payload
      );

      const simpsons = [...state.simpsons];
      simpsons.splice(index, 1);
      return { ...state, simpsons };
    }

    case SET_SORT_ORDER: {
      return { ...state, sortOrder: action.payload };
    }

    default:
      console.log("Reducer type not known, probably a typo");
      return state;
  }
}
