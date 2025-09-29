import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface UserAvatarProps {
  name: string;
  imageUrl: string;
  size?: "small" | "medium" | "large";
}

const UserAvatar = ({ name, imageUrl, size = "small" }: UserAvatarProps) => {
  const sizeClasses = {
    small: "h-8 w-8",
    medium: "h-10 w-10",
    large: "h-12 w-12",
  };

  return (
    <div>
      <Avatar className={sizeClasses[size]}>
        <AvatarImage src={imageUrl} alt={`${name}'s image`} />
        <AvatarFallback className="bg-yellow-500 text-sm font-bold text-yellow-900">
          {name[0]}
        </AvatarFallback>
      </Avatar>
    </div>
  );
};

export default UserAvatar;
