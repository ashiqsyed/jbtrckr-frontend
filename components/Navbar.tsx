"use client"

import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const Navbar = () => {
    const router = useRouter();

    return (
        <nav className="w-full h-16 flex justify-around items-center bg-[#F7F7F7]">
            <div className="w-1/4 flex items-center justify-center text-center text-3xl h-full">jbtrckr</div>
            <div className="w-1/6 flex items-center justify-around text-xl h-full ">
                <Button onClick={() => router.push("/login")}>Log In</Button>
                <Button onClick={() => router.push("/sign-up")}>Sign Up</Button>
            </div>
        </nav>
    )
}

export default Navbar;