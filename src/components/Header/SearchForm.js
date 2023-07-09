import React, { useState, useEffect } from 'react';  // Importing necessary modules and hooks from React
import "./Header.scss";  // Importing custom styles from Header.scss
import { BsSearch } from "react-icons/bs";  // Importing BsSearch icon from react-icons/bs
import { useMealContext } from '../../context/mealContext';  // Importing useMealContext hook from mealContext.js
import { useNavigate } from 'react-router-dom';  // Importing useNavigate hook from react-router-dom
import { startFetchMealsBySearch } from '../../actions/mealsActions';  // Importing startFetchMealsBySearch action from mealsActions.js

const SearchForm = () => {  // Declaring a functional component called SearchForm
  const navigate = useNavigate();  // Using the useNavigate hook to get the navigate function from react-router-dom
  const [searchTerm, setSearchTerm] = useState("");  // Declaring a state variable "searchTerm" and its setter function using useState hook, with initial value as an empty string
  const [errorMsg, setErrorMsg] = useState("");  // Declaring a state variable "errorMsg" and its setter function using useState hook, with initial value as an empty string
  const { dispatch, meals } = useMealContext();  // Using the useMealContext hook to get dispatch function and meals state from mealContext.js

  /*e being the search that the user typed in the box*/
  const handleSearchTerm = (e) => {  // Defining a function called handleSearchTerm, which handles changes in the search term input
    e.preventDefault();  // prevent the page from refreshing when a form is submitted
    if ((e.target.value.replace(/[^\w\s]/gi, "")).length !== 0) {  // Checking if the search term is not empty and doesn't contain special characters
      setSearchTerm(e.target.value);  // Updating the "searchTerm" state variable with the new value
      setErrorMsg("");  // Clearing the error message
    } else {
      setErrorMsg("Invalid search term ...");  // Setting an error message if the search term is empty or contains special characters
    }
  }

  const handleSearchResult = (e) => {  // Defining a function called handleSearchResult, which handles the form submission and triggers the search
    e.preventDefault();  // prevent the page from refreshing when a form is submitted
    navigate("/");  // Navigating to the home page ("/")
    startFetchMealsBySearch(dispatch, searchTerm);  // Calling the startFetchMealsBySearch action with the dispatch function and the search term
  }

  return (  // Returning JSX elements
    <form className='search-form flex align-center' onSubmit={(e) => handleSearchResult(e)}  /* Search form with flex and align-center classes, and a submit event handler calling handleSearchResult */ >
      {/*form control input is the styling for the white input box*/}
      <input type="text" className='form-control-input text-dark-gray fs-15' placeholder='Search recipes here ...' onChange={(e) => handleSearchTerm(e)} /* Input field for the search term with classes, placeholder, and change event handler calling handleSearchTerm */ />
      <button type="submit" className='form-submit-btn text-white text-uppercase fs-14'  /* Submit button for the form with classes */ >
        <BsSearch className='btn-icon' size={20}  /* Magniying glass icon component with a class and size */ />
      </button>
    </form>  // Closing form element
  )
}

export default SearchForm;  // Exporting the SearchForm component as the default export
