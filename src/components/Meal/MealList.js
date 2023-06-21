import React from 'react';  // Importing the necessary module from React

import "./Meal.scss";  // Importing custom styles from Meal.scss

import { Link } from 'react-router-dom';  // Importing the Link component from react-router-dom

const MealList = ({ meals }) => {  // Declaring a functional component called MealList and accepting a prop named "meals"
  console.log(meals);  // Logging the value of the "meals" prop to the console

  return (  // Returning JSX elements
    <div className='section-wrapper' /* Wrapper div with the section-wrapper class */ >
      <div className='container'  /* Container div */ >
        <div className='sc-title'>meals </div> 
        <section className='sc-meal grid'  /* Section with the sc-meal and grid classes */ >
          {  // Beginning of the JavaScript expression
            meals?.map(mealItem => {  // Mapping over the "meals" array if it exists
              const { idMeal: id, strArea: area, strCategory: category, strMeal: meal, strMealThumb: thumbnail } = mealItem;  // Destructuring properties from each "mealItem" object

              return (  // Returning JSX elements for each mapped item
                <Link to={`/meal/${id}`} className="meal-itm align-center justify-center" key={id} /* Link component with the meal-itm, align-center, justify-center classes and a unique key */ >  
                  <div className='meal-itm-img' /* Div for meal item image */ >  
                    <img src={thumbnail} alt={meal} /* Image element with the meal thumbnail as the source and meal name as the alt text */ />  
                    <div className='meal-itm-cat bg-orange text-orange fw-6'>{category /* Div for meal catagory */ }</div>  
                  </div>

                  <div className='meal-itm-body' /* Div for meal item body */ > 
                    <div className='meal-itm-body-info flex flex-column' /* Div for meal item body info */ >  
                      <div className='area fs-14 ls-1 fw-5'>{area /* Div for meal area */ }</div>  
                      <div className='meal fw-15 fw-7 op-09'>{meal /* Div for meal name */ }</div>  
                    </div>
                  </div>
                </Link>
              )
            })
          }
        </section>
      </div>
    </div>
  )
}

export default MealList;  // Exporting the MealList component as the default export
