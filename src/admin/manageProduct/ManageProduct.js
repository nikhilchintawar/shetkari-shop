import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaUserEdit, FaTrash } from "react-icons/fa"
import { isAuthenticated } from '../../auth/helper/auth-data';
import { getAllProducts, deleteProduct } from '../helper/adminApiCall';
import { API } from '../../backend';


import "./manage-product.styles.css";

const ManageProduct = ({match}) => {
    const [products, setProducts] = useState([]);

    const { user, token } = isAuthenticated();

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
        deleteProduct(productId, user._id, token).then(data => {
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
         Hi <span className="userName">{user.firstName.toUpperCase()}</span>
        </div>
        <div className="manageProducts">
       
            {            
                   products.map((product, id) => {

                    const imageUrl = product 
                    ? `${API}/product/photo/${product._id}`
                    : `../../assets/vegetables.jpg`

                    return (
                        <div key={id} className="manageProduct">
                            <div className="image" style={{backgroundImage: `url(${imageUrl})`}}>

                            <h3 className="productName">{product.name}</h3>    
                            <p>AVAILABLE STOCK: {product.stock} kg</p>
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
                        </div>
                    )
                })
            }
        </div>
        </div>
    );
};

export default ManageProduct;