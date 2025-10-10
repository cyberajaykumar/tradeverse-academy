import CourseCard from '@/components/CourseCard';

// Yeh abhi dummy data hai. Asli data hum baad mein database se layenge.
const allCourses = [
  { id: 1, title: 'Stock Market Mastery', description: 'Learn A-Z of stock trading from basics to advanced technical analysis.', thumbnail: 'https://picsum.photos/seed/stock/400/300', price: 4999, duration: '8 Weeks' },
  { id: 2, title: 'Crypto Trading for Beginners', description: 'Understand blockchain, NFTs, and start your crypto investing journey safely.', thumbnail: 'https://picsum.photos/seed/crypto/400/300', price: 2999, duration: '4 Weeks' },
  { id: 3, title: 'Forex Trading Strategies', description: 'Master the art of currency trading with proven strategies for profit.', thumbnail: 'https://picsum.photos/seed/forex/400/300', price: 3999, duration: '6 Weeks' },
  { id: 4, title: 'Advanced Technical Analysis', description: 'Deep dive into charts, patterns, and indicators to predict market moves.', thumbnail: 'https://picsum.photos/seed/tech/400/300', price: 5999, duration: '10 Weeks' },
  { id: 5, title: 'Futures & Options Trading', description: 'Learn complex derivatives trading to maximize your gains and hedge risks.', thumbnail: 'https://picsum.photos/seed/options/400/300', price: 6999, duration: '12 Weeks' },
  { id: 6, title: 'Commodity Market Explained', description: 'Trade in gold, silver, oil and other commodities with confidence.', thumbnail: 'https://picsum.photos/seed/commodity/400/300', price: 3499, duration: '5 Weeks' },
];

export default function CoursesPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900">All Courses</h1>
          <p className="text-lg text-gray-600 mt-2">Find the perfect course to kickstart your trading career.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}
