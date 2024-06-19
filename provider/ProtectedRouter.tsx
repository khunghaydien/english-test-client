"use client";
import { userGeneralStore } from "@/stores/generalStore";
import { useUserStore } from "@/stores/userStore";
import React, { ReactNode, useEffect } from "react";

function ProtectedRouter({ children }: { children: ReactNode }) {
  const user = useUserStore((state) => state);
  const setSignIn = userGeneralStore((state) => state.setSignIn);

  useEffect(() => {
    if (!user.id) {
      setSignIn(false);
    }
  }, []);

  if (!user.id) {
    return null;
  }

  return <div>{children}</div>;
}

export default ProtectedRouter;
