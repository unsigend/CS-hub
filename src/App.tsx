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
import AboutPage from "@/components/pages/home/AboutPage";

// import the global data
import CategoryList from "@/data/content/category/categories";
import global from "@/data/config/config";

// Recursively flatten all categories and subcategories into a flat array of routes
function flattenRoutes(categories: any[]): React.ReactNode[] {
  const routes: React.ReactNode[] = [];
  function processCategory(category: any) {
    const hasSubCategory =
      category.subCategories && category.subCategories.length > 0;

    // Add route if category has a page (regardless of subcategories)
    if (category.page) {
      routes.push(
        <Route path={category.url} element={category.page} key={category.ID} />
      );
    }

    if (hasSubCategory) {
      // Process subcategories recursively
      category.subCategories.forEach((subcategory: any) =>
        processCategory(subcategory)
      );
    } else if (!category.page) {
      // Add leaf categories without pages as under construction
      routes.push(
        <Route
          path={category.url}
          element={<UnderConstructionPage pageName={category.name} />}
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
          <Route path={`${global.BasePath}/about`} element={<AboutPage />} />
          {/* Flattened routes for all categories */}
          {flattenRoutes(CategoryList)}
        </Route>
      </Routes>
    </Router>
  );
}
