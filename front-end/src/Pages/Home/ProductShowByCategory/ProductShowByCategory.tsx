import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Product {
    id: number;
    title: string;
    category: string;
    image: string;
}

const ProductShowByCategory = () => { 
    const [data, setData] = useState<Product[]>([]);
    const navigate = useNavigate();
    const [visibleCount, setVisibleCount] = useState(6);
    const baseUrl = "http://127.0.0.1:8000/storage/";

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/products")
            .then((res) => res.json())
            .then((data: Product[]) => setData(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    const handleDetails = (product: Product) => {
        navigate("/productDetails", { state: { product } });
    };

    // Get unique categories
    const uniqueCategories = [...new Set(data.map((product) => product.category))];

    return (
        <div className="mx-20 py-10">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"> {/* Grid layout for categories */}
                {uniqueCategories.map((category) => (
                    <div key={category} className="bg-white p-5 shadow-md rounded-lg">
                        <h2 className="font-bold text-2xl mb-5">{category}</h2>
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> {/* Adjust product layout */}
                            {data
                                .filter((product) => product.category === category)
                                .slice(0, visibleCount)
                                .map((product) => (
                                    <div 
                                        onClick={() => handleDetails(product)} 
                                        key={product.id} 
                                        className="border p-3 rounded-lg shadow cursor-pointer"
                                    >
                                        <img
                                            src={baseUrl + product.image1}
                                            alt={product.title}
                                            className="w-full h-40 object-cover rounded-lg"
                                        />
                                        <h3 className="text-center mt-2 font-semibold">{product.title}</h3>
                                        <h3 className="text-red-600 text-center mt-2 font-semibold line-through">Price: {product.price}/=</h3>
                                        <h3 className="text-green-500 text-center mt-2 font-semibold">Discount: {product.discount_price}/==</h3>
                                    </div>
                                ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductShowByCategory;