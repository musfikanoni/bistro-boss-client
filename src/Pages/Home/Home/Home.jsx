import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import PopularMenu from '../PopularMenu/PopularMenu';
import ChefRecommends from '../ChefRecommends/ChefRecommends';
import Featured from '../Featured/Featured';
import Testimonials from '../Testimonials/Testimonials';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <div className="max-w-screen-xl mx-auto">
                <Category></Category>
                <PopularMenu></PopularMenu>
                <ChefRecommends></ChefRecommends>
            </div>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;