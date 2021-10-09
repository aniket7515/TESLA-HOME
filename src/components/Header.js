import React from 'react'
import './Header.css'
import Teslalogo from '../assets/teslaLogoSmall.svg'
const Header = () => {
    return (
        <div className='header'>
           <div className="header_logo">
               <img src={Teslalogo} alt="Tesla Logo" />

           </div>

           <div className="header_center">
               <p>Model S</p>
               <p>Model 3</p>
               <p>Model X</p>
               <p>Model Y</p>
               <p>Sloar roof</p>
               <p>Solar Panel</p>
               
           </div>

           <div className="header_right">
               <p>shop</p>
               <p>Tesla Account</p>
           </div>

        </div>
    )
}

export default Header
