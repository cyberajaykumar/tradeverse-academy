import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          {/* Aapko /public folder me logo.png rakhna hoga */}
          <Image src="/logo.png" alt="TradeVerse Logo" width={40} height={40} />
          <span className="text-xl font-bold text-gray-800">TradeVerse</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">Home</Link>
          <Link href="/courses" className="text-gray-600 hover:text-blue-600 transition-colors">Courses</Link>
          <Link href="/dashboard" className="text-gray-600 hover:text-blue-600 transition-colors">Dashboard</Link>
          <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</Link>
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-4">
          <Link href="/login">
            <button className="hidden sm:block text-gray-600 hover:text-blue-600 transition-colors">
              Login
            </button>
          </Link>
          <Link href="/signup">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
