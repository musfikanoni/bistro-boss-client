import React from 'react';
import { FaAd, FaBars, FaBook, FaEnvelope, FaHome, FaSearch, FaUser, FaUtensils, FaUtensilSpoon, FaVoicemail } from 'react-icons/fa';
import { FaCalendar, FaCartShopping, FaList } from 'react-icons/fa6';
import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../hooks/useCart';

const Dashboard = () => {
    const [cart] = useCart();

    const isAdmin = true;

    return (
        <div className='flex'>
            <div className="w-64 min-h-screen bg-yellow-500">
                <ul className='menu p-4'>
                    {
                        isAdmin ? <>
                            <li>
                                <NavLink to="/dashboard/adminHome">
                                    <FaHome className='text-white'></FaHome>
                                    Admin Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/additems">
                                    <FaUtensils className='text-white'></FaUtensils>
                                    Add Items
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/menageItems">
                                    <FaList className='text-white'></FaList>
                                    Menage Items
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageBookings">
                                    <FaBook className='text-white'></FaBook>
                                    Manage Bookings
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/allUsers">
                                    <FaUser className='text-white'></FaUser>
                                    All Users
                                </NavLink>
                            </li>
                        </> : <>
                            <li>
                            <NavLink to="/dashboard/userHome">
                                <FaHome className='text-white'></FaHome>
                                User Home
                            </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/reservation">
                                    <FaCalendar className='text-white'></FaCalendar>
                                    Reservation
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/cart">
                                    <FaCartShopping className='text-white'></FaCartShopping>
                                    My cart ({cart.length})
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/review">
                                    <FaAd className='text-white'></FaAd>
                                    Addv Review
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/bookings">
                                    <FaList className='text-white'></FaList>
                                    My Bookings
                                </NavLink>
                            </li>
                        </>
                    }
                    {/* shared nav links */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHome className='text-white'></FaHome>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/salad">
                            <FaBars className='text-white'></FaBars>
                            Menu
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/salad">
                            <FaEnvelope className='text-white'></FaEnvelope>
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className='flex-1 p-8'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;