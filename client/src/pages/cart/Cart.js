import React, { useState, useEffect } from 'react';

import './cart.styles.css';
import { loadCart } from './../helper/cartHelper';
import CartItem from "./../../components/cartitem/CartItem";
import StripeCheckout from '../../order/StripeCheckout';


const Cart = () => {

    const [products, setProducts] = useState([])
    const [reload, setReload] = useState(false)

    useEffect(() => {
        setProducts(loadCart());
    }, [reload])


    return (
        
            <div className="checkout-page">
                <div className='checkout-header'>
                    <div className='header-block'>
                        <span>Product</span>
                    </div>
                    <div className='header-block'>
                        <span>Description</span>
                    </div>
                    <div className='header-block'>
                        <span>Quantity</span>
                    </div>
                    <div className='header-block'>
                        <span>Price</span>
                    </div>
                    <div className='header-block'>
                        <span>Remove</span>
                    </div>
                </div>

                        {
                        products.map((product, index) => (
                            <CartItem 
                                key={index} 
                                product={product}
                                reload={reload}
                                setReload={setReload} />
                        ))
                        }
                    {products.length > 0 ? 
                        ''  
                     : <h4>No products</h4>}

                <div>
                    {products.length > 0 ? 
                    <StripeCheckout 
                        products={products}
                        setReload={setReload}
                    />
                     : <h3>Please login or add something in cart.</h3>}
                    <div className='test-warning'>
                        *Please use the following test credit card for payments*
                        <br />
                        4111 1111 1111 1111 - Exp: any future date
                    </div>
                </div>
            </div>
        
    );
};

export default Cart;