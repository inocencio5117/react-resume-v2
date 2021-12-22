import { createStore } from "redux";

const initialState = {
  toggler: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_ACTION": {
      const newState = { ...state };
      newState.toggler = !newState.toggler;
      return newState;
    }

    default:
      return state;
  }
};

export const store = createStore(reducer);
