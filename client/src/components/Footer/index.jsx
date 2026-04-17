import React from 'react';
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdOutlineRotate90DegreesCw } from "react-icons/md";
import { LiaWalletSolid } from "react-icons/lia";
import { CiGift } from "react-icons/ci";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { Link } from 'react-router-dom';
import { IoChatboxOutline } from "react-icons/io5";
import CustomButton from '../Common/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { BiLogoFacebook } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { RiYoutubeLine } from "react-icons/ri";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const socialIcons = [
    {
        icon: <BiLogoFacebook size={20} />,
        link: "https://facebook.com"
    },
    {
        icon: <FaXTwitter size={20} />,
        link: "https://twitter.com"
    },
    {
        icon: <FaInstagram size={20} />,
        link: "https://instagram.com"
    },
    {
        icon: <RiYoutubeLine size={20} />,
        link: "https://youtube.com"
    },
    {
        icon: <FaPinterestP size={20} />,
        link: "https://pinterest.com"
    }
];

const paymentCards = [
    {
        img: "https://res.cloudinary.com/djodhdoyk/image/upload/v1773056380/carte_bleue_zhf5ou.png",
        alt: "Carte Bleue"
    },
    {
        img: "https://res.cloudinary.com/djodhdoyk/image/upload/v1773056409/visa_oerwpz.png",
        alt: "Visa"
    },
    {
        img: "https://res.cloudinary.com/djodhdoyk/image/upload/v1773056433/master_card_fbdawo.png",
        alt: "Master Card"
    },
    {
        img: "https://res.cloudinary.com/djodhdoyk/image/upload/v1773056449/american_express_ak4pig.png",
        alt: "American Express"
    },
    {
        img: "https://res.cloudinary.com/djodhdoyk/image/upload/v1773056462/paypal_tobkrc.png",
        alt: "PayPal"
    }
];

const footerItem = [
    {
        title: "Free Shipping",
        description: "For all Orders Over $100",
        icon: <LiaShippingFastSolid size={50} />,
    },
    {
        title: "30 Days Returns",
        description: "For an Exchange Product",
        icon: <MdOutlineRotate90DegreesCw size={50} />,
    },
    {
        title: "Secured Payment",
        description: "Payment Cards Accepted",
        icon: <LiaWalletSolid size={50} />,
    },
    {
        title: "Special Gifts",
        description: "Our First Product Order",
        icon: <CiGift size={50} />,
    },
    {
        title: "Support 24/7",
        description: "Contact us Anytime",
        icon: <TfiHeadphoneAlt size={50} />,
    },
]

const Footer = () => {
    return (
        <>
            <footer className="py-6 bg-[#fafafa]">
                <div className="container">
                    <div className="flex items-center justify-center gap-2 py-8">
                        {footerItem.map((item, index) => {
                            return (
                                <div className="col flex items-center justify-center flex-col group w-[15%]">
                                    <span className="transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1">{item.icon}</span>
                                    <h3 className="text-[16px] font-semibold mt-3">{item.title}</h3>
                                    <p className="text-[12px] font-medium">{item.description}</p>
                                </div>
                            )
                        })}
                    </div>
                    <br />
                    <hr className="border border-gray-300" />


                    <div className="footer flex py-8">
                        <div className="part1 w-[25%] border-r border-[rgba(0,0,0,0.1)]">
                            <h2 className="text-[18px] font-semibold mb-4">Contact us</h2>
                            <p className="text-[13px] font-normal pb-4">Classyshop - Mega Super Store <br />
                                507-Union Trade Center France</p>
                            <Link className='link text-[13px]' to="mailto:someone@example.com">sales@yourcompany.com</Link>

                            <span className="text-[22px] font-semibold block w-full mt-3 text-primary pb-4">(+91) 9876-543-201</span>

                            <div className="flex items-center gap-2">
                                <IoChatboxOutline className='text-[40px] text-primary' />
                                <span className='text-[16px] font-semibold'>Online Chat <br />
                                    Get Expert Help</span>
                            </div>
                        </div>


                        <div className="part2 w-[40%] flex pl-8">
                            <div className="part2_col1 w-[50%]">
                                <h2 className="text-[18px] font-semibold mb-4">Products</h2>
                                <ul className="list py-2">
                                    <li className="list-none text-[14px] w-full mb-2"><Link to="/" className="link">Prices drop</Link></li>
                                    <li className="list-none text-[14px] w-full mb-2"><Link to="/" className="link">New Products</Link></li>
                                    <li className="list-none text-[14px] w-full mb-2"><Link to="/" className="link">Best Sales</Link></li>
                                    <li className="list-none text-[14px] w-full mb-2"><Link to="/" className="link">Contact Us</Link></li>
                                    <li className="list-none text-[14px] w-full mb-2"><Link to="/" className="link">Sitemap</Link></li>
                                    <li className="list-none text-[14px] w-full mb-2"><Link to="/" className="link">Stores</Link></li>
                                </ul>
                            </div>

                            <div className="part2_col2 w-[50%]">
                                <h2 className="text-[18px] font-semibold mb-4">Our Company</h2>
                                <ul className="list py-2">
                                    <li className="list-none text-[14px] w-full mb-2"><Link to="/" className="link">Delivery</Link></li>
                                    <li className="list-none text-[14px] w-full mb-2"><Link to="/" className="link">Legal Notice</Link></li>
                                    <li className="list-none text-[14px] w-full mb-2"><Link to="/" className="link">Terms And Conditions of Use</Link></li>
                                    <li className="list-none text-[14px] w-full mb-2"><Link to="/" className="link">About Us</Link></li>
                                    <li className="list-none text-[14px] w-full mb-2"><Link to="/" className="link">Secure Payment</Link></li>
                                    <li className="list-none text-[14px] w-full mb-2"><Link to="/" className="link">Login</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="part2 w-[35%] flex pl-8 flex-col pr-8">
                            <h2 className="text-[18px] font-semibold mb-4">Subscribe to newsletter</h2>
                            <p className="text-[13px]">Subscribe to our latest newsletter to get news about special discounts.</p>

                            <form className="mt-5">
                                <input type="text" className="w-full h-11.25 border outline-none border-gray-300 pl-4 pr-4 rounded-sm mb-4 text-sm  hover:border-[rgba(0,0,0,0.3)] " placeholder="Your Email Address" />
                                <CustomButton>SUBSCRIBE</CustomButton>

                                <FormControlLabel control={<Checkbox sx={{
                                    color: "#ff5252",
                                    "&.Mui-checked": {
                                        color: "#ff5252",
                                    },
                                }} />}
                                    label="I agree to the terms and conditions and the privacy policy" sx={{
                                        "& .MuiFormControlLabel-label": {
                                            fontSize: "14px",
                                            color: "rgba(0,0,0,0.8)"
                                        },
                                    }} />
                            </form>

                        </div>
                    </div>
                </div>
            </footer>


            <div className="bottomStrip border-t border-[rgba(0,0,0,0.1)] py-3 bg-white">
                <div className="container flex items-center justify-between">
                    <ul className="flex items-center gap-2">
                        {socialIcons.map((item, index) => (
                            <li key={item.icon} className="list-none">
                                <Link to={item.link} target='_blank'
                                    className='w-8.75 h-8.75 rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-primary transition-all'>
                                    <span className="group-hover:text-white">
                                        {item.icon}
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>


                    <p className="text-[13px] text-center mb-0">© 2025 - Ecommerce Template</p>

                    <div className="flex items-center gap-2">
                        {paymentCards.map((card, index) => (
                            <img
                                key={card.alt}
                                src={card.img}
                                alt={card.alt}
                                className="h-6 object-contain"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;