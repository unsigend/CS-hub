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
import FullStackPage from '@/Components/Pages/FullStackPage.jsx'
import LowLevelPage from '@/Components/Pages/LowLevelPage.jsx'


// Render the App component with the BrowserRouter
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/CS-hub" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="road-map">
            <Route path="full-stack" element={<FullStackPage />} />
            <Route path="low-level" element={<LowLevelPage />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  </StrictMode>
)
