/*

THIS PRINTS OUT THE CATORIES IN THE MAIN PAGE WITH THE PICTUEAS AND THE NAMES


It defines a functional component named CategoryList that accepts a prop called "categories".
The CategoryList component renders the following elements:

A div element with the class "section-wrapper bg-whitesmoke" acting as a wrapper.
Within the wrapper div, there is another div element with the class "container".
Inside the container div, there is a div element with the class "sc-title" displaying the title "categories" for the category section.
Next, there is a section element with the classes "sc-category" and "grid".
Inside the section, the component maps over each category in the "categories" array.
For each category, a Link component is rendered with the "to" attribute set to /meal/category/${title}.
The Link component has the classes "category-itm", "align-center", and "justify-center".
Inside the Link component, there is a div element with the classes "category-itm-img", "h-100", "w-100", "flex", "align-center", and "justify-center".
Inside this div, an img tag is rendered with the "src" attribute set to the category thumbnail and the "alt" attribute set to the category title.
Additionally, there is a div element with the class "category-itm-title bg-orange" for the category item title.
Inside this div, an h3 element is rendered with the classes "text-white", "fs-11", "fw-6", "ls-1", and "text-uppercase" to display the category title.
The CategoryList component is exported as the default export of the file, making it available for use in other parts of the application.
The CategoryList component is responsible for rendering a list of categories, where each category is displayed as a clickable item with an image thumbnail and a title. It is likely used to populate and navigate the category section of the recipe project.

*/

import React from 'react'; // Importing React library
import { Link } from 'react-router-dom'; // Importing Link component from react-router-dom
import "./Category.scss"; // Importing the Category.scss stylesheet

const CategoryList = ({ categories }) => {
  return (
    <div className='section-wrapper bg-whitesmoke'> {/* Wrapper div with the 'section-wrapper' and 'bg-whitesmoke' classes */}
      <div className='container'> {/* Container div */}
        <div className='sc-title'>categories</div> {/* Title for the category section */}
        <section className='sc-category grid'> {/* Section with 'sc-category' and 'grid' classes */}
          {
            categories.map(category => { // Looping over each category in the categories array
              const { idCategory: id, strCategory: title, strCategoryThumb: thumbnail } = category; // Destructuring category object properties

              return (
                <Link to={`/meal/category/${title}`} className="category-itm align-center justify-center" key={id}> {/* Link component with 'category-itm', 'align-center', and 'justify-center' classes */}
                  <div className='category-itm-img h-100 w-100 flex align-center justify-center'> {/* Div for category item image */}
                    <img src={thumbnail} alt={title} /> {/* Image tag for the category thumbnail */}
                    <div className='category-itm-title bg-orange'> {/* Div for the category item title with 'bg-orange' class */}
                      <h3 className='text-white fs-11 fw-6 ls-1 text-uppercase'>{title}</h3> {/* Category title */}
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

export default CategoryList; // Exporting the CategoryList component
