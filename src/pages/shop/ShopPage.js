import React, {useEffect, useState} from 'react';
import { API } from '../../backend';
import CustomButton from '../../components/custom-button/CustomButton';


import "./shop.css";
import { addToCart, getRedirect, preload } from './utils';

const ShopPage = ({product, category}) => {

    const [products, setProducts] = useState([]);
    const [redirect, setRedirect] = useState(false);

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
                           <div key={product._id} >
                            <div className="image" style={{backgroundImage: `url(${imageUrl})`}} />
                            <span className="add-to-cart">
                                <CustomButton onClick={() => addToCart(product, setRedirect)}>Add To Cart</CustomButton>
                                {getRedirect(redirect)}
                            </span>
                                                  
                            <div className="collection-footer">
                                <span className="name">{product.name}</span>
                                <span className="price">{product.price} RS/KG</span>
                            </div>                            
                           </div>
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