// useContext lets us plug into that "storage box" we built in JobContext.jsx.
import { useContext } from "react";
import { JobContext } from "./JobContext";

const Dashboard = () => {
  // We extract just the 'jobs' array and the 'deleteJob' function from our global context.
  const { jobs, deleteJob } = useContext(JobContext);

  // If the array is empty, we show a friendly message instead of a blank screen.
  if (jobs.length === 0) {
    return (
      <div className="empty-state">
        <h3>Nothing here yet.</h3>
        <p>Time to shoot some shots! Click "New Application" to get started.</p>
      </div>
    );
  }

  // If we do have jobs, we map (loop) over them to create a card for each one.
  return (
    <div className="job-grid">
      {/* job.map goes through every item in the jobs array one by one. */}
      {jobs.map((job) => (
        // React needs a unique 'key' for items in a list so it knows which one is which.
        <div key={job.id} className="job-card">
          
          <div className="card-header">
            <h3>{job.company}</h3>
            {/* We convert the status to lowercase to match our CSS class names (like .applied or .rejected). */}
            <span className={`badge ${job.status.toLowerCase()}`}>{job.status}</span>
          </div>
          
          <p className="role-title">{job.role}</p>
          
          <div className="card-footer">
            <small>Applied: {job.dateAdded}</small>
            {/* When clicked, it runs the deleteJob function and passes this specific job's ID. */}
            <button onClick={() => deleteJob(job.id)} className="btn-delete">Trash</button>
          </div>
          
        </div>
      ))}
    </div>
  );
};

export default Dashboard;