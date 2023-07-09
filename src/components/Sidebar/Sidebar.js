import React from 'react';  // Importing the React library
import { useSidebarContext } from '../../context/sidebarContext';  // Importing the useSidebarContext hook from the sidebarContext context
import { ImCancelCircle } from "react-icons/im";  // Importing the ImCancelCircle icon from the react-icons/im library
import "./Sidebar.scss";  // Importing the styles for the Sidebar component
import { Link } from "react-router-dom";  // Importing the Link component from react-router-dom
import { useMealContext } from '../../context/mealContext';  // Importing the useMealContext hook from the mealContext context

const Sidebar = () => {  // Declaring the Sidebar functional component
    const { isSidebarOpen, closeSidebar } = useSidebarContext();  // Destructuring values from the useSidebarContext hook
    const { categories } = useMealContext();  // Destructuring the categories value from the useMealContext hook

    return (
        /* isSidebarOpen is a boolean that holds if the side bar is open */
        /* If isSidebarOpen is true, it evaluates to the string 'sidebar-visible'.
        If isSidebarOpen is false or falsy, it evaluates to an empty string (''). */
        <nav className={`sidebar ${isSidebarOpen ? 'sidebar-visible' : ""}`} /* The main navigation container with conditional class based on isSidebarOpen state */ >
            <button type="button" className='navbar-hide-btn' onClick={() => closeSidebar()} /* Button for hiding the sidebar with the closeSidebar function as onClick handler */ >
                <ImCancelCircle size={24} /* The cancel circle icon for the sidebar hide button */ />
            </button>

            <div className='side-content' /* Container div for the sidebar content */ >
                <ul className='side-nav' /* Unordered list for the sidebar navigation */ >
                    {
                        categories.map(category => (  // Mapping through the categories array to create list items for each category
                            <li className='side-item' key={category.idCategory}  /* List item for a category with a unique key based on idCategory */ >
                                { /* Below links to the category page with the category name as the URL path and closeSidebar function as onClick handler */}
                                <Link to={`/meal/category/${category.strCategory}`} className='side-link ls-1 fs-13' onClick={() => closeSidebar()}  >
                                    {category.strCategory /* Displaying the category name */}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </nav>
    );
}

export default Sidebar;  // Exporting the Sidebar component as the default export
