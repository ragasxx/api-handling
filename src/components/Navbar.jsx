import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-[50px] w-full bg-black">
      <ul className="text-white flex justify-around p-3 font-sans text-md">
        <Link to="/statusCodes">Status Codes</Link>
        <Link to="/statusCodes">Status Codes</Link>
        <Link to="/statusCodes">Status Codes</Link>
        <Link to="/statusCodes">Status Codes</Link>
      </ul>
    </div>
  );
};

export default Navbar;
