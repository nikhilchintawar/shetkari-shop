import React, { useState } from "react";

import CustomButton from "../../components/custom-button/CustomButton";
import {  getRedirect} from './utils';
import { removeItemFromCart, addItemToCart } from "../helper/cartHelper";

const Card = ({
    product,
    imageUrl,
    addtoCart = true,
    removeFromCart = false,
    setReload = f => f,
    //   function(f){return f}
    reload = undefined
  }) => {
    const [redirect, setRedirect] = useState(false);
    const [count, setCount] = useState(product.count);
  
    const addToCart = () => {
      addItemToCart(product, () => setRedirect(true))
  }

    const showAddToCart = addtoCart => {
        return (
          addtoCart && (
            <CustomButton
              onClick={addToCart}
            >
              Add to Cart
            </CustomButton>
          )
        );
      };

      const showRemoveFromCart = removeFromCart => {
        return (
          removeFromCart && (
            <CustomButton
              onClick={() => {
                removeItemFromCart(product._id);
                setReload(!reload);
              }}
            >
              Remove from cart
            </CustomButton>
          )
        );
      };

    return (
        <div key={product._id} >
            <div className="image" style={{backgroundImage: `url(${imageUrl})`}} />
            <span className="add-to-cart">
                {showAddToCart(addtoCart)}
                {showRemoveFromCart(removeFromCart)}
                {getRedirect(redirect)}
            </span>
                                    
            <div className="collection-footer">
                <span className="name">{product.name}</span>
                <span className="price">{product.price} RS/KG</span>
            </div>                            
        </div>
    );
  }

export default Card;