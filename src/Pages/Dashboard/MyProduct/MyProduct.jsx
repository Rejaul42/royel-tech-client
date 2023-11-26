
import Swal from "sweetalert2";
import useProduct from "../../../Hooks/useProduct";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { MdDeleteSweep, MdAutorenew } from "react-icons/md";

const MyProduct = () => {
    const [products, refetch] = useProduct()
    const axiosSecure = useAxiosSecure()
    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/product/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Name</th>
                            <th>Vote</th>
                            <th>Status</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products?.map((product, index) => <tr key={product._id}>
                            <th>
                                {index + 1}
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={product?.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{product?.name}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <p>vote</p>
                            </td>
                            <td>Status</td>
                            <td><button className="btn btn-ghost btn-xs">Update <MdAutorenew className="text-2xl text-blue-500"/></button></td>
                            <td>
                                <button onClick={() => handleDelete(product._id)} className="btn btn-ghost btn-xs"><MdDeleteSweep className="text-2xl text-red-600"/></button>
                            </td>
                        </tr>)}
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyProduct;