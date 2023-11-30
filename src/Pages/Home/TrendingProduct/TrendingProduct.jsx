import { useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import ProductCard from "../Product/ProductCard";

const TrendingProduct = () => {
    const axiosPublic = useAxiosPublic();
    const [products, setProducts] = useState([]);

    axiosPublic.get('/product')
        .then(result => {
            const allProduct = (result?.data);
            const trendingProduct = allProduct.sort((a, b) => b?.vote - a?.vote);
            const topSixProduct = trendingProduct.slice(0, 6);
            setProducts(topSixProduct)
        })
        .catch(error => {
            console.log(error)
        })
        console.log(products)
    return (
        <div>
            <SectionTitle subheading="Popular Product" heading="Most popular Product Here"></SectionTitle>
            <div>
            <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                {products.map(product => <ProductCard key={product._id} product={product}></ProductCard>)}
            </div>
            </div>
        </div>
    );
};

export default TrendingProduct;