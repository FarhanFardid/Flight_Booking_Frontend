import Title from "../../components/Title";
const ContactForm = () => {
  return (
    <div className="mb-8 p-4 md:p-8">
      <div className="py-4 md:py-8">
        {" "}
        <Title
          main="Contact Form"
          sub="Get in touch with us—we’re just a message away."
        ></Title>
      </div>
      <form className="max-w-xl mx-auto space-y-4">
        <input
          className="w-full p-2 border border-gray-300 rounded"
          type="text"
          placeholder="Name"
          required
        />
        <input
          className="w-full p-2 border border-gray-300 rounded"
          type="email"
          placeholder="Email"
          required
        />
        <input
          className="w-full p-2 border border-gray-300 rounded"
          type="text"
          placeholder="Subject"
          required
        />
        <textarea
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Message"
          rows="4"
          required
        ></textarea>
        <button className="w-full p-2  bg-black text-white btn-md rounded-lg font-bold hover:bg-slate-800 hover:scale-105 h-auto py-2 px-4 md:py-3 md:px-6 text-xs md:text-base mb-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
