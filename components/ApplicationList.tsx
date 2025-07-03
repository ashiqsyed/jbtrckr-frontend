import Application from "./Application";
import { ApplicationType } from "@/app/applications/page";

interface ApplicationListProps {
    applications: ApplicationType[];
    onDelete: (id: string) => void
}

const ApplicationList = ({applications, onDelete}: ApplicationListProps) => {
    return (
        <div className="flex flex-col w-full">
            {applications.map((app: any) => (
                <Application 
                    key={app.id}
                    company={app.company}
                    title={app.title}
                    status={app.status}
                    dateApplied={app.dateApplied}
                    id={app.id}
                    onDelete={onDelete}
                    
                />
            ))}
        </div>
    )
}

export default ApplicationList;