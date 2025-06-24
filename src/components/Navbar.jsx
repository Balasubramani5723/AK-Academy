import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiUser, FiShoppingCart } from "react-icons/fi";
import logoBG from '../assets/logo.jpg'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container flex justify-between items-center py-4">
        <Link
          to="/"
          className="flex items-center space-x-2 text-2xl font-bold text-primary"
        >
          <img
            src={logoBG}
            alt="AK Academy Logo"
            className="h-11 w-11 object-contain"
          />
          <span>
            <span className="text-indigo-700">AK</span> Academy
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8 font-bold">
          <Link to="/" className="hover:text-indigo-700 transition-colors">
            Home
          </Link>
          <Link to="/courses" className="hover:text-indigo-700 transition-colors">
            Courses
          </Link>
          <Link to="/about" className="hover:text-indigo-700 transition-colors">
            About
          </Link>
          <Link to="/pricing" className="hover:text-indigo-700 transition-colors">
            Pricing
          </Link>
          <Link to="/blog" className="hover:text-indigo-700 transition-colors">
            Blog
          </Link>
          <div className="flex items-center space-x-4">
            <Link
              to="/auth"
              className="flex items-center space-x-1 hover:hover:text-indigo-700"
            >
              <FiUser />
              <span>Login</span>
            </Link>
            <Link
              to="/courses"
              className="btn btn-primary flex items-center space-x-1 hover:text-indigo-700"
            >
              <FiShoppingCart />
              <span>Enroll Now</span>
            </Link>
          </div>
        </nav>

        <button
          className="md:hidden text-dark focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white py-4 px-6 shadow-lg ">
          <nav className="flex flex-col space-y-4">
            <Link
              to="/"
              className="hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/courses"
              className="hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Courses
            </Link>
            <Link
              to="/about"
              className="hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/pricing"
              className="hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Pricing
            </Link>
            <Link
              to="/blog"
              className="hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Blog
            </Link>
            <div className="pt-4 border-t border-gray-200 flex flex-col space-y-4">
              <Link to="/auth" className="btn btn-outline" onClick={toggleMenu}>
                Login
              </Link>
              <Link
                to="/courses"
                className="btn btn-primary"
                onClick={toggleMenu}
              >
                Enroll Now
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
