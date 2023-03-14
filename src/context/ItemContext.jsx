import { createContext, useState } from "react";
import result from "../result.json";

const ItemContext = createContext();

export const ItemProvider = ({children}) => {
    const [results,setResult] = useState(result)

    return(
        <ItemContext.Provider value={{results}}>
            {children}
        </ItemContext.Provider>
    )
}

export default ItemContext;