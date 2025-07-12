import { Timeline } from './Timeline'
import timelineData from '@/data/homeData/timelineData.json';


export default function TimelineSection() {
    return (
        <section className="py-12 w-full flex justify-center">
            <div className="container flex flex-col p-20 pr-8 md:flex-row gap-20">
                <div className="md:w-1/2">
                    <h2 className="text-5xl font-bold mb-8">About Me</h2>
                    <p className="text-muted-foreground">
                        A brief overview about my journey.
                    </p>
                </div>

                <div className="md:w-1/2">
                    <h2 className="text-5xl font-bold mb-8">Timeline</h2>
                    <Timeline events={timelineData} />
                </div>
            </div>
        </section>
    )
}
