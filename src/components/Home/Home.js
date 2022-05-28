import React from 'react';
import Banner from './Banner';
import BusinessSummury from './BusinessSummury';
import ExtraSection1 from './ExtraSection1';
import Reviews from './Reviews';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <BusinessSummury></BusinessSummury>
            <Reviews></Reviews>
            <ExtraSection1></ExtraSection1>
        </div>
    );
};

export default Home;