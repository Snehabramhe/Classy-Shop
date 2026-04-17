import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const MyOrders = () => {
    const [activeOrder, setActiveOrder] = useState(null);

    const orders = [
        {
            id: "67514d9914da0b78a342b261",
            paymentId: "pay_PTP0qEXFhrtpy8",
            name: "RINKU VERMA",
            phone: "09643990046",
            address: "H No 222 Street No shivam medical ph.",
            pincode: "110053",
            totalAmount: 3800,
            email: "rinkuv.planetc@gmail.com",
            userId: "66e120733d4b2dc4a19335ab",
            status: "Pending",
            date: "2024-12-04",
            products: [
                {
                    id: "67514d9914da0b78a342b261",
                    title: "A-Line Kurti With Sharara & Dupatta",
                    image:
                        "https://res.cloudinary.com/djodhdoyk/image/upload/v1772644933/file.jpg",
                    qty: 2,
                    price: 1300,
                },
            ],
        },
        {
            id: "67514d9914da0b78a342b262",
            paymentId: "pay_PTP0qEXFhrtpy8",
            name: "RINKU VERMA",
            phone: "09643990046",
            address: "H No 222 Street No shivam medical ph.",
            pincode: "110053",
            totalAmount: 3800,
            email: "rinkuv.planetc@gmail.com",
            userId: "66e120733d4b2dc4a19335ab",
            status: "Pending",
            date: "2024-12-04",
            products: [
                {
                    id: "67514d9914da0b78a342b262",
                    title: "A-Line Kurti With Sharara & Dupatta",
                    image:
                        "https://res.cloudinary.com/djodhdoyk/image/upload/v1772644933/file.jpg",
                    qty: 2,
                    price: 1300,
                },
            ],
        },
        {
            id: "67514d9914da0b78a342b263",
            paymentId: "pay_PTP0qEXFhrtpy8",
            name: "RINKU VERMA",
            phone: "09643990046",
            address: "H No 222 Street No shivam medical ph.",
            pincode: "110053",
            totalAmount: 3800,
            email: "rinkuv.planetc@gmail.com",
            userId: "66e120733d4b2dc4a19335ab",
            status: "Pending",
            date: "2024-12-04",
            products: [
                {
                    id: "67514d9914da0b78a342b263",
                    title: "A-Line Kurti With Sharara & Dupatta",
                    image:
                        "https://res.cloudinary.com/djodhdoyk/image/upload/v1772644933/file.jpg",
                    qty: 2,
                    price: 1300,
                },
            ],
        },
        {
            id: "67514d9914da0b78a342b264",
            paymentId: "pay_PTP0qEXFhrtpy8",
            name: "RINKU VERMA",
            phone: "09643990046",
            address: "H No 222 Street No shivam medical ph.",
            pincode: "110053",
            totalAmount: 3800,
            email: "rinkuv.planetc@gmail.com",
            userId: "66e120733d4b2dc4a19335ab",
            status: "Pending",
            date: "2024-12-04",
            products: [
                {
                    id: "67514d9914da0b78a342b264",
                    title: "A-Line Kurti With Sharara & Dupatta",
                    image:
                        "https://res.cloudinary.com/djodhdoyk/image/upload/v1772644933/file.jpg",
                    qty: 2,
                    price: 1300,
                },
                {
                    id: "67514d9914da0b78a342b264",
                    title: "A-Line Kurti With Sharara & Dupatta",
                    image:
                        "https://res.cloudinary.com/djodhdoyk/image/upload/v1772644933/file.jpg",
                    qty: 2,
                    price: 1300,
                },

            ],
        },
    ];

    const toggleOrder = (id) => {
        setActiveOrder(activeOrder === id ? null : id);
    };

    return (
        <div className="bg-white p-6 rounded-lg min-h-120">
            <h2 className="text-xl font-semibold mb-1">My Orders</h2>
            <p className="text-gray-500 mb-4">
                There are{" "}
                <span className="text-red-500 font-semibold">
                    {orders.length}
                </span>{" "}
                orders
            </p>

            <div className="overflow-x-auto rounded-lg shadow-xl">
                <div className="min-w-350 rounded-lg overflow-hidden">
                    {/* TABLE HEADER */}
                    <div className="grid grid-cols-12 gap-10 text-gray-600 items-center px-4 py-4 font-semibold text-sm cursor-pointer bg-gray-50">
                        <div></div>
                        <div>Order ID</div>
                        <div>Payment ID</div>
                        <div>Name</div>
                        <div>Phone</div>
                        <div>Address</div>
                        <div>Pincode</div>
                        <div>Total</div>
                        <div>Email</div>
                        <div>User ID</div>
                        <div>Status</div>
                        <div>Date</div>
                    </div>

                    {/* ORDERS */}
                    {orders.map((order) => (
                        <div key={order.id} className="border-t border-gray-300">

                            {/* ROW */}
                            <div
                                onClick={() => toggleOrder(order.id)}
                                className="grid grid-cols-12 gap-10 items-center px-4 py-3 text-sm cursor-pointer hover:bg-gray-50"
                            >
                                {/* Toggle Icon */}
                                <div className="flex justify-center">
                                    <div className="w-7 h-7 bg-gray-200 rounded-full flex items-center justify-center">
                                        <FaChevronDown
                                            className={`transition-transform ${activeOrder === order.id ? "rotate-180" : ""
                                                }`}
                                        />
                                    </div>
                                </div>

                                <div className="text-red-400 truncate whitespace-nowrap">{order.id}</div>
                                <div className="text-red-400 truncate whitespace-nowrap">{order.paymentId}</div>
                                <div className="truncate whitespace-nowrap">{order.name}</div>
                                <div className="truncate whitespace-nowrap">{order.phone}</div>
                                <div className="truncate whitespace-nowrap">{order.address}</div>
                                <div className="truncate whitespace-nowrap">{order.pincode}</div>
                                <div className="truncate whitespace-nowrap">{order.totalAmount}</div>
                                <div className="truncate whitespace-nowrap">{order.email}</div>
                                <div className="text-red-400 truncate whitespace-nowrap">{order.userId}</div>

                                {/* Status */}
                                <div>
                                    <span className="bg-red-100 text-red-500 px-2 py-1 rounded-full text-xs">
                                        {order.status}
                                    </span>
                                </div>

                                <div>{order.date}</div>
                            </div>

                            {/* EXPAND ROW */}
                            {activeOrder === order.id && (
                                <>

                                    {/* PRODUCT TABLE */}
                                    <div className="grid grid-cols-6 font-semibold text-gray-600 px-4 py-4 text-sm pl-33 bg-gray-50">
                                        <div>Product ID</div>
                                        <div>Product Title</div>
                                        <div>Image</div>
                                        <div>Quantity</div>
                                        <div>Price</div>
                                        <div>Sub Total</div>
                                    </div>

                                    {order.products.map((p, i) => (
                                        <div
                                            key={i}
                                            className="grid grid-cols-6 items-center py-2 border-t border-gray-300 text-sm pl-33 pb-10"
                                        >
                                            <div className="text-red-400">{p.id}</div>
                                            <div className="truncate">{p.title}</div>

                                            <div>
                                                <img
                                                    src={p.image}
                                                    className="w-12 h-12 object-cover rounded"
                                                    alt=""
                                                />
                                            </div>

                                            <div>{p.qty}</div>
                                            <div>{p.price}</div>
                                            <div>{p.qty * p.price}</div>
                                        </div>
                                    ))}

                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MyOrders;