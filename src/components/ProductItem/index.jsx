import React from 'react'
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';
import { FaRegHeart } from "react-icons/fa";
import { IoIosGitCompare } from "react-icons/io";
import { LuExpand } from "react-icons/lu";
import { BiLinkExternal } from "react-icons/bi";

const actionBtnStyle = {
  width: 35,
  height: 35,
  minWidth: 35,
  borderRadius: "50%",
  backgroundColor: "white",
  color: "black",
  transition: "all .3s ease",
  "& svg": {
    fontSize: 25,
    pointerEvents: "none", 
  },
  "&:hover": {
    backgroundColor: "var(--color-primary)",
    color: "white",
    transform: "scale(1.2)"
  },
  
};

const ProductItem = () => {
  return (
    <div className="productItem rounded-md overflow-hidden border border-[rgba(0,0,0,0.1)] shadow-xl">
      <div className="imgWrapper w-full overflow-hidden relative group">
        <Link to="/">
        <div className="img">
          <img src="https://res.cloudinary.com/djodhdoyk/image/upload/v1772644933/file_1734690981297_011618e4-4682-4123-be80-1fb7737d34ad1714702040213RARERABBITMenComfortOpaqueCasualShirt1_w2v2lf.jpg" alt="product_1" className="w-full" />
          <img src="https://res.cloudinary.com/djodhdoyk/image/upload/v1773022643/file_1734690981297_23990e6b-d01e-40fd-bb6b-98198db544c01714702040162RARERABBITMenComfortOpaqueCasualShirt2_ltwblr.jpg" alt="product_1" className="w-full absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105" />
        </div>
        </Link>
        <span className="discount flex items-center absolute top-2.5 left-2.5 z-1 bg-primary text-white rounded-md p-1 text-[14px] font-medium">10%</span>

        <div className="actions absolute right-1 z-20 flex flex-col items-center gap-4 transition-all duration-500 -top-50 group-hover:top-2.5 opacity-0 group-hover:opacity-100">
          <Button sx={actionBtnStyle}><FaRegHeart /></Button>
          <Button sx={actionBtnStyle}><IoIosGitCompare /></Button>
          <Button sx={actionBtnStyle}><LuExpand /></Button>
          <Button sx={actionBtnStyle}><BiLinkExternal /></Button>
        </div>
      </div>

      <div className="info p-3 py-5">
        <h6 className="text-[13px] link transition-all">Spread Collar Shirt</h6>
        <h3 className="text-[13px] leading-5 mt-1 mb-1 font-medium text-[rgba(0,0,0,1)]">
          <Link to="/" className='link transition-all'> Men Alias-N Regular Fit Spread Collar Shirt</Link>
        </h3>
        <Rating name="half-rating" defaultValue={4} precision={0.5} readOnly />

        <div className="flex items-center gap-3">
          <span className="oldPrice line-through text-gray-500 text-[15px] font-medium">$58.00</span>
          <span className="price text-primary text-[15px] font-semibold">$50.00</span>
        </div>

      </div>
    </div>
  )
}

export default ProductItem