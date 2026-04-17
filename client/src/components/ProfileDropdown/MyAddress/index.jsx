import React, { useState } from 'react';
import AddressDrawer from '../AddressDrawer';

const addressesArr = [
  {
    id: 1,
    type: "Home",
    name: "RINKU VERMA",
    phone: "+919873798202",
    country: {
      value: "IN",
      label: (
        <div className="flex items-center gap-2">
          <img
            src="https://flagcdn.com/w20/in.png"
            className="w-5 h-4"
          />
          India
        </div>
      ),
    },
    address: {
      line1: "H No 222 Street No 6",
      landmark: "Near govt school",
      city: "Delhi",
      state: "Delhi",
      pincode: "110001",
    },
  },
  {
    id: 2,
    type: "Office",
    name: "Rajesh Sharma",
    phone: "+919873798000",
    country: {
      value: "IN",
      label: (
        <div className="flex items-center gap-2">
          <img
            src="https://flagcdn.com/w20/in.png"
            className="w-5 h-4"
          />
          India
        </div>
      ),
    },
    address: {
      line1: "H No 555 Street No 6",
      landmark: "Near govt school",
      city: "Mumbai",
      state: "Mumbai",
      pincode: "110000",
    },
  },
];

const MyAddress = () => {
    const [selectedAddress, setSelectedAddress] = useState(1);
    const [showForm, setShowForm] = useState(false);
    const [addresses, setAddresses] = useState(addressesArr);
    const [editAddress, setEditAddress] = useState(null);

    const handleAddAddress = (newAddress) => {
        setAddresses((prev) => {
            const exists = prev.find((addr) => addr.id === newAddress.id);

            if (exists) {
                // ✅ EDIT CASE
                return prev.map((addr) =>
                    addr.id === newAddress.id ? newAddress : addr
                );
            }

            // ✅ ADD CASE
            return [newAddress, ...prev];
        });

        setSelectedAddress(newAddress.id);
    };

    return (
        <>
            <div className="min-h-120 bg-white rounded-xl shadow-sm">

                <div className="flex justify-between items-center p-6 border-b">
                    <h2 className="text-lg font-semibold">
                        Select Delivery Address
                    </h2>

                    <button
                        onClick={() => setShowForm(true)}
                        className="border border-primary cursor-pointer text-primary px-4 py-2 rounded-lg text-sm hover:bg-red-50"
                    >
                        + Add New Address
                    </button>
                </div>

                {/* Address List */}
                <div className="p-6">
                    {addresses.map((addr) => {
                        const isSelected = selectedAddress === addr.id;

                        return (
                            <div
                                key={addr.id}
                                onClick={() => setSelectedAddress(addr.id)}
                                className={`border rounded-xl p-4 cursor-pointer transition mb-4 ${isSelected
                                    ? "border-green-500 bg-green-50"
                                    : "border-gray-200"
                                    }`}
                            >
                                <div className="flex justify-between items-start">
                                    <div className="flex gap-3">

                                        {/* Radio */}
                                        <div
                                            className={`w-5 h-5 rounded-full border flex items-center justify-center ${isSelected
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
                                                {addr.address.line1}
                                                {addr.address.landmark && `, ${addr.address.landmark}`}
                                                , {addr.address.city}, {addr.address.state} - {addr.address.pincode}
                                            </p>
                                            <p className="text-sm mt-1">
                                                {addr.phone}
                                            </p>
                                        </div>
                                    </div>

                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation(); // prevent selecting card
                                            setEditAddress(addr);
                                            setShowForm(true);
                                        }}
                                        className="text-green-600 text-sm font-medium"
                                    >
                                        EDIT
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>


            {/* Drawer */}
            <AddressDrawer
                isOpen={showForm}
                onClose={() => {
                    setShowForm(false);
                    setEditAddress(null); // reset
                }}
                onSave={handleAddAddress}
                editData={editAddress}   // ✅ NEW PROP
            />
        </>
    )
}

export default MyAddress;