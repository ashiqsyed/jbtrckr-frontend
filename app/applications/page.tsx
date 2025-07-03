"use client"

import ApplicationList from "@/components/ApplicationList";
import { useState, useEffect, use} from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import axios from 'axios'

export interface ApplicationType {
    id: string,
    company: string,
    title: string,
    status: string,
    dateApplied: string
}
    



const ApplicationsPage = () => {
    const [data, setData] = useState<ApplicationType[]>([]);
    const router = useRouter();
    useEffect(() => {        
        axios.get("http://localhost:8080/api/job-applications")
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }, [])

    const handleDelete = async (id: string) => {
        try {
            await axios.delete(`http://localhost:8080/api/job-applications/${id}`)

            setData((prev) => prev.filter((app) => app.id !== id))
            
            
        } catch (err) {
            console.log("Error deleting the application.");
        }
        

    }



    return (
        <div className="flex min-h-screen h-screen justify-center p-2 m-2">
            <div className="w-1/2 h-full ">
                <h1 className="text-4xl w-full">Applications</h1>
                <Button className="my-2" onClick={() => router.push("/applications/new")}>Add Application</Button>
                <ApplicationList applications={data} onDelete={handleDelete}/>
                <Button className="my-2" onClick={() => router.push("/applications/new")}>Add Application</Button>
            </div>
        </div>
    )
}

export default ApplicationsPage;