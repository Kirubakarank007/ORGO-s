import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/Breadcrum/Breadcrum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import DescribtionBox from "../Components/DescriptionBox/DescriptionBox";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";

const Product = ()=>{
    const {all_products}=useContext(ShopContext);
    const {productId}=useParams();
    const product=all_products.find((e)=>e.id === Number(productId))

    return (
        <div>
            <Breadcrum product={product}/>
            <ProductDisplay product={product}/>
            <DescribtionBox/>
            <RelatedProducts product={product}/>
        </div>
    )
}

export default Product