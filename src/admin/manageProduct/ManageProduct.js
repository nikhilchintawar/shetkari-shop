import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaUserEdit, FaTrash } from "react-icons/fa"
import { isAuthenticated } from '../../auth/helper/auth-data';
import { getAllProducts, deleteProduct } from '../helper/adminApiCall';

import "./manage-product.styles.css";
import ImageHelper from '../helper/ImageHelper';

const ManageProduct = ({match}) => {
    const [products, setProducts] = useState([]);

    const { user: {_id: id, firstName}, token } = isAuthenticated();

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
        preload();
        
    }, [])

    const deleteThisProduct = (productId) => {
        deleteProduct(productId, id, token).then(data => {
            if(data.error){
                console.log(data.error);
                
            }else{
                preload();
            }
        })
}

    return (
        <div>
        <div className="createProductTitle">
         Hi <span className="userName">{firstName.toUpperCase()}</span>
        </div>
        <div className="manageProducts">
       
            {            
                   products.map((product, id) => {
                    return (
                        <div key={id} className="manageProduct">
                            <div>
                            {/* TODO: needed to fetch the image */}
                            {/* <ImageHelper product={product._id} /> */}
                                <h3 className="productName">{product.name}</h3>
                              
                            </div>

                            {/* update and delete button */}
                            <div className="updateAndDeleteButton">
                            <div>
                                <Link
                                    to={`/farmer/product/update/${product._id}`}
                                >
                                    <button className="manageButton"><FaUserEdit size={15} /></button>
                                </Link>
                            </div>
                            <div>
                                <button
                                    onClick={() => {
                                        deleteThisProduct(product._id);
                                    }}
                                    className="manageButton"
                                >
                                    <FaTrash size={15} />
                                </button>
                            </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        </div>
    );
};

export default ManageProduct;