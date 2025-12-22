import Footer_1 from "../components/Footer_1"
import mailIcon from "../assets/emai-iconl.svg"
import contactIcon from "../assets/_call-icon.svg"


export const Contact = () => {
  return (
  <div className="min-h-screen bg-white font-sans">
  <div className="bg-[#E6F2FF] pt-12 pb-24 px-4 sm:px-8">
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-3xl lg:text-4xl sm:text-4xl font-bold text-[#000000] mb-4">
        Get in Touch
      </h1>
      <p className="text-[#282C34] font-medium max-w-2xl mx-auto">
        RemoteHealth provides support to users at all times. If you have questions, need assistance, 
        or experience issues on the platform, you can reach out through any of the channels below.
      </p>
    </div>
  </div>

  
  <main class="max-w-4xl mx-auto px-4 sm:px-8 -mt-16">
    {/*cards*/}
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
      
      {/*email */}
      <div className="bg-[#55A7FF] text-white  p-6 rounded-lg shadow-lg">
       <img src={mailIcon} alt="mail-icon" />
        <p className="text-white mb-1">Send us an email</p>
        <p className="text-white font-semibold">support@remotehealth.com</p>
         </div>

      {/* <!-- Phone Card --> */}
      <div className="bg-[#55A7FF] text-white p-6 rounded-lg shadow-lg">
        <img src={contactIcon} alt="contact-icon" />
        <p className="text-white mb-1">Call us on:</p>
        <p className="text-white font-semibold">+234 XXX XXXX</p>
      </div>
    </div>

    {/* form */}
    <div className="bg-white p-0">
      <p className="text-center text-[#282C34] mb-8">Our support channels are available 24/7 to assist users.</p>

      <form className="space-y-6">
        <div>
          <label for="full-name" className="block text-sm font-bolder text-[#282C34] mb-1">Full Name</label>
          <input type="text" id="full-name" placeholder="Full Name" className="bg-[#F5F5F5B2] mt-1 block w-full  px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"></input>
        </div>

        <div>
          <label for="email" className="block text-sm font-bolder text-[#282C34] mb-1">Email Address</label>
          <input type="email" id="email" placeholder="Email Address" className="bg-[#F5F5F5B2] mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"></input>
        </div>

        <div>
          <label for="subject" className="block text-sm font-medium text-[#282C34] mb-1">Subject</label>
          <textarea id="subject" rows="4" placeholder="Send message" className="bg-[#F5F5F5B2] mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 resize-none"></textarea>
        </div>

        <div>
          <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#007BFF] hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Send message
          </button>
        </div>
      </form>
    </div>
  </main>
  < Footer_1 />
</div>

  )
}
export default Contact
