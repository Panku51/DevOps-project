import { useContext, createContext, useReducer } from "react";
import { AuthReducer, initialState } from "./reducer";

const AuthStateContext = createContext();
const AuthDispatchContext = createContext();

export const useAuthState = () => {
    const context = useContext(AuthStateContext);
    if (context === undefined) {
        throw new Error('useAuthState must be used with AuthProvider');
    }
    return context;
};
