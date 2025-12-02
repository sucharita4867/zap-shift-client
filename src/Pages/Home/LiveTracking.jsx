import React from "react";
import img1 from "../../assets/live-tracking.png";
import img2 from "../../assets/safe-delivery.png";

const features = [
  {
    title: "Live Parcel Tracking",
    description:
      "Stay updated in real-time with our live parcel tracking. Monitor your shipment’s journey and get instant status updates for complete peace of mind.",
    img: img2,
  },
  {
    title: "100% Safe Delivery",
    description:
      "We ensure your parcels are handled with great care and delivered securely. Our trusted process guarantees safe and damage-free delivery every time.",
    img: img1,
  },
  {
    title: "24/7 Call Center Support",
    description:
      "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    img: img2,
  },
];

const LiveTracking = () => {
  return (
    <div className="w-11/12 mx-auto px-4 py-12 space-y-8">
      {features.map((feature, index) => (
       <div
  key={index}
  className="flex flex-col md:flex-row items-center justify-between gap-6 bg-[#f9f9fa] p-8 rounded-xl shadow-sm"
>
  {/* Image */}
  <img src={feature.img} alt={feature.title} className="w-40 md:w-56" />

  {/* Divider Line (only for desktop view) */}
  <div className="hidden md:block w-[2px] h-24 border-r border-dashed border-gray-400"></div>

  {/* Text */}
  <div className="text-center md:text-left">
    <h3 className="text-2xl font-semibold text-secondary mb-2">
      {feature.title}
    </h3>
    <p className="text-gray-600 text-sm md:text-base leading-6 max-w-xl">
      {feature.description}
    </p>
  </div>
</div>

      ))}
    </div>
  );
};

export default LiveTracking;
