import React from 'react'; // Importing the React library

import "./HomePage.scss"; // Importing the styles specific to HomePage

import { useMealContext } from '../../context/mealContext'; // Importing the mealContext from the context folder

import Loader from "../../components/Loader/Loader"; // Importing the Loader component

import CategoryList from "../../components/Category/CategoryList"; // Importing the CategoryList component

import NotFound from "../../components/NotFound/NotFound"; // Importing the NotFound component

import MealList from "../../components/Meal/MealList"; // Importing the MealList component

const HomePage = () => {
  const {categories, meals, categoryLoading, mealsLoading} = useMealContext(); // Destructuring values from the mealContext

  return (
    <main className='main-content'> {/* Main content container */}
      
      {/* Conditional rendering based on loading state and meal availability */}
      {/* If mealsLoading is true, it renders the <Loader /> component, indicating that the meals are currently being loaded.
          If meals is null, it renders the <NotFound /> component, indicating that no meals were found.
          If meals has a length greater than 0 (i.e., there are meals available), it renders the <MealList /> component and 
          passes the meals array as a prop to display the list of meals.
          If none of the conditions match, it renders an empty string. */}

      {/* This line under finds the meals in each catagory and prints it out
      */}
      { (mealsLoading) ? <Loader /> : (meals === null) ? <NotFound /> : (meals?.length) ? <MealList meals = {meals} /> : "" }
      
      {/* Conditional rendering based on category loading state */}
      {/* It checks if categoryLoading is true and renders the <Loader /> component if it is. 
      Otherwise, it renders the <CategoryList /> component and passes the categories array as a prop to display the list of 
      categories. */}
      { (categoryLoading) ? <Loader /> : <CategoryList categories = {categories} /> }
      
    </main>
  )
}

export default HomePage; // Exporting the HomePage component
