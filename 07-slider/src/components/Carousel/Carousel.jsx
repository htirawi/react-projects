import { useEffect, useState } from 'react';
import { FaQuoteRight } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { shortList, list, longList } from '../../data';

const Carousel = () => {
  const [people, setPeople] = useState(list);
  const [currentPerson, setCurrentPerson] = useState(0);

  const prevSlide = () => {
    setCurrentPerson((oldPerson) => {
      const result = (oldPerson - 1 + people.length) % people.length;
      return result;
    });
  };

  const nextSlide = () => {
    setCurrentPerson((oldPerson) => {
      const result = (oldPerson + 1) % people.length;
      return result;
    });
  };

  useEffect(() => {
    const sliderId = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(sliderId);
  }, [currentPerson]);

  return (
    <section className="slider-container">
      {people.map((person, personIdx) => {
        const { id, image, name, title, quote } = person;
        return (
          <article
            key={id}
            className="slide"
            style={{
              transform: `translateX(${100 * (personIdx - currentPerson)}%)`,
              opacity: personIdx === currentPerson ? 1 : 0,
              visibility: personIdx === currentPerson ? 'visible' : 'hidden',
            }}
          >
            <img src={image} alt={name} className="person-img" />
            <h5 className="name">{name}</h5>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        );
      })}
      <button type="button" onClick={prevSlide} className="prev">
        <FiChevronLeft />
      </button>
      <button type="button" onClick={nextSlide} className="next">
        <FiChevronRight />
      </button>
    </section>
  );
};
export default Carousel;
