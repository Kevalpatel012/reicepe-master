import axios from "../api/axios";  // Importing the axios library for making API requests
import {
    FETCH_CATEGORY_BEGIN,
    FETCH_CATEGORY_ERROR,
    FETCH_CATEGORY_MEALS_BEGIN,
    FETCH_CATEGORY_MEALS_ERROR,
    FETCH_CATEGORY_MEALS_SUCCESS,
    FETCH_CATEGORY_SUCCESS,
    FETCH_MEALS_BEGIN,
    FETCH_MEALS_ERROR,
    FETCH_MEALS_SUCCESS,
    FETCH_SINGLE_MEAL_BEGIN,
    FETCH_SINGLE_MEAL_ERROR,
    FETCH_SINGLE_MEAL_SUCCESS
} from "./actions";  // Importing action types

import { CATEGORIES_URL, MEAL_CATEGORIES_URL, MEAL_SINGLE_URL, SEARCH_URL } from "../utils/constants";  // Importing URL constants for API endpoints

// Function to fetch categories
export const startFetchCategories = async (dispatch) => {
    try {
        dispatch({ type: FETCH_CATEGORY_BEGIN });  // Dispatching a "FETCH_CATEGORY_BEGIN" action
        const response = await axios.get(`${CATEGORIES_URL}`);  // Making a GET request to the categories endpoint
        dispatch({ type: FETCH_CATEGORY_SUCCESS, payload: response.data.categories });  // Dispatching a "FETCH_CATEGORY_SUCCESS" action with the retrieved data
    } catch (error) {
        dispatch({ type: FETCH_CATEGORY_ERROR, payload: error.message });  // Dispatching a "FETCH_CATEGORY_ERROR" action with the error message
    }
}

// Function to fetch a single meal by ID
export const startFetchSingleMeal = async (dispatch, id) => {
    try {
        dispatch({ type: FETCH_SINGLE_MEAL_BEGIN });  // Dispatching a "FETCH_SINGLE_MEAL_BEGIN" action
        const response = await axios.get(`${MEAL_SINGLE_URL}${id}`);  // Making a GET request to the single meal endpoint with the provided ID
        dispatch({ type: FETCH_SINGLE_MEAL_SUCCESS, payload: response.data.meals });  // Dispatching a "FETCH_SINGLE_MEAL_SUCCESS" action with the retrieved data
    } catch (error) {
        dispatch({ type: FETCH_SINGLE_MEAL_ERROR, payload: error.message });  // Dispatching a "FETCH_SINGLE_MEAL_ERROR" action with the error message
    }
}

// Function to fetch meals by category
export const startFetchMealByCategory = async (dispatch, category) => {
    try {
        dispatch({ type: FETCH_CATEGORY_MEALS_BEGIN });  // Dispatching a "FETCH_CATEGORY_MEALS_BEGIN" action
        const response = await axios.get(`${MEAL_CATEGORIES_URL}${category}`);  // Making a GET request to the meals by category endpoint with the provided category
        dispatch({ type: FETCH_CATEGORY_MEALS_SUCCESS, payload: response.data.meals });  // Dispatching a "FETCH_CATEGORY_MEALS_SUCCESS" action with the retrieved data
    } catch (error) {
        dispatch({ type: FETCH_CATEGORY_MEALS_ERROR, payload: error.message });  // Dispatching a "FETCH_CATEGORY_MEALS_ERROR" action with the error message
    }
}

// Function to fetch meals by search term
export const startFetchMealsBySearch = async (dispatch, searchTerm) => {
    try {
        dispatch({ type: FETCH_MEALS_BEGIN });  // Dispatching a "FETCH_MEALS_BEGIN" action
        const response = await axios.get(`${SEARCH_URL}${searchTerm}`);  // Making a GET request to the meals by search endpoint with the provided search term
        dispatch({ type: FETCH_MEALS_SUCCESS, payload: response.data.meals });  // Dispatching a "FETCH_MEALS_SUCCESS" action with the retrieved data
    } catch (error) {
        dispatch({ type: FETCH_MEALS_ERROR, payload: error.message });  // Dispatching a "FETCH_MEALS_ERROR" action with the error message
    }
}
