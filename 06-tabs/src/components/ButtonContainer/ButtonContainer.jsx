const ButtonContainer = ({ jobs, currentJob, setCurrentJob }) => {
  return (
    <div className="btn-container">
      {jobs.map((job, index) => {
        const { id, company } = job;
        return (
          <button
            key={id}
            className={index === currentJob ? 'job-btn active-btn' : 'job-btn'}
            onClick={() => setCurrentJob(index)}
          >
            {company}
          </button>
        );
      })}
    </div>
  );
};
export default ButtonContainer;
