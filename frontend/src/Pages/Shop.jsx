import React from "react";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Offer from "../Components/Offer/Offer";
import NewProducts from "../Components/NewProducts/NewProducts";
import NewsLetter from "../Components/NewsLetter/NewsLetter";

const Shop = ()=>{
    return (
        <div>
            <Hero/>
            <Popular/>
            <Offer/>
            <NewProducts/>
            <NewsLetter/>

        </div>
    )
}

export default Shop