import { createContext, useContext, useReducer } from "react";
import { initialState } from "../../utils/initialState";
import { reducers } from "../../utils/reducers";
import { stateActionMethods } from "../../utils/stateActionMethods";
import ActionMethods from "../ActionMethods";

const RobotContext = createContext({}); // creating new context

const RobotContextProvider = ({children}) => {
    /**
     * useReducer for state management. dispatch: for update the state and state: getting the state stored results.
     */
    const [state, dispatch] = useReducer(reducers, initialState);

    /**
     * ActionMethods: It's a service to provider all dispatch action, written in utils/stateActionMethods.js file, that are passed into the second param.
     */
    const actionMethodsObj = new ActionMethods(dispatch, stateActionMethods);

    return (
        // Pass global state and actions methods, so that we can access them from entire components.
        <RobotContext.Provider value={{...state, ...actionMethodsObj.methods}}>{children}</RobotContext.Provider>
    )
}

/**
 * This function will use for getting all state values
 */
export const GetStateValues = () => {
    return useContext(RobotContext);
}


export default RobotContextProvider;
