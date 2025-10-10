import Link from 'next/link';
import { FaLinkedin, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-10 pb-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 text-center md:text-left">
        {/* About Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">TradeVerse Academy</h3>
          <p className="text-gray-400">
            Empowering Traders. Building Financial Freedom. Join us to master the financial markets.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
            <li><Link href="/courses" className="text-gray-400 hover:text-white">Courses</Link></li>
            <li><Link href="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
            <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-lg font-bold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li><Link href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
            <li><Link href="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-bold mb-4">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" className="text-gray-400 hover:text-white text-2xl"><FaTwitter /></a>
            <a href="#" className="text-gray-400 hover:text-white text-2xl"><FaLinkedin /></a>
            <a href="#" className="text-gray-400 hover:text-white text-2xl"><FaYoutube /></a>
            <a href="#" className="text-gray-400 hover:text-white text-2xl"><FaInstagram /></a>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 border-t border-gray-700 mt-8 pt-4">
        © {new Date().getFullYear()} TradeVerse Academy. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
