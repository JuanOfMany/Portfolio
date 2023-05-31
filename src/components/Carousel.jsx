import React, {useState, useEffect, useRef} from 'react';
import CraigCrawler from './Projects/CraigCrawler.jsx';
import Waggl from './Projects/Waggl.jsx';
import MissingPaws from './Projects/MissingPaws.jsx';
import FEC from './Projects/FEC.jsx';
import SDC from './Projects/SDC.jsx';

export default function Carousel (props) {
  // const slides = [CraigCrawler, Waggl, MissingPaws, SDC, FEC]
  const slides = [1, 2, 3, 4, 5]

  const [displayedSlides, setDisplayedSlides] = useState([1, 2, 3])

  const shiftUpToN = (direction, n, maxN) => {
    console.log(direction, typeof(direction), n)
    if (direction === "right") {
      if (n === maxN) {
        console.log('hit max')
        return 0;
      } else {
        console.log('didnt hit max')
        console.log(n, n + 1)
        return n + 1;
      }
    } else if (direction === "left") {
      if (n === 0) {
        return maxN;
      } else {
        return n - 1;
      }
    }
  }

  const newMove = (direction) => {
    console.log(displayedSlides, "BEFORE")
    setDisplayedSlides(displayedSlides.map((n) => slides[shiftUpToN(direction, slides.indexOf(n), slides.length - 1)]))
    console.log(displayedSlides, "AFTER");
  }

  const carousel = useRef();

  const getCarouselWidth = () => {
    setCarouselWidth(carousel.current.offsetWidth)
  }

  const countdown = 3000;

  const [currentMouseX, setMouseX ] = useState(0);
  const [carouselWidth, setCarouselWidth] =useState(0);

  const handleMouseUp = (e) => {
    let difference = e.clientX - currentMouseX;
    let direction = difference/Math.abs(difference)
    setShiftValue(shiftValue + (carouselWidth/displayedSlides.length)*direction)
  }

  const handleMouseDown = (e) => {
    setMouseX(e.clientX)
  }

  const move = (direction) => {
    (direction === "right") ?
    setShiftValue(shiftValue - carouselWidth/displayedSlides.length) :
    setShiftValue(shiftValue + carouselWidth/displayedSlides.length)
  }

  const centerCarousel = () => {
    console.log(carouselWidth)
    setShiftValue(-carouselWidth/(displayedSlides.length/2));
  }

  const [shiftValue, setShiftValue] = useState(0)

  const [shift, setShift] = useState(false)

  useEffect(() => {
    // setShiftValue(-carousel.current.offsetWidth/(displayedSlides.length/2))
    getCarouselWidth();

  }, [])

  return (
    <div>
      <div>
        <button onClick={() => newMove("left")}
        >Left</button>
        <button onClick={() => newMove("right")}>Right</button>
      </div>
      <button onClick={centerCarousel}>Center</button>
      <div ref={carousel}
      className="carousel"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      style={{display:"flex", justifyContent:"center", width: "300vw",
      justifyContent: "space-around"}}
      >

      {displayedSlides.map((slide) =>
      <div className="projectContainer" style={{transform:`translateX(${shiftValue}px)`}}>{slide}</div>)}
    </div>
    </div>

  )
}