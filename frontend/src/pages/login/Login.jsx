import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center min-w-96 mx-auto">
      <div className="h-full w-full bg-blue-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100  p-3  ">
        <h1 className="text-3xl text-center font-semibold text-stone-300 m-10 ">
          Login
          <span className="text-purple-400 m-3">Baat-Cheet</span>
        </h1>
        <form className="m-5 p-2 ">
          <div className="mb-7">
            <label class="floating-label w-full flex justify-center ">
              <span>Your Username</span>
              <input
                type="text"
                placeholder="Enter your username"
                class="input input-md h-12 rounded-xl "
              />
            </label>
          </div>
          <div>
            <label class="floating-label w-full flex justify-center ">
              <span>Your Password</span>
              <input
                type="password"
                placeholder="Enter your password"
                class="input input-md h-12 rounded-xl "
              />
            </label>
          </div>
          <Link
            class="text-xs ml-2  hover:underline hover:text-purple-700 mt-2 inline-block "
            to={"/signup"}
          >
            Don't have an account{" "}
          </Link>
          <div className="w-full flex justify-center mt-8">
            <button className="btn btn-soft btn-primary w-5/12">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
