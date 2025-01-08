
import OrderHistory from "@/components/orderHistory/OrderHistory";
import UserInfo from "../_components/UserInfo";
import UserDetailsInfo from "../_components/UserDetailsInfo";

const Page = () => {
  return (
    <div className="min-h-[500px] w-full text-[20px]">
     
 {/* user infro card       */}
<div className="max-w-[870px] flex  items-center flex-col  md:flex-row ">
<UserInfo/>
<UserDetailsInfo/>
</div>
<div className="max-w-[870px]">
{/* order histor table  */}
<OrderHistory/>
</div>

    </div>
  );
};

export default Page;
