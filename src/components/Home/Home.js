import React from 'react';
import Banner from './Banner';
import BusinessSummury from './BusinessSummury';
import Reviews from './Reviews';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <BusinessSummury></BusinessSummury>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;