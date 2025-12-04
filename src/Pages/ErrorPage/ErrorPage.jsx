import React from "react";
import Lottie from "lottie-react";
import ErrorAnimation from "../../assets/animations/error.json";
import Navbar from "../Shred/Navbar";
import Footer from "../Shred/Footer";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div>
        <Navbar />
      </div>
      <div className=" my-8 flex p-6 flex-col justify-center items-center bg-white rounded-xl">
        <div className=" w-100">
          <Lottie animationData={ErrorAnimation} loop={true} />
        </div>
        <h1 className="text-4xl font-bold my-4 text-secondary text-center">
          Error 404
        </h1>
        <button className="btn  bg-primary">
          <Link to="/">Go Home</Link>
        </button>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ErrorPage;
