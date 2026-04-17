const WelcomeBanner = () => {
  return (
    <div className="bg-[#f2fbff] rounded-xl px-8 flex flex-col md:flex-row items-center justify-between shadow-sm">
      
      {/* LEFT SECTION */}
      <div className="max-w-xl text-center md:text-left">
        <h1 className="text-4xl font-bold text-black mb-4">
          Welcome,
        </h1>

        <p className="text-gray-600 text-lg mb-6">
          Here’s what happening on your store today. See the statistics at once.
        </p>

        <button className="flex items-center justify-center md:justify-start gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition duration-300">
          <span className="text-xl font-bold">+</span>
          Add Product
        </button>
      </div>

      {/* RIGHT IMAGE */}
      <div className="mt-4 md:mt-0">
        <img
          src="https://res.cloudinary.com/djodhdoyk/image/upload/v1776090554/shop-illustration_tou2kx.webp"
          alt="store"
          className="w-62.5 md:w-65"
        />
      </div>
    </div>
  );
};

export default WelcomeBanner;