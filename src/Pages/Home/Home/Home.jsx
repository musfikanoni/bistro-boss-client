import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import PopularMenu from '../PopularMenu/PopularMenu';
import ChefRecommends from '../ChefRecommends/ChefRecommends';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="max-w-screen-xl mx-auto">
                <Category></Category>
                <PopularMenu></PopularMenu>
                <ChefRecommends></ChefRecommends>
            </div>
        </div>
    );
};

export default Home;