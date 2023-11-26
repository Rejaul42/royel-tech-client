import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useProduct = () => {
    const axiosSecure = useAxiosSecure();
    const { user} = useAuth();
    const { refetch, data: products = [] } = useQuery({
        queryKey: ['product', user?.email],
        queryFn: async() => {
            const res = await axiosSecure.get(`/product/${user.email}`);
            return res.data;
        }
    })
    return [products, refetch]
};

export default useProduct;