import { Card, CardAction, CardContent, CardHeader} from "./ui/card";

const Application = ({company, dateApplied, title, status}: {company: string, dateApplied: Date, title: string, status: string}) => {
    return (
        <Card className="w-full h-24 flex items-center justify-center p-2 my-0.5 text-center">
            <CardContent className="flex border border-black h-full w-full items-center justify-between">
                <div className="w-1/5 border border-black">Company: {company}</div>
                <div className="w-1/5 border border-black">Date Applied: {new Date(dateApplied).toDateString()}</div>
                <div className="w-1/5 border border-black">Job Title: {title}</div>
                <div className="w-1/5 border border-black">Application Status: {status}</div>
            </CardContent>
            
        </Card>
    )
}

export default Application;