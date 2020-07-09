import React from 'react';
import ShopPageCategory from './ShopPageCategory';

import "./shop.css";

const Shop = () => {
    return (
        <div className="shop">
            <h3>GRAINS</h3>
                <ShopPageCategory category="grain" />
            <h3 className="vegetables">VEGETABLES</h3>
                <ShopPageCategory category="vegetable" />
        </div>
    );
};

export default Shop;