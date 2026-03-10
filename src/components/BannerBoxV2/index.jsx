import React from "react";

const sideBanner = [
  {
    title: "Samsung Gear VR Camera",
    price: "$129.00",
    img: "https://res.cloudinary.com/djodhdoyk/image/upload/v1773081604/robo-img-removebg-preview-removebg-preview_oucpnj.png",
    alt: "samsung-vr",
    bgColor: "#dbdfee",
    imgPos: "right"
  },
  {
    title: "Marcel Dining Room Chair",
    price: "$129.00",
    img: "https://res.cloudinary.com/djodhdoyk/image/upload/v1773118042/iScreen_Shoter_-_Google_Chrome_-_260310101610-removebg-preview_mqulyr.png",
    alt: "modern-chair",
    bgColor: "#b7decd",
    imgPos: "left"
  }
];

const BannerBoxV2 = () => {
  return (
    <div className="flex flex-col gap-4 w-full h-[65vh]">
      {sideBanner.map((item, index) => {
        const isImageLeft = item.imgPos === "left";

        return (
          <div
            key={index}
            style={{ backgroundColor: item.bgColor }}
            className={`w-full h-1/2 rounded-md flex items-center gap-2 px-6 overflow-hidden transition-all duration-150 hover:scale-105  cursor-pointer ${
              isImageLeft ? "flex-row-reverse" : "flex-row"
            }`}
          >
            {/* CONTENT */}
            <div className="w-[40%] flex flex-col gap-1 items-start">
              <h3 className="text-sm font-semibold leading-snug">
                {item.title}
              </h3>

              <span className="text-red-500 font-bold text-xl">
                {item.price}
              </span>

            
              <button className="text-md font-semibold underline">
                SHOP NOW
              </button>
            </div>

            {/* IMAGE */}
            <div className="w-[60%] h-full flex justify-center items-end">
              <img
                src={item.img}
                alt={item.alt}
                className="h-full object-contain"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BannerBoxV2;

