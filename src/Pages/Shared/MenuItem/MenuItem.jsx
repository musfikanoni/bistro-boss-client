import React from 'react';

const MenuItem = ({item}) => {
    const {name, image, price, recipe} = item;
    return (
        <div className='flex space-x-2'>
            <img className='w-[120px]'
            style={{borderRadius: '0 200px 200px', height: '104px'}}
             src={image} alt="" />
            <div>
                <h3 className='uppercase'>{name} ---------</h3>
                <p>{recipe}</p>
            </div>
            <p className='text-yellow-500'>${price}</p>
        </div>
    );
};

export default MenuItem;