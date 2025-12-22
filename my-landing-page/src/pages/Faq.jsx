import Footer_1 from "../components/Footer_1"

const Faq = () => {
  return (
    <>
  <div className="min-h-screen bg-white font-sans">

   <header className="bg-blue-600 relative overflow-hidden">
    {/* <!-- Optional: Subtle background effect using absolute positioning --> */}
    <div className="absolute inset-0 bg-blue-700 opacity-80"></div>
    <div className="absolute inset-0" style="background-image: url('data:image/svg+xml;charset=UTF-8,...'); background-size: cover;"></div>

    <div className="relative max-w-4xl mx-auto py-16 px-4 sm:py-20 md:py-24 text-center">
      <h1 className="text-2xl sm:text-3xl font-bold text-white mb-3">
        Find answers to the most commonly asked questions here
      </h1>
      
      {/* <!-- Search Bar --> */}
      <div className="mt-8">
        <input type="search" placeholder="Search FAQs..." className="w-full max-w-md px-5 py-3 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400"></input>
      </div>
    </div>
  </header>

  {/* <!-- FAQ Section (Accordion List) -->
  <!-- ============================================== --> */}
  <main className="max-w-4xl mx-auto p-4 sm:p-8">
    
    <div className="bg-white shadow-lg rounded-lg">
      
      {/* <!-- FAQ Item 1 (Open by default in this code snippet to match image) --> */}
      <div className="border-b border-gray-200">
        <button className="flex justify-between items-center w-full p-4 text-left">
          <span className="font-semibold text-gray-800">What is RemoteHealth?</span>
          {/* <!-- Blue Circle Icon Placeholder (matches open state) --> */}
          <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
        </button>
        <div className="p-4 pt-0 text-gray-600">
          <p>RemoteHealth is a telemedicine platform that connects patients in Nigeria with licensed healthcare professionals for virtual consultations.</p>
        </div>
      </div>

      {/* <!-- FAQ Item 2 (Closed state) --> */}
      <div className="border-b border-gray-200">
        <button className="flex justify-between items-center w-full p-4 text-left">
          <span className="font-semibold text-gray-800">Does RemoteHealth store my medical records (EMR)?</span>
          {/* <!-- Blue Circle Icon Placeholder (matches closed state) --> */}
          <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
        </button>
        {/* <!-- Answer content would be hidden by JS class here --> */}
      </div>

      {/* <!-- FAQ Item 3 --> */}
      <div className="border-b border-gray-200">
        <button className="flex justify-between items-center w-full p-4 text-left">
          <span className="font-semibold text-gray-800">Who can access my medical records?</span>
          <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
        </button>
      </div>

      {/* <!-- FAQ Item 4 --> */}
      <div className="border-b border-gray-200">
        <button className="flex justify-between items-center w-full p-4 text-left">
          <span className="font-semibold text-gray-800">Is my medical information secure?</span>
          <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
        </button>
      </div>

      {/* <!-- FAQ Item 5 --> */}
      <div className="border-b border-gray-200">
        <button className="flex justify-between items-center w-full p-4 text-left">
          <span className="font-semibold text-gray-800">Is RemoteHealth available 24/7?</span>
          <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
        </button>
      </div>

      {/* <!-- FAQ Item 6 --> */}
      <div className="border-b border-gray-200">
        <button className="flex justify-between items-center w-full p-4 text-left">
          <span className="font-semibold text-gray-800">Can I get prescriptions through RemoteHealth?</span>
          <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
        </button>
      </div>

      {/* <!-- FAQ Item 7 --> */}
      <div className="border-b border-gray-200">
        <button className="flex justify-between items-center w-full p-4 text-left">
          <span className="font-semibold text-gray-800">What should I do in an emergency?</span>
          <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
        </button>
      </div>

      {/* <!-- FAQ Item 8 --> */}
      <div className="border-b border-gray-200">
        <button className="flex justify-between items-center w-full p-4 text-left">
          <span className="font-semibold text-gray-800">What devices can I use?</span>
          <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
        </button>
      </div>
      
       {/* <!-- FAQ Item 9 --> */}
      <div className="border-b border-gray-200">
        <button class="flex justify-between items-center w-full p-4 text-left">
          <span class="font-semibold text-gray-800">Does RemoteHealth store my medical records (EMR)?</span>
          <div class="w-4 h-4 bg-blue-500 rounded-full"></div>
        </button>
      </div>

    </div>
  </main>
  <Footer_1 />
  </div>
</>
  );
};

export default Faq;

// i can write the function to display answers when questions are clicked when the ansswers are provided