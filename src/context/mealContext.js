import React, { createContext, useContext, useEffect, useReducer } from "react"; // Importing React, createContext, useContext, useEffect, and useReducer hooks from React
import { mealReducer } from "../reducers/mealReducer"; // Importing the mealReducer from the reducers folder
import { startFetchCategories } from "../actions/mealsActions"; // Importing the startFetchCategories action from the mealsActions file

const initialState = {
  categories: [], // Initial state for categories
  categoryLoading: false, // Initial state for category loading
  categoryError: false, // Initial state for category error
  categoryMeals: [], // Initial state for category meals
  categoryMealsLoading: false, // Initial state for category meals loading
  categoryMealsError: false, // Initial state for category meals error
  meals: [], // Initial state for meals
  mealsLoading: false, // Initial state for meals loading
  mealsError: false, // Initial state for meals error
  meal: [], // Initial state for a single meal
  mealLoading: false, // Initial state for single meal loading
  mealError: false, // Initial state for single meal error
};

const MealContext = createContext({}); // Creating a MealContext using createContext with an empty object as the initial value

export const MealProvider = ({ children }) => {
  const [state, dispatch] = useReducer(mealReducer, initialState); // Using useReducer to manage state with mealReducer and initialState

  useEffect(() => {
    startFetchCategories(dispatch); // Fetching categories using startFetchCategories action on component mount
  }, []);

  return (
    <MealContext.Provider
      value={{
        ...state, // Providing all state values
        dispatch, // Providing the dispatch function
        startFetchCategories, // Providing the startFetchCategories action
      }}
    >
      {children}
    </MealContext.Provider>
  );
};

export const useMealContext = () => {
  return useContext(MealContext); // Using the useContext hook to access the MealContext values
};
