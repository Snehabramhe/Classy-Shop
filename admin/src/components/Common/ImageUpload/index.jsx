import React, { useState } from "react";
import { X } from "lucide-react";
import { FaRegImages } from "react-icons/fa6";

const ImageUpload = ({ label = "Image", value, onChange }) => {
  const [preview, setPreview] = useState(value ? URL.createObjectURL(value) : null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      onChange(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleRemoveImage = () => {
    onChange(null);
    setPreview(null);
  };

  return (
    <div className="mb-8">
      {/* Label */}
      <h2 className="text-md mb-4">{label}</h2>

      <div className="flex items-center gap-6">
        
        {/* Upload Box */}
        {!preview && (
          <label className="w-48 h-40 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition">
            
            {/* Bigger Icon */}
            <FaRegImages size={48} className="text-gray-400 mb-3" />

            <span className="text-gray-500 text-base">
              Image Upload
            </span>

            <input
              type="file"
              className="hidden"
              onChange={handleImageChange}
            />
          </label>
        )}

        {/* Preview */}
        {preview && (
          <div className="relative w-48 h-40 border rounded-lg overflow-hidden">
            <img
              src={preview}
              alt="preview"
              className="w-full h-full object-cover"
            />

            <button
              onClick={handleRemoveImage}
              className="absolute top-2 right-2 bg-black/60 text-white rounded-full p-1 hover:bg-black"
            >
              <X size={16} />
            </button>
          </div>
        )}

        {/* File name */}
        <span className="text-sm text-gray-500">
          {value ? value.name : "No file chosen"}
        </span>
      </div>
    </div>
  );
};

export default ImageUpload;