import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';

function App() {
  const [slider, setSlider] = useState([]);
  const [index, setIndex] = useState(0);

  const showSlider = () => {
    setSlider(data[index]);
  }

  useEffect(() => {
    showSlider();
  });

  const slide = (n) => {
    n + index < 0 ? setIndex(data.length - 1) :
      n + index > data.length - 1 ? setIndex(0) :
        setIndex(n + index)
  }

  useEffect(() => {
    let autoSlide = setInterval(() => {
      slide(+1);
    }, 5000);
    return () => {
      clearInterval(autoSlide);
    };
  }, [index]);

  const { image, name, title, quote } = slider;

  return (
    <section className="section">
      <div className="title">
        <h2><span>/</span>Reviews</h2>
      </div>
      <div className="section-center">
        <article>
          <img src={image} alt={name} className="person-img" />
          <h4></h4>
          <h3 className="title">{title}</h3>
          <p className="text">{quote}</p>
          <FaQuoteRight className='icon' />
        </article>
        <button type='button' className="prev"
          onClick={() => slide(-1)}
        >
          <FiChevronLeft />
        </button>
        <button type='button' className="next"
          onClick={() => slide(+1)}
        >
          <FiChevronRight />
        </button>
      </div>
    </section>

  );
}

export default App;
