import React from "react";
import SelectGender from "./SelectGender";
import { Link } from "react-router-dom";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

const Signup = () => {
  const [inputs, selectInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    conformPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
    // console.log(inputs);
  };

  const ChangeGender = (gender) => {
    selectInputs({ ...inputs, gender: gender });
  };

  return (
    <div className="flex flex-col justify-center items-center min-w-96 mx-auto">
      <div className="h-full w-full bg-blue-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100  p-3  ">
        <h1 className="text-3xl text-center font-semibold text-stone-300 m-10 ">
          SignUp
          <span className="text-purple-400 m-3">Baat-Cheet</span>
        </h1>
        <form className="m-5 p-2" onSubmit={handleSubmit}>
          <div className="mb-7">
            <label className="floating-label w-full flex justify-center ">
              <span>Your Full Name</span>
              <input
                value={inputs.fullName}
                onChange={(e) =>
                  selectInputs({ ...inputs, fullName: e.target.value })
                }
                type="text"
                placeholder="Enter your Full Name"
                className="input input-md h-12 rounded-xl "
              />
            </label>
          </div>
          <div className="mb-7">
            <label className="floating-label w-full flex justify-center ">
              <span>Your Username</span>
              <input
                value={inputs.username}
                onChange={(e) =>
                  selectInputs({ ...inputs, username: e.target.value })
                }
                type="text"
                placeholder="Enter your username"
                className="input input-md h-12 rounded-xl "
              />
            </label>
          </div>
          <div className="mb-7">
            <label className="floating-label w-full flex justify-center ">
              <span>Your Password</span>
              <input
                value={inputs.password}
                onChange={(e) =>
                  selectInputs({ ...inputs, password: e.target.value })
                }
                type="password"
                placeholder="Enter your password"
                className="input input-md h-12 rounded-xl "
              />
            </label>
          </div>
          <div className="mb-7">
            <label className="floating-label w-full flex justify-center ">
              <span>Conform Password</span>
              <input
                value={inputs.conformPassword}
                onChange={(e) =>
                  selectInputs({ ...inputs, conformPassword: e.target.value })
                }
                type="password"
                placeholder="Enter your password"
                className="input input-md h-12 rounded-xl "
              />
            </label>
          </div>
          <SelectGender
            ChangeGender={ChangeGender}
            selectedGender={inputs.gender}
          />
          <Link
            to={"/login"}
            className="text-xs ml-2  hover:underline hover:text-purple-700 mt-2 inline-block "
          >
            Already have an account{" "}
          </Link>
          <div className="w-full flex justify-center mt-8">
            {!loading ? (
              <button className="btn btn-soft btn-primary w-5/12" type="submit">
                Sign Up
              </button>
            ) : (
              <span className="loading loading-infinity loading-xl"></span>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
