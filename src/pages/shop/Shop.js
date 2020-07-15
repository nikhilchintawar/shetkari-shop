import React from 'react';
import ShopPage from './ShopPage';

import "./shop.css";
import { Link } from 'react-router-dom';

const Shop = () => {
    return (
        <div className="shop">
        <Link to="/grains">
            <h3>GRAINS</h3>
        </Link>
                <ShopPage category="grain" />
        <Link to="/vegetables">
            <h3 className="vegetables">VEGETABLES</h3>
        </Link>
                <ShopPage category="vegetable" />
        </div>
    );
};

export default Shop;