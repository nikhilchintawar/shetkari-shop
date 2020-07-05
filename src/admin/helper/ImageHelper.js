import React from 'react';
import { API } from '../../backend';



const ImageHelper = ({product}) => {
    const imageUrl = product 
                    ? `${API}/product/photo/${product._id}`
                    : `../../assets/vegetables.jpg`
    console.log(imageUrl)

    return (
        <div>
            <img
            src={imageUrl}
            alt="shetkari"
            style={{maxHeight: "100%", maxWidth: "100%"}}
            />
            
        </div>
    );
};

export default ImageHelper;