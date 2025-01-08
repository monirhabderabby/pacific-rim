export interface User {
  id: string
  name: string
  role: string
  avatarUrl: string
}

export interface UserProfile {
  address: {
    street: string
    city: string
    state: string
    zip: string
  }
  profession: string
  dob: string
  email: string
  phone: string
}