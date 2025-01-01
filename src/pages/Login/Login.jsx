// import React from 'react';
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const [user, setUser] = useState(null);
  const emailRef = useRef();

  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const { signIn, googleSignIn, passwordReset } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((res) => {
        const userEmailPass = res.user;
        setUser(userEmailPass);
        toast.success("Successfully Login");
        console.log(userEmailPass);
        navigate(from, { replace: true });
      })
      .catch((error) => toast.error(error.message));
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const signedUser = result.user;
        setUser(signedUser);
        navigate(from, { replace: true });
        toast.success("Successfully Login");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handlePasswordReset = (e) => {
    const email = emailRef.current.value;
    if (!email) {
      toast.error("please provide email");
    }
    passwordReset(email)
      .then(() => {
        toast.success("a reset mail has been sent to your mail");
      })
      .catch((error) => toast.error(error.message));
  };
  return (
    <>
      <Helmet>
        <title>Login | BOOM Auto</title>
      </Helmet>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="p-10 order-2 hidden md:block  hover:shadow-xl">
          <img
            className="hover:shadow-lg"
            src="https://i.ibb.co/Ldb8ZC8/4957412-Mobile-login-Cristina.jpg"
            alt=""
          />
        </div>
        <div className=" hover:shadow-xl">
          <form
            onSubmit={handleSignIn}
            className="hover:shadow-xl flex h-full flex-col shadow-md p-10 justify-center items-center "
          >
            <input
              className="py-2 lg:w-1/2 md:w-3/4 w-full px-3 font-semibold rounded-md bg-[#fafafa] border focus:border focus:border-gray-500 text-[#0c0f1a] outline-none"
              ref={emailRef}
              type="email"
              name="email"
              id="email"
              placeholder="Enter email"
              required
            />
            <input
              className="my-5 py-2 lg:w-1/2 md:w-3/4 w-full px-3 font-semibold rounded-md bg-[#fafafa] border focus:border focus:border-gray-500 text-[#0c0f1a] outline-none"
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
              required
            />

            <input
              className=" py-2 lg:w-1/2 md:w-3/4 w-full px-3 font-semibold border-[#03a3e6] cursor-pointer border rounded-md"
              type="submit"
              value="SignIn"
            />

            <p>
              <small>
                Forget Password?{" "}
                <button
                  onClick={handlePasswordReset}
                  className="hover:border-b-2 hover:border-slate-500 border-b-2 border-transparent transition-all duration-500"
                >
                  Reset
                </button>
              </small>
            </p>
            <p>
              <small>
                No account?{" "}
                <Link
                  className="hover:border-b-2 border-[#03a3e6] hover:border-slate-500 border-b-2 border-transparent transition-all duration-500"
                  to="/register"
                >
                  SignUp
                </Link>
              </small>
            </p>

            <div className="mt-5">
              <button
                onClick={handleGoogleSignIn}
                className="rounded-md w-full font-bold text-[#294090] py-2 px-3 border-[#03a3e6] border mr-5"
              >
                <FaGoogle className="inline mr-2" />
                Sign in with Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
