import { FaQuoteLeft } from "react-icons/fa";
import Title from "../../components/Title";

const Feedback = () => {
  return (
    <div className="container-fluid md:mt-[90px]">
      <div className="w-full  py-3 md:py-8 text-center">
        <Title
          main="What Our Clients Say"
          sub="Hear directly from our satisfied customers about their seamless experience with QuickFly."
        ></Title>
      </div>

      <div>
        <h2 className="text-center text-2xl md:text-4xl text-[#212745] py-1 md:py-3">
          <FaQuoteLeft className="mx-auto"></FaQuoteLeft>
        </h2>
        <p className="text-center tex-sm md:text-lg md:w-[785px] h-auto mx-auto py-1 md:py-3">
          {" "}
          QuickFly is incredibly user-friendly, and the selection of flights is
          fantastic. My bookings are always smooth, and the customer support
          team is courteous and professional. The real-time flight tracking
          feature is a game-changer, giving me peace of mind about my journey. I
          especially appreciate the frequent deals and discounts they offer.
          QuickFly has made my travel planning so much easier, and I highly
          recommend it to anyone looking for a reliable and efficient flight
          booking service.
        </p>
      </div>
      <div className="text-center py-3 ">
        <p className="md:text-lg text-md font-bold">Mitchell Marsh</p>
        <p className="text-xs">CEO, Skyline Agency</p>
      </div>
    </div>
  );
};

export default Feedback;
