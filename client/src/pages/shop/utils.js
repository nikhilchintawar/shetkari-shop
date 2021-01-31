import React from "react"
import { Redirect } from 'react-router-dom';
import { getAllProducts } from '../../admin/helper/adminApiCall';



const getRedirect = redirect => {
    if(redirect){
        return <Redirect to="/user/cart" />
    }
}

const preload = (setProducts) => {
    getAllProducts().then(data => {
        if(data.error){
            console.log(data.error);            
        }else{
            setProducts(data);
        }
    });
};

export { getRedirect, preload}