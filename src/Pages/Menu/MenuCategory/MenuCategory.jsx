import React from 'react';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import Cover from '../../Shared/Cover/Cover';
import { Link } from 'react-router-dom';


const MenuCategory = ({items, title, img}) => {
    return (
        
        <div className='max-w-screen-xl mx-auto pt-8 mb-12'>
        { title && <Cover img={img} title={title}></Cover> }
            <div className="grid md:grid-cols-2 gap-10 my-16">
            {
                items.map(item => <MenuItem
                key={item._id}
                item = {item}></MenuItem>)
            }
            </div>
            <Link to={`/order/${title}`}>
                <button className="btn uppercase mt-3 bg-neutral text-white">Order Now</button>
            </Link>
        </div>
    );
};

export default MenuCategory;