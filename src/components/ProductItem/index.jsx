import React from 'react'

const ProductItem = () => {
  return (
    <div className="productItem rounded-md overflow-hidden">
        <div className="imgWrapper w-[100%]h-[250px] overflow-hidden">
            <img src="https://res.cloudinary.com/djodhdoyk/image/upload/v1772644933/file_1734690981297_011618e4-4682-4123-be80-1fb7737d34ad1714702040213RARERABBITMenComfortOpaqueCasualShirt1_w2v2lf.jpg" alt="product_1"  className="w-full" />
        </div>

        <div className="info p-3">
            <h6 className="text-[13px] link">Spread Collar Shirt</h6>
            <h3 className="text-[14px] leading-5.5 mt-1 font-medium text-[rgba(0,0,0,0.9)]">Men Alias-N Regular Fit Spread Collar Shirt</h3>
        </div>
    </div>
  )
}

export default ProductItem