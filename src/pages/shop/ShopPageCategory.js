import React, {useEffect, useState} from 'react';
import { getAllProducts } from '../../admin/helper/adminApiCall';
import ProductCard from './ProductCard';
import { API } from '../../backend';
import SubmitButton from '../../components/submit-button/submit-button.component';

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
                const imageUrl = product 
                    ? `${API}/product/photo/${product._id}`
                    : `../../assets/vegetables.jpg`
                   if(product.category === category){
                       return(
                           <div key={product._id} >
                            <div className="image" style={{backgroundImage: `url(${imageUrl})`}} />                            
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

export default ShopPageCategory;