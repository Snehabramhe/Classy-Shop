import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { IoCloseSharp } from "react-icons/io5";
import { FaRegSquarePlus } from "react-icons/fa6";
import { FiMinusSquare } from "react-icons/fi";

const CategoryPanel = (props) => {
    const [submenuIndex, setSubmenuIndex] = useState(null);
    const [innerSubmenuIndex, setInnerSubmenuIndex] = useState(null);


    const openSubmenu = (index) => {
        if (submenuIndex === index) {
            setSubmenuIndex(null);
        } else {
            setSubmenuIndex(index);
        }
    }

    const openInnerSubmenu = (index) => {
        if (innerSubmenuIndex === index) {
            setInnerSubmenuIndex(null);
        } else {
            setInnerSubmenuIndex(index);
        }
    }

    const DrawerList = (
        <Box sx={{ width: 350 }} role="presentation">
            <h3 className="flex items-center justify-between p-3 text-[18px] font-medium">Shop by Categories <IoCloseSharp size={25} className='cursor-pointer' onClick={props.toggleDrawer(false)} /></h3>
            <div className="scroll">
                <ul className="w-full">
                    <li className="list-none flex items-center justify-between relative flex-col">
                        <Button
                            component={Link}
                            to="/"
                            sx={{ width: "100%", color: "rgba(0,0,0,0.8)", fontWeight: "bold", justifyContent: "start", paddingX: 2, textTransform: "none", "&:hover": { color: 'var(--color-primary)' } }}>
                            Fashion
                        </Button>
                        {
                            submenuIndex === 0 ? (
                                <FiMinusSquare onClick={() => openSubmenu(0)} className='absolute top-2.5 right-3.75 cursor-pointer' size={20} />
                            ) : (
                                <FaRegSquarePlus onClick={() => openSubmenu(0)} className='absolute top-2.5 right-3.75 cursor-pointer' size={20} />
                            )
                        }

                        {
                            submenuIndex === 0 && (
                                <>
                                    <ul className="submenu w-full pl-2">
                                        <li className="list-none flex items-center justify-between relative flex-col">
                                            <Button
                                                component={Link}
                                                to="/"
                                                sx={{ width: "100%", color: "rgba(0,0,0,0.8)", fontWeight: "bold", justifyContent: "start", paddingX: 2, textTransform: "none", "&:hover": { color: 'var(--color-primary)' } }}>
                                                Apparel
                                            </Button>
                                            {
                                                innerSubmenuIndex === 0 ? (
                                                    <FiMinusSquare onClick={() => openInnerSubmenu(0)} className='absolute top-2.5 right-3.75 cursor-pointer' size={20} />
                                                ) : (
                                                    <FaRegSquarePlus onClick={() => openInnerSubmenu(0)} className='absolute top-2.5 right-3.75 cursor-pointer' size={20} />
                                                )
                                            }
                                            {
                                                innerSubmenuIndex === 0 && (
                                                    <ul className="inner_submenu w-full pl-2">
                                                        <li className="list-none flex items-center justify-between relative flex-col">
                                                            <Button
                                                                component={Link}
                                                                to="/" sx={{ width: "100%", color: "rgba(0,0,0,0.8)", fontWeight: "bold", justifyContent: "start", paddingX: 2, textTransform: "none", "&:hover": { color: 'var(--color-primary)' } }}>
                                                                Shirts
                                                            </Button>
                                                        </li>

                                                        <li className="list-none flex items-center justify-between relative flex-col">
                                                            <Button
                                                                component={Link}
                                                                to="/" sx={{ width: "100%", color: "rgba(0,0,0,0.8)", fontWeight: "bold", justifyContent: "start", paddingX: 2, textTransform: "none", "&:hover": { color: 'var(--color-primary)' } }}>
                                                                Crepe T-shirt
                                                            </Button>
                                                        </li>

                                                        <li className="list-none flex items-center justify-between relative flex-col">
                                                            <Button
                                                                component={Link}
                                                                to="/" sx={{ width: "100%", color: "rgba(0,0,0,0.8)", fontWeight: "bold", justifyContent: "start", paddingX: 2, textTransform: "none", "&:hover": { color: 'var(--color-primary)' } }}>
                                                                Leather Watch
                                                            </Button>
                                                        </li>

                                                        <li className="list-none flex items-center justify-between relative flex-col">
                                                            <Button
                                                                component={Link}
                                                                to="/" sx={{ width: "100%", color: "rgba(0,0,0,0.8)", fontWeight: "bold", justifyContent: "start", paddingX: 2, textTransform: "none", "&:hover": { color: 'var(--color-primary)' } }}>
                                                                Rolling Diamond
                                                            </Button>
                                                        </li>

                                                    </ul>
                                                )
                                            }
                                        </li>
                                    </ul>

                                    <ul className="submenu w-full pl-2">
                                        <li className="list-none flex items-center justify-between relative flex-col">
                                            <Button
                                                component={Link}
                                                to="/"
                                                sx={{ width: "100%", color: "rgba(0,0,0,0.8)", fontWeight: "bold", justifyContent: "start", paddingX: 2, textTransform: "none", "&:hover": { color: 'var(--color-primary)' } }}>
                                                Outerwear
                                            </Button>
                                            <FaRegSquarePlus className='absolute top-2.5 right-3.75 cursor-pointer' size={20} />
                                        </li>
                                    </ul>

                                    <ul className="submenu w-full pl-2">
                                        <li className="list-none flex items-center justify-between relative flex-col">
                                            <Button
                                                component={Link}
                                                to="/"
                                                sx={{ width: "100%", color: "rgba(0,0,0,0.8)", fontWeight: "bold", justifyContent: "start", paddingX: 2, textTransform: "none", "&:hover": { color: 'var(--color-primary)' } }}>
                                                Footwear
                                            </Button>
                                            <FaRegSquarePlus className='absolute top-2.5 right-3.75 cursor-pointer' size={20} />
                                        </li>
                                    </ul>
                                </>
                            )
                        }
                    </li>
                </ul>
            </div>

        </Box>
    );

    return (
        <div>
            <Drawer open={props.open} onClose={props.toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    );
}


export default CategoryPanel;