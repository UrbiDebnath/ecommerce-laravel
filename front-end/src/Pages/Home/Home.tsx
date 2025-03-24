
 
import Category from "./Category/Category";
import ProductShowByCategory from "./ProductShowByCategory/ProductShowByCategory";
import Slider from "./Slider";


const Home = () => {
    return (
        <div className="min-h-screen">
            <Slider></Slider>
            <Category></Category>
             <ProductShowByCategory></ProductShowByCategory>
        </div>
    );
};

export default Home;