import React, { useEffect, useState } from 'react';
import Card from "./../pages/shop/Card";
import { loadCart } from '../pages/helper/cartHelper';
import StripeCheckout from './StripeCheckout';
import ImageHelper from '../admin/helper/imageHelper';


const Cart = () => {

    const [products, setProducts] = useState([])
    const [reload, setReload] = useState(false)

    useEffect(() => {
        setProducts(loadCart())
    }, [reload])
    
    
    const loadAllProducts = () => {

        return (
            <div>
                <h2>This section is to load products</h2>
                {products.map((product, index) => (
                    <div key={product._id}>
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
            <div>
            <StripeCheckout
            products={products}
            setReload={setReload}
            /> </div>
        </div>
    );
};

export default Cart;