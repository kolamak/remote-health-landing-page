import React from 'react'
import { FaUserLock } from "react-icons/fa6";
import { GiMedicines } from "react-icons/gi";
import { FaUserNurse } from "react-icons/fa";
import { FaStethoscope } from "react-icons/fa";
import { FcPhoneAndroid } from "react-icons/fc";

export const Services = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white justify-center">
      <div className="max-w-7xl mx-auto">
        {/* OUR SERVICES */}
        <div className="text-center mb-16">
          <h2 className="text-[32px] font-bold text-[#000000] mb-4">Our Services</h2>
          <p className="text-[24px] font-semibold text-[#000000]">
            RemoteHealth offers convenient and reliable healthcare services:
          </p>
        </div>

        {/* SEVICES CARDS */}
        <div className='flex justify-center'>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-12 lg:gap-12 max-w-7xl">
        
        <div class="w-full md:w-[427px] h-[327px] flex flex-col items-center justify-center gap-[12px] rounded-[20px] py-[28px] px-[12px] 
        bg-[#F7F8F8] opacity-100 shadow hover:shadow-lg transition-shadow duration-300">
    
          <h2 class="text-[20px] font-bold flex items-center gap-5">
            <FaStethoscope className="text-3xl text-[#007BFF]"/>
            Virtual Doctor Visits</h2>
          <p class="text-[20px] font-normal mt-6 text-[#000000]">
            Virtual consultations with <br /> licensed doctors and <br /> specialists.</p>
        </div>
        

        <div class="w-full md:w-[427px] h-[327px] flex flex-col items-center justify-center gap-[12px] rounded-[20px] py-[28px] px-[12px] 
        bg-[#F7F8F8] opacity-100 shadow hover:shadow-lg transition-shadow duration-300">

          <h2 class="text-[18px] font-bold flex items-center gap-2"> 
          <FcPhoneAndroid className='text-3xl'/>Preventive Health & Wellness Coaching</h2>
          <p class="text-[20px] font-normal mt-6 text-[#000000]">
          Preventive care through <br /> regular health checks and <br /> wellness coaching.</p>
        </div>

        <div class="w-full md:w-[427px] h-[360px] flex flex-col items-center justify-center gap-[12px] rounded-[20px] py-[28px] px-[12px] 
        bg-[#F7F8F8] opacity-100 shadow hover:shadow-lg transition-shadow duration-300">

          <h2 class="text-[20px] font-bold flex items-center gap-3"> 
            <GiMedicines className="text-4xl text-[#007BFF]"/>
            E-Prescriptions & Referrals</h2>
            <p class="text-[20px] font-normal mt-6 text-[#000000]">Online prescriptions.</p>
        </div>

        <div class="w-full md:w-[427px] h-[360px] flex flex-col items-center justify-center gap-[12px] rounded-[20px] py-[28px] px-[12px] 
        bg-[#F7F8F8] opacity-100 shadow hover:shadow-lg transition-shadow duration-300">

          <h2 class="text-[20px] font-bold flex items-center gap-3"> 
          <FaUserNurse className="text-3xl text-[#007BFF]"/>
          Specialist Access on Demand</h2>
          <p class="text-[20px] font-normal mt-6 text-[#000000]">Access to a wide range of <br /> 
          specialists including pediatrics, <br /> gynecology, dermatology, and <br /> more.</p>
        </div>

        <div class="w-full md:w-[427px] h-[360px] flex flex-col text-center items-center justify-center gap-[12px] rounded-[20px] py-[28px] px-[12px] 
         rounded-[20px] py-[28px] px-[12px] bg-[#F7F8F8] opacity-100 shadow md:col-span-2 justify-self-center hover:shadow-lg transition-shadow duration-300">

          <h2 class="text-[20px] font-bold flex items-center gap-3"> 
          <FaUserLock className='text-3xl text-[#007BFF]'/>Secure Health Monitoring</h2>
          <p class="text-[20px] font-normal mt-6  text-[#000000]">Secure health monitoring and <br /> medical records management.</p>
        </div>

      </div>
      </div>
      </div>
    </section>
  )
}
