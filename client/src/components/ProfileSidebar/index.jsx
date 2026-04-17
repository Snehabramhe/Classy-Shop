import React from 'react';
import { NavLink } from "react-router-dom";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoHeartOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";


const ProfileSidebar = () => {
    return (
        <>
            {/* LEFT SIDEBAR */}
            <div className="bg-white rounded-xl shadow p-5 flex-1 min-h-120">

                {/* Profile */}
                <div className="flex flex-col items-center border-b pb-4">
                    <div className="w-20 h-20 rounded-full overflow-hidden mb-3">
                        <img
                            src="https://i.pravatar.cc/150"
                            alt="profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <h2 className="font-semibold">Rajesh Sharma</h2>
                    <p className="text-sm text-gray-500">
                        rinkuv37@gmail.com
                    </p>
                </div>

                {/* Menu */}
                <ul className="mt-4 space-y-2">

                    <li>
                        <NavLink
                            to="/profile"
                            end
                            className={({ isActive }) =>
                                `flex items-center gap-3 p-3 rounded-lg ${isActive
                                    ? "bg-red-50 text-red-500 border-l-4 border-red-500"
                                    : "hover:bg-gray-100"
                                }`
                            }
                        >
                            <IoPersonOutline />
                            My Profile
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/profile/address"
                            className={({ isActive }) =>
                                `flex items-center gap-3 p-3 rounded-lg ${isActive
                                    ? "bg-red-50 text-red-500 border-l-4 border-red-500"
                                    : "hover:bg-gray-100"
                                }`
                            }>
                            <SlLocationPin />
                            Address
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/profile/orders"
                            className={({ isActive }) =>
                                `flex items-center gap-3 p-3 rounded-lg ${isActive
                                    ? "bg-red-50 text-red-500 border-l-4 border-red-500"
                                    : "hover:bg-gray-100"
                                }`
                            }>
                            <MdOutlineShoppingBag />
                            My Orders
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/profile/my-list"
                            className={({ isActive }) =>
                                `flex items-center gap-3 p-3 rounded-lg ${isActive
                                    ? "bg-red-50 text-red-500 border-l-4 border-red-500"
                                    : "hover:bg-gray-100"
                                }`
                            }>
                            <IoHeartOutline />
                            My List
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/login"
                            className={({ isActive }) =>
                                `flex items-center gap-3 p-3 rounded-lg ${isActive
                                    ? "bg-red-50 text-red-500 border-l-4 border-red-500"
                                    : "hover:bg-gray-100"
                                }`
                            }>
                            <IoLogOutOutline />
                            Logout
                        </NavLink>
                    </li>
                </ul>
            </div>

        </>
    )
}

export default ProfileSidebar;