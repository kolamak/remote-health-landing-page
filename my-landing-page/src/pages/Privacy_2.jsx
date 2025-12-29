import Footer_1 from "../components/Footer_1"
import { NavLink } from 'react-router-dom';


export const Privacy = () => {
  return (
    <>
  <div className="min-h-screen bg-white flex flex-col lg:flex-row">

  <section className="w-full lg:w-[288px] lg:h-[500px] lg:mt-12 bg-[#EFF0F0] lg:ml-4 xl:ml-20 p-4 md:p-6 shadow-md lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto">
          {/* links */}
    <nav className="space-y-2 text-center lg:text-left" >
      <a href="#" className="block px-2 sm:px-4 py-2 text-xs sm:text-sm font-semibold bg-[#007BFF] text-white rounded-lg shadow">
        Introduction
      </a>
      <a href="#" className="block px-2 sm:px-4 py-2 text-xs sm:text-sm text-[#637083] hover:bg-gray-200 rounded-lg transition">
        {/* Information We Collect */}
      </a>
    </nav>
  </section>

  <main className="flex-1 p-4 sm:p-6 md:p-8 lg:p-10 max-w-5xl lg:mx-8 mx-auto">

      <section className="mb-8 sm:mb-12">
                 {/* third-parties */}
        <div className="mb-6 sm:mb-8">
          <h3 className="text-base sm:text-lg font-semibold text-[#484848] mb-3 sm:mb-4">2.3 Information from Third Parties</h3>
          <p className="text-sm sm:text-base text-[#484848] font-extrabold mb-3">Payment Processors:</p>
          <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-sm sm:text-base text-[#484848] ml-2 sm:ml-4">
            <li>Transaction confirmation and payment status</li>
          </ul>
        </div>
  
        <div className="mb-6 sm:mb-8">
          <p className="text-sm sm:text-base text-[#484848] font-extrabold mb-3">Pharmacy and Laboratory Partners:</p>
          <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-sm sm:text-base text-[#484848] ml-2 sm:ml-4">
            <li>Prescription fulfillment status</li>
            <li>Test results (with your consent)</li>
          </ul>
        </div>
  
        <div className="mb-6 sm:mb-8">
          <p className="text-sm sm:text-base text-[#484848] font-extrabold mb-3">Identity Verification Services:</p>
          <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-sm sm:text-base text-[#484848] ml-2 sm:ml-4">
            <li>Verification of Healthcare Provider credentials and licenses</li>
          </ul>
        </div>

        {/* sensitive-personal-info */}
        <div className="mb-6 sm:mb-8">
          <h3 className="text-base sm:text-lg font-semibold text-[#484848] mb-3 sm:mb-4">2.4 Sensitive Personal Information</h3>
          <p className="text-sm sm:text-base text-[#484848] mb-3">We collect and process sensitive health information necessary to provide telemedicine services. Under Nigerian law and NDPR, 
            we are required to obtain your explicit consent before collecting such information and to implement appropriate security measures to protect it.</p>
        </div>

        <div className="mb-6 sm:mb-8">
          <h3 className="text-base sm:text-lg font-extrabold text-[#484848] mb-3 sm:mb-4">HOW WE USE YOUR INFORMATION</h3>
          <p className="text-sm sm:text-base text-[#484848] mb-3">We use your information for the following purposes:</p>
        </div>
  
        {/* service-provision */}   
        <div className="mb-6 sm:mb-8">
          <p className="text-sm sm:text-base text-[#484848] font-extrabold mb-3">3.1 To Provide and Improve Services</p>
          <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-sm sm:text-base text-[#484848] ml-2 sm:ml-4">
            <li>Facilitate virtual consultations between Patients and Healthcare Providers</li>
            <li>Enable appointment scheduling and management</li>
            <li>Process and deliver e-prescriptions</li>
            <li>Store and manage your medical records</li>
            <li>Provide AI-powered symptom checking and triage</li>
            <li>Send appointment reminders and follow-up notifications</li>
            <li>Process payments and maintain transaction records</li>
            <li>Improve Platform functionality and user experience</li>
            <li>Develop new features and services</li>
          </ul>
        </div>
  
        {/* safety-and-quality */}
        <div className="mb-6 sm:mb-8">
          <p className="text-sm sm:text-base text-[#484848] mb-3 font-extrabold">3.2 To Ensure Safety and Quality</p>
          <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-sm sm:text-base text-[#484848] ml-2 sm:ml-4">
            <li>Verify Healthcare Provider credentials and licenses</li>
            <li>Monitor consultation quality and patient satisfaction</li>
            <li>Detect and prevent fraud, abuse, or misuse of the Platform</li>
            <li>Comply with medical and ethical standards</li>
            <li>Investigate and resolve disputes or complaints</li>
          </ul>
        </div>

        {/* communicate-with-you */}
        <div className="mb-6 sm:mb-8">
          <p className="text-sm sm:text-base text-[#484848] mb-3 font-extrabold">3.3 To Communicate with You</p>
          <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-sm sm:text-base text-[#484848] ml-2 sm:ml-4">
            <li>Respond to your inquiries and support requests</li>
            <li>Send service-related notifications and updates</li>
            <li>Provide health tips and wellness content (if you opt in)</li>
            <li>Conduct surveys and request feedback</li>
            <li>Send marketing communications (with your consent)</li>
          </ul>
        </div>

        {/* legal-and-regulatory */}
        <div className="mb-6 sm:mb-8">
          <p className="text-sm sm:text-base text-[#484848] mb-3 font-extrabold">3.4 For Legal and Regulatory Compliance</p>
          <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-sm sm:text-base text-[#484848] ml-2 sm:ml-4">
            <li>Comply with applicable laws and regulations, including NDPR and MDCN requirements</li>
            <li>Respond to legal requests and court orders</li>
            <li>Protect our rights, property, and safety, and those of our users</li>
            <li>Maintain audit trails as required by healthcare regulations</li>
          </ul>
        </div>

        {/* research-and-analytics */}
        <div className="mb-6 sm:mb-8">
          <p className="text-sm sm:text-base text-[#484848] mb-3 font-extrabold">3.5 For Research and Analytics</p>
          <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-sm sm:text-base text-[#484848] ml-2 sm:ml-4">
            <li>Analyze usage patterns and trends (in aggregated, de-identified form)</li>
            <li>Conduct research to improve healthcare delivery (with proper anonymization)s</li>
            <li>Generate statistical reports and insights</li>
          </ul>
        </div>
  
        {/* legal-basis-for-processing */}
        <div className="mb-6 sm:mb-8">
          <h3 className="text-base sm:text-lg font-extrabold text-[#484848] mb-3 sm:mb-4">LEGAL BASIS FOR PROCESSING (NDPR COMPLIANCE)</h3>
       
          <p className="text-sm sm:text-base text-[#484848] font-medium mb-8">
            Under the Nigeria Data Protection Regulation, we process your personal data based on the following legal grounds:
          </p>

          <p className="text-sm sm:text-base text-[#484848] font-medium mb-4">
            <span className="text-[#282C34] mr-1 font-extrabold">Consent:</span>
             You have given explicit consent for the processing of your personal and health information for specific purposes.
          </p>

          <p className="text-sm sm:text-base text-[#484848] font-medium mb-4">
            <span className="text-[#282C34] mr-1 font-extrabold">Contractual Necessity:</span>
            Processing is necessary to fulfill our contract with you (Terms of Service) and provide the Services you requested
          </p>

          <p className="text-sm sm:text-base text-[#484848] font-medium mb-4">
            <span className="text-[#282C34] mr-1 font-extrabold">Legal Obligation:</span>
             Processing is necessary to comply with Nigerian laws and regulations, including healthcare and data protection laws
          </p>

          <p className="text-sm sm:text-base text-[#484848] font-medium mb-4">
            <span className="text-[#282C34] mr-1 font-extrabold">Legitimate Interests:</span>
            Processing is necessary for our legitimate business interests, such as fraud prevention, network security, and improving our services, 
            provided these interests do not override your fundamental rights
          </p>

          <p className="text-sm sm:text-base text-[#484848] font-medium">
            <span className="text-[#282C34] mr-1 font-extrabold">Vital Interests:</span>
           In rare cases, processing may be necessary to protect your vital interests or those of another person in medical emergency situations
          </p>
        </div>
      </section>
      
      {/* next-page */}
      <NavLink to="/privacy" className="block text-center font-medium text-sm sm:text-base text-[#484848] mt-8 sm:mt-12 cursor-pointer">
        Back;  
      </NavLink>
  
    </main>
  </div>
    < Footer_1 />
      </>
    )
  }
  
  export default Privacy
  