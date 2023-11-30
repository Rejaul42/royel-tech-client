import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useAllProduct = () => {
    const axiosPublic = useAxiosPublic()
    const { refetch, data: allProduct = [] } = useQuery({
        queryKey: ['product'],
        queryFn: async() => {
            const res = await axiosPublic.get('/product');
            return res.data;
        }
    })
    return [allProduct, refetch]
};

export default useAllProduct;