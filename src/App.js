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
      {/* Rendering the Header component */}
      <Header />

      {/* Rendering the Sidebar component */}
      <Sidebar />

      {/* Defining the routing for different pages */}
      <Routes>
        {/* Route for the home page */}
        <Route path="/" element={<Home />} />

        {/* Route for the meal details page */}
        <Route path="/meal/:id" element={<MealDetails />} />

        {/* Route for the category page */}
        <Route path="/meal/category/:name" element={<Category />} />

        {/* Route for the error page */}
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

// Exporting the App component as the default export
export default App;
