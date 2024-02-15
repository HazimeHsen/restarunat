// OpeningHours.js
import Image from "next/image";
import React from "react";

const OpeningHours = () => {
  return (
    <div className="px-5 py-10 flex flex-col md:flex-row items-center justify-between">
      <div className="mb-4 md:mb-0 md:mr-4">
        <h2 className="text-lg font-semibold mb-2">Opening Hours</h2>
        <ul>
          <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
          <li>Saturday: 10:00 AM - 4:00 PM</li>
          <li>Sunday: Closed</li>
        </ul>
      </div>
      <div className="w-full md:w-auto">
        <Image
          src="https://dummyimage.com/150x100"
          alt="Dummy"
          width={150}
          height={100}
          className="rounded w-full md:w-auto"
        />
      </div>
    </div>
  );
};

export default OpeningHours;
