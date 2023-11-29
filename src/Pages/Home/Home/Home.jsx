import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import FeaturedProducts from "../FeaturedProduct/FeaturedProducts";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Royel Tech | Home</title>
            </Helmet>
            <Banner></Banner>
            <FeaturedProducts></FeaturedProducts>
        </div>
    );
};

export default Home;