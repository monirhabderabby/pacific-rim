import ContactForm from "./_components/ContactForm";
import ContactInfo from "./_components/ContactInfo";
import ContactMap from "./_components/ContactMap";

const Contact: React.FC = () => {
  return (
    <div className="">
      <div className="flex flex-col items-stretch md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-8 p-4  max-w-[1170px] mx-auto">
        <ContactInfo />
        <ContactForm />
      </div>
      <ContactMap />
    </div>
  );
};

export default Contact;
