'use client'

import { ProfileCard } from "../_components/ProfileCard";
import { userData } from "@/data/userData";

const UserInfo = () => {
  return (
    <div>

<div className=" flex items-center justify-center  ">
      <ProfileCard
        user={userData}
        onEdit={() => {
          // Handle edit action
          console.log("Edit profile clicked")
        }}
      />
    </div>
    </div>
  )
}

export default UserInfo