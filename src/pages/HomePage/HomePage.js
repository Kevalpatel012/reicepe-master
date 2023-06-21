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
      { (mealsLoading) ? <Loader /> : (meals === null) ? <NotFound /> : (meals?.length) ? <MealList meals = {meals} /> : "" }
      
      {/* Conditional rendering based on category loading state */}
      { (categoryLoading) ? <Loader /> : <CategoryList categories = {categories} /> }
      
    </main>
  )
}

export default HomePage; // Exporting the HomePage component
