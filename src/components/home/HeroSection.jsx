import HeroImage2 from "../../assets/HeroImage2.png";

function HeroSection() {
  return (
    <section className="relative py-80 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={HeroImage2}
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div> 
      </div>

      {/* Text Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-3xl text-yellow-200">
            <h1>Wellcome to MovieHub: </h1>
            <span>Unlimited movies, TV shows, and more</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
