"use client"

import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardContent, CardFooter} from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SignUpPage = () => {
    type SignUpType = {
        username: string,
        password: string,
        email: string
    }

    const [signUpInfo, setSignUpInfo] = useState<SignUpType>({
        username: "",
        password: "",
        email: ""
    })
    const router = useRouter();

    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!signUpInfo.username || !signUpInfo.password || !signUpInfo.email) {
            alert("You must enter a username, email, and password to create an account.")
        } else {
            console.log(signUpInfo);

            setSignUpInfo({
                username: "",
                password: "",
                email: ""
            })
        }


    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {id, value} = e.target;
        setSignUpInfo(prevInfo => ({
            ...prevInfo,
            [id]: value
        }))
    }

    return (
        <div className="w-full h-screen flex items-center justify-center">
            <Card className="w-1/4">
                <CardHeader className="text-3xl">
                    <h1>Sign Up</h1>
                </CardHeader>
                <CardContent>
                    <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-3">
                            <Label htmlFor="username">Username</Label>
                            <Input id="username" type="text" placeholder="clonk" value={signUpInfo.username} onChange={handleChange}/>
                        </div>
                        <div className="flex flex-col gap-3">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="example@email.com" value={signUpInfo.email} onChange={handleChange}/>
                        </div>
                        <div className="flex flex-col gap-3">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" type="password" placeholder="password" value={signUpInfo.password} onChange={handleChange}/>
                        </div>
                        <Button type="submit" className="w-full">Sign Up</Button>
                    </form>
                </CardContent>
                <CardFooter>
                    <p>Already have an account? <span onClick={() => router.push("/login")}className="text-blue-500 hover:text-blue-400 transition-all duration-150 ease-in underline underline-offset-2 cursor-pointer">Log In</span></p>
                </CardFooter>
            </Card>
        </div>
    )
}

export default SignUpPage;