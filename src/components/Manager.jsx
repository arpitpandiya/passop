import React, { useState, useRef, useEffect } from "react";

const Manager = () => {
  const ref = useRef();
  const [form, setform] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);

  const showPassword = () => {
    alert("show the password");
    console.log(ref.current.src);
    if (ref.current.src.includes("icons/eyecross.png")) {
      ref.current.src = "icons/eye.png";
    } else {
      ref.current.src = "icons/eyecross.png";
    }
  };

  const savePassword = () => {
    setPasswordArray([...passwordArray, form]);
    localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]));
    console.log(...passwordArray, form);
  };

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div>
      </div>
      <div className="mycontainer">
        <h1 className="text-4xl text font-bold text-center">
          <span className="text-green-500"> &lt;</span>
          <span>Pass</span>
          <span className="text-green-500">OP/&gt;</span>
        </h1>
        <p className="text-green-900 text-lg text-center">
          Your own Password Manager
        </p>
        <div className="flex flex-col p-4 text-black gap-8 items-center">
          <input
            value={form.site}
            onChange={handleChange}
            placeholder="Enter website URL"
            className="rounded-full border border-green-500 w-full px-4 py-1 text-black"
            type="text"
            name="site"
            id=""
          />
          <div className="flex w-full justify-between gap-8">
            <input
              value={form.username}
              onChange={handleChange}
              placeholder="Enter Username"
              className="rounded-full border border-green-500 w-full px-4 py-1 text-black"
              type="text"
              name="username"
              id=""
            />
            <div className="relative">
              <input
                value={form.password}
                onChange={handleChange}
                placeholder="Enter Password"
                className="rounded-full border border-green-500 w-full px-4 py-1 text-black"
                type="text"
                name="password"
                id=""
              />
              <span
                className="absolute right-[3px] top-[4px]  cursor-pointer"
                onClick={showPassword}
              >
                <img
                  ref={ref}
                  className="p-1 w-7 h-6 mt-1 mr-0 pt-0"
                  src="icons/eye.png"
                  alt="eye"
                />
              </span>
            </div>
          </div>
          <button
            onClick={savePassword}
            className="flex justify-center items-center gap-2 bg-green-400 hover:bg-green-300 rounded-full px-8 py-2 w-fit border border-green-900"
          >
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
            ></lord-icon>
            Add Password
          </button>
        </div>
        <div className="passwords">
          <h2 className="font-bold text-2xl py-4">Your Passsword</h2>
          {passwordArray.length === 0 && <div> No password to show</div>}
          {passwordArray.length != 0 &&<table className="table-auto w-full rounded-md overflow-hidden">
            <thead className=" bg-green-800 text-white">
              <tr>
                <th className="py-2">Site</th>
                <th className="py-2">Username</th>
                <th className="py-2">Password</th>
              </tr>
            </thead>
            <tbody className="bg-green-100">
              {passwordArray.map((item, index)=>{
              return <tr key={index}>
                <td className="py-2 border border-white text-center w-32 "><a href={item.site} target="_blank">{item.site}</a></td>
                <td className="py-2 border border-white text-center w-32 ">{item.username}</td>
                <td className="py-2 border border-white text-center w-32 ">{item.password}</td>
              </tr>
              })}
              
            </tbody>
          </table>}
        </div>
      </div>
    </>
  );
};

export default Manager;

// import React, { useState } from "react";
// import { IoEye, IoEyeOffSharp } from "react-icons/io5";

// const Manager = () => {
//   const [showPassword, setShowPassword] = useState(false);

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <>
//       <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
//         <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div>
//       </div>
//       <div className="mycontainer">
//         <h1 className="text-4xl text font-bold text-center">
//           <span className="text-green-500"> &lt;</span>
//           <span>Pass</span>
//           <span className="text-green-500">OP/&gt;</span>
//         </h1>
//         <p className="text-green-900 text-lg text-center">
//           Your own Password Manager
//         </p>
//         <div className="flex flex-col p-4 text-black gap-8 items-center">
//           <input
//             placeholder="Enter website URL"
//             className="rounded-full border border-green-500 w-full px-4 py-1 text-black"
//             type="text"
//             name=""
//             id=""
//           />
//           <div className="flex w-full justify-between gap-8">
//             <input
//               placeholder="Enter Username"
//               className="rounded-full border border-green-500 w-full px-4 py-1 text-black"
//               type="text"
//               name=""
//               id=""
//             />
//             <div className="relative">
//               <input
//                 placeholder="Enter Password"
//                 className="rounded-full border border-green-500 w-full px-4 py-1 text-black"
//                 type={showPassword ? "text" : "password"}
//                 name=""
//                 id=""
//               />
//               <span
//                 className="absolute right-[3px] top-[4px] cursor-pointer"
//                 onClick={togglePasswordVisibility}
//               >
//                 {showPassword ? (
//                   <IoEyeOffSharp className="mt-1.5 mr-2" />
//                 ) : (
//                   <IoEye className="mt-1.5 mr-2" />
//                 )}
//               </span>
//             </div>
//           </div>
//           <button className="flex justify-center items-center gap-2 bg-green-400 hover:bg-green-300 rounded-full px-8 py-2 w-fit border border-green-900">
//             <lord-icon
//               src="https://cdn.lordicon.com/jgnvfzqg.json"
//               trigger="hover"
//             ></lord-icon>
//             Add Password
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Manager;
