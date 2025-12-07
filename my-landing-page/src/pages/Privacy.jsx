export const Products = () => {
  return (
    <>
    <div className="w-full bg-white px-6 md:px-12 lg:px-20 py-16">
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
            src="./public/images/frame-1321318985.svg" 
            alt="Frame" 
            className="w-full max-w-[450px] lg:max-w-[500px]"
          />
        </div>
      </div>
    </div>
    </>
  )
}

export default Products
