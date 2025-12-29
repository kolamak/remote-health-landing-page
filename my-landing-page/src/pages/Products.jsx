import React from 'react'
import Footer_1 from '../components/Footer_1'
import markIcon from '../assets/mark-icon.svg'
import productImg from '../assets/product-img1.svg'
import productImg1 from '../assets/product-img2.svg'
import productImg2 from '../assets/product-img3.svg'
import productImg3 from '../assets/product-img4.svg'


export const Products = () => {
  return (
  <>
  <div className="bg-white min-h-screen">

  <header className="bg-gradient-to-br from-blue-50 to-blue-200 py-16 px-4 sm:py-20 md:py-24 text-center lg:h-[520px] flex items-center">
    <div className="max-w-7xl mx-auto">
      <h1 className="text-4xl sm:text-4xl lg:text-[50px] font-bold text-[#282C34] mt-10 mb-3">
        Technology Built for Care
      </h1>
      <p className="text-[#637083] lg:text-[20px] max-w-lg mx-auto py-8">
        Seamless, secure platforms designed for patients, doctors, and pharmacists.
      </p>
      <button className="bg-[#007BFF] hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-150">
        Get Started for free
      </button>
    </div>
  </header>


  <main className="max-w-6xl mx-auto p-4 sm:p-8">

    {/* patient */}
    <div className="flex flex-col md:flex-row items-center mb-12">

      <div className="md:w-1/2 p-4 md:p-8 order-2 md:order-1">
      <p className="text-[#007BFF] font-semibold mb-2">For Individuals & Families</p>
        <h2 className="text-2xl font-bold text-[#282C34] lg:text-4xl mb-4">Patient Platform</h2>
        <p className="text-[#637083] mb-4">Our easy-to-use web application allows you to book appointments, 
            consult with doctors, and manage your health subscriptions. Optimized for mobile data efficiency, 
            ensuring you can access care even with low connectivity.</p>

            {/* bulletins */}
        <div className="mt-4">
         <span className='flex' >
          <img src={markIcon} alt="marked-icon" className='w-4 h-4 justify-center' />
            <p className='text-[#282C34] lg:text-[14px] mb-3 ml-2 item-center font-medium'>Instant Appointment Booking</p>
          </span> 
          <span className='flex'>
            <img src={markIcon} alt="marked-icon" className='w-4 h-4 justify-center ' />
            <p className=' text-[#282C34] lg:text-[14px] mb-3 ml-2 font-medium' >Secure Payment Gateway (Monnify)</p>
          </span>
          <span className='flex'>
            <img src={markIcon} alt="marked-icon" className='w-4 h-4 justify-center' />
            <p className='text-[#282C34] lg:text-[14px] mb-3 ml-2 font-medium'>Symptom Checker (Coming Soon)</p>
          </span>
        </div>
      </div>
          <img src={productImg} alt="patient-App-interface" className="w-full max-w-lg object-contain"></img>
      

    </div>


{/* Doctor-portal */}
    <div className="flex flex-col md:flex-row bg-[#F3F5F780] items-center mb-12">
      <div className="md:w-1/2 p-4 md:p-8">
       <p className="text-[#007BFF] font-semibold mb-2">For Healthcare Professionals</p>
        <h2 className="text-2xl font-bold text-[#282C34] lg:text-4xl mb-4">Doctor's Portal</h2>
        <p className="text-[#637083] mb-4">A powerful practice management interface for licensed medical professionals. Manage your availability, 
          conduct secure video consults, and write digital notes all in one place.</p>
        <div className="mt-4">
         <span className='flex' >
          <img src={markIcon} alt="marked-icon" className='w-4 h-4 justify-center' />
            <p className='text-[#282C34] lg:text-[14px] mb-3 ml-2 item-center font-medium'>Instant Appointment Booking</p>
          </span> 
          <span className='flex'>
            <img src={markIcon} alt="marked-icon" className='w-4 h-4 justify-center ' />
            <p className=' text-[#282C34] lg:text-[14px] mb-3 ml-2 font-medium' >Automated Scheduling</p>
          </span>
          <span className='flex'>
            <img src={markIcon} alt="marked-icon" className='w-4 h-4 justify-center' />
            <p className='text-[#282C34] lg:text-[14px] mb-3 ml-2 font-medium'>Secure Earning Wallet</p>
          </span>
        </div>
      </div>

      <div className="md:w-1/2 p-4 md:p-8">
          <img src={productImg1} alt="patient-App-interface" className="w-full max-w-lg object-contain"></img>
        </div>
      </div>


     {/*e-prescription-tool*/}
  <div className="flex flex-col md:flex-row items-center mb-12">

      <div className="md:w-1/2 p-4 md:p-8 order-2 md:order-1">
      <p className="text-[#007BFF] font-semibold mb-2">For Pharmacies & Partners</p>
        <h2 className="text-2xl font-bold text-[#282C34] lg:text-4xl mb-4">E-Prescription Tool</h2>
        <p className="text-[#637083] mb-4">A unified system that simplifies medication requests. 
          Doctors generate verified digital scripts that patients can fulfill at partner pharmacies, reducing errors and fraud.
          </p>
      </div>
          <img src={productImg2} alt="patient-App-interface" className="w-full max-w-lg object-contain"></img>
    
    </div>


    <div className="flex flex-col md:flex-row items-center mb-12">
      <div className="md:w-1/2 p-4 md:p-8">
       <p className="text-[#007BFF] font-semibold mb-2">For Health Insights</p>
        <h2 className="text-2xl font-bold text-[#282C34] lg:text-4xl mb-4">Analytics Dashboard (Coming Soon)
          <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full ml-2">Coming Soon</span>
        </h2>
        <p className="text-[#637083] mb-4">We are building advanced tools to offer valuable insights 
          into patient trends and health outcomes, supporting better decision-making for healthcare providers and policy planning.</p>
      </div>

      <div className="md:w-1/2 p-4 md:p-8">
          <img src={productImg3} alt="patient-App-interface" className="w-full max-w-lg object-contain"></img>
        </div>
    </div>
  </main>

  {/* cta */}
  <div className="lg:h-[500px] bg-gradient-to-br from-blue-50 to-blue-200 py-12 px-4 sm:py-16 text-center">
    <h2 className="text-xl font-semibold lg:text-3xl text-[#282C34] mb-4">Ready to Get Started?</h2>
    <button className="bg-[#007BFF] hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-150">
      Join RemoteHealth Now
    </button>
  </div>
  <Footer_1 />
</div>
    </>
  )
}

export default Products
