import { PageHeader } from "@/components/shared/sections/breadcrumb-section";
import ContactForm from "./_components/ContactForm";
import ContactInfo from "./_components/ContactInfo";
import ContactMap from "./_components/ContactMap";

const Contact: React.FC = () => {
  return (
    <div>
      <PageHeader
        title="Frequently Asked Questions"
        items={[
          {
            label: "Home",
            href: "/",
          },
          {
            label: "Contact Us",
            href: "",
          },
        ]}
      />
      <div className="flex flex-col items-stretch md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-8   container section">
        <ContactInfo />
        <ContactForm />
      </div>
      <ContactMap />
    </div>
  );
};

export default Contact;
