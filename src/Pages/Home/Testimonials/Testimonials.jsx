import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/sectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'


const Testimonials = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])
    
    return (
        <section className='my-20 max-w-screen-xl mx-auto'>
            <SectionTitle
            subHeading={'Testimonials'}
            heading={'What Our Client Say'}></SectionTitle>

        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {
                reviews.map(review => <SwiperSlide key={review._id}>
                    <div className="m-24 flex flex-col items-center mx-24 my-16">
                        <Rating
                        style={{ maxWidth: 180 }}
                        value={review.rating}
                        readOnly
                        />
                        <i class="text-7xl pt-5 fa-solid fa-quote-left"></i>
                        <p className='text-center py-5'>{review.details}</p>
                        <h3 className='text-2xl text-orange-400 text-center'>{review.name}</h3>
                    </div>
                </SwiperSlide>)
            }
        </Swiper>
        </section>
        
    );
};

export default Testimonials;