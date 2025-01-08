export const vendors = [
    {
      id: 1,
      name: "License Information",
      followers: 12,
      rating: 4.0,
      address: "3517 W. Gray St. Utica, Pennsylvania 57867",
      phone: "(229) 555-0109",
      email: "deanna.curtis@example.com",
      imageUrl: "/assets/img/image 839.png"
    },
    // Repeat 555 more times for total of 556 vendors
  ].concat(Array(555).fill(null).map((_, i) => ({
    id: i + 2,
    name: "License Information",
    followers: 12,
    rating: 4.0,
    address: "3517 W. Gray St. Utica, Pennsylvania 57867",
    phone: "(229) 555-0109",
    email: "deanna.curtis@example.com",
    imageUrl: "/assets/img/image 839.png"
  })))
  
  