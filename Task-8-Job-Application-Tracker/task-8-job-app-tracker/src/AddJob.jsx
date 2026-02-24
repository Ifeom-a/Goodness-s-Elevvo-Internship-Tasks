import { useState, useContext } from "react";
import { JobContext } from "./JobContext";
// useNavigate is a hook that lets us forcefully change the page (like redirecting someone).
import { useNavigate } from "react-router-dom";

const AddJob = () => {
  // We grab the addJob function from our global context.
  const { addJob } = useContext(JobContext);
  const navigate = useNavigate();
  
  // This local state tracks what the user is typing into the form right now.
  const [form, setForm] = useState({ company: "", role: "", status: "Applied" });

  // This runs when the user clicks the "Save to my board" submit button.
  const handleSubmit = (e) => {
    // e.preventDefault() stops the browser's default behavior of refreshing the page on form submit.
    e.preventDefault();
    
    // A quick check: if the company or role fields are empty, stop and do nothing.
    if (!form.company || !form.role) return;
    
    // We pass the filled-out form data to our global addJob function.
    addJob(form);
    
    // After it saves, we redirect the user back to the Dashboard ("/") so they can see it.
    navigate("/"); 
  };

  return (
    <div className="form-container">
      <h2>Log a new application</h2>
      <p className="subtitle">Fingers crossed for this one.</p>
      
      {/* onSubmit ties the form to our handleSubmit function above. */}
      <form onSubmit={handleSubmit} className="tracker-form">
        
        <label>Company</label>
        {/* onChange fires every time a key is pressed. It updates our 'form' state with the new letter. */}
        <input type="text" placeholder="e.g., CESL, Paystack, Microsoft..." 
          value={form.company} onChange={(e) => setForm({...form, company: e.target.value})} />
        
        <label>Role</label>
        <input type="text" placeholder="e.g., Cybersecurity Intern, React Dev..." 
          value={form.role} onChange={(e) => setForm({...form, role: e.target.value})} />
        
        <label>Current Status</label>
        <select value={form.status} onChange={(e) => setForm({...form, status: e.target.value})}>
          <option value="Applied">Just Applied</option>
          <option value="Interviewing">Interviewing</option>
          <option value="Offer">Got the Offer!</option>
          <option value="Rejected">Tough Luck (Rejected)</option>
        </select>
        
        <button type="submit" className="btn-submit">Save to my board</button>
      </form>
    </div>
  );
};

export default AddJob;