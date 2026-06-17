import React from "react";
import { Target, Globe, GraduationCap, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const purposes = [
  {
    icon: Target,
    title: "Advance Knowledge",
    description: "Extend and integrate knowledge that contributes to the improved understanding and practice of decision analytics.",
  },
  {
    icon: Globe,
    title: "Global Dissemination",
    description: "Disseminate information on decision analytics to managers, scientists, educators, students, and the public worldwide.",
  },
  {
    icon: GraduationCap,
    title: "Educate & Inspire",
    description: "Promote improvement of decision analytics education in public and private organizations throughout the world.",
  },
  {
    icon: BarChart3,
    title: "Drive Practice",
    description: "Bridge the gap between theoretical research and real-world application of analytical decision-making methods.",
  },
];

export default function MissionSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Mission"
          title="Advancing the Science of Decisions"
          description="The International Society of Decision Analytics (ISDA) is a global professional organization representing the interests of decision analytics professionals from around the world."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {purposes.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="text-center group"
            >
              <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-accent/20 transition-colors">
                <item.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-body text-base font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm font-body text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
