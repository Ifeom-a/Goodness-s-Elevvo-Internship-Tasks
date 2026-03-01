// 1. We import 'StrictMode', which acts as React's built-in safety inspector.
import { StrictMode } from 'react'

// 2. We bring in 'createRoot', the engine that takes our React code and translates it into standard HTML.
import { createRoot } from 'react-dom/client'

// 3. We import our global CSS rules (like setting the default font and background for the whole page).
import './index.css'

// 4. We import the 'App' component.
import App from './App.jsx'



// --- 5. THE INJECTION POINT ---
// We tell React to look at our index.html file, find the empty container called `<div id="root">`, 
// and "render" (paint) our entire App component inside of it.
createRoot(document.getElementById('root')).render(
  // Wrapping our App in StrictMode ensures those safety checks run on our whole application.
  <StrictMode>
    <App />
  </StrictMode>,
)