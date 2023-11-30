import { Link } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";


const ProductCard = ({ product, refetch }) => {
    const axiosSecure = useAxiosSecure()

    const handleVote = product => {
        axiosSecure.patch(`/updateVote/${product._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `You vote ${product.name}!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch()
                }
            })
    }
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
                        <div>
                            <p>Total Vote: {product?.vote}</p>
                            <button className="badge badge-outline" onClick={() => handleVote(product)}>Up Vote</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;