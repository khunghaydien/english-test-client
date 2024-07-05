"use client";
import { useRouter } from "next/navigation";
import { useUserStore } from "../stores/userStore";
import { ReactNode, useEffect } from "react";

const ProtectedRoute = ({
  children,
  allowedRoles,
}: {
  children: ReactNode;
  allowedRoles: string[];
}) => {
  const { id } = useUserStore((state) => state);
  const router = useRouter();

  useEffect(() => {
    if (!allowedRoles.includes("") && !id) {
      router.push("/sign-in");
    }
  }, [id, router, allowedRoles]);

  return <>{!allowedRoles.includes("") && !id ? null : children}</>;
};

export default ProtectedRoute;
