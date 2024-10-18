import React, { useState } from "react";
import './Navbar.css'
import logo from '../Assests/plant.png'
import cart_icon from '../Assests/cart-icon.png'
import { Link } from "react-router-dom";


const Navbar=()=>{

    const[menu,setMenu]=useState("shop")

    return(
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>ORGO's</p>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>setMenu("shop")} > <Link to='/' style={{textDecoration:'none'}}>Shop</Link> {menu==="shop"?<hr/>:<></>} </li>
                <li onClick={()=>setMenu("fruits")}> <Link to='/fruits' style={{textDecoration:'none'}}>fruits</Link>{menu==="fruits"?<hr/>:<></>}</li>
                <li onClick={()=>setMenu("vegtables")}><Link to='/vegtables' style={{textDecoration:'none'}}>vegtables</Link>{menu==="vegtables"?<hr/>:<></>}</li>
                <li onClick={()=>setMenu("more")}><Link to='/more' style={{textDecoration:'none'}}>more</Link>{menu==="more"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link> 
                <Link to='/cart'> <img src={cart_icon} alt="" /> </Link>
                <div className="nav-cart-count">0</div>
            </div>

        </div>
    )
}

export default Navbar