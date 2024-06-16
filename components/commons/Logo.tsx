import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <Link
      href={"/"}
      className="font-bold text-3xl bg-gradient-to-r from-blue-400 to-violet-900 text-transparent bg-clip-text hover:cursor-pointer"
    >
      English
    </Link>
  );
}

export default Logo;
