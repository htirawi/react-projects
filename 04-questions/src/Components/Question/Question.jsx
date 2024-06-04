import { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({ id, title, info, activeId, toggleQuestion }) => {
  //   const [showInfo, setShowInfo] = useState(false);

  const isActive = id === activeId;

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        {/* <button onClick={toggleInfo} className="question-btn"> */}
        <button onClick={() => toggleQuestion(id)} className="question-btn">
          {/* {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />} */}
          {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {isActive && <p>{info}</p>}
    </article>
  );
};

export default Question;
