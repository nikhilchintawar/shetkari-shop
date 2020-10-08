import React, { useState } from 'react';
import { isAuthenticated } from "./../auth/helper/auth-data";
import  StripeCheckoutButton  from "react-stripe-checkout";
import { makePayment } from './helper/orderHelper';
import { Link } from 'react-router-dom';
import CustomButton from '../components/custom-button/CustomButton';
import { stripeKey } from '../backend';


const StripeCheckout = ({products, setReload = f => f, reload = undefined}) => {

    const [data, setData] = useState({
        loading: false,
        success: false,
        error: ""
    })

    const token = isAuthenticated() && isAuthenticated().token
    const userId = isAuthenticated() && isAuthenticated().user._id

    const getFinalPrice = () => {
        let amount = 0;
        products.map(product => {
            return amount = parseFloat(amount) + parseFloat(product.price);
        });
        return amount;
    };

    const showStripeButton = () => {
        return isAuthenticated ? (
            <StripeCheckoutButton
            stripeKey={stripeKey}
            token={makePayment}
            amount={getFinalPrice() * 100}
            name="ORDER"
            shippingAddress
            billingAddress
            label="Pay Here"
            />
        ) : (
            <Link to="/signin"><CustomButton type="button">SignIn Here.</CustomButton></Link>
        )
    }

    return (
        <div>
        {showStripeButton()}            
        </div>
    );
};

export default StripeCheckout;