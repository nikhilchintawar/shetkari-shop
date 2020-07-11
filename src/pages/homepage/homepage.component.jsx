import React from 'react';
import './homepage.styles.css';
import HomePageCard from '../../components/card/homepage.card.component';
import VegetableImage from '../../assets/vegetables.jpg';
import GrainImage from '../../assets/grains.jpg';
import { Link } from 'react-router-dom';

const HomePage = ({user}) => {
    return (
        <div>
        <div className='cards'>
        <Link to="/vegetables">
            <HomePageCard
            imageUrl={VegetableImage}
            title='Vegetables' />
        </Link>
        <Link to="/grains">  
            <HomePageCard
            imageUrl={GrainImage}
            title='Grains' />
        </Link>      
        </div>
        </div>
    )
}

export default HomePage;