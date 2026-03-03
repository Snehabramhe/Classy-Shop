import React, { useState, useEffect, useRef } from 'react';
import Button from '@mui/material/Button';
import { HiMenuAlt1 } from "react-icons/hi";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { GoRocket } from "react-icons/go";
import CategoryPanel from './CategoryPanel';


const menuItems = [
    { label: "Home", link: "/" },
    { label: "Fashion", link: "/fashion" },
    { label: "Electronics", link: "/electronics" },
    { label: "Bags", link: "/bags" },
    { label: "Footwear", link: "/footwear" },
    { label: "Groceries", link: "/groceries" },
    { label: "Beauty", link: "/beauty" },
    { label: "Wellness", link: "/wellness" },
    { label: "Jewellery", link: "/jewellery" },
];

const subMenus = {
    Home: [],
    Fashion: ["Men", "Women", "Kids", "Girls", "Boys"],
    Electronics: ["Phones", "Laptops", "Accessories"],
    Bags: ["Handbags", "Backpacks", "Travel Bags"],
    Footwear: ["Sneakers", "Sandals", "Boots"],
    Groceries: ["Fruits", "Vegetables", "Daily Essentials"],
    Beauty: ["Makeup", "Skincare", "Haircare"],
    Wellness: ["Supplements", "Healthcare", "Fitness"],
    Jewellery: ["Gold", "Silver", "Diamond"]
};

const Navigation = () => {

    const [open, setOpen] = useState(false);
    const [active, setActive] = useState(null);
    const [visibleItems, setVisibleItems] = useState(menuItems);
    const [hiddenItems, setHiddenItems] = useState([]);



    const listRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const updateMenu = () => {
            if (!listRef.current || !containerRef.current) return;

            const containerWidth = containerRef.current.offsetWidth;
            const listItems = listRef.current.children;

            let totalWidth = 0;
            let newVisible = [];
            let newHidden = [];

            for (let i = 0; i < menuItems.length; i++) {
                const itemWidth = listItems[i]?.offsetWidth || 0;
                totalWidth += itemWidth;

                if (totalWidth < containerWidth - 100) {
                    newVisible.push(menuItems[i]);
                } else {
                    newHidden.push(menuItems[i]);
                }
            }

            setVisibleItems(newVisible);
            setHiddenItems(newHidden);
        };

        updateMenu();
        window.addEventListener("resize", updateMenu);
        return () => window.removeEventListener("resize", updateMenu);
    }, []);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };



    return (
        <>
            <nav className="py-2">
                <div className="container flex items-center min-w-0">
                    <div className="col_1 w-[20%] min-w-0">
                        <Button
                            onClick={toggleDrawer(true)}
                            sx={{
                                padding: 0,
                                color: "black",
                                fontWeight: "bold",
                                gap: 1,
                                width: "100%"
                            }}>
                            <HiMenuAlt1 size={25} className='cursor-pointer' />
                            Shop by Categories
                            <FaAngleDown size={15} className='ml-auto cursor-pointer' />
                        </Button>
                    </div>

                    <div className="col_2 w-[60%] relative min-w-0"
                        onMouseEnter={() => setActive("fashion")}
                        onMouseLeave={() => setActive(null)}>


                        <div className="overflow-visible min-w-0 w-full" ref={containerRef}>
                            <ul
                                ref={listRef}
                                className="flex items-center gap-2 pl-5 relative whitespace-nowrap max-w-full"
                            >

                                {/* {visibleItems.map(item => (
                                    <li key={item.label} className="list-none">
                                        <Button
                                            component={Link}
                                            to={item.link}
                                            sx={{
                                                fontWeight: 700,
                                                fontSize: "14px",
                                                color: "rgba(0,0,0,0.8)",
                                                textTransform: "none",
                                                "&:hover": { color: "#ff5252" },
                                            }}
                                        >
                                            {item.label}
                                        </Button>
                                    </li>
                                ))} */}

                                {visibleItems.map(item => (
                                    <li
                                        key={item.label}
                                        className="list-none relative"
                                        onMouseEnter={() => setActive(item.label)}
                                        onMouseLeave={() => setActive(null)}
                                    >
                                        <Button
                                            component={Link}
                                            to={item.link}
                                            sx={{
                                                fontWeight: 700,
                                                fontSize: "14px",
                                                color: "rgba(0,0,0,0.8)",
                                                textTransform: "none",
                                                "&:hover": { color: "#ff5252" },
                                            }}
                                        >
                                            {item.label}
                                        </Button>

                                        {/* Submenu for each item */}
                                        {subMenus[item.label]?.length > 0 && (
                                            <div
                                                className={`
                                                absolute top-full left-0 bg-white shadow-md w-40 flex flex-col
                                                transition-all duration-200
                                                ${active === item.label ? "opacity-100 visible" : "opacity-0 invisible"}
                                            `}
                                                style={{ zIndex: 10 }}
                                            >
                                                {subMenus[item.label].map((sub, i) => (

                                                    <Button component={Link} to={`/${item.label.toLowerCase()}/${sub.toLowerCase()}`} key={i} sx={{ justifyContent: "start", textTransform: "none", paddingLeft: "20px", fontWeight: "600", "&:hover": { color: "var(--color-primary)" }, color: "rgba(0,0,0,0.5)" }}>{sub}</Button>

                                                ))}
                                            </div>
                                        )}
                                    </li>
                                ))}

                                {hiddenItems.length > 0 && (

                                    <li className="list-none relative"
                                        onMouseEnter={() => setActive("more")}
                                        onMouseLeave={() => setActive(null)}
                                    >
                                        <Button
                                            sx={{
                                                fontWeight: 700,
                                                fontSize: "14px",
                                                textTransform: "none",
                                                color: "rgba(0,0,0,0.8)",
                                                "&:hover": { color: "var(--color-primary)" }
                                            }}

                                        >
                                            More <FaAngleDown size={13} className="ml-1" />
                                        </Button>


                                        {/* More Dropdown */}
                                        <div
                                            className={`
                                                absolute top-full left-0 bg-white shadow-md w-40 flex flex-col
                                                transition-all duration-200
                                                ${active === "more" ? "opacity-100 visible" : "opacity-0 invisible"}
                                            `}
                                            style={{ zIndex: 9999 }}>
                                            {hiddenItems.map(item => (
                                                <Button key={item.label} component={Link} to={item.link} sx={{ justifyContent: "start", textTransform: "none", paddingLeft: "20px", fontWeight: "600", "&:hover": { color: "var(--color-primary)" }, color: "rgba(0,0,0,0.8)" }}>{item.label}</Button>

                                            ))}
                                        </div>
                                    </li>
                                )}

                            </ul>
                        </div>

                    </div>

                    <div className="col_3 w-[20%] ml-auto min-w-0">
                        <p className="text-[14px] font-bold flex items-center justify-end gap-3"><GoRocket size={20} />Free International Delivery</p>
                    </div>

                </div>
            </nav>

            {/* Category pannel component */}
            <CategoryPanel open={open} toggleDrawer={toggleDrawer} />
        </>
    )
}

export default Navigation