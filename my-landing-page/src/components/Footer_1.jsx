import healthLogo from '../assets/health-Icon.svg'
import { NavLink } from 'react-router-dom';
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

         <li>
            <NavLink to="/products" className="hover:text-[#FFFFFF] transition duration-500 font-medium">
                  Patient App
                </NavLink>
            </li>
          <li>
            <NavLink to="/products" className="hover:text-[#FFFFFF] transition duration-500 font-medium">
                  Doctor Portal
                </NavLink>
            </li>
          <li>
            <NavLink to="/products" className="hover:text-[#FFFFFF] transition duration-500 font-medium">
                E-Prescription
                </NavLink>
            </li>
          <li>
            <NavLink to="/products" className="hover:text-[#FFFFFF] transition duration-500 font-medium">
               Analytics (Coming Soon)
                </NavLink>
            </li>
        </ul>
      </div>
           

      {/* col-3-company */}
      <div>
        <h4 className="font-semibold mb-4 text-[#FFFFFF]">Company</h4>
        <ul className="space-y-3 text-sm font-medium text-[#FFFFFFB2]">
           <li>
          <NavLink to="/about" className="hover:text-[#FFFFFF] transition duration-500 font-medium">
                  About Us
              </NavLink> 
                </li>   
          <li>
            <NavLink to="/" className="hover:text-[#FFFFFF] transition duration-500 font-medium">
                  Careers
                </NavLink>
            </li>
          <li>
            <NavLink to="/" className="hover:text-[#FFFFFF] transition duration-500 font-medium">
                  Blog
                </NavLink>
            </li>
          <li>
            <NavLink to="/contacts" className="hover:text-[#FFFFFF] transition duration-500 font-medium">
                  Contact
                </NavLink>
            </li>
        </ul>
      </div>

       {/*col-4-legal */}
      <div>
        <h4 className="font-semibold mb-4 text-[#FFFFFF]">Legal</h4>
        <ul className="space-y-3 text-sm font-medium text-[#FFFFFFB2]">

           <li>
            <NavLink to="/" className="hover:text-[#FFFFFF] transition duration-500 font-medium">
                  Terms of Service
                </NavLink>
            </li>
          <li>
            <NavLink to="/" className="hover:text-[#FFFFFF] transition duration-500 font-medium">
                  Privacy Policy
                </NavLink>
            </li>
          <li>
            <NavLink to="/contacts" className="hover:text-[#FFFFFF] transition duration-500 font-medium">
                 Cookie Policy
                </NavLink>
            </li>
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