"use client";

import { useRouter } from "next/navigation";
import React from "react";

import { LogOut } from "lucide-react";

import NavItems from "./nav-items";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import UserAvatar from "./user-avatar";

const UserDropDown = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    router.push("/sign-in");
  };

  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    imageUrl: "https://github.com/shadcn.png",
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex cursor-pointer items-center gap-3 bg-transparent text-gray-400 outline-none hover:scale-110 hover:bg-transparent hover:text-yellow-500"
        >
          <UserAvatar name={user.name} imageUrl={user.imageUrl} />
          <div className="hidden flex-col items-start outline-none md:flex">
            <span className="text-base font-medium text-gray-400">
              {user.name}
            </span>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="text-gray-400">
        <DropdownMenuLabel>
          <div className="relative flex items-center gap-3 py-2">
            <UserAvatar
              name={user.name}
              imageUrl={user.imageUrl}
              size="medium"
            />
            <div className="flex flex-col items-start outline-none md:flex">
              <span className="text-base font-medium text-gray-400">
                {user.name}
              </span>
              <span className="text-sm font-normal text-gray-500">
                {user.email}
              </span>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-gray-600" />
        <DropdownMenuItem
          onClick={handleSignOut}
          className="text-md font-medium text-gray-100 transition-colors hover:bg-transparent hover:text-yellow-500 focus:bg-transparent focus:text-yellow-500"
        >
          <LogOut className="mr-2 hidden h-4 w-4 sm:block" />
          Sign Out
        </DropdownMenuItem>
        <DropdownMenuSeparator className="hidden bg-gray-600 sm:block" />
        <nav className="sm:hidden">
          <NavItems />
        </nav>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropDown;
