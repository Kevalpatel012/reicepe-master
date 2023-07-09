/**
 * File: App.js
 * Description: This file serves as the main entry point of the React application.
 * It defines the main App component and sets up routing for different pages.
 * The App component renders the Header and Sidebar components and handles the routing
 * using the 'react-router-dom' library. It maps specific routes to corresponding page
 * components such as Home, MealDetails, Category, and Error. The imported SCSS file
 * is used for styling the application.
 */

// Importing the SCSS file for styling
import './App.scss';

// Importing the necessary components from 'react-router-dom'

/*BrowserRouter: This component provides the routing functionality for your React application. It uses HTML5 history API to keep the UI 
in sync with the current URL.

Routes: This component acts as a container for defining your application's routes. Inside the <Routes> component, you can define 
individual <Route> components to map specific URLs to corresponding components.

Route: This component represents a single route in your application. It defines the URL path and specifies which component should 
be rendered when the URL matches that path.

We are using route because it allows you to determine what content is displayed to the user based on the current URL or path
*/

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

// Importing the required pages from the 'pages' folder
import { Home, MealDetails, Error, Category } from "./pages/index";

// Importing the Header and Sidebar components
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

// Defining the main App component
function App() {
  // Rendering the main application layout using JSX
  return (
    <BrowserRouter>
    {/* component wraps the main application layout. It provides a routing context to the child 
    components within its scope, allowing the application to navigate between different pages 
    without a full page reload */}

      {/* Rendering the Header component */}
      <Header />

      {/* Rendering the Sidebar component */}
      <Sidebar />

      {/* Defining the routing for different pages */}
      <Routes>
        {/* Route for the home page */}
        <Route path="/" element={<Home />} />
        {/* Wwhen the user navigates to the root URL ("/"), which is typically the default URL 
        when accessing a website, the Home component will be rendered. The Home component is passed 
        as the element prop, indicating that it should be rendered when the URL matches the specified
        path. */}


        {/* Route for the meal details page */}
        <Route path="/meal/:id" element={<MealDetails />} />
        {/*when a user navigates to a URL that matches the pattern "/meal/{id}", where "{id}" can 
        be any value, the MealDetails component will be rendered. The captured value of the id 
        parameter will be passed as a prop to the MealDetails component.*/}


        {/* Route for the category page */}
        <Route path="/meal/category/:name" element={<Category />} />
        {/* :name part acts as a placeholder for a category name. When the user navigates to a URL 
        that matches this path pattern, the corresponding component (<Category />) will be rendered,
        and the captured category name will be passed as a parameter to that component. */}

        {/* Route for the error page */}
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

// Exporting the App component as the default export
export default App;
