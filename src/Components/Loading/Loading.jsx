import React from "react";
import Lottie from "lottie-react";
import loadingAnimation from "../../assets/animations/loading.json";

const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-46">
        <Lottie animationData={loadingAnimation} loop={true} />
      </div>
    </div>
  );
};

export default Loading;
