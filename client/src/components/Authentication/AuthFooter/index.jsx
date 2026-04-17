import React from 'react';
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdOutlineRotate90DegreesCw } from "react-icons/md";
import { LiaWalletSolid } from "react-icons/lia";
import { CiGift } from "react-icons/ci";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { Link } from 'react-router-dom';
import { IoChatboxOutline } from "react-icons/io5";
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

const AuthFooter = () => {
    return (
        <footer className="w-full bg-[#fafafa] border-t border-[#FFCEAE]">
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
        </footer>
    )
}

export default AuthFooter;


