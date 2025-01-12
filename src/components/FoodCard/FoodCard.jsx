import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import useAxiosSecure, { axiosSecure } from "../../hooks/useAxiosSecure";

const FoodCard = ({item}) => {
    const {name, image, price, recipe, _id} = item;
    const axios = useAxiosSecure();
    const navigate = useNavigate();
    const {user} = useAuth();
    const location = useLocation();
    const handleAddToCart = food => {
        if(user && user.email) {
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axiosSecure.post('/carts', cartItem)
            .then(res => {
                console.log(res.data);
                if(res.data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${name} added it to your cart`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
            })
        }
        else{
            Swal.fire({
                title: "You are not Logged In",
                text: "Please login to add to the cart!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, want to login!"
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state: {from: location}})
                }
              });
        }
    }
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
                    <button 
                    onClick={() => handleAddToCart(item)}
                    className="btn text-yellow-600 uppercase bg-gray-200 border border-b-4 border-yellow-600">Add to cart</button>
                    </div>
                </div>
            </div>
    );
};

export default FoodCard;