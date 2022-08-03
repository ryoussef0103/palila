import React from 'react'
// import palilaPoster from '../../assets/palilaPoster.svg'
import './header.css'
import Background from '../../assets/DesktopView.svg'



const Header = () => {
  return (
    <div className="palila__header text-center text-white d-flex" 
    style={{backgroundImage: `url(${Background})`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '1276px'
  }} 
    >
      <div className="palila__header-content">
        <h1>Text</h1>
      </div>
      </div>
 

   
  )
}

export default Header