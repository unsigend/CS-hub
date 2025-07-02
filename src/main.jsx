/**
 * @author: Qiu Yixiang
 * @date: 2025-06-24
 * @description: Main Entry Point for the CS-hub project
 */

// Import the React and ReactDOM libraries
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Import the BrowserRouter and Routes from react-router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Import the App component
import App from '@/App'
import HomePage from '@/Components/Pages/Main/HomePage'
import UnderConstructionPage from '@/Components/Pages/Main/UnderConstructionPage'

// Import the CategoryList data
import CategoryList from '@/data/Category'
import global from '@/data/general'

// Recursively flatten all categories and subcategories into a flat array of routes
function flattenRoutes(categories) {
  const routes = [];
  function processCategory(category) {
    const hasSubCategory = category.subCategories && category.subCategories.length > 0;
    
    if (hasSubCategory) {
      // Process subcategories recursively
      category.subCategories.forEach(processCategory);
    } else {
      // Add leaf categories (no subcategories) as routes
      routes.push(
        <Route 
          path={category.url} 
          element={category.page || <UnderConstructionPage pageName={category.name} />} 
          key={category.ID} 
        />
      );
    }
  }
  
  categories.forEach(processCategory);
  return routes;
}

// Render the App component with the BrowserRouter
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path={global.BasePath} element={<App />}>
          {/* Home Page by default */}
          <Route index element={<HomePage />} />
          {/* Flattened routes for all categories */}
          {flattenRoutes(CategoryList)}
        </Route>
      </Routes>
    </Router>
  </StrictMode>
)
