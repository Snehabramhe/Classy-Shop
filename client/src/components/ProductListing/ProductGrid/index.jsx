import React, { useState } from "react";
import ProductCard from "../ProductCard";
import ProductModal from "../../../components/ProductModal";

const products = Array(8).fill(null).map((_, i) => ({
    id: i + 1,
    title: "Siril Georgette Pink Color Saree",
    brand: "Soylent Green",
    price: 999,
    mainImage: "https://res.cloudinary.com/djodhdoyk/image/upload/v1772644933/file_1734690981297_011618e4-4682-4123-be80-1fb7737d34ad1714702040213RARERABBITMenComfortOpaqueCasualShirt1_w2v2lf.jpg",
    images: [
        "https://res.cloudinary.com/djodhdoyk/image/upload/v1772644933/file_1734690981297_011618e4-4682-4123-be80-1fb7737d34ad1714702040213RARERABBITMenComfortOpaqueCasualShirt1_w2v2lf.jpg",
        "https://res.cloudinary.com/djodhdoyk/image/upload/v1773022643/file_1734690981297_23990e6b-d01e-40fd-bb6b-98198db544c01714702040162RARERABBITMenComfortOpaqueCasualShirt2_ltwblr.jpg",
        "https://res.cloudinary.com/djodhdoyk/image/upload/v1772644933/file_1734690981297_011618e4-4682-4123-be80-1fb7737d34ad1714702040213RARERABBITMenComfortOpaqueCasualShirt1_w2v2lf.jpg",
        "https://res.cloudinary.com/djodhdoyk/image/upload/v1773022643/file_1734690981297_23990e6b-d01e-40fd-bb6b-98198db544c01714702040162RARERABBITMenComfortOpaqueCasualShirt2_ltwblr.jpg",
        "https://res.cloudinary.com/djodhdoyk/image/upload/v1772644933/file_1734690981297_011618e4-4682-4123-be80-1fb7737d34ad1714702040213RARERABBITMenComfortOpaqueCasualShirt1_w2v2lf.jpg",
        "https://res.cloudinary.com/djodhdoyk/image/upload/v1773022643/file_1734690981297_23990e6b-d01e-40fd-bb6b-98198db544c01714702040162RARERABBITMenComfortOpaqueCasualShirt2_ltwblr.jpg",
        "https://res.cloudinary.com/djodhdoyk/image/upload/v1772644933/file_1734690981297_011618e4-4682-4123-be80-1fb7737d34ad1714702040213RARERABBITMenComfortOpaqueCasualShirt1_w2v2lf.jpg",

    ],
}));

const ProductGrid = ({ grid }) => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const openModal = (product) => setSelectedProduct(product);
    const closeModal = () => setSelectedProduct(null);

    return (
        <>
            <div
                className={`gap-6 ${grid === 1
                    ? "flex flex-col"   // 👈 important change
                    : "grid grid-cols-4"
                    }`}
            >
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        view={grid}
                        showModal={openModal}
                    />
                ))}
            </div>

            {/* 🔥 Modal */}
            {selectedProduct && (
                <ProductModal
                    product={selectedProduct}
                    onClose={closeModal}
                />
            )}

        </>
    );
};

export default ProductGrid;