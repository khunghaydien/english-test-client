"use client";
import React, { useEffect, useState } from "react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { useUserStore } from "@/stores/userStore";
import { Skeleton } from "./ui/skeleton";
import Link from "next/link";
import { Button } from "./ui/button";
import { useMutation } from "@apollo/client";
import { LOGOUT_USER } from "@/graphql/mutation/logout";
import { useRouter } from "next/navigation";

function Profile() {
  const router = useRouter();
  const [logoutUser] = useMutation(LOGOUT_USER);
  const { fullname, image, id, logout } = useUserStore((state) => state);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLogout = async () => {
    try {
      logout();
      await logoutUser();
      router.push("/sign-in");
    } catch (error) {
      console.log("something went wrong: ", error);
    }
  };
  return (
    <>
      {!mounted && <Skeleton className="w-[36px] h-[36px] rounded-full" />}
      {mounted && (
        <>
          {!id && (
            <div className="flex gap-4">
              <Button asChild variant={"outline"}>
                <Link href="/sign-in" className="w-[90px]">
                  Sign in
                </Link>
              </Button>
              <Button asChild>
                <Link href="/sign-up" className="w-[90px]">
                  Sign up
                </Link>
              </Button>
            </div>
          )}
          {id && (
            <div>
              {image && (
                <Avatar className="w-[36px] h-[36px]">
                  <AvatarImage src={image} />
                </Avatar>
              )}
              {fullname}
            </div>
          )}
        </>
      )}
    </>
  );
}

export default Profile;
