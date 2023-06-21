import React from 'react'; // Importing the React library
import "./NotFound.scss"; // Importing the styles for the NotFound component

const NotFound = () => { // Defining the NotFound functional component
  return (
    <div className='not-found my-5' /* The main container div with the "not-found" and "my-5" classes */ >
      <div className='container flex align-center justify-center' /* Container div with flexbox classes for center alignment
        No any food found. // Text content indicating that no food was found */ >
      </div>
    </div>
  )
}

export default NotFound; // Exporting the NotFound component as the default export