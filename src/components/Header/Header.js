/*
It imports the React library using import React from 'react';. React is necessary for defining and rendering components.
It imports the Header.scss stylesheet using import "./Header.scss";. This allows the file to use styles defined in the Header.scss file.
It imports the Navbar component using import Navbar from "./Navbar";. This allows the file to render the Navbar component.
It imports the SearchForm component using import SearchForm from "./SearchForm";. This allows the file to render the SearchForm component.
The code defines a functional component called Header. This component represents the header section of the project.
Inside the Header component, it returns JSX code that defines the structure and content of the header.
The header component has a className of 'header'.
It renders the Navbar component.

It renders a div with the className 'header-content'. Inside this div, it renders the SearchForm component, followed by an h1 element with 
the className 'header-title' and the text "What are your favorite cuisines?". It also renders a p element with the className 'text-uppercase'
 and the text "personalize your experience".

The header component encapsulates all these elements within a header HTML tag.
Finally, the Header component is exported as the default export of the file using export default Header;. This allows other files in the 
project to import and use the Header component.

In summary, this file defines the Header component, which represents the header section of the project. It renders the Navbar component, 
a search form component, and a heading and subtitle for the header. The file also imports the necessary libraries and stylesheets.*/

import React from 'react'; // Importing React library
import "./Header.scss"; // Importing the Header.scss stylesheet
import Navbar from "./Navbar"; // Importing the Navbar component
import SearchForm from "./SearchForm"; // Importing the SearchForm component

const Header = () => {
  return (
    <header className='header'> {/* Header component */}
      <Navbar /> {/* Rendering the Navbar component */}
      <div className='header-content flex align-center justify-center flex-column text-center'> {/* Handles the positioning of the entire seasarch section*/}
        <SearchForm /> {/* Rendering the SearchForm component */}
        <h1 className='text-white header-title ls-2'>What are your favorite cuisines?</h1> {/* Heading for the header */}
        <p className='text-uppercase text-white my-3 ls-1'>personalize your experience</p> {/* Subtitle for the header also sets vertical margins of 3 and line spacing of 1*/}
      </div>
    </header>
  )
}

export default Header; // Exporting the Header component
