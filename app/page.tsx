"use client"

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();


  return (
    <div className="flex items-center justify-center text-4xl border border-black min-h-screen flex-col">
      JBTRCKR
      <div>A platform to keep track of your job applications</div>
      <div className="flex">
        <Button onClick={() => router.push("/login")}>Log in</Button>
        <Button onClick={() => router.push("/sign-up")}>Sign Up</Button>
      </div>
    </div>
  );
}
