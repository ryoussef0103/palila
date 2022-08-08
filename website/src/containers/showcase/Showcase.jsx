import'./showcase.css'
import React  from "react";
import Bg from '../../assets/MobileLandscapeView.svg'
import flowers from '../../assets/flowers.svg'



// const images = [
//  Bg, flowers, Bg, flowers
// ]

const Showcase = () => {

  // const onImageClick = () => {
  //   try {


  //   }
  // }
 
  return (
    <div className="palila__showcase-container">
    
        <img src={Bg} alt=""></img>
        <img src={flowers} alt=""></img>
        <img src={Bg} alt=""></img>
        <img src={flowers} alt=""></img>
        <img src={Bg} alt=""></img>
        <img src={flowers} alt=""></img>
        <img src={Bg} alt=""></img>
        <img src={flowers} alt=""></img>
      
      {/* <div className="palila__showcase-container">
      
         </div> */}
  </div>
  )
}

export default Showcase