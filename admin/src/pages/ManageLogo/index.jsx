import React, { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import ImageUpload from "../../components/Common/ImageUpload";

const ManageLogo = () => {
    const [image, setImage] = useState(null);

    return (
        <div className="p-6 bg-gray-100 min-h-screen">

            {/* Title */}
            <h2 className="text-xl font-semibold mb-4">Manage Logo</h2>

            {/* Card */}
            <div className="bg-white p-6 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.08)] w-175">
                {/* Image */}
                <div>
                    {/* Image Upload Component */}
                    <ImageUpload
                        label="Blog Image"
                        value={image}
                        onChange={setImage}
                    />

                </div>
                {/* Button */}
                <button className="mt-6 w-full bg-blue-600 hover:bg-blue-600 text-white py-3 rounded-md flex items-center justify-center gap-2 font-semibold">
                    <FaCloudUploadAlt size={30}/>
                    PUBLISH AND VIEW
                </button>

            </div>
        </div>
    );
};

export default ManageLogo;