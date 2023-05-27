import React, {useState, useEffect, useRef} from 'react';
import CraigCrawler from './Projects/CraigCrawler.jsx';
import Waggl from './Projects/Waggl.jsx';
import MissingPaws from './Projects/MissingPaws.jsx';
import FEC from './Projects/FEC.jsx';
import SDC from './Projects/SDC.jsx';

export default function Carousel (props) {
  // const slides = [CraigCrawler, Waggl, MissingPaws, SDC, FEC]
  const slides = [1, 2, 3, 4, 5]

  const carousel = useRef();

  const getCarouselWidth = () => {
    setCarouselWidth(carousel.current.offsetWidth)
  }

  const [previousSlide, setPreviousSlide] = useState(slides.length - 1);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [nextSlide, setNextSlide] = useState(1)

  const countdown = 3000;

  const [currentMouseX, setMouseX ] = useState(0);
  const [carouselWidth, setCarouselWidth] =useState(0);

  const handleMouseUp = (e) => {
    let difference = e.clientX - currentMouseX;
    let direction = difference/Math.abs(difference)
    setShiftValue(shiftValue + (carouselWidth/slides.length)*direction)
  }

  const handleMouseDown = (e) => {
    setMouseX(e.clientX)
  }

  const move = (direction) => {
    (direction === "right") ?
    setShiftValue(shiftValue - carouselWidth/slides.length) :
    setShiftValue(shiftValue + carouselWidth/slides.length)
  }

  const centerCarousel = () => {
    console.log(carouselWidth)
    setShiftValue(-carouselWidth/(slides.length/2));
  }

  const [shiftValue, setShiftValue] = useState()

  const [shift, setShift] = useState(false)

  useEffect(() => {
    setShiftValue(-carousel.current.offsetWidth/(slides.length/2))
    getCarouselWidth();

    window.addEventListener('resize', getCarouselWidth);
    const timer = setTimeout(
      function () {

      } , countdown)
        return (() => clearTimeout(timer));
  }, [currentSlide])

  return (
    <div>
      <div>
        <button onClick={() => move("left")}
        >Left</button>
        <button onClick={() => move("right")}>Right</button>
      </div>
      <button onClick={centerCarousel}>Center</button>
<div ref={carousel}
      className="carousel"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      >

      {slides.map((slide) =>
      <div className="projectContainer" style={{transform:`translateX(${shiftValue}px)`}}>{slide}</div>)}
    </div>
    </div>

  )
}