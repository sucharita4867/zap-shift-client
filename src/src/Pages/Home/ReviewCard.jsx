import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const ReviewCard = ({ review }) => {
  const { userName, review: testimonial, user_photoURL } = review;
  return (
    <div className="bg-white  shadow-md rounded-2xl p-6 w-full max-w-md mx-auto border border-gray-200">
      {/* Quote Icon */}
      <FaQuoteLeft className="text-4xl text-teal-300 mb-3" />

      {/* Description */}
      <p className=" mb-6">{testimonial}</p>

      {/* Divider */}
      <div className="border-t border-dashed border-gray-300 mb-4"></div>

      {/* Profile Section */}
      <div className="flex items-center gap-4">
        {/* Avatar */}
        <div className="w-12 h-12 rounded-full bg-teal-800">
          <img src={user_photoURL} alt="" />
        </div>

        {/* Name + Designation */}
        <div>
          <h3 className="text-lg font-bold text-teal-900">{userName}</h3>
          <p className="text-gray-500 text-sm">Senior Product Designer</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
