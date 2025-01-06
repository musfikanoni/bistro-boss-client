import cardImage from '../../../assets/home/card_img.jpg';
import SectionTitle from '../../../components/sectionTitle';

const ChefRecommends = () => {
    return (
        <>
            <SectionTitle 
            heading={'Should Try'}
            subHeading={'Chef Recommends'}></SectionTitle>
            <div className='mb-12 lg:grid-cols-3 grid md:grid-cols-2 grid-cols-1'>
                <div className="card rounded-none bg-gray-100 w-96">
                <figure className="">
                    <img
                    src={cardImage}
                    alt="Shoes"
                    className="" />
                </figure>
                <div className="card-body py-5 items-center text-center">
                    <h2 className="card-title">Caeser Salad</h2>
                    <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                    <div className="card-actions">
                    <button className="btn text-yellow-600 uppercase bg-gray-200 border border-b-4 border-yellow-600">Add to cart</button>
                    </div>
                </div>
                </div>
                <div className="card rounded-none bg-gray-100 w-96">
                <figure className="">
                    <img
                    src={cardImage}
                    alt="Shoes"
                    className="" />
                </figure>
                <div className="card-body py-5 items-center text-center">
                    <h2 className="card-title">Caeser Salad</h2>
                    <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                    <div className="card-actions">
                    <button className="btn text-yellow-600 uppercase bg-gray-200 border border-b-4 border-yellow-600">Add to cart</button>
                    </div>
                </div>
                </div>
                <div className="card rounded-none bg-gray-100 w-96">
                <figure className="">
                    <img
                    src={cardImage}
                    alt="Shoes"
                    className="" />
                </figure>
                <div className="card-body py-5 items-center text-center">
                    <h2 className="card-title">Caeser Salad</h2>
                    <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                    <div className="card-actions">
                    <button className="btn text-yellow-600 uppercase bg-gray-200 border border-b-4 border-yellow-600">Add to cart</button>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
};

export default ChefRecommends;