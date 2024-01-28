import { useState, useEffect } from "react";
import { IoLocation } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const LoginedUser = () => {
  const [loginedUser, setLoginedUser] = useState({});

  useEffect(() => {
    // Get the user data from localStorage
    const authData = localStorage.getItem("auth");

    // Parse the string to a JavaScript object
    const parsedAuthData = authData ? JSON.parse(authData) : {};

    // Set the state with the parsed user data
    setLoginedUser(parsedAuthData.user);
  }, []); // Run this effect only once when the component mounts

  return (
    <div className="h-full w-full my-6 border-2 border-black rounded-xl overflow-hidden text-black bg-white">
      <div className="h-full w-full items-center flex flex-col">
        <div className="bg-black  flex  h-20 w-full">
          <img src={loginedUser.photo} alt="" />
        </div>
        <div className="h-20 -translate-y-8 border-4 border-white   flex justify-center items-center  w-20 rounded-full overflow-hidden">
          <img
            className="h-20 w-20 "
            src="https://images.unsplash.com/photo-1670272504471-61a632484750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <Link to="/myprofile">
          <h1 className="-translate-y-8 uppercase hover:underline font-semibold">
            {loginedUser.firstname} {loginedUser.lastname}
          </h1>
        </Link>
      </div>
      <hr />
      <div className="flex flex-col p-3 gap-3 ">
        <div className="flex gap-4 items-center">
          <IoLocation size={22} color="#000000" />
          <p>{loginedUser.location}</p>
        </div>
        <div className="flex gap-4 items-center">
          <MdWork size={22} color="#000000" />
          <p>{loginedUser.occupation}</p>
        </div>
      </div>
      <hr />
      <div className="flex justify-between p-3  flex-col">
        <div>
          <p>Who viewed your profile : {loginedUser.viewedProfile}</p>
        </div>
        <div>
          <p>Total Impressions : {loginedUser.impressions}</p>
        </div>
      </div>
      <hr />
      <div className="flex  p-3 justify-between flex-col gap-2">
        <div className="flex items-center gap-4 ">
          <FaSquareXTwitter size={22} color="#000000" />
        </div>
        <div className="flex items-center gap-4 ">
          <FaLinkedin size={22} color="#000000" />
        </div>
      </div>
    </div>
  );
};

export default LoginedUser;
