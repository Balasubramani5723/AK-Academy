import { Link } from 'react-router-dom'
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark text-black py-7">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-indigo-700">AK <span className='text-black'>Academy</span></h3>
            <p className="mb-4">
              Empowering individuals with cutting-edge skills for the digital
              age. Our mission is to make quality education accessible to
              everyone.
            </p>
            <div className="flex space-x-4 text-indigo-800">
              <a href="#" className="hover:text-primary transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-indigo-800">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/courses"
                  className="hover:text-primary transition-colors"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="hover:text-primary transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-indigo-800">Contact Us</h4>
            <address className="not-italic">
              <p className="mb-2">123 Education Street</p>
              <p className="mb-2">Tech City, TC 10001</p>
              <p className="mb-2">Email: info@akacademy.com</p>
              <p>Phone: (123) 456-7890</p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>
            &copy; {currentYear} AK Academy. All rights reserved. |{' '}
            <Link to="/privacy" className="hover:text-primary">
              Privacy Policy
            </Link>{' '}
            |{' '}
            <Link to="/terms" className="hover:text-primary">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}