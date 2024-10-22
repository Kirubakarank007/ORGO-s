import React from "react";
import './NewProducts.css';
import all_products from '../Assests/all_products.js'
import Item from "../Items/Item.jsx";

const NewProducts=()=>{
    return(
        <div className="new_products">
            <h1>NEW PRODUCTS</h1>
            <hr />
            <div className="product_item">
                {all_products.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image}  new_price={item.new_price} old_price={item.old_price} />
                })}
                
            </div>

        </div>
    )
}

export default NewProducts