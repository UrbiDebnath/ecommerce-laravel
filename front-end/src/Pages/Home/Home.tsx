import Category from "./Category";
import Product from "./Product";
import Slider from "./Slider";


const Home = () => {
    return (
        <div className="min-h-screen">
            <Slider></Slider>
            <Category></Category>
            <Product></Product>
        </div>
    );
};

export default Home;