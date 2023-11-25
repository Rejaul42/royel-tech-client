import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";

const GoogleLogin = () => {
    const { googleSignIn } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user)
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName,
                    photo: result.user?.photoURL
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'User logged In successfully.',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate('/');
                    })
            })
    }
    return (
        <div>
            <div className="py-8 text-center">
                <div className="divider">OR</div>
                <div>
                    <button onClick={handleGoogleLogin} className="btn text-2xl">
                        <FcGoogle />
                        Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GoogleLogin;