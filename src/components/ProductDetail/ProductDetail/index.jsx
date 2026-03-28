import React from "react";
import ProductImages from "../ProductImages";
import ProductInfo from "../ProductInfo";
import ProductTabs from "../ProductTabs";
import RelatedProducts from "../RelatedProducts";
import CustomBreadcrumbs from "../../../components/BreadCrumb"


const ProductDetail = () => {
  const product = {
    title: "A-Line Kurti With Sharara & Dupatta",
    brand: "Sangria",
    price: 1300,
    oldPrice: 1450,
    images: [
      "https://res.cloudinary.com/djodhdoyk/image/upload/v1772644933/file_1734690981297_011618e4-4682-4123-be80-1fb7737d34ad1714702040213RARERABBITMenComfortOpaqueCasualShirt1_w2v2lf.jpg",
      "https://res.cloudinary.com/djodhdoyk/image/upload/v1773022643/file_1734690981297_23990e6b-d01e-40fd-bb6b-98198db544c01714702040162RARERABBITMenComfortOpaqueCasualShirt2_ltwblr.jpg",
      "https://res.cloudinary.com/djodhdoyk/image/upload/v1772644933/file_1734690981297_011618e4-4682-4123-be80-1fb7737d34ad1714702040213RARERABBITMenComfortOpaqueCasualShirt1_w2v2lf.jpg",
      "https://res.cloudinary.com/djodhdoyk/image/upload/v1773022643/file_1734690981297_23990e6b-d01e-40fd-bb6b-98198db544c01714702040162RARERABBITMenComfortOpaqueCasualShirt2_ltwblr.jpg",
      "https://res.cloudinary.com/djodhdoyk/image/upload/v1772644933/file_1734690981297_011618e4-4682-4123-be80-1fb7737d34ad1714702040213RARERABBITMenComfortOpaqueCasualShirt1_w2v2lf.jpg",
      "https://res.cloudinary.com/djodhdoyk/image/upload/v1773022643/file_1734690981297_23990e6b-d01e-40fd-bb6b-98198db544c01714702040162RARERABBITMenComfortOpaqueCasualShirt2_ltwblr.jpg",
      "https://res.cloudinary.com/djodhdoyk/image/upload/v1772644933/file_1734690981297_011618e4-4682-4123-be80-1fb7737d34ad1714702040213RARERABBITMenComfortOpaqueCasualShirt1_w2v2lf.jpg",

    ],
  };

  const breadcrumbData = [
    { label: "Home", href: "/" },
    { label: "Fashion", href: "/Fashion" },
    { label: "Cropped Satin Bomber Jacket" }, // last one (no link)
  ];


  return (
    <div className="p-4 bg-gray-100">

      <CustomBreadcrumbs items={breadcrumbData} />

      <div className="bg-white p-6 mt-2 rounded-xl flex gap-8">
        <ProductImages images={product.images} zoomType="hover" />
        <ProductInfo product={product} />
      </div>

      <ProductTabs />
      <RelatedProducts />
    </div>
  );
};

export default ProductDetail;