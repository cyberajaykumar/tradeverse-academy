import Link from 'next/link';
import Image from 'next/image';

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
      <div className="relative w-full h-48">
        <Image
          src={course.thumbnail}
          alt={course.title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{course.title}</h3>
        <p className="text-gray-600 text-sm mb-4 h-16">{course.description}</p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-2xl font-bold text-blue-600">₹{course.price}</span>
          <span className="text-sm text-gray-500">{course.duration}</span>
        </div>
        <Link href={`/courses/${course.id}`}>
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
