import React from 'react';  // Importing the necessary module from React
import "./Loader.scss";  // Importing custom styles from Loader.scss
import { loader } from "../../utils/images";  // Importing the loader image from the images directory

const Loader = () => {  // Declaring a functional component called Loader
  return (  // Returning JSX elements
    <div className='loader my-5' /* Loader container with the loader class and a margin-bottom of 5 */ >
      <div className='container flex align-center justify-center' /* Container div with flex, align-center, and justify-center classes */ >
        <img src={loader} alt="" /* Image element with the src attribute set to the loader image and an empty alt attribute */ />
      </div>
    </div>
  )
}

export default Loader;  // Exporting the Loader component as the default export
