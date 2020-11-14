import React, { createContext, useReducer, useContext } from "react";
import reducer, { initialState } from "./reducer";


export const StateContext = createContext();

export const StateProvider = ({ children }) => {
    const [user,dispatch] = useReducer(reducer,initialState)
  return(
    <StateContext.Provider value={[user,dispatch]}>
    {children}
    </StateContext.Provider>
  )
  
};

export const useStateValue = () => useContext(StateContext);
