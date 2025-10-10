import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer'; // <-- Import Footer
import BottomNav from '@/components/BottomNav'; // <-- Import BottomNav

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'TradeVerse Academy - Learn to Trade',
  description: 'Empowering Traders. Building Financial Freedom.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        <Navbar />
        {/* Add padding-bottom for the BottomNav on mobile */}
        <main className="min-h-screen pt-16 pb-20 md:pb-0"> 
          {children}
        </main>
        <Footer />
        <BottomNav /> {/* This will only be visible on mobile */}
      </body>
    </html>
  );
}

