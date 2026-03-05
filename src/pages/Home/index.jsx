import React from 'react'
import HomeCatSlider from "../../components/HomeCatSlider";
import HomeSlider from "../../components/HomeSlider";
import { LiaShippingFastSolid } from "react-icons/lia";
import AdsBannerSlider from '../../components/AdsBannerSlider';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link } from 'react-router-dom';
import ProductsSlider from '../../components/ProductsSlider';

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


const Home = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <HomeSlider />
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
        </div>

        <ProductsSlider items={5} />
      </section>

      <section className="py-16 bg-white">
        <div className="container">
          <div className="freeShiping w-[90%] m-auto p-8 border-2 border-primary flex items-center justify-between rounded-md mb-7">
            <div className="col1 flex items-center gap-4">
              <LiaShippingFastSolid size={50} />
              <span className="font-semibold text-[20px]">FREE SHIPPING</span>
            </div>

            <div className="col2">
              <p className="mb-0 text-lg">Free Delivery Now On Your First Order and over $200</p>
            </div>

            <p className="font-bold text-[25px]">- Only $200*</p>
          </div>

          <AdsBannerSlider items={3} />
        </div>
      </section>
    </>
  )
}

export default Home;