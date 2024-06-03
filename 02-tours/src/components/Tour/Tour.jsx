import { useState } from 'react';

const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  const text = readMore ? info : `${info.substring(0, 200)}...`;
  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">${price} </span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {text}

          <button
            type="button"
            className="info-btn"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? 'show less' : 'read more'}
          </button>
        </p>
        <button
          type="button"
          onClick={() => removeTour(id)}
          className="btn btn-block delete-btn"
        >
          Not Interested
        </button>
      </div>
    </article>
  );
};

export default Tour;
