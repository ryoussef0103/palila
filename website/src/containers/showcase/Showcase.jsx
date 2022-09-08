import'./showcase.css'
import'../../imageslider/imageSlider.css'
import React  from "react";
// import Bg from '../../assets/MobileLandscapeView.svg'
// import flowers from '../../assets/flowers.svg'
import ImageSlider from '../../imageslider/ImageSlider';
import { SliderData } from '../../imageslider/SliderData';


const Showcase = () => { 
  
  return (
    <div className="palila__showcase">
      <div className="palila__showcase-text">
        <h1>Onze boeketten</h1>
        <p>Hier zijn een aantal voorbeelden te zien</p>
        
      </div>
      
    <div className="palila__showcase-container">
      <ImageSlider slides={SliderData} />
      </div>
      </div>
  )
}

export default Showcase