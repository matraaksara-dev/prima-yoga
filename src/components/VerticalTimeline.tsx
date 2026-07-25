import { motion } from 'framer-motion';
import type { TimelineNode } from '../types';

interface VerticalTimelineProps {
  timeline: TimelineNode[];
}

export default function VerticalTimeline({ timeline }: VerticalTimelineProps) {
  return (
    <div className="relative pl-8 md:pl-0">
      {/* Vertical Line */}
      <div className="absolute left-[15px] md:left-[50%] top-0 bottom-0 w-[2px] bg-brand-secondary/20 transform md:-translate-x-1/2"></div>
      
      <div className="space-y-12 relative">
        {timeline.map((node, index) => {
          const isEven = index % 2 === 0;
          
          return (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row items-start md:items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-29px] md:left-1/2 w-8 h-8 rounded-full bg-brand-primary border-4 border-brand-secondary transform md:-translate-x-1/2 z-10"></div>
              
              {/* Content Box */}
              <div className={`w-full md:w-1/2 ${isEven ? 'md:pl-12' : 'md:pr-12'}`}>
                <div className="bg-brand-primary/50 p-6 rounded-lg border border-white/5 shadow-xl hover:border-brand-secondary/30 transition-colors">
                  <span className="inline-block text-brand-secondary text-sm font-bold tracking-wider mb-2">
                    {node.year}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-3">{node.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                    {node.insight}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
