import React from 'react';

const FoodCard = ({item}) => {
    const {name, image, price, recipe} = item;
    return (
            <div className="card rounded-none bg-gray-100 w-96 mx-auto">
                <figure className="">
                    <img
                    src={image}
                    alt="Shoes"
                    className="" />
                    <p className='absolute top-0 mr-5 px-3 py-1 mt-4 right-0 bg-slate-900 text-white'>{price}</p>
                </figure>
                <div className="card-body py-5 items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions">
                    <button className="btn text-yellow-600 uppercase bg-gray-200 border border-b-4 border-yellow-600">Add to cart</button>
                    </div>
                </div>
            </div>
    );
};

export default FoodCard;