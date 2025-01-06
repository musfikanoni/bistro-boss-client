import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImage from '../../../assets/menu/banner3.jpg';
import dessertImage from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImage from '../../../assets/menu/pizza-bg.jpg';
import saladImage from '../../../assets/menu/salad-bg.jpg';
import soupImage from '../../../assets/menu/soup-bg.jpg';
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/sectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImage} title="Our menu"></Cover>
            {/* main menu */}
            <SectionTitle
            subHeading="Don't Miss"
            heading="Today's Offer"></SectionTitle>
            {/* offered menu items */}
            <MenuCategory items={offered}></MenuCategory>
            {/* dessert menu items */}
            <MenuCategory 
            items={desserts}
            title ="Dessert"
            img={dessertImage}></MenuCategory>
            {/* Pizza menu items */}
            <MenuCategory
            items={pizza}
            title ="Pizza"
            img={pizzaImage}></MenuCategory>
            {/* salad menu items */}
            <MenuCategory
            items={salad}
            title ="Salad"
            img={saladImage}></MenuCategory>
            {/* soup menu items */}
            <MenuCategory
            items={soup}
            title ="Soup"
            img={soupImage}></MenuCategory>
        </div>
    );
};

export default Menu;