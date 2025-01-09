
import OrderHistory from "@/components/orderHistory/OrderHistory";
import UserInfo from "../_components/UserInfo";
import UserDetailsInfo from "../_components/UserDetailsInfo";

const Page = () => {
  return (
    <div className="max-w-[870px] flex  items-center flex-col  md:flex-row">
     
<div>
   {/* user infro card       */}
<div className="max-w-[870px] flex items-start justify-between   mb-[10px] flex-col   md:flex-row   ">
<UserInfo/>
<UserDetailsInfo/>
</div>
<div className="max-w-[870px]  ">
{/* order histor table  */}
<OrderHistory/>
</div>
</div>

    </div>
  );
};

export default Page;
