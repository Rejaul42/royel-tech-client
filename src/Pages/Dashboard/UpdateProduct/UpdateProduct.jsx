import { useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useState } from "react";
import { TbLayoutGridAdd } from "react-icons/tb";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
// import SectionTitle from "../../../Shared/SectionTitle";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const UpdateProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const [product, setProduct] = useState()
    const { id } = useParams()
    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate()
    axiosSecure.get(`/random/${id}`)
        .then(result => {
            setProduct(result.data)
        })
        .catch(error => {
            console.log(error)
        })

    const onSubmit = async(data) =>{
        console.log(data)

        // image upload in imgbb
        const imageFile = { image: data.image[0] }
        const res = await axiosSecure.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            // now send the menu item data to the server with the image url
            const menuItem = {
                name: data.name,
                category: data.category,
                externalLink: data.link,
                productDescription: data.description,
                image: res.data.data.display_url
            }
            // 
            const menuRes = await axiosSecure.patch(`/random/${product._id}`, menuItem);
            console.log(menuRes.data)
            if (menuRes.data.modifiedCount == 1) {
                // show success popup
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is successfully Updated.`,
                    showConfirmButton: false,
                    timer: 1500
                });
                reset();
                navigate('/dashboard/myProduct')
            }
        }
    }
    return (
        <div>
            <div>
                {/* <SectionTitle subheading="What's new?" heading="Update your product"></SectionTitle> */}
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Product Name*</span>
                            </label>
                            <input
                                type="text"
                                defaultValue={product?.name}
                                placeholder="Product Name"
                                {...register('name', { required: true })}
                                required
                                className="input input-bordered w-full" />
                        </div>
                        <div className="flex gap-6">
                            {/* category */}
                            <div className="form-control w-full my-6">
                                <label className="label">
                                    <span className="label-text">Category*</span>
                                </label>
                                <select defaultValue={product?.category} {...register('category', { required: true })}
                                    className="select select-bordered w-full">
                                    <option disabled value="default">Select a category</option>
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
                            </div>

                            {/* price */}
                            <div className="form-control w-full my-6">
                                <label className="label">
                                    <span className="label-text">External Link*</span>
                                </label>
                                <input
                                    type="text"
                                    defaultValue={product?.externalLink
                                    }
                                    placeholder="External Link"
                                    {...register('link', { required: true })}
                                    className="input input-bordered w-full" />
                            </div>

                        </div>
                        {/* recipe details */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Description</span>
                            </label>
                            <textarea {...register('description')} 
                            className="textarea textarea-bordered h-24" placeholder="Description"
                            defaultValue={product?.productDescription
                            }
                            ></textarea>
                        </div>

                        <div className="form-control w-full my-6">
                            <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                        </div>

                        <button className="btn">
                            Update Product <TbLayoutGridAdd className="text-2xl"/>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProduct;