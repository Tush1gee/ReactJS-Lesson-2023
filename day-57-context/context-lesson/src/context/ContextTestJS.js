import { createContext } from "react"; // Create context 1-r alham
import {DATATEST} from "../data/DataTest"

const ContextTestJS = createContext(null); // Create context 1-r alham

const ContextTestProvider = ({children}) => {
    return (                                       // Provide context 2-r alham
        <ContextTestJS.Provider value={DATATEST}> 
            {children}
        </ContextTestJS.Provider>   // Provide context 2-r alham
    )
}

export {ContextTestJS, ContextTestProvider}