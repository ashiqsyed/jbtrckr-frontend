"use client"
import { useParams, useRouter} from "next/navigation";
import {useState, useEffect} from 'react'
import { ApplicationType } from "../../page";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";


import axios from 'axios'
const EditApplication = () => {
    const params = useParams();
    const router = useRouter();
    const [currentApplication, setCurrentApplication] = useState<ApplicationType>({id: "", company: "", title: "", status: "", dateApplied: ""})

    useEffect(() => {
        if (params.id) {
            axios.get(`http://localhost:8080/api/job-applications/${params.id}`)
            .then(res => setCurrentApplication(res.data))
            .catch(err => console.log(`error retrieving application with id ${params.id}`))
        }
    }, [])    


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {id, value} = e.target;
        setCurrentApplication(prevApp => ({
            ...prevApp,
            [id]: value
        }))
    };

    const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        console.log(currentApplication)
        try {
            const res = await axios.put(`http://localhost:8080/api/job-applications/${params.id}`, currentApplication, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            console.log("response: ", res)
            router.push("/applications")
            alert("Job Application successfully updated")
        } catch (err) {
            console.log("Error updating application", err)
            alert("There was an error updating the application")
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
                            <Input id="company" type="text" placeholder="e.g. Amazon"  onChange={handleChange} value={currentApplication.company}/>
                        </div>
                        <div className="flex flex-col gap-3">
                            <Label htmlFor="title">Job Title/Position:</Label>
                            <Input id="title" type="text" placeholder="e.g. Project Manager"  onChange={handleChange} value={currentApplication.title}/>
                        </div>
                        <div className="flex flex-col gap-3">
                            <Label htmlFor="dateApplied">Date Applied:</Label>
                            <Input id="dateApplied" type="date" onChange={handleChange} value={currentApplication.dateApplied}/>
                        </div>
                        <div className="flex flex-col gap-3">                            
                            <Select value={currentApplication.status} onValueChange={(value => {
                                setCurrentApplication(prev => ({
                                    ...prev,
                                    status: value
                                }))
                            })}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Status..."/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="In Progress">In Progress</SelectItem>
                                    <SelectItem value="Interviewing">Interviewing</SelectItem>
                                    <SelectItem value="Offer">Offer</SelectItem>
                                    <SelectItem value="Rejected">Rejected</SelectItem>
                                    <SelectItem value="Withdrawn">Withdrawn</SelectItem>
                                </SelectContent>
                            </Select>

                        </div>
                        <Button className="w-full" type="submit">Update Application</Button>
                    </form>
                </CardContent>                
            </Card>
        </div>

    )
    
}

export default EditApplication;