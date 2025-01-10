import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


const SignUp = () => {

    const {
        register, handleSubmit, formState: { errors },
      } = useForm()

      const onSubmit = (data) => {
        console.log(data);
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
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", {required: true})} name='email' placeholder="email" className="input input-bordered" />
                                {errors.email && <span>Email field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("email", { required: true, minLength: 6 })}  name='password' placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <span className="text-red-600">Password is required</span>}
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
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