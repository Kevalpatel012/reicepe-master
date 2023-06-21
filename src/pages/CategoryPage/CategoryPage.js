import React, { useEffect } from 'react';
import "./CategoryPage.scss";
import { useMealContext } from '../../context/mealContext';
import MealList from '../../components/Meal/MealList';
import { useParams } from 'react-router-dom';
import { startFetchMealByCategory } from '../../actions/mealsActions';

const CategoryPage = () => {
  // Retrieves the dynamic parameter from the URL
  const { name } = useParams();
  
  // Accesses the meal context and extracts the necessary values and functions
  const { categoryMeals, dispatch, categories } = useMealContext();
  
  // Initializes the variable to store the category description
  let catDescription = "";
  
  // Iterates over the categories and finds the one with matching name to retrieve its description
  if (categories) {
    categories.forEach(category => {
      if (category?.strCategory === name) catDescription = category?.strCategoryDescription;
    })
  }
  
  // Fetches the meals based on the selected category upon component mount and whenever 'name' or 'dispatch' change
  useEffect(() => {
    startFetchMealByCategory(dispatch, name);
  }, [name, dispatch]);

  return (
    <main className='main-content py-5'>
      <div className='container'>
        <div className='cat-description px-4 py-4'>
          <h2 className='text-orange fw-8'>{name}</h2>
          <p className='fs-18 op-07'>{catDescription}</p>
        </div>
      </div>
      {
        // Renders the MealList component if categoryMeals exist, otherwise renders null
        (categoryMeals?.length) ? <MealList meals={categoryMeals} /> : null
      }
    </main>
  )
}

export default CategoryPage;
