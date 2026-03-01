// 1. We import 'StrictMode', which acts as React's built-in safety inspector.
import { StrictMode } from 'react'

// 2. We bring in 'createRoot', the engine that takes our React code and translates it into standard HTML.
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App.jsx'


// We tell React to look at our index.html file, find the empty container called `<div id="root">`, 
// and "render" (paint) our entire App component right inside of it.
createRoot(document.getElementById('root')).render(
  // Wrapping our App in StrictMode ensures those safety checks run on our whole pricing application.
  <StrictMode>
    <App />
  </StrictMode>,
)