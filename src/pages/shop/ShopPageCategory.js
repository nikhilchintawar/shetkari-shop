import React, {useEffect, useState} from 'react';
import { getAllProducts } from '../../admin/helper/adminApiCall';
import ProductCard from './ProductCard';

const ShopPageCategory = ({category}) => {

    const [products, setProducts] = useState([]);

    const preload = () => {
        getAllProducts().then(data => {
            if(data.error){
                console.log(data.error);            
            }else{
                setProducts(data);
            }
        });
    };

    useEffect(() => {
        preload()
    }, [])

    return (
        <div className="productCategory">
           {
               products.map((product) => {
                   if(product.category === category){
                       return(
                           <div key={product._id} >
                               <ProductCard product={product} />
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

export default ShopPageCategory;