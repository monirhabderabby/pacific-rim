import { PageHeader } from "@/components/shared/sections/breadcrumb-section";
import ContactForm from "./_components/ContactForm";
import ContactInfo from "./_components/ContactInfo";
import ContactMap from "./_components/ContactMap";

const Contact: React.FC = () => {
  return (
    <div className="">
      <div className="flex flex-col items-stretch md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-8 p-4 max-w-[1170px] mx-auto">
        <div className="order-2 md:order-none max-h-full" >
          <ContactInfo/>
        </div>
        <div className="order-1 md:order-none max-h-full" >
          <ContactForm/>
        </div>
      </div>
      <ContactMap />
    </div>
  );
};

export default Contact;
