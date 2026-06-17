import React from "react";
import { Calendar, MapPin, ExternalLink } from "lucide-react";
import moment from "moment";
import { motion } from "framer-motion";

export default function ConferenceCard({ conference }) {
  const startDate = conference.start_date ? moment(conference.start_date).format("MMM D, YYYY") : "";
  const endDate = conference.end_date ? moment(conference.end_date).format("MMM D, YYYY") : "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
    >
      {conference.image_url && (
        <div className="aspect-video overflow-hidden">
          <img
            src={conference.image_url}
            alt={conference.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-5">
        <h3 className="font-body text-base font-semibold text-foreground group-hover:text-accent transition-colors mb-2">
          {conference.title}
        </h3>
        <div className="space-y-1.5 mb-3">
          <div className="flex items-center gap-2 text-xs font-body text-muted-foreground">
            <MapPin className="w-3.5 h-3.5 text-accent" />
            {conference.location}
          </div>
          <div className="flex items-center gap-2 text-xs font-body text-muted-foreground">
            <Calendar className="w-3.5 h-3.5 text-accent" />
            {startDate}{endDate ? ` — ${endDate}` : ""}
          </div>
        </div>
        {conference.external_url && (
          <a
            href={conference.external_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-body font-medium text-accent hover:underline"
          >
            Visit Conference <ExternalLink className="w-3 h-3" />
          </a>
        )}
      </div>
    </motion.div>
  );
}
