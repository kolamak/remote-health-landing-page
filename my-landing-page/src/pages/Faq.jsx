import { FiChevronDown } from 'react-icons/fi'

export const Faq = () => {
  return (
    <main className="py-16 px-8">
      <div className="mx-auto">
        <h1 className="text-2xl md:text-3xl lg:text-[28px] font-bold text-center mb-8">Frequently Asked Questions</h1>

        <div className="bg-white rounded-lg shadow-sm divide-y divide-gray-200">
          <div className="flex items-center justify-between px-6 py-6 sm:px-8 sm:py-7 hover:bg-gray-50 cursor-pointer tabIndex={0}">
            <span className="text-[#007BFF] font-bold text-sm sm:text-base lg:text-2xl">1. What is Remote Health?</span>
            <FiChevronDown className="text-[#007BFF]" size={25} aria-hidden="true" />
          </div>

          <div className="flex items-center justify-between px-6 py-6 sm:px-8 sm:py-7 hover:bg-gray-50 cursor-pointer">
            <span className="text-[#007BFF] font-bold text-sm sm:text-base lg:text-2xl">2. Can I get prescriptions online?</span>
            <FiChevronDown className="text-[#007BFF]" size={25} aria-hidden="true" />
          </div>

          <div className="flex items-center justify-between px-6 py-6 sm:px-8 sm:py-7 hover:bg-gray-50 cursor-pointer">
            <span className="text-[#007BFF] font-bold text-sm sm:text-base lg:text-2xl">3. Is RemoteHealth available 24/7?</span>
            <FiChevronDown className="text-[#007BFF]" size={25} aria-hidden="true" />
          </div>

          <div className="flex items-center justify-between px-6 py-6 sm:px-8 sm:py-7 hover:bg-gray-50 cursor-pointer">
            <span className="text-[#007BFF] font-bold text-sm sm:text-base lg:text-2xl">4. Is my information safe?</span>
            <FiChevronDown className="text-[#007BFF]" size={25} aria-hidden="true" />
          </div>

          <div className="flex items-center justify-between px-6 py-6 sm:px-8 sm:py-7 hover:bg-gray-50 cursor-pointer">
            <span className="text-[#007BFF] font-bold text-sm sm:text-base lg:text-2xl">5. What should I do in an emergency?</span>
            <FiChevronDown className="text-[#007BFF]" size={25} aria-hidden="true" />
          </div>

          <div className="flex items-center justify-between px-6 py-6 sm:px-8 sm:py-7 hover:bg-gray-50 cursor-pointer">
            <span className="text-[#007BFF] font-bold text-sm sm:text-base lg:text-2xl">6. How can I pay for services?</span>
            <FiChevronDown className="text-[#007BFF]" size={25} aria-hidden="true" />
          </div>

          <div className="flex items-center justify-between px-6 py-6 sm:px-8 sm:py-7 hover:bg-gray-50 cursor-pointer">
            <span className="text-[#007BFF] font-bold text-sm sm:text-base lg:text-2xl">7. What devices can I use for consultations?</span>
            <FiChevronDown className="text-[#007BFF]" size={25} aria-hidden="true" />
          </div>

          <div className="flex items-center justify-between px-6 py-6 sm:px-8 sm:py-7 hover:bg-gray-50 cursor-pointer">
            <span className="text-[#007BFF] font-bold text-sm sm:text-base lg:text-2xl">8. Can I use health insurance on RemoteHealth?</span>
            <FiChevronDown className="text-[#007BFF]" size={25} aria-hidden="true" />
          </div>

          <div className="flex items-center justify-between px-6 py-6 sm:px-8 sm:py-7 hover:bg-gray-50 cursor-pointer">
            <span className="text-[#007BFF] font-bold text-sm sm:text-base lg:text-2xl">9. How much does it cost to use RemoteHealth?</span>
            <FiChevronDown className="text-[#007BFF]" size={25} aria-hidden="true" />
          </div>

          <div className="flex items-center justify-between px-6 py-6 sm:px-8 sm:py-7 hover:bg-gray-50 cursor-pointer">
            <span className="text-[#007BFF] font-bold text-sm sm:text-base lg:text-2xl">10. What if I face technical issues?</span>
            <FiChevronDown className="text-[#007BFF]" size={25} aria-hidden="true" />
          </div>

          <div className="flex items-center justify-between px-6 py-6 sm:px-8 sm:py-7 hover:bg-gray-50 cursor-pointer">
            <span className="text-[#007BFF] font-bold text-sm sm:text-base lg:text-2xl">11. Can I cancel my subscription?</span>
            <FiChevronDown className="text-[#007BFF]" size={25} aria-hidden="true" />
          </div>

          <div className="flex items-center justify-between px-6 py-6 sm:px-8 sm:py-7 hover:bg-gray-50 cursor-pointer">
            <span className="text-[#007BFF] font-bold text-sm sm:text-base lg:text-2xl">12. How do I contact support?</span>
            <FiChevronDown className="text-[#007BFF]" size={25} aria-hidden="true" />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Faq

// i can write the function to display answers when questions are clicked when the ansswers are provided