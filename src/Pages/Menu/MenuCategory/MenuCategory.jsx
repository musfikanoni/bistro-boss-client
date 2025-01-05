import React from 'react';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const MenuCategory = ({items}) => {
    return (
        <div className='max-w-screen-xl mx-auto mb-12'>
            <div className="grid md:grid-cols-2 gap-10">
        {
            items.map(item => <MenuItem
            key={item._id}
            item = {item}></MenuItem>)
        }
        </div>
        </div>
    );
};

export default MenuCategory;