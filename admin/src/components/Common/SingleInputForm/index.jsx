import React, { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import TextInput from "../UI/TextInput";

const SingleInputForm = ({
  title,
  fieldLabel,
  fieldName,
  onSubmit,
  placeholder = "",
}) => {
  const [formData, setFormData] = useState({
    [fieldName]: "",
  });

  const handleChange = (e) => {
    setFormData({
      [fieldName]: e.target.value,
    });
  };

  const handleSubmit = () => {
    onSubmit(formData);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      {/* Title */}
      <h2 className="text-xl font-semibold mb-4">{title}</h2>

      {/* Card */}
      <div className="bg-white p-6 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.08)] w-175">

        <TextInput
          label={fieldLabel}
          value={formData[fieldName]}
          onChange={handleChange}
          placeholder={placeholder}
        />

        {/* Button */}
        <button
          onClick={handleSubmit}
          className="mt-6 w-full bg-blue-600 text-white py-3 rounded-md flex items-center justify-center gap-2 font-semibold"
        >
          <FaCloudUploadAlt size={30} />
          PUBLISH AND VIEW
        </button>

      </div>
    </div>
  );
};

export default SingleInputForm;