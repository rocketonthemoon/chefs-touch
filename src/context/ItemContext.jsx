import { createContext, useReducer, useEffect } from "react";
import ItemReducer from "../Reducers/ItemReducer";
import result from "../result.json";

const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
  const initialState = {
    results: result,
  };

  const [state, dispatch] = useReducer(ItemReducer, initialState);

  return (
    <ItemContext.Provider
      value={{
        results: state.results,
        dispatch,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
};

export default ItemContext;
