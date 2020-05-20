import React from 'react';
import './homepage.card.styles.css';

const HomePageCard = ({imageUrl, title}) => {
    return (
        <div className='card' style={{backgroundImage: `url(${imageUrl})`}}>
            <h2 className='title'>{title}</h2>
        </div>
    )
}

export default HomePageCard;
