import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../../assets/logo.jpg";
import Search from '../../../components/Search';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoGitCompareOutline } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import Tooltip from '@mui/material/Tooltip';


const AuthHeader = () => {
  return (
   <header className="bg-white w-full">
       <div className='header py-4 border-b border-[#FFCEAE]'>
                <div className="container flex items-center justify-between">
                    <div className="col1 w-[25%]">
                        <Link to="/"><img src={logo} alt="logo" /></Link>
                    </div>


                    <div className="col2 w-[45%] ml-7">
                        <Search />
                    </div>


                    <div className="col3 w-[30%] ml-7">
                        <ul className="flex items-center justify-end w-full gap-3">
                            <li className="list-none">
                                <Link to="/login" className='link transition text-[15px] font-medium '>Login</Link> &nbsp;|&nbsp;
                                <Link to="/register" className='link transition text-[15px] font-medium '>Register</Link>
                            </li>
                           
                        </ul>
                    </div>
                </div>
            </div>
   </header>
  )
}

export default AuthHeader