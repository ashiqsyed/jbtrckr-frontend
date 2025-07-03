import { Card, CardContent} from "./ui/card";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const Application = ({company, dateApplied, title, status, id, onDelete}: {company: string, dateApplied: string, title: string, status: string, id: string, onDelete: any}) => {
    const router = useRouter();
    
// () => console.log(`view application to ${company} applied on ${dateApplied.split("T")[0]} for the  ${title} position`)
    return (
        <Card className="w-full h-32 flex items-center justify-center p-2 my-1">
            <CardContent className="flex h-full w-full  p-0">
                <div className="w-5/6 flex h-full  items-center justify-around">
                    <div className="w-1/5  h-full flex items-center justify-center text-center text-xl">{company}</div>
                    <div className="w-1/6  h-full flex items-center justify-center text-center flex-col">
                        <div>Applied on</div>
                        <div>{dateApplied.split("T")[0]}</div>
                    </div>
                    <div className="w-1/6  h-full flex items-center justify-center text-center">Job Title: {title}</div>
                    <div className="w-1/6  h-full flex items-center justify-center text-center">Status: {status}</div>
                </div>
                <div className="w-1/6 h-full border border-black flex items-center justify-center flex-col">
                    <Button className="mt-2 mb-1 " variant="outline"  onClick={() => router.push(`/applications/edit/${id}`)}>View</Button>
                    <Button className="mt-1 mb-2" variant="destructive" onClick={() => onDelete(id)}>Delete</Button>
                </div>
            </CardContent>
            
        </Card>
    )
}

export default Application;