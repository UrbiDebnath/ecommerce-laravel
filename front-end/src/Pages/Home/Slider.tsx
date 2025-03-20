
import React, { useEffect, useState } from "react";

const Slider = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const baseURL = "http://127.0.0.1:8000/storage/"; // Base URL for images

  useEffect(() => {
    // Fetching images from Laravel API
    fetch("http://127.0.0.1:8000/api/offerImage")
      .then((response) => response.json())
      .then((data) => setImages(data))
      .catch((error) => console.error("Error fetching images:", error));
  }, []);

  useEffect(() => {
    if (images.length === 0) return;

    // Auto swap images every 3 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  // Function to go to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="grid grid-cols-8">
      {/* Left Ads Section */}
      <div className="col-span-1 bg-gray-500 flex justify-center items-center text-white">
        Ads Section -1
      </div>

      {/* Slider Section */}
      <div className="col-span-6 relative">
        {images.length > 0 && (
          <>
            <img
              src={`${baseURL}${images[currentIndex].image}`}
              alt={images[currentIndex].category}
              className="w-full h-full object-cover transition-opacity duration-500"
            />

            {/* Left Button */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-orange-600 bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-80"
            >
              &#9664; {/* Left Arrow */}
            </button>

            {/* Right Button */}
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-orange-600 bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-80"
            >
              &#9654; {/* Right Arrow */}
            </button>
          </>
        )}
      </div>

      {/* Right Ads Section */}
      <div className="col-span-1 bg-gray-500 flex justify-center items-center text-white">
        Ads Section -2
      </div>
    </div>
  );
};

export default Slider;
