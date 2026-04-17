import React, { useState } from "react";
import { Star } from "lucide-react";

const reviewsData = [
    {
        name: "sanjeev",
        date: "2024-11-27",
        rating: 5,
        comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
        name: "Rinku",
        date: "2024-11-27",
        rating: 4,
        comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
        name: "Rajesh",
        date: "2024-11-25",
        rating: 5,
        comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
];

const additionalInfo = [
    { label: "Stand Up", value: "35\"L x 24\"W x 37-45\"H" },
    { label: "Folded (w/o wheels)", value: "32.5\"L x 18.5\"W x 16.5\"H" },
    { label: "Folded (w/ wheels)", value: "32.5\"L x 24\"W x 18.5\"H" },
    { label: "Door Pass Through", value: "24" },
    { label: "Frame", value: "Aluminum" },
    { label: "Weight", value: "20 LBS" },
    { label: "Weight Capacity", value: "60 LBS" },
    { label: "Width", value: "24\"" },
];

const ProductTabs = () => {
    const [activeTab, setActiveTab] = useState("Description");
    const [rating, setRating] = useState(0);

    return (
        <div className="bg-white mt-6 p-6 rounded-2xl shadow-sm">

            {/* Tabs */}
            <div className="flex gap-3 mb-6">
                {["Description", "Additional Info", "Reviews"].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-5 py-2 rounded-full text-sm font-medium transition ${activeTab === tab
                            ? "bg-primary text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Description */}
            {activeTab === "Description" && (
                <p className="text-gray-600 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti eligendi labore nemo eveniet et error! Similique nulla aperiam saepe hic doloremque, dolore quae? Corporis, velit quia. A nam iure voluptates aliquid maxime, deserunt quos! Commodi sapiente consectetur eum quasi quos provident, esse ut magnam. Exercitationem, facere velit? Dolores officia eum cum neque veniam voluptatem aperiam optio quaerat nobis illum exercitationem sunt fuga, libero odit qui adipisci? Soluta quo nemo earum, obcaecati, voluptatem beatae doloribus quae, aut repudiandae laborum harum. Ut quam minus autem quia laborum maxime earum ex a hic velit perferendis quasi enim vero totam veritatis eligendi, eaque fuga!
                </p>
            )}

            {/* Additional Info */}
            {activeTab === "Additional Info" && (
                <div className="border rounded-xl overflow-hidden">
                    <table className="w-full text-sm border border-gray-300 border-collapse">
                        <tbody>
                            {additionalInfo.map((item, index) => (
                                <tr key={index}>
                                    <td className="p-3 bg-gray-50 font-medium border border-gray-300">
                                        {item.label}
                                    </td>
                                    <td className="p-3 text-gray-600 bg-gray-50 border border-gray-300">
                                        {item.value}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {activeTab === "Reviews" && (
                <div className="space-y-8">

                    {/* Reviews List */}
                    <div className="shadow-xl rounded-xl p-6 max-h-87.5 overflow-y-auto">

                        <h3 className="text-lg font-semibold mb-6">
                            Customer questions & answers
                        </h3>

                        {reviewsData.map((review, index) => (
                            <div
                                key={index}
                                className="flex justify-between gap-4 border-b pb-6 mb-6 last:border-none last:mb-0"
                            >
                                {/* LEFT SECTION */}
                                <div className="flex gap-4">
                                    {/* Avatar */}
                                    <img
                                        src={`https://i.pravatar.cc/50?img=${index + 10}`}
                                        alt="user"
                                        className="w-12 h-12 rounded-full object-cover"
                                    />

                                    {/* Info */}
                                    <div>
                                        <p className="font-semibold text-gray-800">
                                            {review.name}
                                        </p>
                                        <p className="text-xs text-gray-600 mb-2">
                                            {review.date}
                                        </p>

                                        <p className="text-gray-600 text-sm leading-relaxed max-w-md">
                                            {review.comment}
                                        </p>
                                    </div>
                                </div>

                                {/* RIGHT SECTION (Stars) */}
                                <div className="flex items-start">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star
                                            key={star}
                                            size={18}
                                            className={`${star <= review.rating
                                                    ? "fill-yellow-400 text-yellow-400"
                                                    : "text-gray-300"
                                                }`}
                                        />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Add Review Section */}
                    <h3 className="text-lg font-semibold">
                        Add a review
                    </h3>

                    <textarea
                        placeholder="Write a review..."
                        rows={5}
                        className="w-full border rounded-lg p-4 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />

                    {/* Rating */}
                    <div className="flex items-center gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                                key={star}
                                size={22}
                                onClick={() => setRating(star)}
                                className={`cursor-pointer transition ${star <= rating
                                        ? "fill-yellow-400 text-yellow-400"
                                        : "text-gray-300"
                                    }`}
                            />
                        ))}
                    </div>

                    {/* Button */}
                    <button className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition font-medium">
                        SUBMIT REVIEW
                    </button>
                </div>
            )}
        </div>
    );
};

export default ProductTabs;