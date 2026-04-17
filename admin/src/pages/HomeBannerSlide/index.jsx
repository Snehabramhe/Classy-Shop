import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import { FaCloudUploadAlt } from "react-icons/fa";
import ImageUpload from "../../components/Common/ImageUpload";

const HomeBannerSlide = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: "",
        category: "",
        subCategory: "",
        thirdCategory: "",
        role: "",
        price: "",
        align: ""
    });

    const [image, setImage] = useState(null);

    const handleSubmit = () => {
        console.log({ ...formData, image });
    };

    return (
        <div className="min-h-screen bg-gray-100">

            {/* Header */}
            <div className="flex items-center gap-3 p-4 border-b bg-white shadow-sm">
                <button onClick={() => navigate("/home-banners")}>
                    <X size={20} className="cursor-pointer" />
                </button>
                <h2 className="text-lg font-semibold">
                    Add Home Slide
                </h2>
            </div>

            {/* Form */}
            <div className="p-6">
                {/* Image Upload */}
                <ImageUpload
                    label="Image"
                    value={image}
                    onChange={setImage}
                />

                {/* Button */}
                <button
                    onClick={handleSubmit}
                    className="mt-4 bg-blue-600 text-white px-6 py-2 rounded flex items-center gap-2 shadow hover:bg-blue-700"
                >
                    <FaCloudUploadAlt size={20} />
                    PUBLISH AND VIEW
                </button>

            </div>
        </div>
    );
};

export default HomeBannerSlide;