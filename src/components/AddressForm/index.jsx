import React from "react";

const AddressForm = ({ onCancel }) => {
  return (
    <div className="p-6">

      <h2 className="text-xl font-semibold mb-6">
        Billing Details
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <input
          type="text"
          placeholder="Full Name"
          className="input"
        />

        <input
          type="email"
          placeholder="Email"
          className="input"
        />

        <input
          type="text"
          placeholder="House No. and Street Name"
          className="input md:col-span-2"
        />

        <input
          type="text"
          placeholder="Apartment, suite, unit, etc. (optional)"
          className="input md:col-span-2"
        />

        <input
          type="text"
          placeholder="Town / City"
          className="input"
        />

        <input
          type="text"
          placeholder="State / County"
          className="input"
        />

        <input
          type="text"
          placeholder="Zip Code"
          className="input"
        />

        <input
          type="text"
          placeholder="Phone Number"
          className="input"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="input md:col-span-2"
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-6">

        <button
          onClick={onCancel}
          className="px-6 py-3 border rounded-lg hover:bg-gray-100"
        >
          Cancel
        </button>

        <button
          className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-red-500"
        >
          Save Address
        </button>

      </div>
    </div>
  );
};

export default AddressForm;