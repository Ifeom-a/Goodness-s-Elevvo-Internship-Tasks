import { useState } from "react";
import './App.css'

//This is a reuseable component (The "Master" Card)
function PricingCard({plan, price, features, isFeatured }) {
 return (
  <div className={`card ${isFeatured ? "featured" : ""}`}>
    <h3>{plan}</h3>
    <div className="price">
      <span className="currency">₦</span>
      <span className="amount">{price}</span>
      <span className="duration">/mo</span>
    </div>
    <ul className="features">
      {features.map((features, index) => (
        <li key={index}>{features}</li>
      ))}
    </ul>
    <button className="plan-btn">Choose Plan</button>
  </div>
 );
}

function App() {
  const plans = [
    {
      plan: "Basic",
      price: "0",
      features: ["1 Project", "Community Support", "Free Hosting"],
      isFeatured: false
    },
    {
      plan: "Pop",
      price: "29",
      features: ["Unlimited Projects", "Priority Support", "Custom Domain"],
      isFeatured: true // This will help style the middle card differently
    },
    {
      plan: "Enterprise",
      price: "99",
      features: ["Team Access", "Dedicated Account Manager", "Advanced Security"],
      isFeatured: false
    }
  ];

  return (
    <div className="pricing-container">
      <h1 className="title">Select Your Plan</h1>
      <div className="pricing-grid">
        {plans.map ((p, index) => (
          <PricingCard key={index} {...p} />
        ))}
      </div>
    </div>
  );
}

export default App
