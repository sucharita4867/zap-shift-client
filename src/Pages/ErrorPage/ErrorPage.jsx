import React from "react";
import ErrorAnimation from "../../assets/animations/error.json";

const ErrorPage = () => {
  return (
    <div>
      <h1>error page {ErrorAnimation}</h1>
      <h1>{console.log(ErrorAnimation)}</h1>
    </div>
  );
};

export default ErrorPage;
