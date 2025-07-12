
import educationData from '@/data/aboutData/educationData.json';
import { Timeline } from '../../home/timelineComp/Timeline';


export default function Education() {
    return (
        <section className="w-full flex justify-center p-20">
            <div className="container flex flex-col pr-8 md:flex-row gap-20">
                <div className="md:w-1/2">
                    <h2 className="text-5xl font-bold mb-8">Education</h2>
                    <p className="text-muted-foreground">
                        A brief overview about my journey.
                    </p>
                </div>

                <div className="md:w-1/2">
                    <h2 className="text-5xl font-bold mb-8">Timeline</h2>
                    <Timeline events={educationData} />
                </div>
            </div>
        </section>
    )
}
