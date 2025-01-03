import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="max-w-screen-xl mx-auto">
                <Category></Category>
            </div>
        </div>
    );
};

export default Home;