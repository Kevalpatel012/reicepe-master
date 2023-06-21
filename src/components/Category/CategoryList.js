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
