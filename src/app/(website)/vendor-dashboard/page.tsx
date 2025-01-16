import AnalyticsChart from "./_components/analytics-chart";
import OrderRangeChart from "./_components/order-range-chart";
import PaymentVolumeChart from "./_components/payment-volume-chart";

const Page = () => {
  return (
    <div className="w-full  bg-[#eaf0ea] ">
      <div className="  w-full px-5 mx-auto grid grid-cols-6 gap-8 my-[30px] ">
        <PaymentVolumeChart />
        <AnalyticsChart />
      </div>

      <div className="w-full px-5  mx-auto mb-[30px]">
        <OrderRangeChart />
      </div>
    </div>
  );
};

export default Page;
