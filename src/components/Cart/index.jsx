import React from "react";
import { Star, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const cartItems = [
  {
    id: 1,
    brand: "Fortune",
    name: "Fortune Sunlite Refined Sunflower Oil 1 L",
    price: 25.99,
    oldPrice: 38.1,
    discount: "14% OFF",
    image: "https://images.meesho.com/images/products/636161475/w7zan_512.avif?width=360",
    rating: 5,
  },
  {
    id: 2,
    brand: "Zandu",
    name: "Chyawanprashad With No Added Sugar 900 gm",
    price: 25.99,
    oldPrice: 38.1,
    discount: "14% OFF",
    image: "https://images.meesho.com/images/products/636161475/w7zan_512.avif?width=360",
    rating: 5,
  },
  {
    id: 3,
    brand: "Gemini",
    name: "Gemini Refined Sunflower Oil 1 L",
    price: 25.99,
    oldPrice: 38.1,
    discount: "14% OFF",
    image: "https://images.meesho.com/images/products/636161475/w7zan_512.avif?width=360",
    rating: 5,
  },
  {
    id: 4,
    brand: "Lay's",
    name: "Lay's American Style Cream & Onion Potato Chips 82 g",
    price: 25.99,
    oldPrice: 38.1,
    discount: "14% OFF",
    image: "https://images.meesho.com/images/products/636161475/w7zan_512.avif?width=360",
    rating: 5,
  },
];

const CartPage = () => {
  const navigate = useNavigate();
  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="bg-gray-100 min-h-screen px-12 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT SIDE - CART ITEMS */}
        <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Your Cart</h2>
          <p className="text-gray-500 text-sm mb-6">
            There are {cartItems.length} products in your cart
          </p>

          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-start gap-4 border-b py-5 last:border-none"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-contain"
              />

              {/* Content */}
              <div className="flex-1">
                <p className="text-sm text-gray-400">{item.brand}</p>
                <h3 className="font-medium">{item.name}</h3>

                {/* Rating */}
                <div className="flex mt-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={14}
                      className={`${
                        star <= item.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>

                {/* Price row */}
                <div className="flex items-center gap-3 mt-2 flex-wrap">
                  <select className="border rounded px-2 py-1 text-sm">
                    <option>Qty: 1</option>
                    <option>Qty: 2</option>
                    <option>Qty: 3</option>
                  </select>

                  <span className="text-red-500 font-semibold">
                    ${item.price}
                  </span>

                  <span className="line-through text-gray-400 text-sm">
                    ${item.oldPrice}
                  </span>

                  <span className="text-green-600 text-sm font-medium">
                    {item.discount}
                  </span>
                </div>
              </div>

              {/* Remove button */}
              <button className="text-gray-400 hover:text-black">
                <X size={18} />
              </button>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE - CART TOTALS */}
        <div className="bg-white rounded-xl p-6 shadow-sm h-fit">
          <h2 className="text-lg font-semibold mb-4">Cart Totals</h2>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">Subtotal</span>
              <span className="text-red-500 font-semibold">
                ${subtotal.toFixed(2)}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Shipping</span>
              <span className="font-medium">Free</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Estimate for</span>
              <span className="font-medium">India</span>
            </div>

            <div className="flex justify-between border-t pt-3 mt-3">
              <span className="font-semibold">Total</span>
              <span className="text-red-500 font-semibold">
                ${subtotal.toFixed(2)}
              </span>
            </div>
          </div>

          <button onClick={() => navigate("/checkout")} className="mt-6 w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-red-500 transition">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;