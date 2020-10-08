import React, { useEffect, useState } from 'react';
import Card from "./../pages/shop/Card";
import { loadCart } from '../pages/helper/cartHelper';
import StripeCheckout from './StripeCheckout';
import ImageHelper from '../admin/helper/imageHelper';

import "./cart.css";

const Cart = () => {

    const [products, setProducts] = useState([])
    const [reload, setReload] = useState(false)

    useEffect(() => {
        setProducts(loadCart())
    }, [reload])
    
    
    const loadAllProducts = () => {

        return (
            <div>
                <h2 className="title">Checkout Page</h2>
                {products.map((product, index) => (
                    <div className="checkout-card" key={product._id}>
                    <ImageHelper product={product} />
                    <Card 
                    key={index}
                    product={product}
                    removeFromCart={true}
                    addtoCart={false}
                    setReload= {setReload}
                    reload={reload}
                     />
                    </div>
                ))}
            </div>
        )
    }

    return (
        <div>
            <div>{loadAllProducts()}</div>
            <div className="stripe-checkout">
            <StripeCheckout
            products={products}
            setReload={setReload}
            /></div>
        </div>
    );
};

export default Cart;