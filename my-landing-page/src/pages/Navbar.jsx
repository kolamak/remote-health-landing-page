import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLink = ({ isActive }) =>
    isActive ? 'text-[#007BFF] font-bold' : 'text-[#484848] hover:text-[#007BFF] font-bold'

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          <div className="flex items-center space-x-2">
            <NavLink to="/home"> <img src="./Logo.svg" alt="remote health logo" /> </NavLink>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex text-[#484848] text-[20px] font-bold items-center space-x-8">
            <NavLink to="/home" className={navLink}>
              Home
            </NavLink>
            <NavLink to="/services" className={navLink}>
              Services
            </NavLink>
            <NavLink to="/products" className={navLink}>
              Products
            </NavLink>
            <NavLink to="/about" className={navLink}>
              About
            </NavLink>
            <NavLink to="/contacts" className={navLink}>
              Contacts
            </NavLink>
          </div>

          {/* Desktop-join-us-Button */}
          <NavLink to="/home" className="hidden md:block bg-[#007BFF] text-[20px] text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-600 transition">
            Join Us
          </NavLink>

          {/* Mobile-menu-button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-[#484848] text-2xl"
          >
            {isOpen ? <MdClose /> : <GiHamburgerMenu />}
          </button>
        </div>

        {/* Mobile-Menu */}
        {isOpen && (
          <div className="md:hidden bg-blue-50 border-t-2 border-[#007BFF] py-6 px-6 min-h-screen">
            <div className="flex flex-col space-y-6">
              <NavLink 
                to="/" 
                className="text-[#484848] text-lg font-extrabold hover:text-[#007BFF] transition duration-500"
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
              <NavLink 
                to="/services" 
                className="text-[#484848] text-lg font-bold hover:text-[#007BFF] transition duration-500"
                onClick={() => setIsOpen(false)}
              >
                Services
              </NavLink>
              <NavLink 
                to="/products" 
                className="text-[#484848] text-lg font-bold hover:text-[#007BFF] transition duration-500"
                onClick={() => setIsOpen(false)}
              >
                Products
              </NavLink>
              <NavLink 
                to="/about" 
                className="text-[#484848] text-lg font-bold hover:text-[#007BFF] transition duration-500"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </NavLink>
              <NavLink 
                to="/contacts" 
                className="text-[#484848] text-lg font-bold hover:text-[#007BFF] transition duration-500"
                onClick={() => setIsOpen(false)}
              >
                Contacts
              </NavLink>
              <NavLink 
                to="/home" 
               className="text-[#484848] text-lg font-bold hover:text-[#007BFF] transition duration-500"
                onClick={() => setIsOpen(false)}
              >
                Join Us
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
