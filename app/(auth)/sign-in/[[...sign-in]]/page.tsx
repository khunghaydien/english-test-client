import { SignIn } from "@clerk/nextjs";

export default function Page() {
    return <div className="w-full h-[100vh] flex flex-grow items-center justify-center">
        <SignIn />
    </div>;
}
