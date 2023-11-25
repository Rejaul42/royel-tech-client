import { useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";


const MyProfile = () => {
    const axiosSecure = useAxiosSecure()
    const [updateUser, setUpdateUser] = useState()
    const { user } = useAuth()
    const email = user?.email;

    axiosSecure.get(`/users/${email}`)
        .then(result => {
            setUpdateUser(result.data)
        })
        .catch(error => {
            console.log(error)
        })
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
        </div>
    );
};

export default MyProfile;