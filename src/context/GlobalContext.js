import React, { useReducer, createContext, useContext } from "react";
import { LOGIN, LOGOUT } from "./actions";

// create the context
const GlobalContext = createContext();
// get the provider from the new context
const { Provider } = GlobalContext;

const reducer = (state, action) => {
    console.log(state);
    console.log(action);
    switch (action.type) {
        case LOGOUT:
            return {
                ...state,
                user: {},
            };
        case LOGIN:
            return {
                ...state,
                user: action.user,
            };

        default:
            return state;
    }
};

const initialState = {
    user: JSON.parse(localStorage.getItem("authuser")) || {},
};

const GlobalProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return <Provider value={[state, dispatch]} {...props} />;
};

const useGlobalContext = () => useContext(GlobalContext);

export { useGlobalContext, GlobalProvider };