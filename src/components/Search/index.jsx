import React from 'react'
import Button from '@mui/material/Button';
import { IoMdSearch } from "react-icons/io";

const Search = () => {

  return (
    <div className="searchBox flex justify-between items-center w-full h-12.5 bg-[#e5e5e5] rounded-[5px] relative p-2">
      <input type="text" placeholder="Search for products..." className="w-full h-8.75 focus:outline-none bg-inherit p-2 text-[15px]" />
      <Button sx={{
        width: 38,
        minWidth: 38,
        height: 38,
        borderRadius: "50%",
        color: "black",
      }} ><IoMdSearch size={22} className="text-[#4e4e4e]" /></Button>
    </div>
  )
}

export default Search;