"use client"

import { Card, CardHeader, CardContent, CardFooter} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from 'axios';

const LoginPage = () => {
    type LoginType = {
        email: string,
        password: string
    }
    
    const [loginInfo, setLoginInfo] = useState<LoginType>({
        email: "",
        password: ""
    })
    const router = useRouter();



    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {id, value} = e.target;
        setLoginInfo(prefInfo => ({
            ...prefInfo,
            [id]: value
        }))
    };

    const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!loginInfo.email || !loginInfo.password) {
            alert("You must enter a username and a password.")
        } else {
            console.log(loginInfo);
            try {
                const res = await axios.post("http://localhost:8080/api/auth/login", loginInfo);
                const token = res.data.token;
                const username = res.data.username;
                console.log(res);
                localStorage.setItem("token", token);
                localStorage.setItem("username", username);
                router.push("/applications");
                setLoginInfo({email: "", password: ""})
                alert("Successfully logged in");
            } catch (error) {
                console.log("Error logging in");
                alert("An error occurred logging in.");
            }
            
        }
        
    }


    return (
        <div className="flex items-center justify-center w-full h-screen">
            
            <Card className="w-1/4">
                <CardHeader className="text-3xl">
                    <h1>Log In</h1>
                </CardHeader>
                <CardContent>
                    <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-3 w-full">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="example@email.com" onChange={handleChange} value={loginInfo.email}/>
                        </div>
                        <div className="flex flex-col gap-3 w-full">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" type="password" placeholder="password" onChange={handleChange} value={loginInfo.password}/>
                        </div>
                        
                        <Button type="submit" className="w-full">Log in</Button>
                        
                    </form>
                </CardContent>
                <CardFooter className="flex items-center justify-center text-center">
                    <p>Don't have an account? <span onClick={() => router.push("/sign-up")} className="underline underline-offset-2 text-blue-500 hover:text-blue-400 transition-all duration-150 ease-in cursor-pointer">Create one</span></p>    
                </CardFooter>            
            </Card>
        </div>
    )
}

export default LoginPage;