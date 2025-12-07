import React from "react";

const About = () => {
  return (
    <main className="bg-white w-full min-h-screen flex items-start justify-center px-4 sm:px-6 md:px-16 py-12 md:py-20">
      <div className="w-full max-w-4xl mx-auto text-center">

        <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-[30px] font-bold font-nunito text-black mb-10 mt-20 md:mb-20 leading-tight">
          About Remote Health
        </h1>

        <p className="mx-auto text-2xl sm:text-lg md:text-xl lg:text-2xl font-nunito font-medium italic text-black max-w-3xl leading-7 md:leading-relaxed mb-20 md:mb-32">
          RemoteHealth is a telemedicine platform dedicated to <br /> making healthcare accessible, affordable, and reliable. We <br /> connect
          individuals with licensed healthcare professionals <br /> from anywhere, ensuring that distance, cost, or time never <br /> stand in the
          way of quality medical care.
        </p>

        <p className="mx-auto text-xl sm:text-2xl md:text-lg lg:text-[20px] font-nunito font-medium text-[#007BFF] max-w-2xl">
          Our mission is simple: to put healthcare within everyone’s reach.
        </p>
      </div>
    </main>
  );
};

export default About;
