/**
 * @author: Qiu Yixiang
 * @date: 2025-06-24
 * @description: Main App Component for the CS-hub project
 */

// Import the React Router libraries
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

// Import the MainLayout component
import MainLayout from "@/Components/Layout/MainLayout";

// Import the components for pages
import HomePage from "@/Components/Pages/Main/HomePage";
import UnderConstructionPage from "@/Components/Pages/Main/UnderConstructionPage";

// import the global data
import CategoryList from "@/data/Category";
import global from "@/data/general";

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

export default function App() {
  // build the main routes using the MainLayout component
  return (
    <Router>
      <Routes>
        <Route path={global.BasePath} element={<MainLayout />}>
          <Route index element={<HomePage />} />
          {/* Flattened routes for all categories */}
          {flattenRoutes(CategoryList)}
        </Route>
      </Routes>
    </Router>
  )
}