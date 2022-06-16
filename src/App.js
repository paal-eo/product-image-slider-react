import logo from './logo.svg';
import './App.css';

import img0 from "./images/a2005_black_front.webp";
import img1 from "./images/a2005_black_face.webp";
import img2 from "./images/a2005_black_side1.webp";
import img3 from "./images/a2005_black_side2.webp";


import leftArr from "./images/navigation/chevron-left.svg";
import rightArr from "./images/navigation/chevron-right.svg";
import { useState } from 'react';


function App() {



  const chooseNext = () => {

  }

  const images = [
    { i: 0, src: img0 },
    { i: 1, src: img1 },
    { i: 2, src: img2 },
    { i: 3, src: img3 },
  ]

  const [activeImg, setActiveImg] = useState(0)

  return (
    <div className="App">
      <img className='featured' src={images[activeImg].src} alt="" />
      <div className="slide-wrapper">
        <img className='arrow' onClick={() => chooseNext(-1)} src={leftArr} alt="" />
        <div className="slider">
          {images.map(e => {
            return <img onClick={() => setActiveImg(e.i)} className={`thumbnail ${e.i === activeImg ? 'active' : ''}`} src={e.src} alt="" />
          })}
        </div>
        <img className='arrow' onClick={() => chooseNext(1)} src={rightArr} alt="" />
      </div>
    </div>
  );
}

export default App;
