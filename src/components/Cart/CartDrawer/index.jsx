import React from "react";
import { X, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const cartItems = [
    {
        id: 1,
        name: "A-Line Kurti With Sharara & Dupatta",
        price: 25,
        qty: 2,
        image: "https://res.cloudinary.com/djodhdoyk/image/upload/v1772644933/file_1734690981297_011618e4-4682-4123-be80-1fb7737d34ad1714702040213RARERABBITMenComfortOpaqueCasualShirt1_w2v2lf.jpg",
    },
    {
        id: 2,
        name: "A-Line Kurti With Sharara & Dupatta",
        price: 25,
        qty: 2,
        image: "https://res.cloudinary.com/djodhdoyk/image/upload/v1772644933/file_1734690981297_011618e4-4682-4123-be80-1fb7737d34ad1714702040213RARERABBITMenComfortOpaqueCasualShirt1_w2v2lf.jpg",
    },
    {
        id: 3,
        name: "A-Line Kurti With Sharara & Dupatta",
        price: 25,
        qty: 2,
        image: "https://res.cloudinary.com/djodhdoyk/image/upload/v1772644933/file_1734690981297_011618e4-4682-4123-be80-1fb7737d34ad1714702040213RARERABBITMenComfortOpaqueCasualShirt1_w2v2lf.jpg",
    },
];

const CartDrawer = ({ isOpen, onClose }) => {
    const navigate = useNavigate();
    const subtotal = cartItems.reduce(
        (acc, item) => acc + item.price * item.qty,
        0
    );

    const handleNavigate = (path) => {
        onClose();
        setTimeout(() => navigate(path), 300);
    };

    return (
        <>
            {/* Overlay */}
            <div
                className={`fixed inset-0 bg-black/40 z-40 transition ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                onClick={onClose}
            />

            {/* Drawer */}
            <div
                className={`fixed top-0 right-0 h-full w-95.5 bg-white z-50 shadow-lg transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                {/* Header */}
                <div className="flex justify-between items-center p-4 border-b">
                    <h2 className="font-semibold text-lg">
                        Shopping Cart (1)
                    </h2>
                    <button onClick={onClose}>
                        <X />
                    </button>
                </div>

                {/* Items */}
                <div className="p-4 space-y-4 overflow-y-auto h-[60%]">
                    {cartItems.map((item) => (
                        <div
                            key={item.id}
                            className="flex gap-3 border-b pb-3"
                        >
                            <img
                                src={item.image}
                                alt=""
                                className="w-16 h-16 rounded-md object-cover"
                            />

                            <div className="flex-1">
                                <p className="text-sm font-medium">
                                    {item.name}
                                </p>

                                <div className="flex justify-between items-center mt-1">
                                    <p className="text-sm text-gray-500">
                                        Qty : {item.qty}
                                    </p>
                                    <p className="text-red-500 font-semibold">
                                        ${item.price}
                                    </p>
                                </div>
                            </div>

                            <button className="text-gray-400 hover:text-red-500">
                                <Trash2 size={18} />
                            </button>
                        </div>
                    ))}
                </div>

                {/* Summary */}
                <div className="p-4 border-t">
                    <div className="flex justify-between text-sm mb-2">
                        <span>Subtotal</span>
                        <span className="text-red-500 font-semibold">
                            ${subtotal}
                        </span>
                    </div>

                    <div className="flex justify-between text-sm mb-2">
                        <span>Shipping</span>
                        <span className="text-red-500">$8.00</span>
                    </div>

                    <div className="flex justify-between font-semibold border-t pt-2 mt-2">
                        <span>Total</span>
                        <span className="text-red-500">
                            ${subtotal + 8}
                        </span>
                    </div>

                    <div className="flex gap-3 mt-4">
                        <button
                            onClick={() => handleNavigate("/cart")}
                            className="w-1/2 bg-red-500 text-white py-2 rounded-md"
                        >
                            View Cart
                        </button>

                        <button
                            onClick={() => handleNavigate("/checkout")}
                            className="w-1/2 border border-red-500 text-red-500 py-2 rounded-md"
                        >
                            Checkout
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CartDrawer;