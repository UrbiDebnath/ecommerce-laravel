import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";


const ProductDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;
  const baseUrl = 'http://127.0.0.1:8000/storage/'; // Replace with your actual base URL

  if (!product) {
    navigate("/");
    return null;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-lg p-6">
        {/* Product Image Slider (Now at the Top) */}
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          className="rounded-lg shadow-md mb-6"
        >
          <SwiperSlide>
            <img
              src={`${baseUrl}${product.image1}`}
              alt={product.title}
              className="w-full h-83 text-center rounded-lg"
            />
          </SwiperSlide>
         
        </Swiper>

        {/* Product Title */}
        <h2 className="text-2xl font-bold text-gray-800">{product.title}</h2>

        {/* Price & Stock */}
        <div className="flex justify-between items-center mt-2">
          <p className="text-lg font-semibold text-red-500">
            {product.discount_price}/=
            <span className="text-gray-500 line-through ml-2">
            {product.price}/=
            </span>
          </p>
          <p
            className={`text-sm px-3 py-1 rounded-lg ${
              product.stock > 0
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {product.stock > 0 ? "In Stock" : "Out of Stock"}
          </p>
        </div>

        {/* Category & Brand */}
        <div className="mt-3 text-sm text-gray-600">
          <p>
            <span className="font-semibold">Category:</span> {product.category}
          </p>
          <p>
            <span className="font-semibold">Brand:</span> {product.brand}
          </p>
          <p>
            <span className="font-semibold">Color:</span> {product.color}
          </p>
        </div>

        {/* Description */}
        <p className="text-gray-700 text-sm mt-3">{product.description}</p>
            <div className="grid grid-cols-2 gap-5 mt-6">
                <button className="w-full bg-orange-600 hover:bg-orange-500 text-white rounded-md font-bold py-2">Buy Now</button>
                <button className="w-full bg-orange-600 hover:bg-orange-500 text-white rounded-md font-bold py-2">Add TO Card</button>
                 
            </div>
      </div>
      
    </div>
  );
};

export default ProductDetails;