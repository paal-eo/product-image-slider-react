import Slider from "react-slick";
import './App.css';

import img0 from "./images/a2005_black_front.webp";
import img1 from "./images/a2005_black_face.webp";
import img2 from "./images/a2005_black_side1.webp";
import img3 from "./images/a2005_black_side2.webp";

import { useState } from 'react';
import NavBtn from "./arrow";


function App() {
  const [activeImg, setActiveImg] = useState(0) // index of image that is showed on big image
  const [leftVisibleImg, setLeftVisibleImg] = useState(0) // index of the image that is currently visible on the left

  const images = [
    { i: 0, src: img0 },
    { i: 1, src: img1 },
    { i: 2, src: img2 },
    { i: 3, src: img3 },
    { i: 4, src: img0 },
    { i: 5, src: img1 },
    { i: 6, src: img2 },
    { i: 7, src: img3 },
  ]

  const settings = {
    infinite: false,
    speed: 0,
    // speed: keep at 0, if it's too high it's possible to
    // click the chevron arrows so rapidly that the slick slider
    // doesn't keep up with the active image.
    swipe: false,
    // keep swipe false. Using the chevron arrows is the only way slick slider may keep track of what the left visible image is
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: (
      <NavBtn
        direction="left"
        activeImg={activeImg}
        onSetActive={setActiveImg}
        leftVisibleImg={leftVisibleImg}
        onSetLeftVisibleImg={setLeftVisibleImg}
        images={images}
      />),
    nextArrow: (
      <NavBtn
        direction="right"
        activeImg={activeImg}
        onSetActive={setActiveImg}
        leftVisibleImg={leftVisibleImg}
        onSetLeftVisibleImg={setLeftVisibleImg}
        images={images}
      />),
  }

  return (
    <div className="App">
      <img className='featured' src={images[activeImg].src} alt="" />
      <div className="slide-wrapper">
        <Slider {...settings} id="slider" className="slide-wrapper">
          {images.map(e => (
            <img key={e.i}
              onClick={() => setActiveImg(e.i)}
              className={`thumbnail ${e.i === activeImg ? 'active' : ''}`}
              src={e.src}
              alt=""
            />)
          )}
        </Slider>
      </div>
    </div>
  );
}

export default App;
