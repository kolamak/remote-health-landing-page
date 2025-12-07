// i had to create this template since there was no desgin for it

export const Contact = () => {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
          Contact Us</h2>

        <p className="text-lg md:text-xl font-bold text-[#007BFF] leading-relaxed mb-12">
          Reach out to us anytime, we’re here to help and support you.</p>

        <div className="bg-gray-50 shadow-md rounded-2xl p-8 sm:p-10 md:p-12 flex flex-col 
        gap-6 hover:shadow-lg transition-shadow duration-300">

          {/* Email */}
          <div>
            <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">
              Email</p>
            <p className="text-lg md:text-xl font-bold">
              <a href="mailto:support@remotehealth.com">
                support@remotehealth.com</a></p>
          </div>

          {/* Phone number */}
          <div>
            <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">
              Phone</p>
            <p className="text-lg md:text-xl font-bold">
              +234 700 000 0000</p>
          </div>

          {/* Address */}
          <div>
            <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">
              Address</p>
            <p className="text-lg md:text-xl font-bold">
              123 Remote Health Way, Lagos, Nigeria</p>
          </div>

          {/* Working Hours */}
          <div>
            <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">
              Working Hours</p>
            <p className="text-lg md:text-xl font-bold">
              Mon–Fri: 9am – 5pm</p>
          </div>
          
        </div>

      </div>
    </section>
  )
}

export default Contact
