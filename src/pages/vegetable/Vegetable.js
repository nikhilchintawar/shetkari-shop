import React from 'react';
import ShopPageCategory from "./../shop/ShopPageCategory";
import "./vegetable.style.css";

const Vegetable = () => {
    return (
        <div>
            <h1 className="main-title">VEGETABLE</h1>
            <ShopPageCategory category="vegetable" />
        </div>
    );
};

export default Vegetable;