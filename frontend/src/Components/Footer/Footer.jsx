import React from "react";
import './Footer.css';
import shop_icon from '../Assests/shop.png'
import facebook_icon from '../Assests/facebook.png'
import instagram_icon from '../Assests/instagram.png'
import whatsapp_icon from '../Assests/whatsapp.png'

const Footer=()=>{
    return(
        <div className="footer">
            <div className="footer-logo">
                <img src={shop_icon} alt="" />
                <p>SHOPPER</p>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icons">
                <div className="footer-icons-container">
                    <img src={facebook_icon} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={instagram_icon} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={whatsapp_icon} alt="" />
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright@2024 - All Right Reserved</p>
            </div>

        </div>
    )
}

export default Footer;