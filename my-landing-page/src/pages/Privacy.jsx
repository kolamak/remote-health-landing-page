import Footer_1 from "../components/Footer_1"
import { NavLink } from 'react-router-dom';

export const Privacy = () => {
  return (
    <>
  <div className="min-h-screen bg-white flex flex-col lg:flex-row">

  <section className="w-full lg:w-[288px] lg:mt-12 bg-[#EFF0F0] lg:ml-4 xl:ml-20 p-4 md:p-6 shadow-md lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto">
          {/* links */}
    <nav className="space-y-2 text-center lg:text-left" >
      <a href="#" className="block px-2 sm:px-4 py-2 text-xs sm:text-sm font-semibold bg-[#007BFF] text-white rounded-lg shadow">
        Introduction
      </a>
      <a href="#" className="block px-2 sm:px-4 py-2 text-xs sm:text-sm text-[#637083] hover:bg-gray-200 rounded-lg transition">
        Information We Collect
      </a>
      <a href="#" className="block px-2 sm:px-4 py-2 text-xs sm:text-sm text-[#637083] hover:bg-gray-200 rounded-lg transition">
       How We Use your Information
      </a>
       <a href="#" className="block px-2 sm:px-4 py-2 text-xs sm:text-sm text-[#637083] hover:bg-gray-200 rounded-lg transition">
        Legal Basis for Processing
      </a>
      <a href="#" className="block px-2 sm:px-4 py-2 text-xs sm:text-sm text-[#637083] hover:bg-gray-200 rounded-lg transition">
        How We share your Information
      </a>
      <a href="#" className="block px-2 sm:px-4 py-2 text-xs sm:text-sm text-[#637083] hover:bg-gray-200 rounded-lg transition">
        Data Security
      </a>
      <a href="#" className="block px-2 sm:px-4 py-2 text-xs sm:text-sm text-[#637083] hover:bg-gray-200 rounded-lg transition">
        Your rights and choices
      </a>
      <a href="#" className="block px-2 sm:px-4 py-2 text-xs sm:text-sm text-[#637083] hover:bg-gray-200 rounded-lg transition">
        Cookies and trackin... 
      </a>
      <a href="#" className="block px-2 sm:px-4 py-2 text-xs sm:text-sm text-[#637083] hover:bg-gray-200 rounded-lg transition">
        International Data Tran.... 
      </a>
      <a href="#" className="block px-2 sm:px-4 py-2 text-xs sm:text-sm text-[#637083] hover:bg-gray-200 rounded-lg transition">
       Third Party services. 
      </a>
    </nav>
  </section>

  {/* main-content-area */}

  <main className="flex-1 p-4 sm:p-6 md:p-8 lg:p-10 max-w-5xl lg:mx-8 mx-auto">
    
    {/* header-section */}
    <section className="mb-8 sm:mb-12">
      <h1 className="text-lg sm:text-xl font-extrabold text-[#282C34] mb-4">INTRODUCTION</h1>
      <p className="text-sm sm:text-base text-[#484848] font-medium mb-4">
        Welcome to RemoteHealth. This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you use our telemedicine platform, including our mobile application, website, 
        and related services (collectively, the "Platform"). 
      </p>

      <p className="text-sm sm:text-base text-[#484848] font-medium mb-4">
        We are committed to protecting your privacy and complying with applicable data protection laws, including the Nigeria Data Protection Regulation (NDPR) and international standards such as HIPAA principles. 
        This Privacy Policy should be read in conjunction with our Terms of Service.
      </p>

      {/*highlighted-text*/}
      <p className="text-sm sm:text-base text-[#FF8D28] font-bold p-3">
        By using the Platform, you consent to the collection, use, and disclosure of your information as described in this Privacy Policy. 
        If you do not agree with this Privacy Policy, please do not use the Platform.
      </p>
    </section>


      {/* Information-we-collect */}
    <section className="mb-8 sm:mb-12">
      <h2 className="text-lg sm:text-xl font-extrabold text-[#282C34] mb-4 sm:mb-6">INFORMATION WE COLLECT</h2>

      {/* Information-provided-directly */}
      <div className="mb-6 sm:mb-8">
        <h3 className="text-base sm:text-lg font-semibold text-[#484848] mb-3 sm:mb-4">2.1 Information You Provide Directly</h3>
        <p className="text-sm sm:text-base text-[#484848] font-extrabold mb-3">Account Registration Information:</p>
        <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-sm sm:text-base text-[#484848] ml-2 sm:ml-4">
          <li>Full name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Date of birth</li>
          <li>Gender</li>
          <li>Residence address</li>
          <li>Username and password</li>
        </ul>
      </div>


      {/* Health Information Sub-section */}
      <div className="mb-6 sm:mb-8">
        <p className="text-sm sm:text-base text-[#484848] font-extrabold mb-3">Health Information:</p>
        <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-sm sm:text-base text-[#484848] ml-2 sm:ml-4">
          <li>Medical history</li>
          <li>Current symptoms and conditions</li>
          <li>Medications and allergies</li>
          <li>Chronic conditions</li>
          <li>Previous diagnoses and treatments</li>
          <li>Laboratory and diagnostic test results</li>
          <li>Medical records and documents uploaded by you</li>
          <li>Consultation notes and e-prescriptions from Healthcare Providers</li>
          <li>Health preferences and goals</li>
        </ul>
      </div>

      {/* payment-information */}
      <div className="mb-6 sm:mb-8">
        <p className="text-sm sm:text-base text-[#484848] font-extrabold mb-3">Payment Information:</p>
        <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-sm sm:text-base text-[#484848] ml-2 sm:ml-4">
          <li>Payment card details (processed by third-party payment processors)</li>
          <li>Billing address</li>
          <li>Transaction history</li>
        </ul>
      </div>

      {/* Communications */}
      <div className="mb-6 sm:mb-8">
        <p className="text-sm sm:text-base text-[#484848] font-extrabold mb-3">Communication Data:</p>
        <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-sm sm:text-base text-[#484848] ml-2 sm:ml-4">
          <li>Messages exchanged with Healthcare Providers</li>
          <li>Support inquiries and correspondence with us</li>
          <li>Feedback and survey responses</li>
        </ul>
      </div>

      {/* <!-- Hardware/Facility Info Sub-section --> */}
      <div className="mb-6 sm:mb-8">
        <p className="text-sm sm:text-base text-[#484848] mb-3 font-extrabold">Healthcare Provider Information (for Providers):</p>
        <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-sm sm:text-base text-[#484848] ml-2 sm:ml-4">
          <li>Professional credentials and licenses</li>
          <li>MDCN registration number and verification</li>
          <li>Specialization and areas of expertise</li>
          <li>Professional liability insurance information</li>
          <li>Bank account information for payments</li>
          <li>Availability and scheduling preferences</li>
        </ul>
      </div>

      {/* information-collected-automatically*/}
      <div className="mb-6 sm:mb-8">
        <h3 className="text-base sm:text-lg font-extrabold text-[#484848] mb-3 sm:mb-4">2.2 Information Collected Automatically</h3>
      </div>
      
      {/* usage-information */}
      <div className="mb-6 sm:mb-8">
        <p className="text-sm sm:text-base text-[#484848] mb-3 font-extrabold">Usage Information:</p>
        <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-sm sm:text-base text-[#484848] ml-2 sm:ml-4">
          <li>Pages and features accessed on the Platform</li>
          <li>Time spent on different sections</li>
          <li>Consultation duration and frequency</li>
          <li>Search queries within the Platform</li>
          <li>Interaction with AI symptom checker</li>
        </ul>
      </div>

      {/* device-info */}
      <div className="mb-6 sm:mb-8">
        <p className="text-sm sm:text-base text-[#484848] mb-3 font-extrabold">Device Information:</p>
        <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-sm sm:text-base text-[#484848] ml-2 sm:ml-4">
          <li>Device type, model, and operating system</li>
          <li>Unique device identifiers</li>
          <li>IP address</li>
          <li>Browser type and version</li>
          <li>Mobile network information</li>
          <li>Time zone and language settings</li>
        </ul>
      </div>

      {/* location-info*/}
      <div className="mb-6 sm:mb-8">
        <p className="text-sm sm:text-base text-[#484848] mb-3 font-extrabold">Location Information:</p>
        <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-sm sm:text-base text-[#484848] ml-2 sm:ml-4">
          <li>Approximate location based on IP address</li>
          <li>Precise location (if you grant permission for location services).</li>
        </ul>
      </div>
      
      {/* cookies-&-tracking */}
      <div className="mb-6 sm:mb-8">
        <p className="text-sm sm:text-base text-[#484848] font-medium">
          <span className="text-[#FF8D28] mr-1 font-extrabold">Cookies and Tracking Technologies:</span>
           We use cookies, web beacons, and similar tracking technologies to enhance your experience, 
           analyze usage patterns, and deliver personalized content. Section 8 for more details.
        </p>
      </div>
    </section>
    
    {/* <!-- Footer/Page Number --> */}
    <NavLink to="/privacy_2" className="block text-center font-medium text-sm sm:text-base text-[#484848] mt-8 sm:mt-12 cursor-pointer">
      Next  <span className="font-extrabold">&gt;</span>  
    </NavLink>

  </main>
</div>
  < Footer_1 />
    </>
  )
}

export default Privacy
