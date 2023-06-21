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
                mealsLoading: false,
                meals: action.payload
            }
        // Case for when fetching meals encounters an error
        case FETCH_MEALS_ERROR:
            return {
                ...state,
                mealsLoading: false,
                mealsError: true
            }
        // Case for when fetching a single meal begins
        case FETCH_SINGLE_MEAL_BEGIN:
            return {
                ...state,
                mealLoading: true
            }
        // Case for when fetching a single meal is successful
        case FETCH_SINGLE_MEAL_SUCCESS:
            return {
                ...state,
                mealLoading: false,
                meal: action.payload
            }
        // Case for when fetching a single meal encounters an error
        case FETCH_SINGLE_MEAL_ERROR:
            return {
                ...state,
                mealLoading: false,
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
