import React from "react";
import icon from "../../assets/service.png";

const OurServices = () => {
  const services = [
    {
      id: 1,
      icon: icon,
      title: "Express  & Standard Delivery",
      description:
        "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi.  Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    },
    {
      id: 2,
      icon: icon,
      title: "Nationwide Delivery",
      description:
        "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
    },
    {
      id: 3,
      icon: icon,
      title: "Fulfillment Solution",
      description:
        "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
    },
    {
      id: 4,
      icon: icon,
      title: "Cash on Home Delivery",
      description:
        "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    },
    {
      id: 5,
      icon: icon,
      title: "Corporate Service / Contract In Logistics",
      description:
        "Customized corporate services which includes warehouse and inventory management support.",
    },
    {
      id: 6,
      icon: icon,
      title: "Parcel Return",
      description:
        "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
    },
  ];
  return (
    <div className="bg-secondary my-10 rounded-2xl p-8">
      <div>
        <h1 className="text-3xl text-center my-6 font-bold text-white">
          Our Services
        </h1>
        <p className="text-white w-[60%] mx-auto text-center">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </div>

      <div className="grid grid-cols-1 mt-4 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 mx-auto text-center ">
        {services.map((item) => (
          <div
            key={item.id}
            className="p-5 bg-white rounded-2xl shadow-md 
             transition-all duration-300 
             group flex flex-col items-center
             hover:shadow-2xl hover:-translate-y-2 hover:bg-primary"
          >
            <img
              src={item.icon}
              alt={item.title}
              className="w-16 p-3 h-16 rounded-full object-contain mb-3 flex flex-col items-center bg-white "
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

export default OurServices;
