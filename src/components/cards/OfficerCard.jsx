import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function OfficerCard({ officer }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Link
        to={`/officer/${officer.id}`}
        className="group block bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
      >
        <div className="aspect-square overflow-hidden bg-muted relative">
          {officer.photo_url ? (
            <img
              src={officer.photo_url}
              alt={officer.full_name}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-primary/5">
              <span className="font-display text-4xl text-primary/20">
                {officer.full_name?.split(" ").map(n => n[0]).join("")}
              </span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <span className="text-white text-xs font-body font-medium flex items-center gap-1">
              View Profile <ArrowRight className="w-3 h-3" />
            </span>
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-body text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
            {officer.full_name}
          </h3>
          <p className="text-xs font-body text-accent mt-0.5">{officer.title}</p>
          {officer.affiliation && (
            <p className="text-xs font-body text-muted-foreground mt-1">{officer.affiliation}</p>
          )}
          {officer.term && (
            <p className="text-xs font-body text-muted-foreground/60 mt-0.5">{officer.term}</p>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
