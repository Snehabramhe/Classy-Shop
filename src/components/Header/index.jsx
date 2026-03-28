import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/logo.jpg";
import Search from '../Search';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoGitCompareOutline } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import Tooltip from '@mui/material/Tooltip';
import Navigation from './Navigation';
import CartDrawer from '../Cart/CartDrawer';


const Header = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);

    return (

        <>
            <header className="bg-white w-full border-b border-gray-200 drop-shadow-md">
                <div className='top-strip py-2 border-t border-gray-200 border-b'>
                    <div className='container'>
                        <div className='flex items-center justify-between'>
                            <div className='col1 w-[50%]'>
                                <p className='text-[13px] font-medium'>Get up to 50% off new season styles, limited time only</p>
                            </div>
                            <div className='clo2 flex items-center justify-end'>
                                <ul className='flex items-center gap-3'>
                                    <li className='list-none'>
                                        <Link to="/help-center" className='text-[13px] link font-medium transition'>Help Center</Link>
                                    </li>
                                    <li className='list-none'>
                                        <Link to="/order-tracking" className='text-[13px] link font-medium transition'>Order Tracking</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='header py-4 border-gray-200 border-b'>
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
                                <li className="list-none">
                                    <Tooltip title="Compare">
                                        <IconButton aria-label="compare">
                                            <Badge
                                                badgeContent={4} color="secondary"
                                                anchorOrigin={{
                                                    vertical: 'top',
                                                    horizontal: 'right',
                                                }}
                                                sx={{
                                                    "& .MuiBadge-badge": {
                                                        backgroundColor: "#ff5252",
                                                        color: "white",
                                                    },
                                                }}

                                            >
                                                <IoGitCompareOutline />
                                            </Badge>
                                        </IconButton>
                                    </Tooltip>
                                </li>
                                <li className="list-none">
                                    <Tooltip title="Wishlist">
                                        <IconButton aria-label="wishlist">
                                            <Badge
                                                badgeContent={4} color="secondary"
                                                anchorOrigin={{
                                                    vertical: 'top',
                                                    horizontal: 'right',
                                                }}
                                                sx={{
                                                    "& .MuiBadge-badge": {
                                                        backgroundColor: "#ff5252",
                                                        color: "white",
                                                    },
                                                }}

                                            >
                                                <IoHeartOutline />
                                            </Badge>
                                        </IconButton>
                                    </Tooltip>
                                </li>
                                <li className="list-none">
                                    <Tooltip title="Cart">
                                        <IconButton aria-label="cart" onClick={() => setIsCartOpen(true)}>
                                            <Badge
                                                badgeContent={4} color="secondary"
                                                anchorOrigin={{
                                                    vertical: 'top',
                                                    horizontal: 'right',
                                                }}
                                                sx={{
                                                    "& .MuiBadge-badge": {
                                                        backgroundColor: "#ff5252",
                                                        color: "white",
                                                    },
                                                }}

                                            >
                                                <MdOutlineShoppingCart size={22} />
                                            </Badge>
                                        </IconButton>
                                    </Tooltip>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="relative z-40">
                    <Navigation />
                </div>
            </header>

            {/* 🧠 CART DRAWER (OUTSIDE HEADER) */}
            <CartDrawer
                isOpen={isCartOpen}
                onClose={() => setIsCartOpen(false)}
            />
        </>
    )
}

export default Header