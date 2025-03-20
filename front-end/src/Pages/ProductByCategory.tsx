
import { useLocation } from 'react-router-dom';

const ProductByCategory = () => {
    const location = useLocation();
    const category = location.state?.category;

    return (
        <div className='lg:mx-20'>
            <h2 className='text-2xl font-bold py-6'>Products of {category?.category}</h2>
             
        </div>
    );
};

export default ProductByCategory;