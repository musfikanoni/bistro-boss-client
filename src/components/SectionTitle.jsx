import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='md:w-4/12 mx-auto'>
            <p className='mb-4 text-yellow-600 text-center'>--- {subHeading} ---</p>
            <h3 className='mb-5 border-y-4 py-4 text-3xl uppercase text-center'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;