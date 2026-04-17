import { MdDashboard, MdImage, MdCategory, MdPeople, MdLogout } from "react-icons/md";
import { IoBagCheckOutline, IoLogoBuffer } from "react-icons/io5";
import { RiProductHuntLine } from "react-icons/ri";
import { SiBloglovin } from "react-icons/si";
import { FaRegImages } from "react-icons/fa";

export const menuItems = [
  {
    title: "Dashboard",
    icon: <MdDashboard size={20} />,
    path: "/",
  },

  {
    title: "Home Slides",
    icon: <MdImage size={20} />,
    key: "slides",
    children: [
      { title: "Home Banners List", path: "/home-banners" },
      { title: "Add Home Banner Slide", path: "/add-banner" },
    ],
  },

  {
    title: "Category",
    icon: <MdCategory size={20} />,
    key: "category",
    children: [
      { title: "Category List", path: "/category-list" },
      { title: "Add Category", path: "/add-category" },
      { title: "Subcategory List", path: "/subcategory-list" },
      { title: "Add Subcategory", path: "/add-subcategory" },
    ],
  },

  {
    title: "Products",
    icon: <RiProductHuntLine size={20} />,
    key: "products",
    children: [
      { title: "Product List", path: "/product-list" },
      { title: "Product Upload", path: "/add-product"},
      { title: "Add Product RAMS", path: "/product-ram" },
      { title: "Add Product WEIGHT", path: "/product-weight" },
      { title: "Add Product SIZE", path: "/product-size" },
    ],
  },

  {
    title: "Users",
    icon: <MdPeople size={20} />,
    path: "/users",
  },

  {
    title: "Orders",
    icon: <IoBagCheckOutline size={20} />,
    path: "/orders",
  },

  {
    title: "Banners",
    icon: <FaRegImages size={20} />,
    key: "banners",
    children: [
      { title: "Home Banner List", path: "/banner-list" },
      { title: "Add Home Banner", path: "/add-home-banner" },
      { title: "Home Banner List 2", path: "/banner-list-2" },
      { title: "Add Banner", path: "/add-banner-2" },
    ],
  },

  {
    title: "Blogs",
    icon: <SiBloglovin size={20} />,
    key: "blogs",
    children: [
      { title: "Blog List", path: "/blog-list" },
      { title: "Add Blog", path: "/add-blog"},
    ],

  },

  {
    title: "Manage Logo",
    icon: <IoLogoBuffer size={20} />,
    path: "/manage-logo",
  },

  {
    title: "Logout",
    icon: <MdLogout size={20} />,
    path: "/login",
  },
];