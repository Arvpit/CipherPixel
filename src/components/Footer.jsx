// src/components/Footer.jsx
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6">
        {/* Branding and Navigation */}
        <div className="flex justify-between items-center border-b border-gray-700 pb-6 mb-6">
          <h2 className="text-2xl font-semibold">CipherPixel</h2>
          <nav>
            <ul className="flex gap-8 text-base">
              <li className="hover:text-blue-400 cursor-pointer">Our Story</li>
              <li className="hover:text-blue-400 cursor-pointer">Key Features</li>
              <li className="hover:text-blue-400 cursor-pointer">Reach Out</li>
            </ul>
          </nav>
        </div>

        {/* Bottom Bar with Social Icons */}
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-500">
            &copy; 2025 CipherPixel. All rights reserved.
          </p>
          <div className="flex gap-4 text-xl">
            <a href="#" className="text-blue-400 hover:text-blue-500"><FaTwitter /></a>
            <a href="#" className="text-blue-600 hover:text-blue-700"><FaFacebook /></a>
            <a href="#" className="text-blue-800 hover:text-blue-900"><FaLinkedin /></a>
            <a href="#" className="text-red-600 hover:text-red-700"><FaYoutube /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
