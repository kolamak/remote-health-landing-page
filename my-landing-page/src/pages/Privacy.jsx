import Footer_1 from "../components/Footer_1"

export const Products = () => {
  return (
    <>
  <div class="min-h-screen bg-white font-sans flex flex-col md:flex-row">

  {/* <!-- ============================================== -->
  <!-- Sidebar Navigation (Responsive) -->
  <!-- ============================================== --> */}
  <aside class="md:w-64 bg-gray-100 p-4 md:p-6 shadow-md md:h-screen md:sticky md:top-0">
    <nav class="space-y-2">
      {/* <!-- Active Link (Matches blue background in image) --> */}
      <a href="#" class="block px-4 py-2 text-sm font-semibold bg-blue-500 text-white rounded-lg shadow">
        Introduction
      </a>
      {/* <!-- Inactive Links --> */}
      <a href="#" class="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-200 rounded-lg transition">
        Information We Collect
      </a>
      <a href="#" class="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-200 rounded-lg transition">
        Our Use of Cookies
      </a>
       <a href="#" class="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-200 rounded-lg transition">
        Legal Basis for Processing
      </a>
      <a href="#" class="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-200 rounded-lg transition">
        Disclosure of Information
      </a>
      <a href="#" class="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-200 rounded-lg transition">
        User Data Rights
      </a>
      <a href="#" class="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-200 rounded-lg transition">
        Changes to this Privacy Policy
      </a>
      <a href="#" class="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-200 rounded-lg transition">
        Contact Us
      </a>
    </nav>
  </aside>


  {/* <!-- ============================================== -->
  <!-- Main Content Area -->
  <!-- ============================================== --> */}
  <main class="flex-1 p-6 md:p-10 max-w-4xl mx-auto">
    
    {/* <!-- Header Section (Introduction) --> */}
    <section class="mb-12">
      <h1 class="text-xl font-bold text-gray-800 mb-4">INTRODUCTION</h1>
      <p class="text-gray-600 mb-4">
        Welcome to RemoteHealth. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website, mobile application, and other services (collectively, the "Services"). By using the Services, you consent to the data practices described in this policy.
      </p>
      <p class="text-gray-600 mb-4">
        We are committed to protecting your privacy and complying with all applicable data protection laws. This Privacy Policy describes your choices and rights regarding your information, and explains how to contact us. This Privacy Policy is effective as of [Current Date].
      </p>
      {/* <!-- Highlighted Yellow Text --> */}
      <p class="text-orange-600 font-semibold bg-orange-50 p-3 rounded-lg border-l-4 border-orange-400">
        Our use of your information is solely to provide the best virtual care experience. We do not sell or rent your personal information to third parties.
      </p>
    </section>


      {/* <!-- ============================================== -->
    <!-- Section 2: Information We Collect -->
    <!-- ============================================== --> */}
    <section class="mb-12">
      <h2 class="text-xl font-bold text-gray-800 mb-6">INFORMATION WE COLLECT</h2>
      
      {/* <!-- Sub-section: 2.1 Information You Provide Directly --> */}
      <div class="mb-8">
        <h3 class="text-lg font-semibold text-gray-700 mb-4">2.1 Information You Provide Directly</h3>
        <p class="text-gray-600 mb-3 font-medium">Account Registration Information:</p>
        <ul class="list-disc list-inside space-y-2 text-gray-600 ml-4">
          <li>Full name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Date of birth</li>
          <li>Gender</li>
          <li>Residence address, state of origin, LGA</li>
        </ul>
      </div>


      {/* <!-- Health Information Sub-section --> */}
      <div class="mb-8">
        <p class="text-gray-600 mb-3 font-medium">Health Information:</p>
        <ul class="list-disc list-inside space-y-2 text-gray-600 ml-4">
          <li>Medical history</li>
          <li>Current symptoms and conditions</li>
          <li>Medications and allergies</li>
          <li>Test and lab results</li>
          <li>Physician's notes and medical advice</li>
          <li>Information about physical and mental health status</li>
          <li>Past diagnoses and treatment information, including medical imagery</li>
          <li>Biometric data (e.g., height, weight, blood pressure, temperature)</li>
          <li>Health insurance details</li>
        </ul>
      </div>

      {/* <!-- Financial Information Sub-section --> */}
      <div class="mb-8">
        <p class="text-gray-600 mb-3 font-medium">Financial Information:</p>
        <ul class="list-disc list-inside space-y-2 text-gray-600 ml-4">
          <li>Payment information (processed by third-party payment processors)</li>
          <li>Billing address</li>
          <li>Transaction history</li>
        </ul>
      </div>

      {/* <!-- Communications Sub-section --> */}
      <div class="mb-8">
        <p class="text-gray-600 mb-3 font-medium">Communications Information:</p>
        <ul class="list-disc list-inside space-y-2 text-gray-600 ml-4">
          <li>Content of communications with health professionals</li>
          <li>Support inquiries and feedback submitted by user</li>
          <li>In-platform communication records</li>
        </ul>
      </div>

      {/* <!-- Hardware/Facility Info Sub-section --> */}
      <div class="mb-8">
        <p class="text-gray-600 mb-3 font-medium">Hardware/Facility Information (For Providers):</p>
        <ul class="list-disc list-inside space-y-2 text-gray-600 ml-4">
          <li>Hardware serial number information</li>
          <li>Facility address and contact information</li>
          <li>Specialization and area of expertise</li>
          <li>License and certification information (NMC, MDCN, etc.)</li>
          <li>Availability and consultation schedule</li>
        </ul>
      </div>

      {/* <!-- Sub-section: 2.2 Information Collected Automatically --> */}
      <div class="mb-8">
        <h3 class="text-lg font-semibold text-gray-700 mb-4">2.2 Information Collected Automatically</h3>
      </div>
      
      {/* <!-- Usage Information Sub-section --> */}
      <div class="mb-8">
        <p class="text-gray-600 mb-3 font-medium">Usage Information:</p>
        <ul class="list-disc list-inside space-y-2 text-gray-600 ml-4">
          <li>Pages and features used on our platform</li>
          <li>Time spent on various sections</li>
          <li>Consultation duration and frequency</li>
          <li>Clicks, scrolls, and mouse movements</li>
          <li>Referral source (e.g., search engine, another website)</li>
        </ul>
      </div>

      {/* <!-- Device Information Sub-section --> */}
      <div class="mb-8">
        <p class="text-gray-600 mb-3 font-medium">Device Information:</p>
        <ul class="list-disc list-inside space-y-2 text-gray-600 ml-4">
          <li>Operating system and version (e.g., iOS 17, Android 14, Windows 11)</li>
          <li>Browser type and version</li>
          <li>Device type (e.g., iPhone 15, Samsung S24)</li>
          <li>Screen resolution and device settings</li>
        </ul>
      </div>

      {/* <!-- Location Information Sub-section --> */}
      <div class="mb-8">
        <p class="text-gray-600 mb-3 font-medium">Location Information:</p>
        <ul class="list-disc list-inside space-y-2 text-gray-600 ml-4">
          <li>Approximate location (based on IP address) for service availability checks.</li>
          <li>Precise location data (if user permits app access to GPS for emergency services).</li>
        </ul>
      </div>
      
      {/* <!-- Cookies & Tracking Sub-section --> */}
      <div class="mb-8">
        <p class="text-gray-600 mb-3 font-medium">Cookies and Tracking Technologies:</p>
        <p class="text-gray-600">
          We use cookies, web beacons, and other tracking technologies to enhance user experience, analyze platform usage, manage authentication sessions, and for promotional and marketing activities. You can manage your cookie preferences through your browser settings.
        </p>
      </div>
    </section>
    
    {/* <!-- Footer/Page Number --> */}
    <div class="text-center text-gray-400 mt-12">
      Page 3
    </div>

  </main>
  < Footer_1 />
</div>
    {/* <div className="w-full bg-white px-6 md:px-12 lg:px-20 py-16"> */}
      <div className="pl-20 mt-10">
        <h1 className="font-bold text-[28px] md:text-[32px] text-black">
          Privacy Policy
        </h1>
      </div>

      <div className="mt-16 flex flex-col lg:flex-row gap-12 lg:gap-20 justify-between">
        
        <div className="flex flex-col gap-10 lg:w-[55%]">
          <p className="font-bold text-[20px] md:text-[28px] mt-4 text-[#000000] max-w-3xl leading-[42px]">
          At Remote Health, your privacy is our priority.
        </p>

          {/* MEDICAL DATA */}
          <div className="flex gap-4">
            <div className="w-[28px] h-[28px] flex items-center justify-center">
              <div className="w-[12px] h-[12px] bg-[#007BFF] rounded-full"></div>
            </div>

            <p className="font-medium text-[22px] md:text-[28px] leading-[42px] text-black">
              All personal and medical data is encrypted and securely stored.
            </p>
          </div>

          {/* DATA SECURITY */}
          <div className="flex gap-4">
            <div className="w-[28px] h-[28px] flex items-center justify-center">
              <div className="w-[12px] h-[12px] bg-[#007BFF] rounded-full"></div>
            </div>

            <p className="font-medium text-[22px] md:text-[28px] leading-[42px] text-black">
              We do not share your data with third parties without explicit consent, except as required by law.
            </p>
          </div>

          {/* DATA USAGE */}
          <div className="flex gap-4">
            <div className="w-[28px] h-[28px] flex items-center justify-center">
              <div className="w-[12px] h-[12px] bg-[#007BFF] rounded-full"></div>
            </div>

            <p className="font-medium text-[22px] md:text-[28px] leading-[42px] text-black">
              Data usage complies with NDPR and HIPAA standards.
            </p>
          </div>

          {/* USER RIGHTS */}
          <div className="flex gap-4">
            <div className="w-[28px] h-[28px] flex items-center justify-center">
              <div className="w-[12px] h-[12px] bg-[#007BFF] rounded-full"></div>
            </div>

            <p className="font-medium text-[22px] md:text-[28px] leading-[42px] text-black">
              You have the right to:
              <ul className="list-disc list-inside mt-2">
                <li>Access your personal and health data.</li>
                <li>Correct innacurate information.</li>
                <li>Request deletion of your records.</li>
              </ul>
            </p>
          </div>

          <div className='flex gap-4'>
            <div className="w-[28px] h-[28px] flex items-center justify-center">
              <div className="w-[12px] h-[12px] bg-[#007BFF] rounded-full"></div>
            </div>

            <p className="font-medium text-[22px] md:text-[28px] leading-[42px] text-black">
              We implement strong cybersecurity measures to protect against unauthorized access or breaches.</p>
          </div>
        </div>

        {/* IMAGE */}
        <div className="lg:w-[45%] flex justify-center">
          <img 
            src="./images/frame-1321318985.svg" 
            alt="Frame" 
            className="w-full max-w-[450px] lg:max-w-[500px]"
          />
        </div>
      </div>
    {/* </div> */}
    </>
  )
}

export default Products
