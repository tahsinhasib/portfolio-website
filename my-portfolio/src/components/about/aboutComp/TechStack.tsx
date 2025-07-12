import techStackData from '@/data/aboutData/techstackData.json';
import TechStackPieChart from './charts/TechStackPieChart';


export default function TechStack() {
    return (
        <section className="w-full flex justify-center p-20">
            <div className="container flex flex-col pr-8 md:flex-row gap-20">
                {/* Left Column */}
                <div className="md:w-1/2">
                    <h2 className="text-5xl font-bold mb-8">Tech Stack</h2>
                    <p className="text-muted-foreground">
                        An overview of the technologies and tools I work with, categorized by their domain.
                    </p>
                    <div className="mt-8 space-y-2">
                        {techStackData.groups.map((group) => (
                            <div key={group.label} className="text-lg">
                                <strong>{group.label}:</strong> {group.value} points
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column */}
                <div className="md:w-1/2">
                    <h2 className="text-5xl font-bold mb-8">Visualization</h2>
                    <div className="flex justify-center items-center">
                        <TechStackPieChart />
                    </div>
                </div>
            </div>
        </section>
    );
}
