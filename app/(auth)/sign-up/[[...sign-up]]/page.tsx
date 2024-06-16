import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return <div className="w-full h-[100vh] flex flex-grow items-center justify-center">
    <SignUp />
  </div>;
}
