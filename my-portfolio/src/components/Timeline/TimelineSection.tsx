import { Timeline } from './Timeline';


const timelineEvents = [
    {
        title: "Software Developer Intern",
        description: "Initial brainstorming, project setup and planning.",
        date: "July 2025",
    },
    {
        title: "Bachelor of Science",
        description: "Undergraduate from American International Iniversity - Bangladesh",
        date: "February 2025",
    },
    {
        title: "Development",
        description: "Building the core features using Next.js & Shadcn.",
        date: "March 2025",
    },
    {
        title: "Launch",
        description: "Deployed to production with CI/CD pipeline.",
        date: "April 2025",
    },
];

export default function TimelineSection() {
    return (
        <section className="py-12 w-full flex justify-center">
            <div className="container flex flex-col p-20 pr-8 md:flex-row gap-20">
                <div className="md:w-1/2">
                    <h2 className="text-5xl font-bold mb-8">About Me</h2>
                    <p className="text-muted-foreground">
                        A brief overview about my jourey.
                    </p>
                </div>

                <div className="md:w-1/2">
                    <h2 className="text-5xl font-bold mb-8">Timeline</h2>
                    <Timeline events={timelineEvents} />
                </div>
            </div>
        </section>

    );
}
