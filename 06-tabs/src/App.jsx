import { useState, useEffect } from 'react';
import JobInfo from './components/JobInfo/JobInfo';
import ButtonContainer from './components/ButtonContainer/ButtonContainer';
const url = 'https://www.course-api.com/react-tabs-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [currentJob, setCurrentJob] = useState(1);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    console.log(newJobs);
    setJobs(newJobs);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (isLoading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    );
  }

  return (
    <section className="jobs-center">
      <ButtonContainer
        jobs={jobs}
        currentJob={currentJob}
        setCurrentJob={setCurrentJob}
      />
      <JobInfo jobs={jobs} currentJob={currentJob} />
    </section>
  );
};
export default App;
