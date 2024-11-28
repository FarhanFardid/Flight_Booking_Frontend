import Title from "../../components/Title";
import BasicInfo from "./BasicInfo";
import ContactForm from "./ContactForm";

const ContactUs = () => {
  return (
    <>
      <div className="pt-8 md:pt-16">
        <Title
          main="Contact Us"
          sub="We’re here to help! Reach out and let’s make your journey smoother"
        ></Title>
      </div>
      <BasicInfo></BasicInfo>
      <ContactForm></ContactForm>
    </>
  );
};

export default ContactUs;
