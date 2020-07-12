import React from 'react';
import ShopPage from './ShopPage';

import "./shop.css";

const Shop = () => {
    return (
        <div className="shop">
            <h3>GRAINS</h3>
                <ShopPage category="grain" />
            <h3 className="vegetables">VEGETABLES</h3>
                <ShopPage category="vegetable" />
        </div>
    );
};

export default Shop;