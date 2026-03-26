import React, { useState } from "react";

const addresses = [
  {
    id: 1,
    type: "Home",
    name: "RINKU VERMA",
    address:
      "H No 222 Street No 6 Adarsh Mohalla Delhi India Delhi near govt school",
    phone: "+919873798202",
  },
  {
    id: 2,
    type: "Home",
    name: "RINKU VERMA",
    address:
      "H No 222 Street No 6 Adarsh Mohalla Delhi India Delhi near govt school",
    phone: "+919873798202",
  },
];

const orderItems = [
  {
    id: 1,
    name: "Fortune Sunlite Refined...",
    price: 99,
    image: "https://images.meesho.com/images/products/636161475/w7zan_512.avif?width=360",
  },
  {
    id: 2,
    name: "Fortune Sunlite Refined...",
    price: 99,
    image: "https://images.meesho.com/images/products/636161475/w7zan_512.avif?width=360",
  },
  {
    id: 3,
    name: "Fortune Sunlite Refined...",
    price: 99,
    image: "https://images.meesho.com/images/products/636161475/w7zan_512.avif?width=360",
  },
  {
    id: 4,
    name: "Fortune Sunlite Refined...",
    price: 99,
    image: "https://images.meesho.com/images/products/636161475/w7zan_512.avif?width=360",
  },
];

const CheckoutPage = () => {
  const [selectedAddress, setSelectedAddress] = useState(1);

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT - ADDRESS SECTION */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm">

          {/* Header */}
          <div className="flex justify-between items-center p-6 border-b">
            <h2 className="text-lg font-semibold">
              Select Delivery Address
            </h2>
            <button className="border border-primary text-primary px-4 py-2 rounded-lg text-sm hover:bg-red-50 cursor-pointer">
              + Add New Address
            </button>
          </div>

          {/* Address List */}
          <div className="p-6 space-y-4">
            {addresses.map((addr) => {
              const isSelected = selectedAddress === addr.id;

              return (
                <div
                  key={addr.id}
                  onClick={() => setSelectedAddress(addr.id)}
                  className={`border rounded-xl p-4 cursor-pointer transition ${
                    isSelected
                      ? "border-green-500 bg-green-50"
                      : "border-gray-200"
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex gap-3">

                      {/* Radio */}
                      <div
                        className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                          isSelected
                            ? "border-green-500"
                            : "border-gray-400"
                        }`}
                      >
                        {isSelected && (
                          <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                        )}
                      </div>

                      {/* Address Info */}
                      <div>
                        <p className="text-sm text-gray-500">
                          {addr.type}
                        </p>
                        <p className="font-semibold">
                          {addr.name}
                        </p>
                        <p className="text-sm text-gray-600 mt-1">
                          {addr.address}
                        </p>
                        <p className="text-sm mt-1">
                          {addr.phone}
                        </p>
                      </div>
                    </div>

                    <button className="text-green-600 text-sm font-medium">
                      EDIT
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT - ORDER SUMMARY */}
        <div className="bg-white rounded-xl shadow-sm p-6 h-fit">
          <h2 className="text-lg font-semibold mb-4">
            Your Order
          </h2>

          <div className="flex justify-between text-sm text-gray-500 border-b pb-2 mb-3">
            <span>Product</span>
            <span>Subtotal</span>
          </div>

          <div className="space-y-4">
            {orderItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center"
              >
                <div className="flex gap-3 items-center">
                  <img
                    src={item.image}
                    alt=""
                    className="w-10 h-10 object-contain"
                  />
                  <div>
                    <p className="text-sm font-medium">
                      {item.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      Qty : 1
                    </p>
                  </div>
                </div>

                <span className="font-medium">
                  ${item.price}
                </span>
              </div>
            ))}
          </div>

          <button className="mt-6 w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-red-500 transition">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;