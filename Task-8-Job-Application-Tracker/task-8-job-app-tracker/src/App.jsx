// We import the tools needed to switch pages without the browser reloading.
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// We bring in the Provider we just made so the whole app has memory.
import { JobProvider } from "./JobContext";
import Dashboard from "./Dashboard";
import AddJob from "./AddJob";
import "./App.css";

function App() {
  return (
    // Wrapping everything in JobProvider means Dashboard and AddJob can both talk to our LocalStorage.
    <JobProvider>
      {/* BrowserRouter is the engine that watches the URL bar. */}
      <BrowserRouter>
        <div className="app-layout">
          
          {/* This is our top navigation bar. It shows up on every single page. */}
          <nav className="navbar">
            <h2 className="logo">💼 Hustle Tracker</h2>
            <div className="nav-links">
              {/* <Link> is basically an <a> tag, but it doesn't refresh the whole page. */}
              <Link to="/">My Board</Link>
              <Link to="/add" className="btn-primary">+ New Application</Link>
            </div>
          </nav>

          <main className="content">
            {/* <Routes> acts like a switchboard. It looks at the URL and decides which component to load. */}
            <Routes>
              {/* If the URL is just "/", show the Dashboard component. */}
              <Route path="/" element={<Dashboard />} />
              {/* If the URL is "/add", show the AddJob component. */}
              <Route path="/add" element={<AddJob />} />
            </Routes>
          </main>
          
        </div>
      </BrowserRouter>
    </JobProvider>
  );
}

export default App;