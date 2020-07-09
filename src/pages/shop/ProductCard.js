import React, {useState} from 'react';
import { Redirect } from 'react-router-dom';
import { addItemToCart, removeItemFromCart } from "./../helper/cartHelper";
import SubmitButton from '../../components/submit-button/submit-button.component';

import "./productCard.css";

const ProductCard = ({
    product,
    removeFromCart = false,
    setReload = f => f,
    reload = undefined
}) => {

    const [redirect, setRedirect] = useState(false);
    const [count, setCount] = useState(product.count)
    
    const addToCart = () => {
        addItemToCart(product, () => setRedirect(true))
    };

    const getARedirect = redirect => {
        if(redirect){
            return <Redirect to="/cart" />
        }
    };

    //TODO: needed to work on produc card
    return(
        <div className="productCard">
        <div className="productCardHeader">
            {/* <span className="productTitle">{product.name}</span>
            <span className="productPrice">$ {product.price}</span> */}
        </div>    
            {getARedirect(redirect)}
        </div>
    )
};

export default ProductCard;