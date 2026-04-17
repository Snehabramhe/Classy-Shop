import React, { useState } from "react";
import { FaCloudUploadAlt, FaStar, FaRegStar } from "react-icons/fa";
import TextInput from "../../components/Common/UI/TextInput";
import CustomSelect from "../../components/Common/UI/CustomSelect";
import ImageUploadBox from "../../components/Common/UI/ImageUploadBox";
import ToggleSwitch from "../../components/Common/UI/ToggleSwitch";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";

const AddProduct = () => {

    const [image, setImage] = useState(null);
    const [enabled, setEnabled] = useState(false);
    const [bannerTitle, setBannerTitle] = useState("");
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        description: "",
        category: "",
        subCategory: "",
        thirdCategory: "",
        price: "",
        oldPrice: "",
        featured: "",
        stock: "",
        brand: "",
        discount: "",
        rams: "",
        weight: "",
        size: "",
        rating: 1,
    });

    const handleChange = (field, value) => {
        setForm({ ...form, [field]: value });
    };

    const categoryOptions = [
        { label: "Clothes", value: "clothes" },
        { label: "Electronics", value: "electronics" },
    ];

    const yesNoOptions = [
        { label: "Yes", value: "yes" },
        { label: "No", value: "no" },
    ];

    return (
        <div className="bg-gray-100 min-h-screen">

            {/* Header */}
            <div className="flex items-center gap-3 px-6 py-4 border-b shadow-xl">
                <button onClick={() => navigate("/product-list")}>
                    <X size={20} className="cursor-pointer" />
                </button>
                <h1 className="text-lg font-semibold">Add Product</h1>
            </div>

            {/* Form Card */}
            <div className="bg-white p-6 rounded-xl shadow">

                {/* Product Name */}
                <div className="mb-4">
                    <TextInput
                        label="Product Name"
                        value={form.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                    />
                </div>

                {/* Description */}
                <div className="mb-4">
                    <label className="text-sm font-medium">Product Description</label>
                    <textarea
                        rows={5}
                        className="mt-1 w-full border border-gray-200 rounded-md px-3 py-2 outline-none"
                        value={form.description}
                        onChange={(e) => handleChange("description", e.target.value)}
                    />
                </div>

                {/* Grid Row 1 */}
                <div className="grid grid-cols-4 gap-4 mb-4">
                    <CustomSelect
                        label="Product Category"
                        options={categoryOptions}
                        value={form.category}
                        onChange={(val) => handleChange("category", val)}
                    />

                    <CustomSelect
                        label="Product Sub Category"
                        options={categoryOptions}
                        value={form.subCategory}
                        onChange={(val) => handleChange("subCategory", val)}
                    />

                    <CustomSelect
                        label="Product Third Level Category"
                        options={categoryOptions}
                        value={form.thirdCategory}
                        onChange={(val) => handleChange("thirdCategory", val)}
                    />

                    <TextInput
                        label="Product Price"
                        value={form.price}
                        onChange={(e) => handleChange("price", e.target.value)}
                    />
                </div>

                {/* Grid Row 2 */}
                <div className="grid grid-cols-4 gap-4 mb-4">
                    <TextInput
                        label="Product Old Price"
                        value={form.oldPrice}
                        onChange={(e) => handleChange("oldPrice", e.target.value)}
                    />

                    <CustomSelect
                        label="Is Featured?"
                        options={yesNoOptions}
                        value={form.featured}
                        onChange={(val) => handleChange("featured", val)}
                    />

                    <TextInput
                        label="Product Stock"
                        value={form.stock}
                        onChange={(e) => handleChange("stock", e.target.value)}
                    />

                    <TextInput
                        label="Product Brand"
                        value={form.brand}
                        onChange={(e) => handleChange("brand", e.target.value)}
                    />
                </div>

                {/* Grid Row 3 */}
                <div className="grid grid-cols-4 gap-4 mb-4">
                    <TextInput
                        label="Product Discount"
                        value={form.discount}
                        onChange={(e) => handleChange("discount", e.target.value)}
                    />

                    <TextInput
                        label="Product RAMS"
                        value={form.rams}
                        onChange={(e) => handleChange("rams", e.target.value)}
                    />

                    <TextInput
                        label="Product Weight"
                        value={form.weight}
                        onChange={(e) => handleChange("weight", e.target.value)}
                    />

                    <TextInput
                        label="Product Size"
                        value={form.size}
                        onChange={(e) => handleChange("size", e.target.value)}
                    />
                </div>

                <div className="mb-6">
                    <label className="text-sm font-medium block mb-2">
                        Product Rating
                    </label>

                    <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((star) => {
                            const isSelected = form.rating >= star;

                            const handleClick = () => {
                                if (form.rating === star) {
                                    handleChange("rating", star - 1);
                                } else {
                                    handleChange("rating", star);
                                }
                            };

                            return isSelected ? (
                                <FaStar
                                    key={star}
                                    onClick={handleClick}
                                    className="cursor-pointer text-xl text-[#f4b400]"
                                />
                            ) : (
                                <FaRegStar
                                    key={star}
                                    onClick={handleClick}
                                    className="cursor-pointer text-xl text-gray-400"
                                />
                            );
                        })}
                    </div>
                </div>
                {/* Media Section Placeholder */}
                <h3 className="text-lg font-semibold mb-4">Media & Images</h3>

                <div className="mb-4 px-2 py-2">
                    <ImageUploadBox />
                </div>

                <div className="bg-gray-50 p-5 rounded-lg mt-6">

                    {/* Header */}
                    <div className="flex items-center gap-4 mb-4">
                        <h3 className="text-lg font-semibold">Banner Images</h3>
                        <ToggleSwitch value={enabled} onChange={setEnabled} />
                    </div>

                    {/* Image Upload */}
                    <div className="mb-4 px-2 py-2">
                        <ImageUploadBox />
                    </div>

                    {/* Banner Title */}
                    <TextInput
                        label="Banner Title"
                        value={bannerTitle}
                        onChange={(e) => setBannerTitle(e.target.value)}
                        placeholder="Enter banner title"
                    />

                </div>

                {/* Button */}
                <button className="mt-8 w-full bg-blue-600 text-white py-3 rounded-md flex items-center justify-center gap-2 font-semibold">
                    <FaCloudUploadAlt size={20} />
                    PUBLISH AND VIEW
                </button>

            </div>
        </div>
    );
};

export default AddProduct;