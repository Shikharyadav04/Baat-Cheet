import React from "react";

const Signup = () => {
  return (
    <div className="flex flex-col justify-center items-center min-w-96 mx-auto">
      <div className="h-full w-full bg-blue-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100  p-3  ">
        <h1 className="text-3xl text-center font-semibold text-stone-300 m-10 ">
          SignUp
          <span className="text-purple-400 m-3">Baat-Cheet</span>
        </h1>
        <form className="m-5 p-2 ">
          <div className="mb-7">
            <label class="floating-label w-full flex justify-center ">
              <span>Your Full Name</span>
              <input
                type="text"
                placeholder="Enter your Full Name"
                class="input input-md h-12 rounded-xl "
              />
            </label>
          </div>
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
          <div className="mb-7">
            <label class="floating-label w-full flex justify-center ">
              <span>Your Password</span>
              <input
                type="password"
                placeholder="Enter your password"
                class="input input-md h-12 rounded-xl "
              />
            </label>
          </div>
          <div className="mb-7">
            <label class="floating-label w-full flex justify-center ">
              <span>Conform Password</span>
              <input
                type="password"
                placeholder="Enter your password"
                class="input input-md h-12 rounded-xl "
              />
            </label>
          </div>
          <div>
            <fieldset className="fieldset bg-base-100 border-base-300 flex justify-around rounded-box  border p-2">
              <legend className="fieldset-legend">Your Gender</legend>
              <label className="label">
                <input type="checkbox" defaultChecked className="checkbox" />
                <span className="text-green-500 font-bold">Male</span>
              </label>
              <label className="label">
                <input type="checkbox" defaultChecked className="checkbox" />
                <span className="text-pink-500 font-bold">Female</span>
              </label>
            </fieldset>
          </div>
          <a class="text-xs ml-2  hover:underline hover:text-purple-700 mt-2 inline-block ">
            Already have an account{" "}
          </a>
          <div className="w-full flex justify-center mt-8">
            <button className="btn btn-soft btn-primary w-5/12">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
