import React, {createContext, useContext, useReducer} from "react";

export const StateContext = createContext();

// we wrapping with his our app
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)} >
        {children}
    </StateContext.Provider>
);

// export it to use it in the app anywhere
export const useStateValue = () => useContext(StateContext);

