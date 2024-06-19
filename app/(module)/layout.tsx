"use client";
import Logo from "@/components/commons/Logo";
import { NavigationMenuDemo } from "@/components/commons/MegaMenu";
import ModalLogin from "@/components/commons/ModalLogin";
import ModalRegister from "@/components/commons/ModalRegister";
import ThemeSwitcher from "@/components/commons/ThemeSwitcher";
import Profile from "@/components/profile";
import { getUser } from "@/services/auth";
import { useUserStore } from "@/stores/userStore";
import React, { ReactNode, useEffect, useState } from "react";

function layout({ children }: { children: ReactNode }) {
  const { setUser, id } = useUserStore((state) => state);
  const [mounted, setMounted] = useState(false);

  const fetchUser = async () => {
    const user = await getUser();
    const userObject = JSON.parse(user);
    setUser({
      id: userObject.id,
      fullname: userObject.fullname,
      image: userObject.imageUrl,
    });
  };

  useEffect(() => {
    setMounted(true);
    fetchUser();
  }, []);

  if (!mounted) return null;

  return (
    <div>
      <nav className="w-full flex items-center justify-between p-4">
        <Logo />
        <NavigationMenuDemo />
        <div className="flex items-center gap-6">
          <ThemeSwitcher />
          {id && <Profile />}
          {!id && (
            <>
              <ModalLogin />
              <ModalRegister />
            </>
          )}
        </div>
      </nav>
      {children}
    </div>
  );
}

export default layout;
