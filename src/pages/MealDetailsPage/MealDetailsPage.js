/* THIS FILE FINDS EACH MEALS INFO*/
import React, { useEffect } from 'react'; // Importing React and the useEffect hook
import { useParams } from 'react-router-dom'; // Importing useParams from react-router-dom
import "./MealDetailsPage.scss"; // Importing styles specific to MealDetailsPage
import CategoryList from '../../components/Category/CategoryList'; // Importing the CategoryList component
import MealSingle from "../../components/Meal/MealSingle"; // Importing the MealSingle component
import { useMealContext } from '../../context/mealContext'; // Importing the mealContext from the context folder
import { startFetchSingleMeal } from '../../actions/mealsActions'; // Importing the startFetchSingleMeal action
import Loader from '../../components/Loader/Loader'; // Importing the Loader component

const MealDetailsPage = () => {
  const { id } = useParams(); // Extracting the "id" parameter from the URL using useParams
  const { categories, dispatch, meal, categoryLoading, mealLoading } = useMealContext(); // Destructuring values from the mealContext

  useEffect(() => {
    startFetchSingleMeal(dispatch, id); // Fetching a single meal based on the id using the startFetchSingleMeal action
  }, [id]);

  let ingredientsArr = [], measuresArr = [], singleMeal = {}; // Declaring variables to store ingredients, measures, and single meal details
  if (meal && meal?.length > 0) { // Checks if the meal variable is not null, undefined, or empty and has a length greater than 0. 
    for (let props in meal[0]) { // This line initiates a loop over the properties (props) of the first item (meal[0]) in the meal array.
      if (props.includes('strIngredient')) { // Checks if the current property (props) includes the string 'strIngredient'
        if (meal[0][props]) ingredientsArr.push(meal[0][props]); // If the current ingredient property is not null, undefined, or empty, it then is added to the ingredientsArr array.
      }

      if (props.includes('strMeasure')) { // Checks if the current property (props) includes the string 'strMeasure'
        if (meal[0][props]) { // Checks if the current measure property has a truthy value (i.e., not null, undefined, or empty).
          if (meal[0][props].length > 1) { // If the length of the current measure property value is greater than 1
            measuresArr.push(meal[0][props]); // Adding non-empty measure values to the measures array
          }
        }
      }
    }

    singleMeal = {
      id: meal[0]?.idMeal,
      title: meal[0]?.strMeal,
      category: meal[0]?.strCategory,
      area: meal[0]?.strArea,
      thumbnail: meal[0]?.strMealThumb,
      instructions: meal[0]?.strInstructions,
      source: meal[0]?.strSource,
      tags: meal[0]?.strTags,
      youtube: meal[0]?.strYoutube,
      ingredients: ingredientsArr,
      measures: measuresArr
    }; // Constructing an object with single meal details
  }

  return (
    <main className='main-content bg-whitesmoke'> {/* Main content container */}
      {mealLoading ? <Loader /> : <MealSingle meal={singleMeal} />} {/* Conditional rendering based on meal loading state */}
      {categoryLoading ? <Loader /> : <CategoryList categories={categories} />} {/* Conditional rendering based on category loading state */}
    </main>
  );
}

export default MealDetailsPage; // Exporting the MealDetailsPage component
