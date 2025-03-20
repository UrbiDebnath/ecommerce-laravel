import React, { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  price: string;
  discount_price: string;
  stock: number;
  category: string;
  brand: string;
  color: string;
  availability: string;
  description: string | null;
  image1: string;
}

const Product = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={`http://127.0.0.1:8000/storage/${product.image1}`}
                alt={product.title}
                className="w-full h-48 object-cover"
                onError={(e) => (e.currentTarget.src = "http://127.0.0.1:8000/default-image.jpg")}
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{product.title}</h2>
                <p className="text-gray-600 mt-2">{product.description || "No description available."}</p>
                <p className="text-lg font-bold mt-4">${product.discount_price} <span className="text-gray-500 line-through">${product.price}</span></p>
                <p className="text-sm text-gray-500">Brand: {product.brand} | Color: {product.color}</p>
              </div>
            </div>
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>
    </div>
  );
};

export default Product;
