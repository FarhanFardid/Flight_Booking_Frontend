import Title from "../../components/Title";

const Map = () => {
  return (
    <div className="text-center mb-3">
      <div className="py-6 md:py-12">
        <Title
          main="Find Us Here"
          sub="Explore our location and plan your visit with ease."
        ></Title>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.6905408524147!2d-0.1277589!3d51.5073509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b33af05c04f%3A0x378b31b65d440a3!2s221-B%2C%20Street%2C%20London%2C%20UK!5e0!3m2!1sen!2sus!4v1620223630787!5m2!1sen!2sus"
        width="600"
        height="450"
        allowFullScreen=""
        loading="lazy"
        className="w-full h-80 pt-3"
      ></iframe>
    </div>
  );
};

export default Map;
