import { createContext, useReducer } from "react";
import { Actions } from "../utils/stateobjecthelper";

function reducer(state, action) {
    switch (action.type) {
        case Actions.UPDATE_WALLET:
            return {
                ...state,
                wallet: action.payload,
            };
        default:
            return state;
    }
}

export const AppContext = createContext();
export const AppContextProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, {
        wallet: null,
        chainid: null,
    });
    return (
        <AppContext.Provider value={[state, dispatch]}>
            {props.children}
        </AppContext.Provider>
    );
};
