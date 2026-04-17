import React from "react";
import { IoClose } from "react-icons/io5";

const MyList = () => {

    const products = [1, 2, 3]; // dummy

    return (
        <div className="bg-white p-4 rounded-lg">

            <h2 className="text-xl font-semibold mb-1">My List</h2>
            <p className="text-gray-500 mb-4">
                There are <span className="text-red-500 font-semibold">2</span> products in your My List
            </p>

            <div className="flex flex-col gap-4">
                {products.map((item, i) => (
                    <div key={i} className="border-gray-200  border-t border-b shadow-lg rounded-lg p-4 flex gap-4 items-center relative">

                        {/* IMAGE */}
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/1040/1040230.png"
                            className="w-24 h-24 object-contain bg-yellow-100 rounded"
                        />

                        {/* DETAILS */}
                        <div className="flex-1">
                            <p className="text-sm text-gray-500">Sangria</p>
                            <h3 className="font-semibold">
                                A-Line Kurti With Sharara & Dupatta
                            </h3>

                            {/* RATING */}
                            <div className="text-yellow-500 text-sm">★★★★★</div>

                            {/* PRICE */}
                            <div className="flex items-center gap-3 mt-1">
                                <span className="font-semibold">$58.00</span>
                                <span className="line-through text-gray-400">$58.00</span>
                                <span className="text-red-500 font-semibold">55% OFF</span>
                            </div>

                            {/* BUTTON */}
                            <button className="mt-2 bg-red-500 text-white px-4 py-1 rounded">
                                ADD TO CART
                            </button>
                        </div>

                        {/* REMOVE BUTTON */}
                        <IoClose className="absolute top-3 right-3 cursor-pointer text-gray-500" size={20} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyList;