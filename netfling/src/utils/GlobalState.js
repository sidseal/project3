import React, { createContext, useReducer, useContext } from "react";
import {
    ADD_USER
} from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                Users: [action.currentUser,...state.Users]
            };
        default:
            throw new Error(`Invalid action type: ${action.type}`);
    }
};

const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useReducer(reducer, {
      // matches for the current user 
      Matches: [],
      currentUser: {
        _id: 0,
        email: "",
        password: "",
      }
    });
  
    return <Provider value={[state, dispatch]} {...props} />;
  };
  

const useStoreContext = () => {
    return useContext(StoreContext);
  };
  

  export { StoreProvider, useStoreContext };
  
