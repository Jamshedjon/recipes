import { createContext, useContext, useState, useReducer } from "react";
export const AppContext = createContext();

const changeState = (state, action) => {
    switch (action.type) {
        case "CHANGE_ID":
            return { ...state, id: action.payload };
        default:
            return state;
    }
};

export function AppProvider({ children }) {
    const [state, dispatch] = useReducer(changeState, {
        id: null,
    });
    const changeId = (id) => {
        dispatch({ type: "CHANGE_ID", payload: id });
    };
    return (
        <AppContext.Provider value={{ ...state, changeId }}>
            {children}
        </AppContext.Provider>
    );
}
