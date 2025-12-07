import React from 'react'

export const Products = () => {
  return (
    <>
    <div className="w-full bg-white px-6 md:px-12 lg:px-12 py-10">
      <div className="pl-20 mt-10">
        <h1 className="font-bold text-[28px] md:text-[32px] text-[#000000] text-left">
          Our Products
        </h1>
      </div>

  <div className="mt-16 flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-20 justify-between">
        
        {/* BULLETS */}
        <div className="flex flex-col gap-10 lg:w-[55%]">
          <p className="font-medium text-[22px] md:text-[26px] leading-[42px] text-[#000000]">
            Our products are designed to make healthcare seamless:
          </p>

        {/* REMOTE HEALTH PLATFORM */}
        <div className="flex gap-4">
          <div className="w-[28px] h-[28px] flex items-center justify-center">
            <div className="w-[10px] h-[10px] bg-[#007BFF] rounded-full"></div>
          </div>

          <p className="font-medium text-[22px] md:text-[26px] leading-[42px] text-[#000000]">
            RemoteHealth platform (web-based platform): Easy to use web app for consultations and records.
          </p>
        </div>

        {/* DOCTOR'S PORTAL */}
        <div className="flex gap-4">
          <div className="w-[28px] h-[28px] flex items-center justify-center">
            <div className="w-[10px] h-[10px] bg-[#007BFF] rounded-full"></div>
          </div>

          <p className="font-medium text-[22px] md:text-[26px] leading-[42px] text-[#000000]">
            Doctor’s Portal: A secure interface for medical professionals to connect with patients.
          </p>
        </div>

        {/* E-PRESCRIPTION TOOL */}
        <div className="flex gap-4">
          <div className="w-[28px] h-[28px] flex items-center justify-center">
            <div className="w-[10px] h-[10px] bg-[#007BFF] rounded-full"></div>
          </div>

          <p className="font-medium text-[22px] md:text-[26px] leading-[42px] text-[#000000]">
            E-Prescription Tool: Simplifies medication requests and fulfillment.
          </p>
        </div>

        {/* ANALYTICS DASHBOARD */}
        <div className="flex gap-4">
          <div className="w-[28px] h-[28px] flex items-center justify-center">
            <div className="w-[10px] h-[10px] bg-[#007BFF] rounded-full"></div>
          </div>

          <p className="font-medium text-[22px] md:text-[26px] leading-[42px] text-[#000000]">
            Analytics Dashboard (Future Feature): Planned tool to offer valuable insights into patient trends and health outcomes,
            supporting better decision-making for healthcare providers.
          </p>
        </div>

      </div>
        {/* IMAGE */}
        <div className="lg:w-[45%] flex justify-center lg:justify-end lg:items-start">
          <img src="/images/Frame-1321318966.svg" alt="Frame" 
            className="w-full md:max-w-lg lg:max-w-xl"/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Products
