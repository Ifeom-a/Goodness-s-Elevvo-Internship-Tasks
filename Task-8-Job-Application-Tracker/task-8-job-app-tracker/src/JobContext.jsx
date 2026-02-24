// We import createContext to make our global storage, and useState/useEffect to manage the data.
import { createContext, useState, useEffect } from "react";

// This creates the actual "context" (the storage box) that other files will connect to.
export const JobContext = createContext();

// This Provider acts as a wrapper around our app. Anything inside it gets access to the data.
export const JobProvider = ({ children }) => {
  
  // We set up our 'jobs' state. Instead of starting empty, we tell it to check LocalStorage first.
  // This is how it remembers your data even if you accidentally close the tab.
  const [jobs, setJobs] = useState(() => {
    const saved = localStorage.getItem("my-job-hunts");
    // If there is saved data, parse it from text back into an array. If not, start with an empty array [].
    return saved ? JSON.parse(saved) : [];
  });

  // useEffect watches the 'jobs' array. Every single time 'jobs' changes (like adding or deleting),
  // it automatically saves the newest version into the browser's LocalStorage.
  useEffect(() => {
    localStorage.setItem("my-job-hunts", JSON.stringify(jobs));
  }, [jobs]);

  // This function takes a new job from the form and adds it to our list.
  const addJob = (newJob) => {
    // We keep all the old jobs (...jobs), add the new one, and give it a unique ID based on the current time.
    setJobs([...jobs, { ...newJob, id: Date.now(), dateAdded: new Date().toLocaleDateString() }]);
  };

  // This function filters the list. It keeps every job EXCEPT the one whose ID matches the one we want to delete.
  const deleteJob = (id) => {
    setJobs(jobs.filter((job) => job.id !== id));
  };

  // We are "providing" the jobs list, the add function, and the delete function to the rest of the app.
  return (
    <JobContext.Provider value={{ jobs, addJob, deleteJob }}>
      {children}
    </JobContext.Provider>
  );
};