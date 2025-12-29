import { NavLink } from 'react-router-dom';
import Footer_1 from "../components/Footer_1"
import { IoCallOutline } from "react-icons/io5";
import { FiAlertTriangle } from "react-icons/fi";
import redAlertIcon from '../assets//red-alert.svg'
import { MdOutlineMailOutline } from "react-icons/md";

const Terms = () => {
  return (
    <>
    
    <div>
    <header className="bg-gradient-to-br from-blue-50 to-blue-200 py-16 px-4 sm:py-20 md:py-24 text-center flex items-center">
    <div className="max-w-7xl mx-auto">
      <h1 className="text-4xl sm:text-4xl lg:text-[50px] font-bold text-[#282C34] mt-10 mb-3">
        Terms of Service
      </h1>
      <p className="text-[#637083] lg:text-[20px] max-w-lg mx-auto py-8">
        Last Updated: December 17, 2025
      </p>
    </div>
  </header>

    <div className="justify-center px-4 sm:px-6 lg:px-8 bg-[#F9FAFB] py-8">
  {/* Red-alert-banner*/}
    <div className="bg-[#FF4B41] text-white p-6 px-20 m-12 rounded-lg shadow-md mb-12 flex max-w-7xl justify-center items-start">
      <div className="mr-4 mt-1">
        <FiAlertTriangle />
      </div>
      <div>
        <h2 className="font-extrabold lg:text-2xl mb-2 text-[#FFFFFF]">IMPORTANT: NOT FOR MEDICAL EMERGENCIES</h2>
        <p className=" font-bold text-[#FFFFFF] text-sm lg:text-base mb-4">
          RemoteHealth is <span className="font-extrabold">NOT</span> an emergency medical service. If you are experiencing a medical emergency, life-threatening condition, or require immediate medical attention, <span className="font-extrabold">DO NOT</span>.use this platform
        </p>
        <div className="flex items-center gap-3 mb-2">
          <IoCallOutline />
          <p className="mb-2 font-semibold">For emergencies in Nigeria, call</p>
        </div>
        <p className="font-extrabold text-2xl">112 <span className="font-medium">or</span> 767</p>
        <p className="text-xs mt-2 opacity-90">or proceed immediately to your nearest emergency room.</p>
      </div>
      <div className="ml-4 mt-1">
       <FiAlertTriangle />
      </div>
    </div>

  <div class="min-h-screen bg-white flex flex-col md:flex-row">

  {/* Sidebar-nav*/}
  <section className="md:w-64 bg-[#F9FAFB] p-4 md:p-6 lg:mt-12 lg:ml-12 border border-gray-300 shadow-sm md:h-screen rounded-lg md:sticky md:top-0">
    <nav className="space-y-2">
      <h3 className="font-bold mb-4 text-xs text-[#282C34] uppercase tracking-wider">Table of Contents</h3>
      {/* <!-- Navigation Links --> */}
      <a href="#" className="block px-4 py-2 text-sm text-[#637083] hover:bg-gray-100 rounded-lg transition">
        1. About RemoteHealth
      </a>
      <a href="#" className="block px-4 py-2 text-sm text-[#637083] hover:bg-gray-100 rounded-lg transition">
        2. Acceptance of Terms
      </a>
      <a href="#" className="block px-4 py-2 text-sm text-[#637083] hover:bg-gray-100 rounded-lg transition">
        3. Definitions
      </a>
      <a href="#" className="block px-4 py-2 text-sm text-[#637083] hover:bg-gray-100 rounded-lg transition">
        4. Eligibility
      </a>
      <a href="#" className="block px-4 py-2 text-sm text-[#637083] hover:bg-gray-100 rounded-lg transition">
        5. Account Registration and Security
      </a>
      <a href="#" className="block px-4 py-2 text-sm text-[#637083] hover:bg-gray-100 rounded-lg transition">
        6. Platform Services
      </a>

      <div className="flex flex-row items-center">
         <a href="#" className="block px-3 py-2 text-sm lg:text-[12px] font-semibold text-[#637083]">
        7. Not an Emergency Service
      </a>
      <img src={redAlertIcon} alt="red-alert-icon" className="p-0" />
      </div>

      <a href="#" className="block px-4 py-2 text-sm text-[#637083] hover:bg-gray-100 rounded-lg transition">
        8. Medical Disclaimer
      </a>
       <a href="#" className="block px-4 py-2 text-sm text-[#637083] hover:bg-gray-100 rounded-lg transition">
        9. Patient Responsibilities
      </a>
       <a href="#" className="block px-4 py-2 text-sm text-[#637083] hover:bg-gray-100 rounded-lg transition">
        10. Healthcare Provider Responsibilities
      </a>
       <a href="#" className="block px-4 py-2 text-sm text-[#637083] hover:bg-gray-100 rounded-lg transition">
        11. Fees and Payment
      </a>
       <a href="#" className="block px-4 py-2 text-sm text-[#637083] hover:bg-gray-100 rounded-lg transition">
        12. Intellectual Property
      </a>
       <a href="#" className="block px-4 py-2 text-sm text-[#637083] hover:bg-gray-100 rounded-lg transition">
        13. Prohibited Conduct
      </a>
       <a href="#" className="block px-4 py-2 text-sm text-[#637083] hover:bg-gray-100 rounded-lg transition">
        14. Privacy and Data Protection
      </a>
    </nav>
  </section>

  {/* Main Content Area */}
  <main className="flex-1 p-6 md:p-10 max-w-4xl mx-auto">

    {/* about-remote-health */}
    <section className="mb-10">
      <h2 className="text-xl font-extrabold text-[#282C34] mb-4">1. About RemoteHealth</h2>
      <p className="text-[#282C34] mb-4">
        RemoteHealth is a telemedicine platform that connects patients in Nigeria with licensed healthcare professionals for virtual medical consultations, follow-ups, and related digital healthcare services.
      </p>
      <p className="text-[#282C34]">
        RemoteHealth does not operate a physical hospital and does not replace emergency medical services.
      </p>
    </section>

    {/* terms */}
    <section className="mb-10">
      <h2 className="text-xl font-extrabold text-[#282C34] mb-4">2. Acceptance of Terms</h2>
      <p className="text-[#282C34] mb-4">
        Welcome to RemoteHealth. These Terms of Service ("Terms") govern your access to and use of the RemoteHealth platform, including our mobile application, website, and related services (collectively, the "Platform").
      </p>
      <p className="text-[#282C34]">
        By accessing or using the Platform, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use the Platform.
      </p>
    </section>

    {/* Definitions */}
    <section className="mb-10">
      <h2 className="text-xl font-extrabold text-[#282C34] mb-4">3. Definitions</h2>
      <ul className="space-y-3 text-[#282C34] list-disc list-inside">
        <li>"<span className="font-extrabold text-[#282C34]">Patient</span>" refers to an individual user seeking healthcare services through the Platform.</li>
        <li>"<span className="font-extrabold text-[#282C34]">Healthcare Provider</span>" or "<span className="font-extrabold text-[#282C34]">Provider</span>" refers to licensed medical professionals registered on the Platform to provide telemedicine services.</li>
        <li>"<span className="font-extrabold text-[#282C34]">Consultation</span>" refers to virtual medical consultations conducted via audio or video call through the Platform.</li>
        <li>"<span className="font-extrabold text-[#282C34]">Services</span>" refers to all features and functionality provided by RemoteHealth, including but not limited to virtual consultations, appointment scheduling, e-prescriptions, medical records storage, and AI-powered symptom checking.</li>
      </ul>
    </section>

    {/* Eligibility */}
    <section className="mb-10">
      <h2 className="text-xl font-extrabold text-[#282C34] mb-4">4. Eligibility</h2>
      <h3 className="text-lg font-bold text-[#282C34] mb-2">4.1 Age Requirements</h3>
      <p className="text-[#282C34] mb-4">
        You must be at least 18 years old to create an account and use the Platform independently. Users under 18 may only use the Platform under the supervision of a parent or legal guardian who agrees to be bound by these Terms. By using the Platform, you confirm that all information you provide is accurate and truthful.
      </p>

      <h3 className="text-lg font-bold text-[#282C34] mb-2">4.2 Capacity to Contract</h3>
      <p className="text-[#282C34] mb-4">
        By using the Platform, you represent and warrant that you have the legal capacity to enter into a binding contract and are not prohibited from using the Services under Nigerian law or any other applicable jurisdiction.
      </p>

      <h3 className="text-lg font-bold text-[#282C34] mb-2">4.3 Healthcare Provider Requirements</h3>
      <p className="text-[#282C34]">
        Healthcare Providers must be licensed and registered with the Medical and Dental Council of Nigeria (MDCN) and maintain active licensure in good standing throughout their use of the Platform.
      </p>
    </section>

    {/* Account-registration-and-security */}
    <section className="mb-10" id="section-5">
      <h2 className="text-xl font-extrabold text-[#282C34] mb-4">5. Account Registration and Security</h2>

      <h3 className="text-lg font-bold text-[#282C34] mb-2">5.1 Account Creation</h3>
      <p className="text-[#282C34] mb-4">
        To access certain features of the Platform, you must create an account by providing accurate, current, and complete information. You agree to update your information promptly to maintain its accuracy.
      </p>

      <h3 className="text-lg font-bold text-[#282C34] mb-2">5.2 Account Security</h3>
      <p className="text-[#282C34] mb-2">
        You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to:
      </p>
      <ul className="list-disc list-inside space-y-2 text-[#282C34] ml-4">
        <li>Use a strong, unique password</li>
        <li>Enable multi-factor authentication if available</li>
        <li>Notify us immediately of any unauthorized access or security breach</li>
        <li>Not share your account credentials with others</li>
      </ul>

      <h3 className="text-lg font-bold text-[#282C34] mb-2 mt-4">5.3 Account Termination</h3>
      <p className="text-[#282C34]">
        We reserve the right to suspend or terminate your account at any time for violation of these Terms, fraudulent activity, or any other reason we deem appropriate, with or without notice.
      </p>
    </section>

    {/* Platform Services */}
    <section className="mb-10" id="section-6">
      <h2 className="text-xl font-extrabold text-[#282C34] mb-4">6. Platform Services</h2>
      <p className="text-[#282C34] mb-4">RemoteHealth provides the following services:</p>

      <h3 className="text-lg font-bold text-[#282C34] mb-2">6.1 Virtual Consultations</h3>
      <p className="text-[#282C34] mb-4">
        RemoteHealth provides a platform for virtual consultations between Patients and Healthcare Providers via secure audio and video calls. The quality of consultations depends on internet connectivity, which we do not control.
      </p>

      <h3 className="text-lg font-bold text-[#282C34] mb-2">6.2 AI-Powered Symptom Checker</h3>
      <p className="text-[#282C34] mb-4">
        The AI symptom checker is provided for informational and triage purposes only. It does not constitute medical advice, diagnosis, or treatment. You should always consult with a licensed Healthcare Provider for medical concerns. AI tools on the Platform are informational only and do not constitute medical diagnosis or treatment.
      </p>

      <h3 className="text-lg font-bold text-[#282C34] mb-2">6.3 E-Prescriptions</h3>
      <p className="text-[#282C34]">
        Healthcare Providers may issue electronic prescriptions through the Platform. Patients are responsible for obtaining medications from licensed pharmacies and following all prescription instructions.
      </p>

      <h2 className="text-xl font-bold text-[#282C34] mb-4">6.4 Medical Records Storage</h2>
      <p className="text-[#282C34]">
        We provide secure, cloud-based storage for your medical records. While we implement industry-standard security measures, you acknowledge that no system is completely secure and use this feature at your own risk.
      </p>
    </section>

    {/* appointment-scheduling */}
    <section className="mb-10" id="section-6-5">
      <h2 className="text-xl font-bold text-[#282C34] mb-4">6.5 Appointment Scheduling</h2>
      <p className="text-[#282C34]">
        The Platform allows you to schedule appointments with available Healthcare Providers. Appointments are subject to Provider availability and may be rescheduled or cancelled in accordance with our cancellation policy.
      </p>
    </section>

    {/* NOT AN EMERGENCY SERVICE (Red Alert Box) */}
    <section className="mb-10 bg-[#FFF0F0] p-6 rounded-lg border-l-4 border-[#FF4B41] shadow-md" id="section-7">
      <h2 className="text-xl font-extrabold text-[#282C34] mb-6">7. NOT AN EMERGENCY SERVICE</h2>
      <p className="font-semibold text-[#FF4B41] mb-4">
        REMOTEHEALTH IS NOT DESIGNED, INTENDED, OR SUITABLE FOR MEDICAL EMERGENCIES
      </p>
      <p className="text-gray-600 mb-6">
        If you are experiencing a medical emergency, call your local emergency services or go to the nearest emergency room immediately. Do not use the Platform for urgent or life-threatening conditions.
      </p>
    </section>

    {/* Medical Disclaimer (Blue Box) */}
    <section className="mb-10 bg-[#E6F2FF] p-6 rounded-lg border-blue-500 shadow-md" id="section-8">
      <h2 className="text-xl font-extrabold text-[#282C34] mb-4">8. Medical Disclaimer</h2>

      <h3 className="text-lg font-bold text-[#282C34] mb-2">8.1 No Doctor-Patient Relationship with RemoteHealth</h3>
      <p className="text-[#282C34] mb-4">
        RemoteHealth is a technology platform that facilitates connections between Patients and independent Healthcare Providers. We do not practice medicine, provide medical advice, or establish a doctor-patient relationship with users. The doctor-patient relationship exists solely between you and the Healthcare Provider you consult.
      </p>

      <h3 className="text-lg font-bold text-[#282C34] mb-2">8.2 Healthcare Provider Independence</h3>
      <p className="text-[#282C34] mb-4">
        Healthcare Providers on the Platform are independent contractors, not employees or agents of RemoteHealth. We do not control, direct, or supervise the medical services they provide. Each Provider is solely responsible for their professional conduct and medical decisions.
      </p>

      <h3 className="text-lg font-bold text-[#282C34] mb-2">8.3 No Guarantee of Outcomes</h3>
      <p className="text-[#282C34] mb-4">
        We make no representations or warranties regarding the quality, accuracy, or effectiveness of medical services provided through the Platform. Healthcare outcomes depend on many factors beyond our control.
      </p>

      <h3 className="text-lg font-bold text-[#282C34] mb-2">8.4 Limitations of Telemedicine</h3>
      <p className="text-[#282C34]">
        You acknowledge that telemedicine has inherent limitations compared to in-person medical care, including the inability to perform physical examinations or certain diagnostic tests. Some conditions may require in-person evaluation.
      </p>
    </section>

    {/* Healthcare-provider-responsibilities*/}
    <section className="mb-10" id="section-10">
      <h2 className="text-xl font-extrabold text-[#282C34] mb-4">9. Patient Responsibilities</h2>
      <p className="text-[#282C34] mb-4">
        As a Patient using the Platform, you agree to:
      </p>
      <ul className="list-disc list-inside space-y-2 text-[#282C34] ml-4 mb-10 ">
        <li>Provide accurate and complete health information</li>
        <li>Follow Healthcare Provider instructions and prescribed treatment plans</li>
        <li>Inform Providers of all current medications, allergies, and medical conditions</li>
        <li>Seek in-person care when recommended by your Provider</li>
        <li>Pay all applicable fees for Services on a timely basis</li>
        <li>Use the Platform only for legitimate healthcare purposes</li>
      </ul>

      <h2 className="text-xl font-extrabold text-[#282C34] mb-4">10. Healthcare Provider Responsibilities</h2>
      <p className="text-[#282C34] mb-4">
        Healthcare Providers using the Platform agree to:
      </p>
      <ul className="list-disc list-inside space-y-2 text-[#282C34] ml-4 mb-10">
        <li>Maintain active, valid licensure with the MDCN</li>
        <li>Comply with all applicable medical ethics and standards of care</li>
        <li>Provide accurate professional credentials and information</li>
        <li>Maintain professional liability insurance as required by law</li>
        <li>Document all consultations appropriately</li>
        <li>Only prescribe medications within the scope of practice and in compliance with Nigerian law</li>
        <li>Report adverse events or patient safety concerns as required</li>
        <li>RemoteHealth reserves the right to verify, suspend, or remove providers at its discretion.</li>
      </ul>
    </section>

    {/* Fees-and-payment  */}
    <section className="mb-10" id="section-11">
      <h2 className="text-xl font-extrabold text-[#282C34] mb-4">11. Fees and Payment</h2>

      <h3 className="text-lg font-bold text-[#282C34] mb-2">11.1 Consultation Fees</h3>
      <p className="text-[#282C34] mb-4">
        Patients agree to pay consultation fees as displayed on the Platform prior to booking appointments. Fees may vary by Provider and type of consultation.
      </p>

      <h3 className="text-lg font-bold text-[#282C34] mb-2">11.2 Subscription Plans</h3>
      <p className="text-[#282C34] mb-4">
        We may offer subscription plans that provide access to certain features or discounted consultations. Subscription terms will be clearly disclosed at the time of purchase.
      </p>

      <h3 className="text-lg font-bold text-[#282C34] mb-2">11.3 Payment Processing</h3>
      <p className="text-[#282C34] mb-4">
        Payments are processed through third-party payment processors. You agree to provide accurate payment information and authorize us to charge your payment method for applicable fees.
      </p>

      <h3 className="text-lg font-bold text-[#282C34] mb-2">11.4 Refund Policy</h3>
      <p className="text-[#282C34] mb-4">
        Consultation fees are generally non-refundable except in cases of technical failure preventing the consultation from occurring or other circumstances at our sole discretion. Requests for refunds must be submitted within 48 hours of the consultation.
      </p>

      <h3 className="text-lg font-bold text-[#282C34] mb-2">11.5 Cancellation</h3>
      <p className="text-[#282C34] mb-10">
        Patients may cancel appointments up to a [specified time] before the scheduled time for a full refund. Late cancellations or no-shows may forfeit the consultation fee.
      </p>

      <h2 className="text-xl font-extrabold text-[#282C34] mb-4">12. Intellectual Property</h2>

      <h3 className="text-lg font-bold text-[#282C34] mb-2">12.1 Platform Ownership</h3>
      <p className="text-[#282C34] mb-4">
        The Platform, including all content, features, functionality, software, designs, text, graphics, logos, and trademarks, is owned by RemoteHealth and protected by Nigerian and international intellectual property laws.
      </p>

      <h3 className="text-lg font-bold text-[#282C34] mb-2">12.2 Limited License</h3>
      <p className="text-[#282C34] mb-4">
        We grant you a limited, non-exclusive, non-transferable, revocable license to access and use the Platform for its intended purpose in accordance with these Terms.
      </p>

      <h3 className="text-lg font-bold text-[#282C34] mb-2">12.3 User Content</h3>
      <p className="text-[#282C34] mb-4">
        You retain ownership of any health information or content you submit to the Platform. By submitting content, you grant us a limited license to store, process, and display such content as necessary to provide the Services.
      </p>

      <h3 className="text-lg font-bold text-[#282C34] mb-2">12.4 Restrictions</h3>
      <p className="text-[#282C34] mb-2">
        You may not:
      </p>
      <ul className="list-disc list-inside space-y-2 text-[#282C34] ml-4 mb-10">
        <li>Copy, modify, or create derivative works of the Platform</li>
        <li>Reverse engineer, decompile, or disassemble any aspect of the Platform</li>
        <li>Use automated systems to access or extract data from the Platform</li>
        <li>Remove or alter any copyright, trademark, or proprietary notices</li>
      </ul>

      <h2 className="text-xl font-extrabold text-[#282C34] mb-4">13. Prohibited Conduct</h2>
      <p className="text-[#282C34] mb-2">
        You agree not to:
      </p>
      <ul className="list-disc list-inside space-y-2 text-[#282C34] ml-4 mb-10">
        <li>Use the Platform for any unlawful purpose</li>
        <li>Impersonate any person or entity</li>
        <li>Transmit viruses, malware, or other harmful code</li>
        <li>Attempt to gain unauthorized access to the Platform or other users' accounts</li>
        <li>Harass, threaten, or abuse other users or Healthcare Providers</li>
        <li>Share prescription medications obtained through the Platform</li>
        <li>Use the Platform to obtain controlled substances unlawfully</li>
        <li>Submit false or misleading health information</li>
        <li>Interfere with or disrupt the Platform's operation</li>
      </ul>
      
      <h2 className="text-xl font-extrabold text-[#282C34] mb-4">14. Privacy and Data Protection</h2>
      <p className="text-[#282C34]">
        Your privacy is important to us. Our collection, use, and protection of your personal and health information is governed by our Privacy Policy, which is incorporated into these Terms by reference. By using the Platform, you consent to our data practices as described in the <NavLink to="/privacy" className="text-blue-600 hover:underline">Privacy Policy</NavLink>.
      </p>

      {/* Blue Contact Card */}
      <div className="bg-[#E6F2FF] p-6 mt-8 rounded-lg shadow-sm">
        <h2 className="text-xl font-extrabold text-[#282C34] block mb-8">15. Contact</h2>
        <div className='text-center'>
        <p className="text-sm text-[#282C34] mb-4">For questions about these Terms, contact:</p>
        
        {/* Email Link Box */}
        <a href="mailto:hello@tryremotehealth.com" className="inline-flex items-center justify-center pr-2 p-4 bg-blue-100 text-[#007BFF] rounded-lg font-semibold hover:bg-blue-200 transition duration-150">
            <MdOutlineMailOutline className='text-[#007BFF]' />
            hello@tryremotehealth.com
        </a>

        <p className="text-xs text-[#637083] mt-6">We aim to respond to all inquiries within 2 business days.</p>
        </div>
      </div>

    </section>
    

  </main>
</div>
<Footer_1 />
</div>
</div>
  </>
  )
} 
export default Terms