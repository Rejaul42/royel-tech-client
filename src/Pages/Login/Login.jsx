import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import GoogleLogin from "../../Shared/SocialLogin/GoogleLogin";


const Login = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { signIn } = useAuth()
    // const [disabled, setDisabled] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const onSubmit = data =>{
        console.log(data)
        signIn(data.email, data.password)
        .then(result =>{
            reset()
            console.log(result.user)
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'User logged In successfully.',
                showConfirmButton: false,
                timer: 1500
            });
            navigate(from, { replace: true });
        })
        .catch(error =>{
            console.log(error.message)
        })
    }
    return (
        <div>
            <div className="bg-base-300">
                <Helmet>
                    <title>Bistro Boos | Login</title>
                </Helmet>
                <div className="p-12 flex justify-center items-center gap-6">
                    <div className="flex-1">
                        <img className="" src="https://i.ibb.co/zxQjnHy/20944201.jpg" alt="" />
                    </div>
                    <div className="flex-1">
                        <h2 className="text-4xl font-bold text-center">Sign Up</h2>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                           
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" {...register("email", { required: true })} name="email" />
                                {errors.email && <span className="text-red-600">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"  {...register("password", {
                                    required: true,
                                })} placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <input className="form-control mt-6 btn bg-orange-600 text-white" type="submit" value="Sign Up" />
                        </form>
                        <div className="text-center">
                            <p>New in Royel Tech? <Link to="/signUp" className="underline font-medium"> Sign Up</Link></p>
                        </div>
                        <GoogleLogin></GoogleLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;