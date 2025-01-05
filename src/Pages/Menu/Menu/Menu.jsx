import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImage from '../../../assets/menu/banner3.jpg';
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/sectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const salad = menu.filter(item => item.category === 'salat');
    const soup = menu.filter(item => item.category === 'soup');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImage} title="Our menu"></Cover>
            <SectionTitle
            subHeading="Don't Miss"
            heading="Today's Offer"></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>
        </div>
    );
};

export default Menu;