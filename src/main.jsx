/**
 * @author: Qiu Yixiang
 * @date: 2025-06-24
 * @description: Main Entry Point for the CS-hub project
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import App from '@/App.jsx'
import HomePage from '@/Components/Pages/HomePage.jsx'
import UnderConstructionPage from '@/Components/Pages/UnderConstructionPage.jsx'

import CategoryList from '@/data/Category.jsx'

// Render the App component with the BrowserRouter
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/CS-hub" element={<App />}>
          {/* Home Page by default */}
          <Route index element={<HomePage />} />

          {/* Base Route for Category List */}
          {CategoryList.map((category) => 
            category.subCategories.map((subCategory) => (
              // If the subCategory has a page, render the page
              // Otherwise, render the UnderConstructionPage
              <Route 
                path={subCategory.url} 
                element={subCategory.page || <UnderConstructionPage pageName={subCategory.name} />} 
                key={subCategory.ID} 
              />
            ))
          )}
        </Route>
      </Routes>
    </Router>
  </StrictMode>
)
