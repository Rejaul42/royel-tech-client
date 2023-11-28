import { Link } from "react-router-dom";


const ProductCard = ({ product }) => {
    return (
        <div>
            <div className="card w-96 h-96 bg-base-200 shadow-xl">
                <figure><img className="h-64 w-72" src={product.image} alt="Product" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        <Link to={`/Details/${product._id}`}>{product?.name}</Link>
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Up Vote</div>
                        <div className="badge badge-outline">Down vote</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;