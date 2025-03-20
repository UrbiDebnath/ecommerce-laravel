import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Category = () => {
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();
    const baseUrl = 'http://127.0.0.1:8000/storage/';

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/category')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, []);

    const handleNavigate = (category) => {
        navigate('/productByCategory', { state: { category } });
    };

    return (
        <div className='mx-20 py-10'>
            <h2 className='font-bold text-2xl mb-5 text-center'>Category</h2>
            <div className='grid grid-cols-6 gap-5'>
                {categories.map(category => (
                    <div 
                        key={category.id} 
                        onClick={() => handleNavigate(category)}
                        className='border p-4 rounded-lg shadow-md text-center hover:shadow-xl cursor-pointer'
                    >
                        <img 
                            src={`${baseUrl}${category.image}`} 
                            alt={category.title} 
                            className='w-full h-32 object-cover rounded-md'
                            onError={(e) => e.target.src = 'https://via.placeholder.com/150'}
                        />
                        <h3 className='mt-2 font-semibold'>{category.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;