import Link from 'next/link';

// Yeh abhi dummy data hai. Baad mein yeh database se aayega.
const featuredCourses = [
  { id: 1, title: 'Stock Market Mastery', description: 'Learn A-Z of stock trading from basics to advanced.' },
  { id: 2, title: 'Crypto Trading for Beginners', description: 'Understand blockchain and start your crypto journey.' },
  { id: 3, title: 'Forex Trading Strategies', description: 'Master the art of currency trading with proven strategies.' },
];

const CourseCard = ({ title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
    <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <Link href="/courses" className="text-blue-600 font-semibold hover:underline">
      Learn More &rarr;
    </Link>
  </div>
);

const CoursesPreview = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Explore Our Top Courses</h2>
        <p className="text-gray-600 mb-10">Start your journey towards financial freedom with our expert-led courses.</p>
        <div className="grid md:grid-cols-3 gap-8">
          {featuredCourses.map(course => (
            <CourseCard key={course.id} title={course.title} description={course.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesPreview;
