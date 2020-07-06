import React, { useReducer} from "react";
import Context from "./context";

const initialState = {
  menuActive: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_MENU":
      return { ...state, menuActive: !state.menuActive };
    default:
      return state;
  }
};

const StateProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider
      value={{
        state: state,
        dispatch: (action, data) => {
          dispatch({ type: action, payload: data });
        },
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default StateProvider;
