import React from 'react';
import Banner from './Banner';
import BusinessSummury from './BusinessSummury';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <BusinessSummury></BusinessSummury>
        </div>
    );
};

export default Home;