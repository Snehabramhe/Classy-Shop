import React from 'react';
import Button from '@mui/material/Button';
import { HiMenuAlt1 } from "react-icons/hi";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { GoRocket } from "react-icons/go";

const Navigation = () => {
    return (
        <nav className="py-2">
            <div className="container flex items-center">
                <div className="col_1 w-[20%]">
                    <Button
                        sx={{
                            padding: 0,
                            color: "black",
                            fontWeight: "bold",
                            gap: 1,
                            width: "100%"
                        }}>
                        <HiMenuAlt1 size={25} />
                        Shop by Categories
                        <FaAngleDown size={15} className='ml-auto' />
                    </Button>
                </div>

                <div className="col_2 w-[60%]">
                    <ul className="flex items-center gap-2 pl-5 overflow-x-auto no-scrollbar">
                        <li className="list-none">
                            <Button
                                component={Link}
                                to="/"
                                sx={{
                                    fontWeight: 700,
                                    color: "rgba(0,0,0,0.8)",
                                    textTransform: "none",
                                    "&:hover": {
                                        color: "#ff5252",
                                    },
                                }}
                            >
                                Home
                            </Button>
                        </li>

                        <li className="list-none">
                            <Button
                                component={Link}
                                to="/fashion"
                                sx={{
                                    fontWeight: 700,
                                    fontSize: "14px",
                                    color: "rgba(0,0,0,0.8)",
                                    textTransform: "none",
                                    "&:hover": { color: "#ff5252" },
                                }}
                            >
                                Fashion
                            </Button>
                        </li>

                        <li className="list-none">
                            <Button
                                component={Link}
                                to="/electronics"
                                sx={{
                                    fontWeight: 700,
                                    fontSize: "14px",
                                    color: "rgba(0,0,0,0.8)",
                                    textTransform: "none",
                                    "&:hover": { color: "#ff5252" },
                                }}
                            >
                                Electronics
                            </Button>
                        </li>

                        <li className="list-none">
                            <Button
                                component={Link}
                                to="/bags"
                                sx={{
                                    fontWeight: 700,
                                    fontSize: "14px",
                                    color: "rgba(0,0,0,0.8)",
                                    textTransform: "none",
                                    "&:hover": { color: "#ff5252" },
                                }}
                            >
                                Bags
                            </Button>
                        </li>

                        <li className="list-none">
                            <Button
                                component={Link}
                                to="/footwear"
                                sx={{
                                    fontWeight: 700,
                                    fontSize: "14px",
                                    color: "rgba(0,0,0,0.8)",
                                    textTransform: "none",
                                    "&:hover": { color: "#ff5252" },
                                }}
                            >
                                Footwear
                            </Button>
                        </li>

                        <li className="list-none">
                            <Button
                                component={Link}
                                to="/groceries"
                                sx={{
                                    fontWeight: 700,
                                    fontSize: "14px",
                                    color: "rgba(0,0,0,0.8)",
                                    textTransform: "none",
                                    "&:hover": { color: "#ff5252" },
                                }}
                            >
                                Groceries
                            </Button>
                        </li>

                        <li className="list-none">
                            <Button
                                component={Link}
                                to="/beauty"
                                sx={{
                                    fontWeight: 700,
                                    fontSize: "14px",
                                    color: "rgba(0,0,0,0.8)",
                                    textTransform: "none",
                                    "&:hover": {
                                        color: "#ff5252",
                                    },
                                }}
                            >
                                Beauty
                            </Button>
                        </li>

                        <li className="list-none">
                            <Button
                                component={Link}
                                to="/wellness"
                                sx={{
                                    fontWeight: 700,
                                    fontSize: "14px",
                                    color: "rgba(0,0,0,0.8)",
                                    textTransform: "none",
                                    "&:hover": { color: "#ff5252" },
                                }}
                            >
                                Wellness
                            </Button>
                        </li>

                        <li className="list-none">
                            <Button
                                component={Link}
                                to="/jewellery"
                                sx={{
                                    fontWeight: 700,
                                    fontSize: "14px",
                                    color: "rgba(0,0,0,0.8)",
                                    textTransform: "none",
                                    "&:hover": { color: "#ff5252" },
                                }}
                            >
                                Jewellery
                            </Button>
                        </li>

                    </ul>
                </div>

                <div className="col_3 w-[20%] ml-auto">
                    <p className="text-[14px] font-bold flex items-center justify-end gap-3"><GoRocket size={20} />Free International Delivery</p>
                </div>

            </div>
        </nav>
    )
}

export default Navigation