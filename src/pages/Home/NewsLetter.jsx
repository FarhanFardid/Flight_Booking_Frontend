import Title from "../../components/Title";

const NewsLetter = () => {
  return (
    <>
      <div className="pt-8 md:pt-24">
        <Title
          main="Stay Updated with QuickFly"
          sub="Subscribe to our newsletter for the latest travel deals, tips, and updates."
        ></Title>
      </div>{" "}
      <div className="flex flex-col md:flex-row justify-between items-center p-2 md:p-6  rounded-md shadow-md  bg-cover bg-no-repeat bg-center w-full h-auto md:h-[302px] py-5 md:mt-[50px] bg-gradient-to-r from-purple-900 via-indigo-600 to-slate-500">
        <div className="flex flex-col mb-4 md:mb-0 md:mr-4 text-white">
          <h2 className="text-2xl md:text-4xl font-bold mb-2 text-center md:text-left">
            Subscribe Our Newsletter
          </h2>
          <p className="md:text-base text-xs">
            Discover amazing career opportunities at QuickFly—share your details
            and take the first step toward an exciting journey with us.
          </p>
        </div>

        <div className="flex items-center md:w-[480px] justify-center gap-2">
          <input
            type="text"
            className="p-2 border border-gray-300 rounded-lg  w-[250px] h-[30px] md:w-[430px] md:h-[52px] text-xs md:text-base"
            placeholder="Enter your email address"
          />
          <button
            type="button"
            className="bg-blue-800 hover:bg-black text-white font-bold  text-xs  px-3 md:px-5  py-1.5 md:py-4 rounded-md "
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
