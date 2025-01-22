import React, { useState } from 'react';

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log(credentials);
  };

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className='inset-0 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]'>
    <div className=" flex justify-center items-center min-h-[83.6vh]">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md h-[280px]">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <input
              type="email"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full px-4 py-2  shadow-sm focus:outline-none rounded-full border border-green-500"
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              placeholder="Password"
              required
              className="w-full px-4 py-2  shadow-sm focus:outline-none rounded-full border border-green-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 font-bold"
          >
            Login
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Login;