import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";


const SignUp = () => {

    const {
        register, handleSubmit, reset, formState: { errors },
      } = useForm()

      const {createUser, updateUserProfile} = useContext(AuthContext);
      const navigate = useNavigate();

      const onSubmit = (data) => {
        console.log(data);
        createUser(data.email, data.password)
        .then(result => {
            const logedUser = result.user;
            console.log(logedUser);
            updateUserProfile(data.name, data.photoURL)
            .then(() => {
                console.log('user profile info updated')
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "User created successfully", 
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate('/')
            })
        })
      }

    // const handleSignUp = e => {
    //     e.preventDefault();
    //     const form = e.target;
    //     const email = form.email.value;
    //     const password = form.password.value;
    //     console.log(email, password);
    // }

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Sign Up</title>
            </Helmet>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col">
                    <div className="text-center md:w-1/2 lg:text-left">
                    <h1 className="text-5xl font-bold">signup now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    </div>
                    <div className="card bg-base-100 md:w-1/2 max-w-sm shadow-2xl">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" {...register("name", {required: true})} name='name' placeholder="name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">Name field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" {...register("photoURL", {required: true})} placeholder="Photo URL" className="input input-bordered" />
                                {errors.photoURL && <span className="text-red-600">Photo URL field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", {required: true})} name='email' placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">Email field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", { 
                                    required: true,
                                    minLength: 6,
                                    pattern: /(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]/
                                    })} name='password' placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <span className="text-red-600">Password is required</span>}
                                {errors.password?.type === 'minLength' && <span className="text-red-600">Password must be 6 characters</span>}
                                {/* {errors.password?.type === 'pattern' && <span className="text-red-600">Password must be 6 characters</span>} */}
                                {errors.password?.type === 'pattern' && <span className="text-red-600">Password must have 1 uppercase, 1 lowercase, 1 number and 1 special character</span>}
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign up" />
                            </div>
                        </form>
                        <p><small>Already have a account <Link to='/login'>go to Login</Link></small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;