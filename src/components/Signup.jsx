import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        formData
      );
      console.log(res.data); // Handle success
    } catch (err) {
      console.error(err.response.data); // Handle error
    }
  };

  return (
    <div className='inset-0 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]'>
    <div className=" flex justify-center items-center min-h-[83.6vh]">
      <form
        onSubmit={onSubmit}
        className="w-[400px] p-6 bg-white rounded-lg shadow-md "
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
          Sign Up
        </h2>

        <div className="mb-4">
          <input
            type="text"
            name="username"
            value={username}
            onChange={onChange}
            placeholder="Username"
            required
            className="w-full px-4 py-2  shadow-sm focus:outline-none rounded-full border border-green-500"
          />
        </div>

        <div className="mb-4">
          <input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            placeholder="Email"
            required
            className="w-full px-4 py-2  shadow-sm focus:outline-none rounded-full border border-green-500"
          />
        </div>

        <div className="mb-6">
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            placeholder="Password"
            required
            className="w-full px-4 py-2  shadow-sm focus:outline-none rounded-full border border-green-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Signup
        </button>
      </form>
    </div>
    </div>
  );
};

export default Signup;
