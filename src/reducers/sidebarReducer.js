/* The sidebarReducer.js file serves a specific purpose within an application that manages the state of a sidebar component. 
The main point of this file is to provide a reducer function that handles actions related to opening and closing the sidebar, 
and updates the state accordingly. */


// This file imports action types from the '../actions/actions' file
import {
    OPEN_SIDEBAR,
    CLOSE_SIDEBAR
} from "../actions/actions";

// This is the sidebar reducer function that takes the current state and action as parameters
const sidebarReducer = (state, action) => {
    switch(action.type) {
        // Case for opening the sidebar
        case OPEN_SIDEBAR:
            return {
                ...state,
                isSidebarOpen: true
            };
        // Case for closing the sidebar
        case CLOSE_SIDEBAR:
            return {
                ...state,
                isSidebarOpen: false
            };
        // Default case when the action type does not match any of the above cases
        default: 
            return state;
    }
};

// Exporting the sidebarReducer function as the default export of this module
export default sidebarReducer;
