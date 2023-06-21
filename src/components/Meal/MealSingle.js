import React from 'react';  // Importing the necessary module from React

import "./Meal.scss";  // Importing custom styles from Meal.scss

import { FaUtensilSpoon } from "react-icons/fa";  // Importing the FaUtensilSpoon icon from react-icons/fa

import { AiFillHome } from "react-icons/ai";  // Importing the AiFillHome icon from react-icons/ai

import { Link } from "react-router-dom";  // Importing the Link component from react-router-dom

import { BiChevronsRight } from "react-icons/bi";  // Importing the BiChevronsRight icon from react-icons/bi

import { AiOutlineCheckSquare } from 'react-icons/ai';  // Importing the AiOutlineCheckSquare icon from react-icons/ai

const MealSingle = ({ meal }) => {  // Declaring a functional component called MealSingle and accepting a prop named "meal"
  console.log(meal);  // Logging the value of the "meal" prop to the console

  let tags = meal?.tags?.split(',');  // Splitting the tags into an array if it exists in the "meal" object
  console.log(meal);  // Logging the value of the "meal" prop to the console

  let instructions = meal?.instructions?.split('\r\n');  // Splitting the instructions into an array if it exists in the "meal" object
  instructions = instructions?.filter(instruction => instruction.length > 1);  // Filtering out instructions with a length less than or equal to 1

  return (  // Returning JSX elements
    <div className='section-wrapper' /* Wrapper div with the section-wrapper class */ >
      <div className='container' /* Container div */ >
        <div className='breadcrumb bg-orange text-white' /* Breadcrumb navigation */ >
          <ul className='flex align-center my-2' /* Unordered list with flex and align-center classes */ >
            <li className='breadcrumb-item' /* Breadcrumb item */ >
              <Link to="/" className='flex align-center'  /* Link to the home page */ >
                <AiFillHome size={22} /* Home icon */ />
              </Link>
            </li>
            <li className='flex align-center mx-1' /* Breadcrumb separator */ >
              <BiChevronsRight size={23} /* Right chevron icon */ />
            </li>
            <li className='breadcrumb-item flex' /* Breadcrumb item */ >
              <span to="" className='fs-15 fw-5 text-uppercase'>{meal?.title /* Meal title */}</span>  
            </li>
          </ul>
        </div>
        
        <div className='sc-title'>Meal Details</div>  

        <section className='sc-details bg-white' /* Section with the sc-details and bg-white classes */ >
          <div className='details-head grid' /* Div for the details header with grid class */ >
            <div className='details-img' /* Div for the meal image */ >
              <img src={meal?.thumbnail} alt="" className='img-cover' /* Image element for the meal thumbnail */ />
            </div>

            <div className='details-intro' /* Div for the meal details introduction */ >
              <h3 className='title text-orange'>{meal?.title /* Title for the meal */}</h3>  
              <div className='py-4' /* Div with padding */ >
                <div className='category flex align-center' /* Div for the meal category */ >
                  <span className='text-uppercase fw-8 ls-1 my-1'>category: &nbsp;</span>  
                  <span className='text-uppercase ls-2'>{meal?.category}</span>  
                </div>

                <div className='source flex align-center' /* Div for the meal source */ >
                  <span className='fw-7'>Source: &nbsp;</span>  
                  <a href={meal.source} /* Source link */ >
                    {meal.source ? (meal?.source).substring(0, 40) + "..." : "Not found" /* Displaying the source with a maximum of 40 characters or "Not found" if it doesn't exist */ }
                  </a>
                </div>
              </div>

              <div className='tags flex align-start flex-wrap' /* Div for the meal tags */ >
                <h6 className='fs-16'>Tags:</h6>  
                <ul className='flex align-center flex-wrap' /* Unordered list with flex and align-center classes */ >
                  {
                    tags?.map((tag, idx) => (<li key={idx} className="fs-14">{tag}</li>))  // Mapping over the tags and rendering a list item for each tag
                  }
                </ul>
              </div>

              <div className='ingredients my-5 px-3 py-3' /* Div for the meal ingredients */ >
                <h6 className='fs-16 text-white'>Ingredients</h6>  
                <ul className='grid' /* Unordered list with grid class */ >
                  {
                    meal?.ingredients?.map((ingredient, idx) => (  // Mapping over the ingredients and rendering a list item for each ingredient
                      <li key={idx} className="flex align-center" /* List item with flex and align-center classes */ >
                        <span className='li-dot'>{idx + 1}</span>  {/* Ingredient number */}
                        <span className='text-capitalize text-white fs-15'>{ingredient}</span>  {/* Ingredient name */ }
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
          </div>

          <div className='details-body' /* Div for the meal details body */ >
            <div className='measures my-4' /* Div for the measures */ >
              <h6 className='fs-16'>Measure:</h6>  { /* Measures heading */ }
              <ul className='grid' /* Unordered list with grid class */ >
                {
                  meal?.measures?.map((measure, idx) => (  // Mapping over the measures and rendering a list item for each measure
                    <li key={idx} className="fs-14 flex align-end" /* List item with flex and align-end classes*/ >
                      <span className='li-icon fs-12 text-orange' /* Measure icon */ >
                        <FaUtensilSpoon />
                      </span>
                      <span className='li-text fs-15 fw-6 op-09'>{measure}</span> {/* Measure description */ }
                    </li>
                  ))
                }
              </ul>
            </div>

            <div className='instructions my-4' /* Div for the instructions */ >
              <h6 className='fs-16'>Instructions:</h6>  {/* Instructions heading */}
              <ul className='grid' /* Unordered list with grid class*/ >
                {
                  instructions?.map((instruction, idx) => (  // Mapping over the instructions and rendering a list item for each instruction
                    <li key={idx} className="fs-14" /* List item with fs-14 class */ >
                      <AiOutlineCheckSquare size={18} className="text-orange li-icon" /* Check square icon */ />
                      <span className='li-text fs-16 fw-5 op-09'>{instruction}</span>  {/* Instruction text */ }
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default MealSingle;  // Exporting the MealSingle component as the default export
