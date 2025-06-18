import toast from "react-hot-toast";
import { useState } from "react";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const signup = async ({
    fullName,
    username,
    password,
    conformPassword,
    gender,
  }) => {
    const checkData = check(
      fullName,
      username,
      password,
      conformPassword,
      gender
    );

    if (!checkData) {
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          username,
          password,
          conformPassword,
          gender,
        }),
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      console.log(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

const check = (fullName, username, password, conformPassword, gender) => {
  if (!fullName || !username || !password || !conformPassword || !gender) {
    toast.error(" Please fill all entries ");
    return false;
  }

  if (password !== conformPassword) {
    toast.error(" Passwords do not match ");
    return false;
  }

  return true;
};

export default useSignup;
