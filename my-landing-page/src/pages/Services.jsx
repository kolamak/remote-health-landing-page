import React from 'react'
import { FaUserLock } from "react-icons/fa6";
import { GiMedicines } from "react-icons/gi";
import { FaUserNurse } from "react-icons/fa";
import { FaStethoscope } from "react-icons/fa";
import { FcPhoneAndroid } from "react-icons/fc";
import Footer_1 from '../components/Footer_1';
import serviceImg from '../assets/service_image1.svg'
import seviceImg1 from '../assets/service_image2.svg'
import serviceImg2 from '../assets/service_image3.svg'
import serviceImg3 from '../assets/service_image4.svg'
import serviceImg4 from '../assets/service_image5.svg'

export const Services = () => {
  return (
    <div>

    <header className="bg-gradient-to-br from-blue-50 to-blue-200 py-20 px-4 sm:py-24 md:py-32">
      <div className="max-w-4xl mx-auto text-center">
    
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#000000] mb-4">
          Your Health, Anywhere. Anytime.
        </h1>
    
        <p className="text-base sm:text-lg text-[#000000] mb-8 max-w-2xl mx-auto">
          Get expert medical care from licensed professionals — all from the comfort of your home.
        </p>

        <button className="bg-[#007BFF] hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-150 transform hover:scale-105">
          Book a Consultation
        </button>

      </div>
    </header>
<section>
    <div className="min-h-screen bg-white p-4 sm:p-8 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row mb-6 shadow-md rounded-lg overflow-hidden">
        <div className="md:w-1/2">
      <img src={serviceImg} alt="Person using video call on phone" class="w-full h-full object-cover"></img>
      </div>
        <div className="md:w-1/2 bg-[#E6F2FF] p-6 flex flex-col justify-center">
        <h3 className="text-xl font-bold  text-[#000000] mb-2">Virtual Consultations</h3>
        <p className="text-[#000000] font-medium">Connect with licensed General Practitioners and Specialists via high-quality audio/video calls. Whether you are on the move or at home, professional medical advice is just a click away.</p>
      </div>
    </div>

  {/* Online-rescriptions-&-Delivery */}
    <div className="flex flex-col md:flex-row mb-6 shadow-md rounded-lg overflow-hidden">
      <div className="md:w-1/2">
      <img src={seviceImg1} alt="Person on laptop ordering medicine" class="w-full h-full object-cover"></img>
      </div>
      <div className="md:w-1/2 bg-[#E6F2FF] p-6 flex flex-col justify-center">
        <h3 className="text-xl font-bold text-[#000000] mb-2">Online Prescriptions & Delivery</h3>
        <p className="text-[#000000] font-medium">Get digital prescriptions sent directly to your phone after your consultation. We partner with local pharmacies to ensure your medication is delivered to your doorstep or ready for fast pickup.</p>
      </div>
      </div>

  {/* specialist-care-access */}
    <div className="flex flex-col md:flex-row mb-6 shadow-md rounded-lg overflow-hidden">
      <div className="md:w-1/2">
      <img src={serviceImg2} alt="Doctors in a hospital setting" class="w-full h-full object-cover"></img>
      </div>
      <div className="md:w-1/2 bg-[#E6F2FF] p-6 flex flex-col justify-center">
        <h3 className="text-xl font-bold text-[#000000] mb-2">Specialist Care Access</h3>
        <p className="text-[#000000] font-medium">Our network includes verified specialists across: Pediatrics, Gynecology, Dermatology, Mental Health, and more. Get the specialized attention you need without the hassle of referrals and long waits.</p>
      </div>
    </div>

  {/* electronic-medical-records */}
    <div className="flex flex-col md:flex-row mb-6 shadow-md rounded-lg overflow-hidden">
      <div className="md:w-1/2">
      <img src={serviceImg3} alt="Doctor looking at medical screens" class="w-full h-full object-cover"></img>
      </div>
    <div className="md:w-1/2 bg-[#E6F2FF] p-6 flex flex-col justify-center">
        <h3 className="text-xl font-bold text-[#000000] mb-2">Electronic Medical Records (EMR)</h3>
        <p className="text-[#000000] font-medium">We provide secure, cloud-based storage for all your medical history, test results, and prescriptions. Your data is managed and accessible only by you and your authorized doctors.</p>
      </div>
    </div>

  {/*preventive-care */}
    <div className="flex flex-col md:flex-row shadow-md rounded-lg overflow-hidden">
      <div className="md:w-1/2">
      <img src={serviceImg4} alt="Doctor talking with patient on a couch" class="w-full h-full object-cover"></img>
      </div>
      <div className="md:w-1/2 bg-[#E6F2FF] p-6 flex flex-col justify-center">
        <h3 className="text-xl font-bold text-[#000000] mb-2">Preventive Care</h3>
        <p className="text-[#000000] font-medium">We offer regular health check-in plans and wellness workshops to help you maintain a healthy lifestyle and catch potential issues early.</p>
      </div>
    </div>

    </div>
    </section>
    <Footer_1 />
    </div>
  )
}
