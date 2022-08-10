import'./showcase.css'
import'../../imageslider/imageSlider.css'
import React  from "react";
// import Bg from '../../assets/MobileLandscapeView.svg'
// import flowers from '../../assets/flowers.svg'
import ImageSlider from '../../imageslider/ImageSlider';
import { SliderData } from '../../imageslider/SliderData';


const Showcase = () => { 
  
  return (
    <div className="palila__showcase-container">
      <ImageSlider slides={SliderData} />
  </div>
  )
}

export default Showcase