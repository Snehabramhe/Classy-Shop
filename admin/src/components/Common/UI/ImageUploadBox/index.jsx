import React, { useState } from "react";
import { FaImage, FaTimes } from "react-icons/fa";

const ImageUploadBox = ({ onChange }) => {
  const [preview, setPreview] = useState(null);

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreview(url);
      onChange && onChange(file);
    }
  };

  return (
    <div className="relative w-40 h-40 border-2 border-dashed rounded-lg flex items-center justify-center cursor-pointer hover:border-gray-400">

      <input
        type="file"
        onChange={handleImage}
        className="absolute inset-0 opacity-0 cursor-pointer"
      />

      {!preview ? (
        <div className="text-center text-gray-400">
          <FaImage size={30} className="mx-auto mb-2" />
          <p className="text-sm">Image Upload</p>
        </div>
      ) : (
        <>
          <img
            src={preview}
            alt="preview"
            className="w-full h-full object-cover rounded-lg"
          />

          <button
            onClick={(e) => {
              e.stopPropagation();
              setPreview(null);
            }}
            className="absolute top-1 right-1 bg-black text-white rounded-full p-1 text-xs"
          >
            <FaTimes size={10} />
          </button>
        </>
      )}
    </div>
  );
};

export default ImageUploadBox;