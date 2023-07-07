// This file imports action types from the '../actions/actions' file
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
} from "../actions/actions";

// This is the meal reducer function that takes the current state and action as parameters
export const mealReducer = (state, action) => {
    switch(action.type) {
        // Case for when fetching category begins
        case FETCH_CATEGORY_BEGIN:
            return {
                ...state,
                categoryLoading: true
            }
        // Case for when fetching category is successful
        case FETCH_CATEGORY_SUCCESS:
            return {
                ...state,
                categoryLoading: false,
                categories: action.payload
            }
        // Case for when fetching category encounters an error
        case FETCH_CATEGORY_ERROR: 
            return {
                ...state,
                categoryLoading: false,
                categoryError: true
            }
        // Case for when fetching meals begins
        case FETCH_MEALS_BEGIN:
            return {
                ...state,
                mealsLoading: true
            }
        // Case for when fetching meals is successful
        case FETCH_MEALS_SUCCESS:
            return {
                ...state,
                //uses the spread syntax (...) to create a shallow copy of the existing state. This ensures that any existing properties in the state are preserved.
                mealsLoading: false,
                //false sets the mealsLoading property to false, indicating that the meals fetching process is completed.
                meals: action.payload
                //action.payload assigns the action.payload to the meals property in the state. The action.payload typically contains the fetched meals data and is provided as part of the action when it is dispatched.
            }
        // Case for when fetching meals encounters an error
        case FETCH_MEALS_ERROR:
            return {
                ...state,
                // uses the spread syntax (...) to create a shallow copy of the existing state. This ensures that any existing properties in the state are preserved.
                mealsLoading: false,
                // false updates the mealsLoading property in the state to false. This typically indicates that the process of fetching meals has completed or is no longer in progress.
                mealsError: true
                //true sets the mealsError property in the state to true. This typically indicates that an error occurred during the process of fetching meals.
            }
        // Case for when fetching a single meal begins
        case FETCH_SINGLE_MEAL_BEGIN:
            return {
                ...state,
                // uses the spread syntax (...) to create a shallow copy of the existing state. This ensures that any existing properties in the state are preserved.
                mealLoading: true
                // updates the mealLoading property in the state to true. This typically indicates that the process of loading a meal is in progress.
            }
        // Case for when fetching a single meal is successful
        case FETCH_SINGLE_MEAL_SUCCESS:
            return {
                ...state,
                // uses the spread syntax (...) to create a shallow copy of the existing state. This ensures that any existing properties in the state are preserved.
                mealLoading: false,
                // updates the mealLoading property in the state to false. This typically indicates that the process of loading a meal is completed or is no longer in progress.
                meal: action.payload
                // assigns the action.payload to the meal property in the state. The action.payload typically contains the data for the loaded meal and is provided as part of the action when it is dispatched.
            }
        // Case for when fetching a single meal encounters an error
        case FETCH_SINGLE_MEAL_ERROR:
            return {
                ...state,
                // uses the spread syntax (...) to create a shallow copy of the existing state. This ensures that any existing properties in the state are preserved.
                mealLoading: false,
                // false sets the mealLoading property to false, indicating that the loading process for the meal has completed.
                mealError: true
            }
        // Case for when fetching category meals begins
        case FETCH_CATEGORY_MEALS_BEGIN:
            return {
                ...state,
                categoryMealsLoading: true
            }
        // Case for when fetching category meals is successful
        case FETCH_CATEGORY_MEALS_SUCCESS:
            return {
                ...state,
                categoryMealsLoading: false,
                categoryMeals: action.payload
            }
        // Case for when fetching category meals encounters an error
        case FETCH_CATEGORY_MEALS_ERROR:
            return {
                ...state,
                categoryMealsLoading: false,
                categoryMealsError: false
            }
        // Default case when the action type does not match any of the above cases
        default: 
            return state;
    }
}
