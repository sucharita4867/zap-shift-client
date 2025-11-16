import React from "react";
import icon from "../../assets/bookingIcon.png";

const HowWork = () => {
  const services = [
    {
      id: 1,
      icon: icon,
      title: "Booking Pick & Drop",
      description:
        "From personal packages to business shipments — we deliver on time, every time.Track your shipment live from pickup to delivery.",
    },
    {
      id: 2,
      icon: icon,
      title: "Cash On Delivery",
      description:
        "From personal packages to business shipments — we deliver on time, every time.Track your shipment live from pickup to delivery.",
    },
    {
      id: 3,
      icon: icon,
      title: "Delivery Hub",
      description:
        "From personal packages to business shipments — we deliver on time, every time.Track your shipment live from pickup to delivery.",
    },
    {
      id: 4,
      icon: icon,
      title: "Booking SME & Corporate",
      description:
        "From personal packages to business shipments — we deliver on time, every time.Track your shipment live from pickup to delivery.",
    },
  ];
  return (
    <div className="">
      <h1 className="text-3xl font-bold text-center text-secondary my-6">
        How it Works
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-11/12 mx-auto">
        {services.map((item) => (
          <div
            key={item.id}
            className="p-5 bg-white rounded-xl shadow-md hover:shadow-lg transition"
          >
            <img
              src={item.icon}
              alt={item.title}
              className="w-12 h-12 object-contain mb-3"
            />
            <h3 className="text-lg font-semibold text-secondary mb-1">
              {item.title}
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowWork;
