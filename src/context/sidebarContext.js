import React, { createContext, useContext, useReducer } from "react"; // Importing React, createContext, useContext, and useReducer hooks from React
import reducer from "../reducers/sidebarReducer"; // Importing the sidebarReducer from the reducers folder
import { OPEN_SIDEBAR, CLOSE_SIDEBAR } from "../actions/actions"; // Importing the OPEN_SIDEBAR and CLOSE_SIDEBAR constants from the actions file

const initialState = {
  isSidebarOpen: false // Initial state for the sidebar, indicating whether it is open or not
};

const SidebarContext = createContext({}); // Creating a SidebarContext using createContext with an empty object as the initial value

export const SidebarProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState); // Using useReducer to manage state with the sidebarReducer and initialState

  const openSidebar = () => {
    dispatch({ type: OPEN_SIDEBAR }); // Dispatching the action to open the sidebar
  };

  const closeSidebar = () => {
    dispatch({ type: CLOSE_SIDEBAR }); // Dispatching the action to close the sidebar
  };

  return (
    <SidebarContext.Provider
      value={{
        ...state, // Providing all state values
        openSidebar, // Providing the openSidebar function
        closeSidebar, // Providing the closeSidebar function
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebarContext = () => {
  return useContext(SidebarContext); // Using the useContext hook to access the SidebarContext values
};
