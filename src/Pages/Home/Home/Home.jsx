import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import FeaturedProducts from "../FeaturedProduct/FeaturedProducts";
import TrendingProduct from "../TrendingProduct/TrendingProduct";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Royel Tech | Home</title>
            </Helmet>
            <Banner></Banner>
            <FeaturedProducts></FeaturedProducts>
            <TrendingProduct></TrendingProduct>
        </div>
    );
};

export default Home;