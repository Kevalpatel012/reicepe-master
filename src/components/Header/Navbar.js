import React, {useState, useEffect} from 'react';  // Importing necessary modules and hooks from React
import {Link} from "react-router-dom";  // Importing Link component from react-router-dom
import "./Header.scss";  // Importing custom styles from Header.scss
import { MdFoodBank} from "react-icons/md";  // Importing MdFoodBank icon from react-icons/md
import { IoMdMenu} from "react-icons/io";  // Importing IoMdMenu icon from react-icons/io
import { useSidebarContext } from '../../context/sidebarContext';  // Importing useSidebarContext hook from sidebarContext.js

const Navbar = () => {  // Declaring a functional component called Navbar
  const {openSidebar} = useSidebarContext();  // Using the useSidebarContext hook to get openSidebar function from sidebarContext.js
  const [scrolled, setScrolled] = useState(false);  // Declaring a state variable "scrolled" and its setter function using useState hook, with initial value as false

  const handleScroll = () => {  // Defining a function called handleScroll
    const offset = window.scrollY;  // Getting the current vertical scroll position
    if(offset > 60){  // If the scroll position is greater than 60
      setScrolled(true);  // Set the value of "scrolled" state variable to true
    } else {
      setScrolled(false);  // Otherwise, set the value of "scrolled" state variable to false
    }
  }

  useEffect(() => {  // Running a side effect when the component mounts or "scrolled" state variable changes
    window.addEventListener('scroll', handleScroll);  // Adding an event listener for the 'scroll' event and calling the handleScroll function
  })

  return (  // Returning JSX elements
    <nav className={`navbar bg-orange flex align-center ${scrolled ? 'scrolled': ""}`}  /* Navbar component with dynamic class names based on the "scrolled" state variable */ >
      <div className='container w-100'  /* Container div with w-100 class */ >
        <div className='navbar-content text-white'  /* Navbar content div with text-white class */ >
          <div className='brand-and-toggler flex align-center justify-between'  /* Brand and toggler div with flex classes */ >
            <Link to = "/" className='navbar-brand fw-3 fs-22 flex align-center'  /* Link component to the home page with navbar-brand class and flex classes */ >
              <MdFoodBank  /* MdFoodBank icon component */ />
              <span className='navbar-brand-text fw-7'>SpiceSavvy</span>  
            </Link>
            <div className='navbar-btns flex align-center'  /* Navbar buttons div with flex classes*/ >
              <button type="button" className='navbar-show-btn text-white' onClick={() => openSidebar()}  /* Button to show the sidebar with navbar-show-btn and text-white classes */ >
                <IoMdMenu size={27}  /* IoMdMenu icon component */ />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>  // Closing navbar component
  )
}

export default Navbar;  // Exporting the Navbar component as the default export
