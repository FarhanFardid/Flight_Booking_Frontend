import logo from "../assets/images/logo/logo1.jpeg";
const Footer = () => {
  return (
    <>
      <footer className="text-white bg-[#000000]">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="grid grid-cols-12 items-center mx-auto py-5 md:py-16 gap-2">
            <div className="col-span-12 md:col-span-4 gap-2">
              <div className="grid md:grid-cols-12  items-center justify-center">
                <div className="md:col-span-12 flex justify-center items-center py-4">
                  <img
                    src={logo}
                    className="h-8 md:h-16 mr-4 rounded-2xl"
                    alt="Logo"
                  />
                  <h2 className="text-lg md:text-3xl font-semibold">
                    {" "}
                    QuickFly{" "}
                    <span className="text-xs md:text-sm align-baseline font-light">
                      Book a Flight
                    </span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-8 grid grid-cols-2  ps-24 py-2  gap-4 md:grid-cols-4">
              <div>
                <h2 className="mb-3 md:mb-6 text-sm  font-bold  uppercase">
                  Quick Links
                </h2>
                <ul className=" font-normal text-[#AAA7B1]">
                  <li className="mb-3 md:mb-6">
                    <a href="#" className=" hover:underline">
                      Features
                    </a>
                  </li>
                  <li className="mb-3 md:mb-6">
                    <a href="#" className="hover:underline">
                      Offers
                    </a>
                  </li>
                  <li className="mb-3 md:mb-6">
                    <a href="#" className="hover:underline">
                      Review
                    </a>
                  </li>
                  <li className="mb-3 md:mb-6">
                    <a href="#" className="hover:underline">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-bold  uppercase">
                  Get to Know Us
                </h2>
                <ul className=" font-normal text-[#AAA7B1]">
                  <li className="mb-3 md:mb-6">
                    <a href="#" className="hover:underline">
                      Gift Cards
                    </a>
                  </li>
                  <li className="mb-3 md:mb-6">
                    <a href="#" className="hover:underline">
                      Jet Stories
                    </a>
                  </li>
                  <li className="mb-3 md:mb-6">
                    <a href="#" className="hover:underline">
                      LinkedIn
                    </a>
                  </li>
                  <li className="mb-3 md:mb-6">
                    <a href="#" className="hover:underline">
                      Glassdoor
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-bold  uppercase ">News</h2>
                <ul className=" font-normal text-[#AAA7B1]">
                  <li className="mb-3 md:mb-6">
                    <a href="#" className="hover:underline">
                      Blog
                    </a>
                  </li>
                  <li className="mb-3 md:mb-6">
                    <a href="#" className="hover:underline">
                      FAQ
                    </a>
                  </li>
                  <li className="mb-3 md:mb-6">
                    <a href="#" className="hover:underline">
                      Media
                    </a>
                  </li>
                  <li className="mb-3 md:mb-6">
                    <a href="#" className="hover:underline">
                      Press
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-bold  uppercase ">Contact</h2>
                <ul className="font-normal text-[#AAA7B1]">
                  <li className="mb-3 md:mb-6">
                    <a href="#" className="hover:underline">
                      WhatsApp
                    </a>
                  </li>
                  <li className="mb-3 md:mb-6">
                    <a href="#" className="hover:underline">
                      Support 24
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="px-2 py-5 md:px-4 md:py-12 text-center md:text-left bg-black text-white md:flex md:items-center md:justify-between">
            <span className="text-sm font-bold">
              © 2024 <a href="">QuickFly™</a>. All Rights Reserved.
            </span>
            <div className="flex mt-3 md:mt-4 justify-center  space-x-5 rtl:space-x-reverse">
              <a href="#" className="text-white">
                Privacy & Policy
              </a>

              <a href="#" className="text-white">
                Terms & Conditions
              </a>
              <a href="#" className="text-white">
                Help & Support
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
