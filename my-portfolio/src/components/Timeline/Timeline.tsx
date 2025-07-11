'use client'
import { motion } from "framer-motion";

interface TimelineEvent {
  title: string;
  description: string;
  date?: string;
  details?: string; // extra info
}

interface TimelineProps {
  events: TimelineEvent[];
  className?: string;
}

export const Timeline = ({ events, className = "" }: TimelineProps) => {
  return (
    <div
      className={`space-y-8 relative border-s border-muted ${className}`}
    >
      {events.map((event, idx) => (
        <motion.div
          key={idx}
          className="relative pl-6 group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: idx * 0.1 }}
        >
          {/* Dot */}
          <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-primary" />

          {/* Hover Panel */}
          <div
            className={`
              absolute left-[-260px] top-0 h-full w-[250px] bg-muted-foreground/10 p-4
              rounded-md opacity-0 -translate-x-400 transition-all duration-300
              group-hover:translate-x-0 group-hover:opacity-100
            `}
          >
            <p className="text-sm text-muted-foreground">
              {event.details ?? "More details coming soon…"}
            </p>
          </div>

          {/* Main Content */}
          <h4 className="text-lg font-semibold">{event.title}</h4>
          {event.date && (
            <p className="text-sm text-muted-foreground mb-1">{event.date}</p>
          )}
          <p className="text-muted-foreground">{event.description}</p>
        </motion.div>
      ))}
    </div>
  );
};
