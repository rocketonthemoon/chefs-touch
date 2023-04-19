import { createContext, useReducer, useEffect } from "react";
import ItemReducer from "../Reducers/ItemReducer";
import result from "../result.json";

const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
  const initialState = {
    results: result,
    current: [],
  };

  const [state, dispatch] = useReducer(ItemReducer, initialState);

  return (
    <ItemContext.Provider
      value={{
        results: state.results,
        current: state.current,
        dispatch,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
};

export default ItemContext;
