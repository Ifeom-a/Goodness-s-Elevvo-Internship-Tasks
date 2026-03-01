// We import useState to add interactivity later
import { useState } from "react";
import './App.css';

// --- 1. THE BLUEPRINT (CHILD COMPONENT) ---
// This is a reusable component.
// Inside the parentheses, we are "catching" the properties (Props) passed down from the main App.
function PricingCard({ plan, price, features, isFeatured }) {
 return (
  // We use backticks (``) here to run a conditional check. 
  // If 'isFeatured' is true, we add the "featured" CSS class to make it pop. If false, we add nothing ("").
  <div className={`card ${isFeatured ? "featured" : ""}`}>
    <h3>{plan}</h3>
    
    <div className="price">
      {/* Naira currency sign */}
      <span className="currency">₦</span>
      <span className="amount">{price}</span>
      <span className="duration">/mo</span>
    </div>
    
    <ul className="features">
      {/* We map (loop) through the array of features passed to this specific card. */}
      {/* We use 'feature' (singular) for the individual item to avoid confusing it with the 'features' array. */}
      {features.map((feature, index) => (
        // React needs a 'key' for lists so it doesn't get confused if the list changes later.
        <li key={index}>{feature}</li>
      ))}
    </ul>
    
    <button className="plan-btn">Choose Plan</button>
  </div>
 );
}



// --- 2. THE MAIN COMPONENT ---
function App() {
  // --- THE DATA ---
  // This array holds the specific details for each of our three pricing tiers.
  const plans = [
    {
      plan: "Basic",
      price: "0",
      features: ["1 Project", "Community Support", "Free Hosting"],
      isFeatured: false // Keeps this card looking normal
    },
    {
      plan: "Pop",
      price: "29",
      features: ["Unlimited Projects", "Priority Support", "Custom Domain"],
      isFeatured: true // This flag tells our blueprint to highlight this middle card
    },
    {
      plan: "Enterprise",
      price: "99",
      features: ["Team Access", "Dedicated Account Manager", "Advanced Security"],
      isFeatured: false
    }
  ];

  // --- THE SCREEN (JSX) ---
  return (
    <div className="pricing-container">
      <h1 className="title">Select Your Plan</h1>
      
      <div className="pricing-grid">
        {/* We loop through our 'plans' array to generate the cards on the screen. */}
        {plans.map((p, index) => (
          // We call our PricingCard blueprint. 
          // The {...p} is a "spread operator". It takes all the data inside 'p' (plan, price, features, etc.) 
          // and automatically passes them down to the PricingCard as props.
          <PricingCard key={index} {...p} />
        ))}
      </div>
    </div>
  );
}

export default App;