import img1 from "../../assets/images/planeImg/booking-flight.jpg";
const Banner = () => {
  return (
    <div className="container-fluid hero h-[478px] p-5 md:p-16 top-[20px] md:top-[221px] ">
      <div className="hero-content flex flex-col md:flex-row-reverse items-center justify-center">
        <img
          src={img1}
          className="w-[570px] h-[478px] rounded-xl shadow-2xl flex-1 bg-[#F2EBDA] pt-5"
        />
        <div className="flex-1">
          <h1 className="text-2xl md:text-5xl mt-3 md:mt-0 ms-4 md:ms-0 font-bold w-full h-[40px] md:w-[585px] md:h-[130px] ">
            Your Favorite Flight Booking Partner
          </h1>
          <p className="text-sm  md:text-lg md:w-[528px] md:h-auto font-normal pb-2 md:pb-4 mx-auto md:mx-0">
            Travel made simple. Why wait when you can fly? Your journey
            companion. From booking to boarding, we’re with you every step of
            the way.
          </p>

          <div className="flex md: flex-row w-[464px] h-[64px] items-center justify-center">
            <button
              type="button"
              className="text-white bg-black 
          w-[120px] h-[45px] md:w-[130px] md:h-[52px] hover:bg-slate-800  font-medium rounded-3xl text-xs md:text-sm px-5 py-2.5 text-center me-2 mb-2 "
            >
              Book A Flight Now
            </button>
          </div>
          <div className="flex flex-row justify-center md:justify-normal "></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
