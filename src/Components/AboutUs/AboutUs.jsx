import React from "react";

const AboutUs = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-secondary mb-3">About Us</h2>
      <p className="text-gray-500 mb-8">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero
        hassle. From personal packages to business parcels — we deliver on time,
        every time.
      </p>

      {/* Tabs */}
      <div role="tablist" className="tabs tabs-bordered text-lg font-semibold">
        <a role="tab" className="tab tab-active">
          Story
        </a>
        <a role="tab" className="tab">
          Mission
        </a>
        <a role="tab" className="tab">
          Success
        </a>
        <a role="tab" className="tab">
          Team & Others
        </a>
      </div>

      {/* Story Content */}
      <div className="mt-6 text-gray-600 leading-7">
        <p className="mb-4">
          We started with a simple promise — to make parcel delivery fast,
          reliable, and stress-free. Over the years, our commitment to real-time
          tracking, efficient logistics, and customer-first service has made us
          a trusted partner for thousands.
        </p>

        <p className="mb-4">
          Whether it's a personal gift or a time-sensitive business delivery,
          our network ensures it reaches its destination — on time, every time.
        </p>

        <p>
          Today, we continue to innovate, expand, and build smarter logistics —
          empowering people and businesses to send with confidence.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
