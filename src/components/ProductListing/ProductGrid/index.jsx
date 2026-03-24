import React from "react";
import ProductCard from "../ProductCard";

const products = Array(8).fill(null).map((_, i) => ({
    id: i + 1,
    title: "Siril Georgette Pink Color Saree",
    brand: "Soylent Green",
    price: 999,
    image: "https://res.cloudinary.com/djodhdoyk/image/upload/v1772644933/file_1734690981297_011618e4-4682-4123-be80-1fb7737d34ad1714702040213RARERABBITMenComfortOpaqueCasualShirt1_w2v2lf.jpg",
}));

const ProductGrid = ({ grid }) => {
    return (
        <div
            className={`gap-6 ${grid === 1
                ? "flex flex-col"   // 👈 important change
                : "grid grid-cols-4"
                }`}
        >
            {products.map((product, index) => (
                <ProductCard key={index} product={product} view={grid} />
            ))}
        </div>
    );
};

export default ProductGrid;