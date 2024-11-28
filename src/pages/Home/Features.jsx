import Title from "../../components/Title";
import image1 from "../../assets/images/featuredImg/image1.jpg";
import image2 from "../../assets/images/featuredImg/image2.jpg";
import image3 from "../../assets/images/featuredImg/image3.jpg";
import image4 from "../../assets/images/featuredImg/image4.jpg";
import image5 from "../../assets/images/featuredImg/image5.jpg";
import image6 from "../../assets/images/featuredImg/image6.jpg";
import FeaturesCard from "./FeaturesCard";
const Features = () => {
  const featuresInfo = [
    {
      heading: "Easy Booking",
      details:
        '"Users can easily book flights by searching for destinations and selecting preferred flights."',
      img: image1,
    },
    {
      heading: "Flight Search",
      details:
        '"Quickly find available flights based on origin, destination, and date."',
      img: image2,
    },
    {
      heading: "User-Friendly Interface",
      details:
        '"Intuitive design for smooth navigation through flight options and bookings."',
      img: image3,
    },
    {
      heading: "Personalized Account",
      details:
        '"Registered users can view their booking history and manage personal details."',
      img: image4,
    },
    {
      heading: "Secure Login/Signup",
      details:
        '"Simple login and registration process with secure access to user accounts."',
      img: image5,
    },
    {
      heading: "Responsive Design",
      details:
        '"Optimized for seamless experience on desktops, tablets, and mobile devices."',
      img: image6,
    },
  ];
  return (
    <div className="mx-auto md:p-12">
      <div className="py-6 md:py-12">
        <Title
          main="Explore Our Top Features"
          sub="Your seamless flight booking experience starts here. Discover how QuickFly simplifies your journey with cutting-edge features designed just for you."
        ></Title>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-12 py-6">
        {featuresInfo.slice(0, 4).map((info, index) => (
          <FeaturesCard key={index} info={info}></FeaturesCard>
        ))}
        <div className="md:col-start-2 md:col-span-1">
          <FeaturesCard info={featuresInfo[4]}></FeaturesCard>
        </div>
        <div className="md:col-start-3 md:col-span-1">
          <FeaturesCard info={featuresInfo[5]}></FeaturesCard>
        </div>
      </div>
    </div>
  );
};

export default Features;
