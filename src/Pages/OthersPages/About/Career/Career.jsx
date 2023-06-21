import React from "react";
import image1 from "../../../../assets/images/convocation.jpeg";
import image2 from "../../../../assets/images/career.jpg";

const Career = () => {
  return (
    <>
      {/* Banner For Career */}
      <div className="relative">
        <img src={image1} alt="Banner" className="object-cover w-full h-64" />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-50 bg-gray-900">
          <h1 className="text-white text-4xl font-bold">
            General Rules and Regulations
          </h1>
        </div>
      </div>
      {/* Image Of Career  */}
      <div className="container mx-auto">
        <img src={image2} alt="" />
      </div>
    </>
  );
};

export default Career;
