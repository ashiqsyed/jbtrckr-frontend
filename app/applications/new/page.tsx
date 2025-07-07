"use client"

import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import axios from 'axios'
import { useRouter } from "next/navigation";

const AddApplication = () => {

    type applicationInfo = {
        company: string,
        title: string,
        dateApplied: string,
    }

    const router = useRouter();

    const [application, setApplication] = useState<applicationInfo>({
        company: "",
        title: "",
        dateApplied: ""
        
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {id, value} = e.target;
        setApplication(prevApp => ({
            ...prevApp,
            [id]: value
        }))
    };

    const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log(application);
        
        const jobApplication = {
            ...application,
            status: "In Progress"
        }
        setApplication({company: "", title: "", dateApplied: ""})
        console.log(jobApplication)
        
        try {
            const res = await axios.post("http://localhost:8080/api/job-applications", jobApplication, {
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            })
            console.log("Response: ", res)
            router.push("/applications")
            alert("Job Application Posted")
        } catch (error) {
            console.log("Error posting application", error)
            alert("ERROR POSTING APPLICATION")
        }
        

    }

    return (
        <div className="w-full h-screen flex items-center justify-center">
            <Card className="w-1/4">
                <CardHeader className="text-3xl">
                    <h1>Add a Job Application...</h1>
                </CardHeader>
                <CardContent>
                    <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-3">
                            <Label htmlFor="company">Company:</Label>
                            <Input id="company" type="text" placeholder="e.g. Amazon"  onChange={handleChange} value={application.company}/>
                        </div>
                        <div className="flex flex-col gap-3">
                            <Label htmlFor="title">Job Title/Position:</Label>
                            <Input id="title" type="text" placeholder="e.g. Project Manager"  onChange={handleChange} value={application.title}/>
                        </div>
                        <div className="flex flex-col gap-3">
                            <Label htmlFor="dateApplied">Date Applied:</Label>
                            <Input id="dateApplied" type="date" onChange={handleChange} value={application.dateApplied}/>
                        </div>
                        <Button className="w-full" type="submit">Add Application</Button>
                    </form>
                </CardContent>                
            </Card>
        </div>
        
    )
}

export default AddApplication;