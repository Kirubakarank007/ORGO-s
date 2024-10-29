import React from "react";
import './RelatedProducts.css'
import all_products from "../Assests/all_products";
import Item from "../Items/Item";

const RelatedProducts = (props)=>{
    const {product}=props;
    return(
        <div className="relatedproducts">
            <h1>Related Products</h1>
            <hr />
            <div className="relatedproducts-item">
                {all_products
                    .filter(item => item.category === product.category && item.id !== product.id)
                    .slice(0, 4) 
                    .map((item, i) => (
                        <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                    ))}
            </div>

        </div>
    )
}

export default RelatedProducts