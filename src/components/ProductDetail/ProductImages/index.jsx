import React, { useState } from "react";

const ProductImages = ({ images }) => {
  const [activeImage, setActiveImage] = useState(images[0]);
  const [showZoom, setShowZoom] = useState(false);
  const [zoomStyle, setZoomStyle] = useState({});
  const [lensStyle, setLensStyle] = useState({});

  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();

    const x = e.clientX - left;
    const y = e.clientY - top;

    const xPercent = (x / width) * 100;
    const yPercent = (y / height) * 100;

    setZoomStyle({
      backgroundPosition: `${xPercent}% ${yPercent}%`,
    });

    setLensStyle({
      left: `${(x / width) * 100}%`,
      top: `${(y / height) * 100}%`,
      transform: "translate(-50%, -50%)",
    });
  };

  return (
    <div className="relative">

      {/* FLEX ONLY FOR LEFT CONTENT */}
      <div className="flex gap-6 flex-col">

        {/* LEFT SIDE */}
        <div className="w-full">

          {/* MAIN IMAGE */}
          <div
            className="w-full aspect-square border rounded overflow-hidden relative"
            onMouseEnter={() => setShowZoom(true)}
            onMouseLeave={() => setShowZoom(false)}
            onMouseMove={handleMouseMove}
          >
            <img
              src={activeImage}
              alt="product"
              className={`w-full h-full ${
                showZoom ? "opacity-70" : ""
              }`}
            />

            {/* LENS */}
            {showZoom && (
              <div
                className="absolute w-[20%] h-[20%] border border-gray-400 bg-white/30 pointer-events-none"
                style={lensStyle}
              />
            )}
          </div>

          {/* THUMBNAILS */}
          <div className="flex gap-2 mt-4">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                onClick={() => setActiveImage(img)}
                className="w-16 h-16 object-cover border rounded cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>

      {/* 🔥 ZOOM PANEL (OUTSIDE FLEX = NO SHIFT) */}
      {showZoom && (
        <div
          className="absolute top-0 left-[102%] w-full aspect-square border rounded bg-no-repeat shadow-xl z-50 hidden md:block"
          style={{
            backgroundImage: `url(${activeImage})`,
            backgroundSize: "200%",
            ...zoomStyle,
          }}
        />
      )}
    </div>
  );
};

export default ProductImages;