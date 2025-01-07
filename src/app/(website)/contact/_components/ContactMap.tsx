const ContactMap: React.FC = () => {
    return (
      <div className="mt-8">
        <h1 className="text-center mb-4 text-3xl font-semibold leading-tight text-green-800 max-md:max-w-full">
          Find Us on Map
        </h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18..."
          className="w-full h-[600px] border rounded"
          loading="lazy"
          allowFullScreen
          title="Location Map"
        ></iframe>
      </div>
    );
  };
  
  export default ContactMap;
  