import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import { FaCloudUploadAlt } from "react-icons/fa";
import ImageUpload from "../../components/Common/ImageUpload";
import TextInput from "../../components/Common/UI/TextInput";

const AddCategory = () => {
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
                <button onClick={() => navigate("/category-list")}>
                    <X size={20} className="cursor-pointer" />
                </button>
                <h2 className="text-lg font-semibold">
                    Add New Category
                </h2>
            </div>

            {/* Form */}
            <div className="p-6">

                <div className="grid grid-cols-5 gap-4 mb-4">
                    <TextInput
                        label="Categegory Name"
                        name="title"
                        value={formData.title}
                        onChange={(val) =>
                            setFormData((prev) => ({ ...prev, title: val }))
                        } />
                </div>

                {/* Image Upload */}
                <ImageUpload
                    label="Categegory Image"
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

export default AddCategory;