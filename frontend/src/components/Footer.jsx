import React from "react";
import { assets } from "../assets/assets.js";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14  my-10 mt-40 text-sm">
        <div>
          <Link to="/" className="text-3xl font-bold text-gray-800 mb-5 block">
            E-com-plat
          </Link>
          <p className="w-full md:2/3 text-gray-600">
            E-com-plat is a leading online shopping platform that offers a wide
            range of products at competitive prices.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">Meeta Company</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About us</Link>
            </li>
            <li>
              <Link to="Delivery" className="pointer-events-none">
                Delivery
              </Link>
            </li>
            <li>
              <Link to="Privacy_policy" className="pointer-events-none">
                Privacy policy
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>
              Phone: <Link to="tel:+919896274549">+91 98962 74549</Link>
            </li>
            <li>
              Email:{" "}
              <Link to="mailto:meeta7461@gamil.com">
                meeta7461@gamil.com
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          {" "}
          Copyright 2025@ E-com-plat.com - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
