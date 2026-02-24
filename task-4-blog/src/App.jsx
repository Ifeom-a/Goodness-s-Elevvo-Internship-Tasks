
import { useState } from "react";
import "./App.css";


function App() {
  //1. STATE: Remembers which category the user clicked
  const [filter, setFilter] = useState('All');
  const [searchQuery,setSearchQuery] = useState(''); //New way of searching
  //2. DATA: Array of objects representimg your blog posts
  const posts = [
    {id: 1, title: "Cybersecurity 2026", category: "Tech", date: "Feb 20", desc: "Latest trends in network security."},
    {id: 2, title: "Lagos Weekend Guide", category: "Travel", date: "Feb 18", desc: "Top spots to visit this weekend."},
    {id: 3, title: "Perfect Party Jellof", category: "Food", date: "Feb 15", desc: "The ultimate recipe for success."},
    {id: 4, title: "React State Mastery", category: "Tech", date: "Feb 12", desc: "Understanding hooks for Beginners."}
  ];
  //3. FILTERING LOGIC: Logic to switch between categories
  const filteredPosts = posts.filter(post => {
    const matchesCategory = filter === 'All' || post.category === filter;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  return (
  <div className="blog-container">
    <h1 className="title">My Personal Blog</h1>
    <div className="search-box">
      <input
      type="text"
      placeholder="Search by title..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}/>
    </div>

    <div className="grid">
      {filteredPosts.map((post) => (
        <div className="card" key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.desc}</p>
          <p className="date">{post.date}</p>
        </div>
      ))}
    </div>
      <div className="filters">
    {["All", "Tech", "Travel", "Food"].map((cat) => (
      <button key={cat} onClick={() => setFilter(cat)}>
      {cat}
    </button>
  ))}
  </div>
  </div>

);

}

export default App;