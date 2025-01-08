'use client'

import { Card, CardContent } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User } from "@/types/user"




interface ProfileCardProps {
  user: User
  onEdit?: () => void
}

export function ProfileCard({ user, onEdit }: ProfileCardProps) {
  return (
    <Card className="w-[370px] h-[248px] mx-auto shadow-none">
      <CardContent className="flex flex-col items-center gap-1 pt-6">
        <Avatar className="w-24 h-24">
          <AvatarImage src={user.avatarUrl} alt={user.name} />
          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="text-center">
          <h2 className="text-2xl font-semibold">{user.name}</h2>
          <p className="text-muted-foreground">{user.role}</p>
        </div>
        <button
          // variant="link" 
          className="text-primary-green-hover hover:text-primary-green text-[16px] font-semibold"
          onClick={onEdit}
        >
          Edit Profile
        </button>
      </CardContent>
    </Card>
  )
}

