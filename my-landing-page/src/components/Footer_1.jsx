import healthLogo from '../assets/health-Icon.svg'
const Footer_1 = () => {
  return (
<div>
    <footer class="bg-[#282C34] text-[#FFFFFF] mt-12">
  <div className="max-w-7xl mx-auto py-10 px-4 sm:px-8">

    <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-8">

      {/*col-1: logo-&-tagline*/}
      <div className="flex flex-col">
        <div className="flex items-center mb-3 mt-6">
          <img className="h-8 w-8 mr-2" src={healthLogo} alt="Health Logo" />
          <span className="text-2xl lg:text-[16px] font-bold text-[#007BFF]">HEALTH</span>
        </div>
        <p className="text-sm font-medium text-[#FFFFFFB2] max-w-xs">
          Nigeria's trusted telemedicine platform connecting patients with licensed healthcare providers.
        </p>
      </div>

        {/* col-2-products*/}
      <div>
        <h4 className="font-semibold mb-4 text-[#FFFFFF]">Products</h4>
        <ul className="space-y-3 text-sm font-medium text-[#FFFFFFB2]">
          <li><a href="#" className="hover:text-white transition">Patient App</a></li>
          <li><a href="#" className="hover:text-white transition">Doctor Portal</a></li>
          <li><a href="#" className="hover:text-white transition">E-Prescription</a></li>
          <li><a href="#" className="hover:text-white transition">Analytics (Coming Soon)</a></li>
        </ul>
      </div>

      {/* col-3-company */}
      <div>
        <h4 className="font-semibold mb-4 text-[#FFFFFF]">Company</h4>
        <ul className="space-y-3 text-sm font-medium text-[#FFFFFFB2]">
          <li><a href="#" className="hover:text-white transition">About Us</a></li>
          <li><a href="#" className="hover:text-white transition">Careers</a></li>
          <li><a href="#" className="hover:text-white transition">Blog</a></li>
          <li><a href="#" className="hover:text-white transition">Contact</a></li>
        </ul>
      </div>

       {/*col-4-legal */}
      <div>
        <h4 className="font-semibold mb-4 text-[#FFFFFF]">Legal</h4>
        <ul className="space-y-3 text-sm font-medium text-[#FFFFFFB2]">
          <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
          <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
          <li><a href="#" className="hover:text-white transition">Cookie Policy</a></li>
        </ul>
      </div>
    </div>

    {/* hr */}
    <div className="border-t border-gray-700 my-8"></div>

    {/* copyright-&-email */}
    <div className="flex flex-col md:flex-row justify-between items-center text-xs font-medium text-[#FFFFFFB2] gap-4">
      <p>&copy; 2025 RemotelHealth. All rights reserved</p>
      <p>hello@tryremotehealth.com</p>
    </div>

  </div>
</footer>

    </div>
  )
}

export default Footer_1