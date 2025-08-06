import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat py-24 min-h-[95vh] flex flex-col justify-center items-center w-full"
      style={{ backgroundImage: "url('/landingpage_image1.jpg')" }}
    >
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-6">
          Reveal Hidden Secrets in Every Image
        </h1>
        <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
          Experience the power of image steganography — embed your messages securely and seamlessly into visuals.
        </p>
        <Link to="/embed">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg transition duration-300 ease-in-out">
            Begin Encoding
          </button>
        </Link>
      </div>
    </section>
  );
}

export default HeroSection;
