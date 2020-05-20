import React from 'react';
import './homepage.styles.css';
import HomePageCard from '../../components/card/homepage.card.component';
import VegetableImage from '../../assets/vegetables.jpg';
import GrainImage from '../../assets/grains.jpg';


const HomePage = () => {
    return (
        <div class='cards'>
            <HomePageCard
            imageUrl={VegetableImage}
            title='Vegetables' />
            <HomePageCard
            imageUrl={GrainImage}
            title='Grains' />
        </div>
    )
}

export default HomePage;