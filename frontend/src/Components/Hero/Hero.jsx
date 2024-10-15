import React from "react";
import './Hero.css'
import hand_icon from '../Assests/hand.png'
import logo from '../Assests/image.png'
import arrow_icon from '../Assests/arrow.png'

const Hero =()=>{
    return(
        <div className="hero"> 
            <div className="hero-left">
                <h2>Neww Arrivals Only</h2>
                <div>
                    <div className="hero-hand-icon">
                        <p>New</p>
                        <img src={hand_icon} alt="" />
                    </div>
                    <p>Products</p>
                    <p>for everyOne</p>
                </div>
                <div className="hero-latest-btn">
                    <div>Latest Products</div>
                    <img src={arrow_icon} alt="" />
                </div>
            </div>

            <div className="hero-right">
                <img src={logo} alt="" />
                
            </div>
        </div>
    )
}

export default Hero