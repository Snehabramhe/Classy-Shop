import React, { useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { IoIosGitCompare } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const ProductInfo = ({ product }) => {
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(1);
    const [showCart, setShowCart] = useState(false);
    const [qty, setQty] = useState(1);

    // Increase
    const increase = () => setQty((q) => q + 1);

    // Decrease
    const decrease = () => setQty((q) => (q > 1 ? q - 1 : 1));

    // Manual input (numbers only)
    const handleChange = (e) => {
        const value = e.target.value;

        // Allow empty while typing
        if (value === "") {
            setQty("");
            return;
        }

        // Only digits
        if (/^\d+$/.test(value)) {
            setQty(Number(value));
        }
    };

    // Prevent 0 or empty on blur
    const handleBlur = () => {
        if (!qty || qty < 1) setQty(1);
    };


    return (
        <div className="flex-1 mt-10">
            <h1 className="text-2xl font-semibold mb-4">
                {product.title}
            </h1>

            <div className="flex gap-3 mb-4">
                <p className="text-gray-500">
                    <span className="text-gray-400"> Brands : </span>{product.brand}
                </p>
                <div>⭐⭐⭐⭐⭐ (4 Reviews)</div>
            </div>

            <div className="flex gap-3 items-center">
                <div className="mb-4">
                    <span className="line-through text-gray-400 mr-2">
                        ₹{product.oldPrice}
                    </span>
                    <span className="text-red-500 text-xl font-semibold">
                        ₹{product.price}
                    </span>
                </div>

                <span className="inline-block mb-4 rounded-full text-md text-gray-500">
                    Available In Stock: <span className="text-green-600 font-bold">147 Items</span>
                </span>
            </div>

            <p className="mb-6 text-gray-600 text-md">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br />
                Non obcaecati ea quis delectus quo necessitatibus, cum mollitia maxime, <br />
                aspernatur accusantium pariatur commodi exercitationem inventore molestiae? <br />
                Earum aliquid libero consequatur tenetur.
            </p>

            {/* Size */}
            <div className="mb-6 flex gap-3">
                <p className="font-medium mt-1">Size:</p>
                <div className="flex gap-2 ">
                    {["S", "M", "L", "XL"].map((size) => (
                        <button
                            key={size}
                            className="border cursor-pointer border-gray-300 px-3 py-1 rounded hover:bg-primary hover:text-white"
                        >
                            {size}
                        </button>
                    ))}
                </div>
            </div>

            <div className="space-y-6">

                {/* Shipping Text */}
                <p className="text-gray-500 text-md">
                    Free Shipping (Est. Delivery Time 2-3 Days)
                </p>

                {/* Quantity + Cart */}
                <div className="flex items-center gap-4">

                    {/* Quantity Stepper */}
                    <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">

                        {/* Input */}
                        <input
                            type="text"
                            value={qty}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            inputMode="numeric"
                            className="w-12 text-center outline-none"
                        />

                        <div className="flex flex-col">
                            <button
                                onClick={increase}
                                className="px-1 py-1 hover:bg-gray-200"
                            >
                                <IoIosArrowUp size={15} />
                            </button>
                            <button
                                onClick={decrease}
                                className="px-1 py-1 hover:bg-gray-200"
                            >
                                <IoIosArrowDown size={15} />
                            </button>
                        </div>
                    </div>

                    {/* Add to Cart Button */}
                    {showCart ? (
                        <button onClick={() => navigate("/cart")} className="flex items-center gap-2 bg-red-500 cursor-pointer text-white px-8 py-3 rounded-lg hover:bg-red-600 transition">
                            <MdOutlineShoppingCart size={22} />
                            GO TO CART
                        </button>
                    ) : (
                        <button
                            onClick={() => setShowCart(true)}
                            className="flex items-center gap-2 bg-red-500 text-white px-8 py-3 rounded-lg cursor-pointer hover:bg-red-600 transition"
                        >
                            <MdOutlineShoppingCart size={22} />
                            ADD TO CART
                        </button>
                    )}
                </div>
                {/* Wishlist & Compare */}
                <div className="flex items-center gap-8 text-gray-600">

                    <div className="flex items-center gap-2 cursor-pointer hover:text-red-500">
                        <IoMdHeartEmpty size={22} />
                        <span>Add to Wishlist</span>
                    </div>

                    <div className="flex items-center gap-2 cursor-pointer hover:text-red-500">
                        <IoIosGitCompare size={22} />
                        <span>Add to Compare</span>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProductInfo;