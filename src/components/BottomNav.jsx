'use client'; // Needed because we might use hooks like usePathname later

import Link from 'next/link';
import { FaHome, FaBookOpen, FaRocket, FaUser } from 'react-icons/fa';

const BottomNav = () => {
  // We'll add active link logic later using usePathname
  const navItems = [
    { href: '/', icon: <FaHome />, label: 'Home' },
    { href: '/courses', icon: <FaBookOpen />, label: 'Courses' },
    { href: '/dashboard', icon: <FaRocket />, label: 'Dashboard' },
    { href: '/profile', icon: <FaUser />, label: 'Account' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-[0_-2px_5px_rgba(0,0,0,0.1)] md:hidden z-50">
      <div className="container mx-auto flex justify-around items-center h-16">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex flex-col items-center justify-center text-gray-500 hover:text-blue-600 transition-colors w-full"
          >
            <span className="text-2xl">{item.icon}</span>
            <span className="text-xs mt-1">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
