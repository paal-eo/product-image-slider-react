import Slider from "react-slick";
import './App.css';

import img0 from "./images/a2005_black_front.webp";
import img1 from "./images/a2005_black_face.webp";
import img2 from "./images/a2005_black_side1.webp";
import img3 from "./images/a2005_black_side2.webp";

import { useState } from 'react';
import NavBtn from "./arrow";


function App() {
  const [activeImg, setActiveImg] = useState(0)
  const [firstVisibleImg, setFirstVisibleImg] = useState(0)

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
    speed: 100,
    // don't set this value too high.
    // if it's at 200 it's possible to click the chevron arrows rapidly and the slick slider looses track of where the active image is
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: (
      <NavBtn
        dir="left"
        activeImg={activeImg}
        onSetActive={setActiveImg}
        firstVisibleImg={firstVisibleImg}
        onSetFirstVisibleImg={setFirstVisibleImg}
        images={images}
      />),
    nextArrow: (
      <NavBtn
        dir="right"
        activeImg={activeImg}
        onSetActive={setActiveImg}
        firstVisibleImg={firstVisibleImg}
        onSetFirstVisibleImg={setFirstVisibleImg}
        images={images}
      />),
  }

  return (
    <div className="App">
      <img className='featured' src={images[activeImg].src} alt="" />
      <div className="slide-wrapper">
        <Slider {...settings} id="slider" className="slide-wrapper">
          {images.map(e => {
            return <img key={e.i} onClick={() => setActiveImg(e.i)} className={`thumbnail ${e.i === activeImg ? 'active' : ''}`} src={e.src} alt="" />
          })}
        </Slider>
      </div>
    </div>
  );
}

export default App;
