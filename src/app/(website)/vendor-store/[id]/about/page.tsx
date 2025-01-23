import ListItem from "@/app/(website)/about/_component/list_item";
import StoreHeading from "./_components/storeHeading";
import StoreText from "./_components/storeText";
import SubHeading from "./_components/subheading";

const AboutMyPage = () => {
  return (
    <div className="w-[870px] border-[1px] border-[#C5C5C5] rounded-[12px]  ">
      <div className="py-5 pl-5 border-b-[1px]  border-[#C5C5C5] ">
        <StoreHeading heading="About My Store" />
      </div>
      <div className="px-5 mt-5 pb-5">
        <StoreText storetext="Welcome to Pacific Rim Fusion, the leading B2B online auction marketplace dedicated to empowering local cannabis farms and businesses in markets often dominated by larger operators. Operating in Federally legal jurisdictions including Thailand, Germany, and Canada, we specialize in facilitating the sale of surplus cannabis and cannabis-related products through a secure and dynamic platform." />
        <SubHeading subheading="What We Offer" />
        <p className="text-base text-[#444444] font-normal leading-[19.2px] mt-3">
          Pacific Rim Fusion offers a suite of tailored auction services
          designed to meet the unique needs of local cannabis enterprises:
        </p>
        {/* ===list-item-1 */}
        <ul className="ml-[25px] mb-2 ">
          <ListItem
            spanTitle="Auctions:"
            title="Our auction platform allows local sellers to showcase their products to a broad audience, ensuring that they receive fair market value through competitive bidding."
          />
          <ListItem
            spanTitle="Buy Now:"
            title="For immediate sales needs, our Buy Now option allows for instant transactions at fixed prices, ideal for quick inventory turnover and immediate cash flow."
          />
        </ul>
        <StoreText storetext="These tools are designed not only to manage surplus inventory efficiently but also to help local businesses enhance their market presence against international competitors." />
        <SubHeading subheading="Empowering Local Businesses" />
        {/* ===list-item-2 */}
        <ul className="ml-[25px] ">
          <ListItem
            spanTitle="Competitive Access:"
            title="We provide local businesses with the tools to compete on equal footing with foreign operators, broadening their market reach and increasing their sales opportunities."
          />
          <ListItem
            spanTitle="Regulatory Compliance:"
            title=" Our platform ensures that all participants have valid Cannabis Business licenses and that those licenses are in good standing with the respective agencies or authorities. In this way, transactions comply with local and international laws, giving local businesses a secure and reliable environment to operate within."
          />
          <ListItem
            spanTitle="Enhanced Visibility:"
            title=" By participating in our marketplace, local farms and businesses gain significant exposure, attracting buyers who are interested in supporting and sourcing from local producers."
          />
          <ListItem
            spanTitle="Strategic Networking:"
            title="Strategic Networking: We facilitate connections within the cannabis industry, allowing local businesses to forge partnerships, learn from peers, and collaborate on initiatives that enhance their competitive stance."
          />
        </ul>
        <SubHeading subheading="Our Commitment" />
        <div className="mt-3">
          <StoreText storetext="Pacific Rim Fusion is dedicated to fostering a marketplace that supports fair competition and the growth of local businesses. We adhere to the highest standards of integrity, transparency, and compliance, ensuring a safe and effective environment for all users." />
        </div>
      </div>
    </div>
  );
};

export default AboutMyPage;
