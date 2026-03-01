// We import useState, which is a tool that lets React "remember" things happening on the screen.
import { useState } from "react";
// We import our custom CSS to make the blog look clean and modern.
import "./App.css";

function App() {
  // --- 1. MEMORY (STATE) ---
  // useState tells React to track these values. 
  // 'filter' tracks which category button the user clicked (it defaults to 'All').
  const [filter, setFilter] = useState('All');
  
  // 'searchQuery' tracks exactly what the user is typing into the search bar right now.
  const [searchQuery, setSearchQuery] = useState(''); 

  // --- 2. THE DATABASE (DATA) ---
  // This array of objects acts as our mini-database. It holds all the information for our blog posts.
  const posts = [
    {id: 1, title: "Cybersecurity 2026", category: "Tech", date: "Feb 20", desc: "Latest trends in network security."},
    {id: 2, title: "Lagos Weekend Guide", category: "Travel", date: "Feb 18", desc: "Top spots to visit this weekend."},
    {id: 3, title: "Perfect Party Jollof", category: "Food", date: "Feb 15", desc: "The ultimate recipe for success."},
    {id: 4, title: "React State Mastery", category: "Tech", date: "Feb 12", desc: "Understanding hooks for Beginners."}
  ];

  // --- 3. THE BRAINS (FILTERING LOGIC) ---
  // We don't want to show all posts all the time. This logic filters the list before it hits the screen.
  const filteredPosts = posts.filter(post => {
    // Check 1: Does the post match the chosen category? (Or is the filter set to 'All'?)
    const matchesCategory = filter === 'All' || post.category === filter;
    
    // Check 2: Does the post title contain the letters the user typed in the search bar?
    // We use .toLowerCase() on both sides so searching "lagos" still finds "Lagos".
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase());
    
    // A post is only kept in the final list if it passes BOTH checks.
    return matchesCategory && matchesSearch;
  });
  
  // --- 4. THE SCREEN (JSX) ---
  return (
    <div className="blog-container">
      <h1 className="title">My Personal Blog</h1>
      
      {/* THE SEARCH BAR */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Search by title..."
          value={searchQuery}
          // Whenever the user types a letter, this onChange event fires and updates our 'searchQuery' memory.
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      
      
      {/* THE POSTS GRID */}
      <div className="grid">
        {/* We loop (map) through our filtered list of posts and create a visual 'card' for each one. */}
        {filteredPosts.map((post) => (
          // React needs a unique 'key' for every item in a list so it can keep track of them efficiently.
          <div className="card" key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.desc}</p>
            <p className="date">{post.date}</p>
          </div>
        ))}
      </div>
      
      {/* THE CATEGORY BUTTONS */}
      <div className="filters">
        {/* We map through an array of category names to automatically generate our buttons. */}
        {["All", "Tech", "Travel", "Food"].map((cat) => (
          <button 
            key={cat} 
            // When a button is clicked, we tell React to update our 'filter' memory with this category's name.
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;