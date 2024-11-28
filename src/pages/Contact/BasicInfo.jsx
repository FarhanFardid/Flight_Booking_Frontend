const BasicInfo = () => {
  return (
    <>
      <div className="flex justify-evenly mb-8 pt-5 md:pt-16  p-2 md:p-8 items-center">
        <div className="text-center bg-slate-200 p-2 md:p-5 rounded-lg">
          <h2 className="text-lg md:text-2xl font-semibold py-2 md:py-3 text-blue-700">
            Our Address
          </h2>
          <div className="text-sm md:text-base font-medium text-black">
            <p>QuickFly</p>
            <p>221-B, Fly Street</p>
            <p>London,UK.</p>
          </div>
        </div>
        <div className="text-center bg-slate-200 p-2 md:p-5 rounded-lg">
          <h2 className="text-lg md:text-2xl font-semibold py-2 md:py-3 text-blue-700">
            Phone
          </h2>
          <p className="text-sm md:text-base font-medium text-black">
            Call us at: 123 456-7890
          </p>
        </div>
        <div className="text-center bg-slate-200 p-2 md:p-5  rounded-lg">
          <h2 className="text-lg md:text-2xl font-semibold py-2 md:py-3 text-blue-700">
            Email
          </h2>
          <div className="text-sm md:text-base font-medium  text-black">
            <p>For Queries: info@quickfly.com</p>
            <p>For Support: support24@quickfly.com</p>
          </div>
        </div>
      </div>

      <div className="text-center mb-8 bg-slate-200 p-4 md:p-7 rounded-lg">
        <h2 className="text-lg md:text-2xl font-semibold py-2 md:py-3 text-blue-700">
          Customer Support Hours
        </h2>
        <div className="text-sm md:text-base font-medium text-black">
          <p>Saturday to Friday: 24 Hours</p>
          <p>24/7 Support Team</p>
        </div>
      </div>
    </>
  );
};

export default BasicInfo;
