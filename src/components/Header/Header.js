import React from 'react'; // Importing React library
import "./Header.scss"; // Importing the Header.scss stylesheet
import Navbar from "./Navbar"; // Importing the Navbar component
import SearchForm from "./SearchForm"; // Importing the SearchForm component

const Header = () => {
  return (
    <header className='header'> {/* Header component */}
      <Navbar /> {/* Rendering the Navbar component */}
      <div className='header-content flex align-center justify-center flex-column text-center'>
        <SearchForm /> {/* Rendering the SearchForm component */}
        <h1 className='text-white header-title ls-2'>What are your favorite cuisines?</h1> {/* Heading for the header */}
        <p className='text-uppercase text-white my-3 ls-1'>personalize your experience</p> {/* Subtitle for the header */}
      </div>
    </header>
  )
}

export default Header; // Exporting the Header component
