import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { useNavigate } from "react-router-dom";
import { FaCloudUploadAlt } from "react-icons/fa";
import ImageUpload from "../../components/Common/ImageUpload";

const AddBlog = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = () => {
        console.log({ title, description, image });
    };

    return (
        <div className="bg-white min-h-screen">

            {/* Header */}
            <div className="flex items-center gap-3 px-6 py-4 border-b">
                <button onClick={() => navigate("/blog-list")}
                    className="cursor-pointer text-xl">✕</button>
                <h1 className="text-lg font-semibold">Add Blog</h1>
            </div>

            <div className="p-6">

                {/* Title */}
                <div className="mb-6">
                    <label className="block text-sm font-medium mb-2">Title</label>
                    <input
                        className="w-full border rounded p-2"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                {/* Description (🔥 PERFECT MATCH) */}
                <div className="mb-6">
                    <label className="block text-sm font-medium mb-2">
                        Description
                    </label>

                    <Editor
                        apiKey="pq2jmbn37lymgycwnlco3haemwteyw3w4d1nd01az4x39p97"
                        value={description}
                        onEditorChange={(content) => setDescription(content)}
                        init={{
                            height: 300,
                            menubar: false,
                            plugins: [
                                "lists",
                                "link",
                                "code",
                            ],
                            toolbar:
                                "undo redo | bold italic underline | bullist numlist | link | code | styles",
                            branding: false,
                        }}
                    />
                </div>

                {/* Image */}
                <div>
                    {/* Image Upload Component */}
                    <ImageUpload
                        label="Blog Image"
                        value={image}
                        onChange={setImage}
                    />
                    
                    <button
                        onClick={handleSubmit}
                        className="bg-blue-600 text-white px-6 py-2 rounded flex items-center gap-2"
                    >
                        <FaCloudUploadAlt size={20} />
                        PUBLISH AND VIEW
                    </button>

                </div>
            </div>
        </div>
    );
};

export default AddBlog;