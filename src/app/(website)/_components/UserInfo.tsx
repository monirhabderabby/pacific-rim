"use client";

import { userData } from "@/data/userData";
import { useRouter } from "next/navigation";
import { ProfileCard } from "../_components/ProfileCard";

const UserInfo = () => {
  const router = useRouter();
  return (
    <div>
      <div className=" flex items-center justify-center  ">
        <ProfileCard
          user={userData}
          onEdit={() => {
            // Handle edit action
            router.push("/account/settings");
          }}
        />
      </div>
    </div>
  );
};

export default UserInfo;
