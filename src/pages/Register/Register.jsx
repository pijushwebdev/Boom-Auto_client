import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const { createUser, user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const password = form.password.value;
    const email = form.email.value;
    const photoURL = form.photo.value;

    createUser(email, password).then((res) => {
      const loggedUser = res.user;
      // console.log(loggedUser);
      form.reset();
      updateUserProfile(loggedUser, name, photoURL);
      toast.success("Successfully created user");
      logOut();
      navigate("/login");
    });

    const updateUserProfile = (user, name, photoURL) => {
      updateProfile(user, {
        displayName: name,
        photoURL: photoURL,
      })
        .then(() => {})
        .catch((err) => toast.error(err.message));
    };
  };
  return (
    <>
      <Helmet>
        <title>Register | BOOM Auto</title>
      </Helmet>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="p-10 order-2 md:order-1  hover:shadow-xl">
          <img
            className="hover:shadow-lg"
            src="https://i.ibb.co/Ldb8ZC8/4957412-Mobile-login-Cristina.jpg"
            alt=""
          />
        </div>
        <div className=" order-1 md:order-2 hover:shadow-xl">
          <form
            onSubmit={handleRegister}
            className="hover:shadow-xl flex h-full flex-col shadow-md p-10 justify-center items-center "
          >
            <input
              className="py-2 lg:w-1/2 md:w-3/4 w-2/3 px-3 font-semibold rounded-md bg-[#fafafa] border focus:border focus:border-gray-500 text-[#0c0f1a] outline-none"
              type="text"
              name="name"
              id="name"
              placeholder="Enter Name"
              required
            />
            <input
              className="my-5 py-2 lg:w-1/2 md:w-3/4 w-2/3 px-3 font-semibold rounded-md bg-[#fafafa] border focus:border focus:border-gray-500 text-[#0c0f1a] outline-none"
              type="url"
              name="photo"
              id="photo"
              placeholder="Photo Url (optional)"
            />

            <input
              className="py-2 lg:w-1/2 md:w-3/4 w-2/3 px-3 font-semibold rounded-md bg-[#fafafa] border focus:border focus:border-gray-500 text-[#0c0f1a] outline-none"
              type="email"
              name="email"
              id="email"
              placeholder="Enter email"
              required
            />
            <input
              className="my-5 py-2 lg:w-1/2 md:w-3/4 w-2/3 px-3 font-semibold rounded-md bg-[#fafafa] border focus:border focus:border-gray-500 text-[#0c0f1a] outline-none"
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
              required
            />

            <input
              className="py-2 lg:w-1/2 md:w-3/4 w-2/3 px-3 font-semibold border-[#03a3e6] cursor-pointer border rounded-md"
              type="submit"
              value="Sign Up"
            />

            <p>
              <small>
                Already Have an Account?{" "}
                <Link
                  className="hover:border-b-2 border-[#03a3e6] hover:border-slate-500 border-b-2 border-transparent transition-all duration-500"
                  to="/login"
                >
                  Sign In
                </Link>
              </small>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
