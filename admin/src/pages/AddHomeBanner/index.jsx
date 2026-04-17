import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import { FaCloudUploadAlt } from "react-icons/fa";
import ImageUpload from "../../components/Common/ImageUpload";
import CustomSelect from "../../components/Common/UI/CustomSelect";
import { roleOptions } from "../../Data/options";
import { categoryOptions } from "../../Data/options";
import { subCategoryOptions } from "../../Data/options";
import { thirdLevelOptions } from "../../Data/options";
import TextInput from "../../components/Common/UI/TextInput";

const AddHomeBanner = () => {
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
                <button onClick={() => navigate("/banner-list")}>
                    <X size={20} className="cursor-pointer" />
                </button>
                <h2 className="text-lg font-semibold">
                    Add Home Banner List 1
                </h2>
            </div>

            {/* Form */}
            <div className="p-6">

                <div className="grid grid-cols-5 gap-4 mb-4">

                    <TextInput
                        label="Banner Title"
                        name="title"
                        value={formData.title}
                        onChange={(val) =>
                            setFormData((prev) => ({ ...prev, title: val }))
                        } />

                    <CustomSelect
                        label="Category"
                        options={categoryOptions}
                        value={formData.category}
                        onChange={(val) =>
                            setFormData((prev) => ({ ...prev, category: val }))
                        }
                        placeholder="Select Category"
                    />

                    <CustomSelect
                        label="Sub Category"
                        options={subCategoryOptions}
                        value={formData.subCategory}
                        onChange={(val) =>
                            setFormData((prev) => ({ ...prev, subCategory: val }))
                        }
                        placeholder="Select Sub Category"
                    />

                    <CustomSelect
                        label="Third Level Category"
                        options={thirdLevelOptions}
                        value={formData.thirdCategory}
                        onChange={(val) =>
                            setFormData((prev) => ({ ...prev, thirdCategory: val }))
                        }
                        placeholder="Select Third Level"
                    />

                    <TextInput
                        label="Price"
                        name="price"
                        value={formData.price}
                        onChange={(val) =>
                            setFormData((prev) => ({ ...prev, price: val }))
                        } />
                </div>

                <div className="mb-8 w-[20%]">
                    <CustomSelect
                        label="Align Info"
                        options={roleOptions}
                        value={formData.role}
                        onChange={(val) =>
                            setFormData((prev) => ({ ...prev, role: val }))
                        }
                    />
                </div>

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

export default AddHomeBanner;