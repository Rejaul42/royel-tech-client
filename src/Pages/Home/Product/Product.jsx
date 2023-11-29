import { useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import ProductCard from "./ProductCard";
import { Helmet } from "react-helmet";


const Product = () => {
    const [loadedProduct, setLoadedproduct] = useState([]);
    const [products, setProducts] = useState();
    const axiosPublic = useAxiosPublic();
    // console.log(products)

    axiosPublic.get('/product')
        .then(result => {
            setLoadedproduct(result?.data)
        })
        .catch(error => {
            console.log(error)
        })

    const handleChange = (data) => {
        if(data == 'All'){
            setProducts(loadedProduct)
        } 
        else{
            const filterData = loadedProduct?.filter(item => item.category === data);
            setProducts(filterData)
        }
    }
    return (
        <div className="pt-28">
            <h2 className="text-center text-3xl mb-6">Product Sorting by Tags Name</h2>
            <form className="text-center mb-12">
                <select onClick={(e) => handleChange(e.target.value)} className="select select-bordered w-full max-w-xs">
                    <option disabled  value='All'>Sorting by Tags</option>
                    <option selected value="All">All</option>
                    <option value="mobile">Mobile</option>
                    <option value="laptop">Laptop</option>
                    <option value="tablet">Tablet</option>
                    <option value="desktop">Desktop</option>
                    <option value="smarttv">Smart TV</option>
                    <option value="smartwatch">Smart Watch</option>
                    <option value="camera">Camera</option>
                    <option value="Game">Gaming Device</option>
                    <option value="others">Others</option>
                </select>
            </form>
            <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                <Helmet>
                    <title>Royel Tech | Product</title>
                </Helmet>
                {products?.map(product => <ProductCard key={product._id} product={product}></ProductCard>)}
            </div>
        </div>
    );
};

export default Product;