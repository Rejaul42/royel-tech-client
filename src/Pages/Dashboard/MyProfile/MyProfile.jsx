import { useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import { Link } from "react-router-dom";


const MyProfile = () => {
    const axiosSecure = useAxiosSecure()
    const [updateUser, setUpdateUser] = useState()
    const [payments, setPayments] = useState([])
    const { user } = useAuth()
    const email = user?.email;

    axiosSecure.get(`/individualUser/${email}`)
        .then(result => {
            setUpdateUser(result.data)
        })
        .catch(error => {
            console.log(error)
        })
    axiosSecure.get("/payments")
        .then(result => {
            setPayments(result?.data)
        })
        .catch(error => {
            console.log(error)
        })
    const paymentUser = payments?.map(payment => payment.email == email);

    return (
        <div className="space-y-4">
            <div className="bg-base-300 w-full p-4 font-medium">
                <p>User Name: {updateUser?.name}</p>
            </div>
            <div className="bg-base-300 w-full p-4 font-medium">
                <p>Email: {updateUser?.email}</p>
            </div>
            <div className="avatar">
                <p className="font-medium mr-6">Photo: </p>
                <div className="w-32 rounded-full bg-base-300 p-4 font-medium">

                    <img src={updateUser?.photo} />
                </div>
            </div>
            <div className="divider"></div>
            <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold ">Subscription require for Premium Feature</h2>
                <p className="font-semibold">Pay: $79.99</p>
                {paymentUser? <button disabled className="btn btn-primary w-32 mt-6">Pay</button> : <Link to="/dashboard/payment">
                    <button className="btn btn-primary w-32 mt-6">Pay</button>
                </Link>}
            </div>
        </div>
    );
};

export default MyProfile;