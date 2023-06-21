// Importing the necessary dependencies
import React from 'react';
import ReactDOM from 'react-dom/client';

// Importing the main App component
import App from './App';

// Importing the SidebarProvider and MealProvider from the 'sidebarContext' and 'mealContext' files
import { SidebarProvider } from './context/sidebarContext';
import { MealProvider } from './context/mealContext';

// Creating a React root for rendering the application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the application within the root using JSX and providing necessary context providers
root.render(
  // Wrapping the App component with the SidebarProvider to provide sidebar context
  <SidebarProvider>
    {/* Wrapping the App component with the MealProvider to provide meal context */}
    <MealProvider>
      {/* Rendering the main App component */}
      <App />
    </MealProvider>
  </SidebarProvider>
);
