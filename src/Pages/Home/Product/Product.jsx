import { useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import ProductCard from "./ProductCard";
import { Helmet } from "react-helmet";


const Product = () => {
    const [products, setProducts] = useState([]);
    const axiosPublic = useAxiosPublic();

    axiosPublic.get('/product')
        .then(result => {
            setProducts(result?.data)
        })
        .catch(error => {
            console.log(error)
        })
    console.log(products)
    return (
        <div className="">
            <div className="grid pt-24 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                <Helmet>
                    <title>Royel Tech | Product</title>
                </Helmet>
                {products.map(product => <ProductCard key={product._id} product={product}></ProductCard>)}
            </div>
        </div>
    );
};

export default Product;