import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import CoursesPreview from '@/components/homepage/CoursesPreview'; // <-- Naya import
import FeaturesSection from '@/components/homepage/FeaturesSection'; // <-- Naya import

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-700 to-indigo-900 text-white min-h-[calc(100vh-4rem)] flex items-center justify-center">
        <div className="container mx-auto text-center px-4 z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            Welcome to TradeVerse Academy
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Empowering Traders. Building Financial Freedom.
          </p>
          <Link href="/courses">
            <button className="bg-white text-blue-700 font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-200">
              Explore Courses <FaArrowRight className="inline ml-2" />
            </button>
          </Link>
        </div>
        <div className="absolute inset-0 bg-black opacity-20"></div>
      </section>

      {/* Naye Sections Yahan Add Kiye Hain */}
      <CoursesPreview />
      <FeaturesSection />
    </>
  );
}
