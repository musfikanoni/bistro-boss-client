import { FaDeleteLeft } from "react-icons/fa6";
import useCart from "../../../hooks/useCart";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Cart = () => {
    const [cart, refetch] = useCart();
    const axiosSecure = useAxiosSecure();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const handleDelete = (id) =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {

            axiosSecure.delete(`/carts/${id}`)
            .then(res => {
                if(res.data.deletedCount > 0){
                  refetch();
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
                }
            })
            }
          });
    }

    return (
        <div>
            <div className="flex justify-evenly">
                <h2 className="text-3xl">Total Orders: {cart.length}</h2>
                <h2 className="text-3xl">Total Orders: {totalPrice}</h2>
                <button className="btn btn-primary">Pay</button>
            </div>
            <div className="overflow-x-auto mt-10">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr className="bg-slate-100">
                        <th></th>
                        <th>Item Image</th>
                        <th>Item Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) =>              
                            <tr>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img src={item.image} />
                                        </div>
                                    </div>
                                </div>
                                </td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <th>
                                    <button onClick={() => handleDelete(item._id)}>
                                        <MdDelete className="text-2xl text-red-500"></MdDelete>
                                    </button>
                                </th>
                            </tr>)
                        }
       
                    </tbody>
                </table>
                </div>
        </div>
    );
};

export default Cart;