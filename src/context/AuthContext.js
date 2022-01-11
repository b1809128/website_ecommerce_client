import { createContext, useReducer, useEffect } from "react";
import AuthReducer from "./AuthReducer";
// Create Default context values
const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("userID")) || null,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  //Set LocalStorage
  useEffect(() => {
    localStorage.setItem("userID", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
