import { FaUserTie, FaVideo, FaComments } from 'react-icons/fa';

const Feature = ({ icon, title, text }) => (
  <div className="text-center p-4">
    <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{text}</p>
  </div>
);

const FeaturesSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">Why TradeVerse Academy?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Feature icon={<FaUserTie />} title="Expert Instructors" text="Learn from industry professionals with years of real-world trading experience." />
          <Feature icon={<FaVideo />} title="Quality Video Lectures" text="Access high-quality, easy-to-understand video content anytime, anywhere." />
          <Feature icon={<FaComments />} title="Community Support" text="Join our community of traders, ask questions, and grow together." />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
