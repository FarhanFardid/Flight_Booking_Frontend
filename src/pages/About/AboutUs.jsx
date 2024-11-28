import Title from "../../components/Title";

const AboutUs = () => {
  return (
    <>
      <div className="pt-8 md:pt-16">
        {" "}
        <Title
          main="About QuickFly"
          sub="Your trusted companion in seamless flight booking."
        ></Title>
      </div>

      <div className="text-center text-sm md:text-xl font-medium px-8 pt-7 pb-12 md:px-16 md:pt-16 md:pb-24">
        <article>
          <span className="text-base md:text-2xl font-bold text-sky-800">
            At QuickFly
          </span>
          , we believe that travel should be simple, stress-free, and
          affordable. Our mission is to revolutionize the flight booking
          experience by offering a user-friendly platform that connects
          travelers with the best deals and flight options worldwide.
        </article>
        <article className="py-4 md:py-8">
          With a commitment to excellence and innovation, we provide a seamless
          booking process, real-time updates, and personalized travel solutions
          tailored to your needs. Whether you're planning a quick getaway or a
          business trip, QuickFly ensures you reach your destination with ease
          and comfort.
        </article>
        <article className="py-4 md:py-4">
          Join thousands of satisfied travelers who trust QuickFly to get them
          where they need to go—quickly and efficiently.
        </article>
      </div>
    </>
  );
};

export default AboutUs;
