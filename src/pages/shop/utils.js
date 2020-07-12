import React from "react"
import { Redirect } from 'react-router-dom';
import { addItemToCart } from "../helper/cartHelper";
import { getAllProducts } from '../../admin/helper/adminApiCall';

const addToCart = (product, setRedirect) => {
    addItemToCart(product, () => setRedirect(true))
}

const getRedirect = redirect => {
    if(redirect){
        return <Redirect to="/cart" />
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

export {addToCart, getRedirect, preload}