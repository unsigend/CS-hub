/**
 * MIT License
 * 
 * Copyright (c) 2025 Qiu Yixiang
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

// Import the React Router libraries
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

// Import the MainLayout component
import MainLayout from "@/components/layout/MainLayout";

// Import the components for pages
import HomePage from "@/components/pages/home/HomePage";
import UnderConstructionPage from "@/components/pages/home/UnderConstructionPage";

// import the global data
import CategoryList from "@/data/content/category/categories";
import global from "@/data/config/config";

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