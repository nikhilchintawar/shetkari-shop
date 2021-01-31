import React from 'react';
import { API } from '../../backend';


const ImageHelper = ({product}) => {
    const imageUrl = product 
                    ? `${API}/product/photo/${product._id}`
                    : `../../assets/vegetables.jpg`
                    
    return (
        <div>
            <img className="image" src={imageUrl} alt="product" />
        </div>
    );
};

export default ImageHelper;