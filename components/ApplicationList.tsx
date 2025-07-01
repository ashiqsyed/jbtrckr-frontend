import Application from "./Application";

const ApplicationList = ({applications}: any) => {
    return (
        <div className="flex flex-col w-full">
            {applications.map((app: any) => (
                <Application 
                    key={app.id}
                    company={app.company}
                    title={app.title}
                    status={app.status}
                    dateApplied={app.dateApplied}
                />
            ))}
        </div>
    )
}

export default ApplicationList;