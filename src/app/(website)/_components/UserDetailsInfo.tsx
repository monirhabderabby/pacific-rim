import UserDetailsCard from "./UserDetailsCard"

const sampleUser = {
    address: {
      street: "4517 Washington Ave",
      city: "Manchester",
      state: "Kentucky",
      zip: "39495"
    },
    profession: "Project manager",
    dob: "6/19/14",
    email: "georgia.young@example.com",
    phone: "(+33)7 75 55 65 33"
  }

const UserDetailsInfo = () => {
  return (
    <div>

<div className="   flex items-start justify-center">
      <UserDetailsCard user={sampleUser} />
    </div>
    </div>
  )
}

export default UserDetailsInfo