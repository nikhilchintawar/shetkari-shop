import React, {useEffect, useState} from 'react';
import { API } from '../../backend';

import "./shop.css";
import { preload } from './utils';
import Card from './Card';

const ShopPage = ({category}) => {

    const [products, setProducts] = useState([]);
    const [reload, setReload] = useState(false)

    useEffect(() => {
        preload(setProducts)
    }, [])

    return (
        <div className="productCategory">
           {
               products.map((product) => {
                const imageUrl = product 
                    ? `${API}/product/photo/${product._id}`
                    : `../../assets/vegetables.jpg`

                   if(product.category === category){
                       return(
                           <Card 
                           key={product._id}
                           product={product}
                           imageUrl={imageUrl}
                           removeFromCart={false}
                           addToCart={true}
                           setReload= {setReload}
                           reload={reload}
                           />
                       )
                   } else{
                       return(
                           ""
                       )
                   }
               })
           } 
        </div>
    );
};

export default ShopPage;