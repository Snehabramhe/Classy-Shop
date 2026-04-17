import React, { useState, useMemo, useEffect } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const AddressDrawer = ({ isOpen, onClose, onSave, editData }) => {
    const [phone, setPhone] = useState("");
    const [country, setCountry] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        line1: "",
        city: "",
        state: "",
        pincode: "",
        landmark: "",
        type: "Home",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = () => {
        if (!formData.name || !formData.line1) {
            alert("Please fill required fields");
            return;
        }

        onSave({
            id: editData ? editData.id : Date.now(), // ✅ KEY FIX
            name: formData.name,
            phone: phone,
            type: formData.type,
            country: country,
            // ✅ NEW STRUCTURE
            address: {
                line1: formData.line1,
                city: formData.city,
                state: formData.state,
                pincode: formData.pincode,
                landmark: formData.landmark,
            },
        });

        onClose();
    };
    
    const options = useMemo(() => {
        return countryList().getData().map((country) => ({
            label: (
                <div className="flex items-center gap-2">
                    <img
                        src={`https://flagcdn.com/w20/${country.value.toLowerCase()}.png`}
                        alt=""
                        className="w-5 h-4 object-cover"
                    />
                    {country.label}
                </div>
            ),
            value: country.value,
        }));
    }, []);

    // ✅ THEN use it
    useEffect(() => {
        if (editData) {
            setFormData({
                name: editData.name || "",
                line1: editData.address?.line1 || "",
                city: editData.address?.city || "",
                state: editData.address?.state || "",
                pincode: editData.address?.pincode || "",
                landmark: editData.address?.landmark || "",
                type: editData.type || "Home",
            });

            if (editData.country) {
                const matched = options.find(
                    (opt) => opt.value === editData.country.value
                );
                setCountry(matched || null);
            }

            setPhone(editData.phone || "");
        }
    }, [editData, options]);

    return (
        <>
            {/* Overlay */}
            <div
                className={`fixed inset-0 bg-black/30 z-9998 ${isOpen ? "visible opacity-100" : "invisible opacity-0"}`}
                onClick={onClose}
            ></div>

            {/* Drawer */}
            <div
                className={`fixed top-0 right-0 h-full w-100 bg-white z-9999 shadow-lg transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
                {/* Header */}
                <div className="flex justify-between items-center p-4 border-b">
                    <h2 className="text-lg font-semibold">Add Delivery Address</h2>
                    <button onClick={onClose} className="cursor-pointer">✕</button>
                </div>

                {/* Form */}
                <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-70px)]">

                    <div>
                        <label className="text-sm font-medium">Full Name</label>
                        <input
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full border p-2 rounded mt-1"
                            placeholder="Enter full name"
                        />
                    </div>

                    {/* Address Line */}
                    <div>
                        <label className="text-sm font-medium">Address</label>
                        <input
                            name="line1"
                            value={formData.line1}
                            onChange={handleChange}
                            className="w-full border p-2 rounded mt-1"
                            placeholder="Enter address"
                        />
                    </div>

                    {/* City */}
                    <div>
                        <label className="text-sm font-medium">City</label>
                        <input
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            className="w-full border p-2 rounded mt-1"
                            placeholder="Enter city"
                        />
                    </div>

                    {/* State */}
                    <div>
                        <label className="text-sm font-medium">State</label>
                        <input
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            className="w-full border p-2 rounded mt-1"
                            placeholder="Enter state"
                        />
                    </div>

                    {/* Pincode */}
                    <div>
                        <label className="text-sm font-medium">Pincode</label>
                        <input
                            name="pincode"
                            value={formData.pincode}
                            onChange={handleChange}
                            className="w-full border p-2 rounded mt-1"
                            placeholder="Enter pincode"
                        />
                    </div>

                    {/* Landmark */}
                    <div>
                        <label className="text-sm font-medium">Landmark</label>
                        <input
                            name="landmark"
                            value={formData.landmark}
                            onChange={handleChange}
                            className="w-full border p-2 rounded mt-1"
                            placeholder="Enter landmark"
                        />
                    </div>

                    {/* Country Dropdown */}
                    <div>
                        <label className="text-sm font-medium">Country</label>

                        <Select
                            options={options}
                            value={country}
                            onChange={setCountry}
                            placeholder="Select country"
                            className="mt-1"
                            isSearchable
                        />
                    </div>

                    {/* Phone with Flag + Code */}
                    <div>
                        <label className="text-sm font-medium">Phone Number</label>
                        <PhoneInput
                            country={"in"}
                            value={phone}
                            onChange={setPhone}
                            inputClass="!w-full"
                            containerClass="mt-1 !w-full"
                            buttonClass="!border-r !border-gray-300"
                            dropdownStyle={{
                                width: "367px",
                                left: "0",
                            }}
                        />
                    </div>

                    {/* Address Type */}
                    <div>
                        <p className="text-sm font-medium mb-2">Address Type</p>
                        <div className="flex gap-4">

                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="type"
                                    value="Home"
                                    checked={formData.type === "Home"}
                                    onChange={handleChange}
                                />
                                Home
                            </label>

                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="type"
                                    value="Office"
                                    checked={formData.type === "Office"}
                                    onChange={handleChange}
                                />
                                Office
                            </label>

                        </div>
                    </div>

                    {/* Save */}
                    <button
                        onClick={handleSubmit}
                        className="w-full bg-red-500 text-white py-3 rounded-lg">
                        SAVE
                    </button>
                </div>
            </div>
        </>
    );
};

export default AddressDrawer;