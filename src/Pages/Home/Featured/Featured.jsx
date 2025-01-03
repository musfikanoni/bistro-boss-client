
import SectionTitle from '../../../components/sectionTitle';
import featuredimg from '../../../assets/home/featured.jpg';

const Featured = () => {
    return (
        <div className='featured-item bg-fixed'>
            <div className="pt-16">
                <SectionTitle
                heading={'Featured Item'}
                subHeading={'Check it Out'}></SectionTitle>
            </div>
            <div className='md:flex bg-gray-700 bg-opacity-60 pt-10 pb-24 px-36 md:space-x-10 justify-center items-center'>
                <div>
                    <img className='max-w-lg' src={featuredimg} alt="" />
                </div>
                <div className='text-white'>
                    <p className='uppercase'>Where can i get some?</p>
                    <p className='w-8/12'>Experience a blend of flavors and ambiance at our restaurant, where every dish is crafted with passion. Enjoy fresh, locally sourced ingredients in a warm, inviting atmosphere. Perfect for intimate dinners or lively gatherings. Let your taste buds explore our unique and delicious menu.</p>
                    <button className="btn uppercase mt-3 border-0 text-white border-b-4 border-white btn-outline">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;