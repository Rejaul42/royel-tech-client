
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useState } from "react";
import { Rating } from "@mui/material";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";


const ProductDetails = () => {
    const { id } = useParams()
    const [product, setProduct] = useState([]);
    const [updateUser, setUpdateUser] = useState();
    const axiosSecure = useAxiosSecure();
    const [value, setValue] = useState(0);
    const { user } = useAuth()
    const email = user?.email;

    axiosSecure.get(`/random/${id}`)
        .then(result => {
            setProduct(result?.data)
        })
        .catch(error => {
            console.log(error)
        })
    axiosSecure.get(`/individualUser/${email}`)
        .then(result => {
            setUpdateUser(result?.data)
        })
        .catch(error => {
            console.log(error)
        })


        // get reviews data
    const { refetch, data: reviews = [] } = useQuery({
        queryKey: ['review', id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/reviews/${id}`);
            return res.data;
        }
        
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target;
        const rating = value;
        const description = form.description.value;
        const productId = product._id;
        const userName = updateUser.name;
        const userEmail = updateUser.email;
        const userPhoto = updateUser.photo
        console.log(rating, description, productId, userEmail, userName)
        const reviewItem = {
            rating,
            description,
            productId,
            userEmail,
            userName,
            userPhoto
        }
        const reviewData = await axiosSecure.post('/reviews', reviewItem);
        console.log(reviewData.data)
        if (reviewData.data.insertedId) {
            // show success popup
            form.reset();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `Your review is submitted.`,
                showConfirmButton: false,
                timer: 1000
            });
            refetch()
        }
    }

    
    

    return (
        <div className="pt-24">
            <div className="card ">
                <figure><img className="" src={product.image} alt="Product" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {product?.name}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{product?.productDescription}</p>
                    <h3><span className="font-semibold text-xl mt-4">Link: </span><a className="underline text-blue-600 font-semibold" href={product?.externalLink}>Product External Link</a></h3>
                    <div className="divider my-6"></div>
                    <div className="w-full justify-start">
                        <form onSubmit={handleSubmit} className=" mb-12 mt-8">
                            <div className="rating">
                                <p className="mr-4">Rating: </p>
                                <Rating
                                    name="simple-controlled"
                                    value={value}
                                    onChange={(event, newValue) => {
                                        setValue(newValue);
                                    }}
                                />
                            </div>
                            <br />
                            <textarea placeholder="Comments" name="description" className="textarea textarea-bordered textarea-lg w-2/3 my-6" ></textarea>
                            <br />
                            <button className="btn">
                                Add Comment
                            </button>
                        </form>
                    </div>
                    <div className="divider my-6"></div>
                    <div className="space-y-4">
                        <p className="mb-6">Total Reviews: {reviews.length}</p>
                        {reviews.map(review => <div key={review._id}>
                            <div className="flex gap-4 items-center">
                                <div className="avatar">
                                    <div className="w-20 rounded-full">
                                        <img src={review?.userPhoto} />
                                    </div>
                                </div>
                                <p className="font-bold">{review?.userName}</p>
                            </div>
                            <p className="flex items-center gap-3 mt-2">Rating: <Rating name="read-only" value={review?.rating} readOnly /></p>
                            <p className="mt-2"><span className="font-bold">Review:</span> {review?.description}</p>
                        </div>)}
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;