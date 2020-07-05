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

    return(
        <div className="productCard">
        <div className="productCardHeader">
            <span className="productTitle">{product.name}</span>
            <span className="productPrice">$ {product.price}</span>
        </div>    
            {getARedirect(redirect)}
            <SubmitButton 
                type="submit"
                value="Add To Cart"
                onClick={addToCart}
            />
        </div>
    )
};

export default ProductCard;