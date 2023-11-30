import { useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import ProductCard from "../Product/ProductCard";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";

const FeaturedProducts = () => {
    const axiosPublic = useAxiosPublic();
    const [products, setProducts] = useState([]);

    axiosPublic.get('/product')
        .then(result => {
            const allProduct = (result?.data);
            const approvedProduct = allProduct?.filter(item => item.status === 'approved');
            const latestProduct = approvedProduct.slice(-6).reverse();
            setProducts(latestProduct)
        })
        .catch(error => {
            console.log(error)
        })
    return (
        <div>
            <SectionTitle subheading="Featured Product" heading="Latest Product Here"></SectionTitle>
            <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                {products.map(product => <ProductCard key={product._id} product={product}></ProductCard>)}
            </div>
        </div>
    );
};

export default FeaturedProducts;