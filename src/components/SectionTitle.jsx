import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='md:w-4/12 mx-auto'>
            <h3 className='mb-2 border-y-4 py-4  text-3xl uppercase text-center'>{heading}</h3>
            <p className='mb-4 text-yellow-600 text-center'>--- {subHeading} ---</p>
        </div>
    );
};

export default SectionTitle;