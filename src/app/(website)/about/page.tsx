import AboutSection from "@/components/shared/sections/about-section";
import Heading from "./-component/headig";
import List_item from "./-component/list_item";

const Page = () => {
  return (
    <section>
      <div className="container section">
        <AboutSection image="https://utfs.io/f/HkyicnKv4pLkLqVIHJ6QMS5ptdV7G0eysFamPcTWv2Z6o91B" />
        <Heading heading="What We Offer" />
        <p className="text-base text-[#444444] font-normal leading-[19.2px] mt-3">
          Pacific Rim Fusion offers a suite of tailored auction services
          designed to meet the unique needs of local cannabis enterprises:
        </p>
        {/* ======list=========== */}
        <ul className="ml-[25px] ">
          <List_item
            title="Our auction platform allows local sellers to showcase their products to a broad audience, ensuring that they receive fair market value through competitive bidding."
            spanTitle="Auctions:"
          />
           <List_item
            title="This innovative approach empowers buyers to specify what they are willing to pay for products, providing local sellers the opportunity to adjust and compete effectively in real-time."
            spanTitle="Reverse Auctions:"
          />
            <List_item
            title="For immediate sales needs, our Buy Now option allows for instant transactions at fixed prices, ideal for quick inventory turnover and immediate cash flow."
            spanTitle="Buy Now:"
          />
        </ul>
        <p className="text-base text-[#444444]  font-normal leading-[19.2px] mt-3 mb-5">
          These tools are designed not only to manage surplus inventory
          efficiently but also to help local businesses enhance their market
          presence against international competitors.
        </p>
        {/* ========list2===== */}
        <Heading heading="Empowering Local Businesses" />
        <ul className="ml-[25px]">
        <List_item
            title=" We provide local businesses with the tools to compete on equal footing with foreign operators, broadening their market reach and increasing their sales opportunities."
            spanTitle="Competitive Access:"
          />
           <List_item
            title="  Our platform ensures that all participants have valid Cannabis Business licenses and that those licenses are in good standing with the respective agencies or authorities. In this way, transactions comply with local and international laws, giving local businesses a secure and reliable environment to operate within."
            spanTitle="Regulatory Compliance:"
          />
            <List_item
            title=" By participating in our marketplace, local farms and businesses gain significant exposure, attracting buyers who are interested in supporting and sourcing from local producers."
            spanTitle="Enhanced Visibility:"
          />
            <List_item
            title="Strategic Networking: We facilitate connections within the cannabis industry, allowing local businesses to forge partnerships, learn from peers, and collaborate on initiatives that enhance their competitive stance."
            spanTitle="Regulatory Compliance:"
          />
        </ul>
        <div className="mt-5">
        <Heading heading="Our Commitment" />
        <p className="text-base text-[#444444] font-normal leading-[19.2px] mt-3">Pacific Rim Fusion is dedicated to fostering a marketplace that supports fair competition and the growth of local businesses. We adhere to the highest standards of integrity, transparency, and compliance, ensuring a safe and effective environment for all users.</p>
        </div>
        <div className="mt-5">
        <Heading heading="Join Us" />
        <p className="text-base text-[#444444] font-normal leading-[19.2px] mt-3">Join Pacific Rim Fusion today to tap into a network that supports local empowerment and market growth. Whether you are looking to sell surplus inventory or expand your buying options, our platform is designed to help your business thrive amidst global competition.</p>
        <p className="text-base text-[#444444] font-normal leading-[19.2px] mt-3">Contact us to learn more or sign up for an account and start leveraging our platform to boost your business’s potential. For inquiries, partnerships, or additional information about how Pacific Rim Fusion can help your local business, please visit our Contact Page or reach out through our support channel.</p>
        <p className="text-base text-[#444444] font-normal leading-[19.2px] mt-3">Together, we can build a more equitable and prosperous cannabis industry.</p>
        </div>
      </div>
    </section>
  );
};

export default Page;
