import React from 'react';
import FoodCard from '../../../components/FoodCard/FoodCard';

const OrderTab = ({ items }) => {
    return (
        <div className='lg:grid-cols-3 grid md:grid-cols-2 grid-cols-1'>
            {
                items.map(item => <FoodCard
                key={item._id} item={item}></FoodCard>)
            }
        </div>
    );
};

export default OrderTab;