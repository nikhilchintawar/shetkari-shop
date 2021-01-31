import React from 'react';
import ShopPage from "./../shop/ShopPage";
import "./vegetable.style.css";

const Vegetable = () => {
    return (
        <div className="veg">
            <h1 className="main-title">VEGETABLE</h1>
            <ShopPage category="vegetable" />
        </div>
    );
};

export default Vegetable;