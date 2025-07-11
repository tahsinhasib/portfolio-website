import { Timeline } from "./Timeline";


const timelineEvents = [
  {
    title: "Started the Project",
    description: "Initial brainstorming, project setup and planning.",
    date: "January 2025",
  },
  {
    title: "Design Phase",
    description: "Created wireframes and Figma mockups.",
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
    <section className="py-12">
  <div className="container flex flex-col pl-8 pr-8 md:flex-row gap-8">
    <div className="md:w-1/2">
      <h2 className="text-4xl font-bold mb-8">About</h2>
      <p className="text-muted-foreground">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisi vel consectetur euismod.
      </p>
    </div>

    <div className="md:w-1/2">
      <h2 className="text-3xl font-bold mb-8">Experience</h2>
      <Timeline events={timelineEvents} />
    </div>
  </div>
</section>

  );
}
