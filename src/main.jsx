/**
 * @author: Qiu Yixiang
 * @date: 2025-06-24
 * @description: Main Entry Point for the CS-hub project
 */

// Import the React and ReactDOM libraries
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from '@/App'

// Render the App component
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
