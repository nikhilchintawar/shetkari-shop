import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { isAuthenticated } from '../../auth/helper/auth-data';
import { getAllProducts, deleteProduct } from '../helper/adminApiCall';

const ManageProduct = () => {
    const [products, setProducts] = useState([]);

    const { user: {_id: id}, token } = isAuthenticated();

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
            {
                products.map((product, id) => {
                    return (
                        <div key={id}>
                            <div>
                                <h3>{product.name}</h3>
                            </div>
                            <div>
                                <Link
                                    to={`/farmer/product/update/${product._id}`}
                                >
                                    <span>Update</span>
                                </Link>
                            </div>
                            <div>
                                <button
                                    onClick={() => {
                                        deleteThisProduct(product._id);
                                    }}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default ManageProduct;