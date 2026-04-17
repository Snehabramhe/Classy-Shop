import React from 'react'
import HomeCatSlider from "../../components/HomeCatSlider";
import HomeSlider from "../../components/HomeSlider";
import { LiaShippingFastSolid } from "react-icons/lia";
import AdsBannerSlider from '../../components/AdsBannerSlider';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link } from 'react-router-dom';
import ProductsSlider from '../../components/ProductsSlider';
import Blogs from '../../components/Blogs';
import HomeBannerV2 from '../../components/HomeSliderV2';
import BannerBoxV2 from '../../components/BannerBoxV2';

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


const bannerSet1 = [
  {
    src: "https://res.cloudinary.com/djodhdoyk/image/upload/v1772562295/file_1734525620831_NewProject_3_njjvl4.jpg",
    alt: "Banner_1",
    label: "Fashion",
  },
  {
    src: "https://res.cloudinary.com/djodhdoyk/image/upload/v1772562387/file_1734532742018_NewProject_22_rwdah0.jpg",
    alt: "Banner_2",
    label: "Electronics",
  },
  {
    src: "https://res.cloudinary.com/djodhdoyk/image/upload/v1772562393/file_1734525653108_NewProject_20_miliyc.jpg",
    alt: "Banner_3",
    label: "Bags",
  },
  {
    src: "https://res.cloudinary.com/djodhdoyk/image/upload/v1772562412/file_1734525634299_NewProject_2_etx65o.jpg",
    alt: "Banner_4",
    label: "Footwear",
  },
  {
    src: "https://res.cloudinary.com/djodhdoyk/image/upload/v1772562295/file_1734525620831_NewProject_3_njjvl4.jpg",
    alt: "Banner_1",
    label: "Fashion",
  },
  {
    src: "https://res.cloudinary.com/djodhdoyk/image/upload/v1772562387/file_1734532742018_NewProject_22_rwdah0.jpg",
    alt: "Banner_2",
    label: "Electronics",
  },
  {
    src: "https://res.cloudinary.com/djodhdoyk/image/upload/v1772562393/file_1734525653108_NewProject_20_miliyc.jpg",
    alt: "Banner_3",
    label: "Bags",
  },
  {
    src: "https://res.cloudinary.com/djodhdoyk/image/upload/v1772562412/file_1734525634299_NewProject_2_etx65o.jpg",
    alt: "Banner_4",
    label: "Footwear",
  }
];

const bannerSet2 = [
  {
    src: "https://res.cloudinary.com/djodhdoyk/image/upload/v1773134495/1741669037986_banner2_rjjtcr.webp",
    alt: "Banner_1",
    label: "Fashion",
  },
  {
    src: "https://res.cloudinary.com/djodhdoyk/image/upload/v1773134526/1742453755529_1741669087880_banner6_voh1qq.webp",
    alt: "Banner_2",
    label: "Electronics",
  },
  {
    src: "https://res.cloudinary.com/djodhdoyk/image/upload/v1773134513/1741669057847_banner5_aoykgh.webp",
    alt: "Banner_3",
    label: "Bags",
  },
  {
    src: "https://res.cloudinary.com/djodhdoyk/image/upload/v1773134539/1763693112742_banner1_xrh7uz.webp",
    alt: "Banner_4",
    label: "Footwear",
  },
]

const bannerSet3 = [
  {
    src: "https://res.cloudinary.com/djodhdoyk/image/upload/v1772562393/file_1734525653108_NewProject_20_miliyc.jpg",
    alt: "Banner_1",
    label: "Bags",
  },
  {
    src: "https://res.cloudinary.com/djodhdoyk/image/upload/v1772562412/file_1734525634299_NewProject_2_etx65o.jpg",
    alt: "Banner_2",
    label: "Footwear",
  },
  {
    src: "https://res.cloudinary.com/djodhdoyk/image/upload/v1772562387/file_1734532742018_NewProject_22_rwdah0.jpg",
    alt: "Banner_3",
    label: "Electronics",
  },
]

const Home = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      {/* <HomeSlider /> */}

      <section className="py-6">
        <div className="container flex items-center gap-4">
          <div className="w-[75%]">
            <HomeBannerV2 />
          </div>
          <div className="w-[25%]">
            <BannerBoxV2 />
          </div>
        </div>
      </section>


      <HomeCatSlider />

      <section className="bg-white py-8">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="leftSec">
              <h3 className="text-[20px] font-semibold">Popular Products</h3>
              <p className="text-[16px] font-normal">Do not miss the current offers until the end of March.</p>
            </div>

            <div className="rightSec w-[60%]">
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons
                aria-label="visible arrows tabs example"
                sx={{
                  [`& .${tabsClasses.scrollButtons}`]: {
                    '&.Mui-disabled': { opacity: 0.3 },
                  },
                  "& .MuiTabs-indicator": {
                    backgroundColor: "#ff5252",
                  },

                  "& .MuiTab-root": {
                    color: "black",
                    textTransform: "none"
                  },

                  "& .Mui-selected": {
                    color: "#ff5252",
                    textTransform: "capitalize"
                  }
                }}
              >
                {menuItems.map((item, index) => (
                  <Tab key={item.label} label={item.label} component={Link} to={item.link} />
                ))}
              </Tabs>
            </div>
          </div>
          <ProductsSlider items={5} />
        </div>


      </section>

      <section className="py-4 pt-2 bg-white">
        <div className="container">
          <div className="freeShiping w-[90%] mx-auto p-8 border-2 border-primary flex items-center justify-between rounded-md mb-7">
            <div className="col1 flex items-center gap-4">
              <LiaShippingFastSolid size={50} />
              <span className="font-semibold text-[20px]">FREE SHIPPING</span>
            </div>

            <div className="col2">
              <p className="mb-0 text-lg">Free Delivery Now On Your First Order and over $200</p>
            </div>

            <p className="font-bold text-[25px]">- Only $200*</p>
          </div>

          <AdsBannerSlider items={4}   banners={bannerSet1}/>
        </div>
      </section>


      <section className="py-5 pt-0 bg-white">
        <div className="container">
          <h3 className="text-[20px] font-semibold">Latest Products</h3>
          <ProductsSlider items={5} />
          <AdsBannerSlider items={3}  banners={bannerSet2}/>
        </div>
      </section>


      <section className="py-5 pt-0 bg-white">
        <div className="container">
          <h3 className="text-[20px] font-semibold">Featured Products</h3>
          <ProductsSlider items={5} />
          <AdsBannerSlider items={3}  banners={bannerSet3}/>
        </div>
      </section>

      <section className="py-5 pb-8 pt-0 bg-white blogSection">
        <div className="container">
          <h3 className="text-[20px] font-semibold mb-3">From The Blog</h3>
          <Blogs />
        </div>
      </section>
    </>
  )
}

export default Home;