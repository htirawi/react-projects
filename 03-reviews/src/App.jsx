import people from './data';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  // old way of doing it

  // const checkNumber = (number) => {
  //   if (number > people.length - 1) {
  //     return 0;
  //   }
  //   if (number < 0) {
  //     return people.length - 1;
  //   }
  //   return number;
  // };

  const nextPerson = () => {
    setIndex((index) => {
      // const newIndex = index + 1;
      return (index + 1) % people.length;
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      // const newIndex = index - 1;
      return (index - 1 + people.length) % people.length;
      // return checkNumber(newIndex);
    });
  };

  const surpriseMe = () => {
    let randomPerson = Math.floor(Math.random() * people.length);
    if (randomPerson === index) {
      randomPerson = index + 1;
    }
    setIndex(randomPerson % people.length);
    // setIndex(checkNumber(randomPerson));
  };

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="button-container">
          <button onClick={prevPerson} className="prev-btn">
            <FaChevronLeft />
          </button>
          <button onClick={nextPerson} className="next-btn">
            <FaChevronRight />
          </button>
        </div>
        <button onClick={surpriseMe} className="btn btn-hipster">
          surprise me
        </button>
      </article>
    </main>
  );
};
export default App;
