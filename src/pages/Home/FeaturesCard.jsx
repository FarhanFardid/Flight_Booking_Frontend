const FeaturesCard = ({ info }) => {
  const { heading, details, img } = info;
  return (
    <div className="card bg-white md:w-96 shadow-2xl rounded-md flex flex-col h-full">
      <figure className="p-2 md:p-4">
        <img
          src={img}
          alt="images"
          className="rounded-lg object-cover h-48 w-full"
        />
      </figure>
      <div className="card-body items-center text-center flex-grow">
        <h2 className="card-title text-lg md:text-2xl font-semibold text-blue-700">
          {heading}
        </h2>
        <p className="text-black font-medium py-2 px-1 md:py-4 md:px-2 text-xs md:text-base">
          {details}
        </p>
      </div>
    </div>
  );
};

export default FeaturesCard;
