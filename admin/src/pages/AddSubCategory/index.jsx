import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import { FaCloudUploadAlt } from "react-icons/fa";
import CustomSelect from "../../components/Common/UI/CustomSelect";
import TextInput from "../../components/Common/UI/TextInput";
import { categoryOptions } from "../../Data/options";

const AddSubCategory = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        category: "",
        subCategory: "",
        thirdCategory: "",
        parentCategory: "",
    });

    const handleSubmit = () => {
        console.log(formData);
    };

    return (
        <div className="min-h-screen bg-white">

            {/* HEADER */}
            <div className="flex items-center gap-3 p-4 border-b bg-gray-100 shadow-sm">
                <button onClick={() => navigate(-1)}>
                    <X size={20} className="cursor-pointer" />
                </button>
                <h2 className="text-lg font-semibold">
                    Add New Sub Category
                </h2>
            </div>

            {/* CONTENT */}
            <div className="p-6 grid grid-cols-2 gap-10">

                {/* LEFT SECTION */}
                <div>
                    <h3 className="font-semibold text-md mb-4">
                        Add Sub Category
                    </h3>

                    <div className="space-y-4">
                        <CustomSelect
                            label="Product Category"
                            options={categoryOptions}
                            value={formData.category}
                            onChange={(val) =>
                                setFormData((prev) => ({ ...prev, category: val }))
                            }
                            placeholder="Select Category"
                        />

                        <TextInput
                            label="Sub Category Name"
                            value={formData.subCategory}
                            onChange={(e) =>
                                setFormData((prev) => ({
                                    ...prev,
                                    subCategory: e.target.value,
                                }))
                            }
                            placeholder="Enter sub category"
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

                {/* RIGHT SECTION */}
                <div>
                    <h3 className="font-semibold text-md mb-4">
                        Add Third Level Category
                    </h3>

                    <div className="space-y-4">

                        <CustomSelect
                            label="Product Category"
                            options={categoryOptions}
                            value={formData.parentCategory}
                            onChange={(val) =>
                                setFormData((prev) => ({
                                    ...prev,
                                    parentCategory: val,
                                }))
                            }
                            placeholder="Select Category"
                        />

                        <TextInput
                            label="Sub Category Name"
                            value={formData.thirdCategory}
                            onChange={(e) =>
                                setFormData((prev) => ({
                                    ...prev,
                                    thirdCategory: e.target.value,
                                }))
                            }
                            placeholder="Enter third level category"
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

            </div>
        </div>
    );
};

export default AddSubCategory;