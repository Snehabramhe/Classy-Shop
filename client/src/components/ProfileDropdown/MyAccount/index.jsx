import React from "react";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoHeartOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";

const MyAccount = () => {
    return (
        <>
            {/* RIGHT CONTENT */}
            <div className="flex-1 bg-white rounded-xl shadow p-6 min-h-120">

                <h2 className="text-lg font-semibold mb-4">My Profile</h2>

                <div className="grid grid-cols-2 gap-4">

                    <input
                        type="text"
                        placeholder="Full Name"
                        className="border p-3 rounded-lg outline-none"
                    />

                    <input
                        type="email"
                        placeholder="Email"
                        className="border p-3 rounded-lg outline-none"
                    />

                    <input
                        type="text"
                        placeholder="Phone Number"
                        className="border p-3 rounded-lg outline-none col-span-2"
                    />

                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-6">
                    <button className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600">
                        SAVE
                    </button>

                    <button className="border border-red-500 text-red-500 px-6 py-2 rounded-lg hover:bg-gray-900 hover:text-white hover:border-none">
                        CANCEL
                    </button>
                </div>
            </div>
        </>
    );
};

export default MyAccount;