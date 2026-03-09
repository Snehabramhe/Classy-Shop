import React from 'react';
import { Link } from 'react-router-dom';
import { WiTime4 } from "react-icons/wi";
import { FaLongArrowAltRight } from "react-icons/fa";

const BlogItem = ({item}) => {
    return (
        <div className="blogItem group">
            <div className="imgWrapper w-full overflow-hidden rounded-md ">
                <Link to={`/${item.label.toLowerCase()}`}>
                    <div className="item text-center flex items-center justify-center relative" style={{ backgroundColor: item.color }}>
                        <img className="h-70 w-full transition-transform duration-300 group-hover:scale-105 group-hover:rotate-1" src={item.src} alt={item.alt} />
                   
                       <span className="flex items-center justify-center text-white absolute bottom-2 right-2 bg-primary rounded-md p-1 text-[11px] gap-1"><WiTime4 size={20}/> 5 APRIL, 2023</span>
                    </div>
                </Link>

                <div className="info flex flex-col gap-1 py-2">
                    <h2 className="text-[15px] font-semibold text-black">
                        <Link to="/" className='link'>{item.title}</Link>
                    </h2>
                    <p className="text-[13px] font-normal text-[rgba(0,0,0,0.8)] mb-1">{item.description}</p>
                    <Link className="link font-medium text-[14px] flex items-center-safe gap-1">React More <FaLongArrowAltRight size={20} className='mt-0.5'/></Link>

                </div>
            </div>
        </div>
    )
}

export default BlogItem;