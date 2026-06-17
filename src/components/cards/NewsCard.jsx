import React from "react";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import moment from "moment";
import { motion } from "framer-motion";

export default function NewsCard({ article }) {
  const date = article.publish_date
    ? moment(article.publish_date).format("MMM D, YYYY")
    : moment(article.created_date).format("MMM D, YYYY");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Link
        to={`/news/${article.id}`}
        className="group block bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
      >
        {article.image_url && (
          <div className="aspect-video overflow-hidden">
            <img
              src={article.image_url}
              alt={article.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}
        <div className="p-5">
          {article.category && (
            <span className="inline-block text-xs font-body font-semibold uppercase tracking-wider text-accent mb-2">
              {article.category}
            </span>
          )}
          <h3 className="font-body text-base font-semibold text-foreground group-hover:text-accent transition-colors mb-2 line-clamp-2">
            {article.title}
          </h3>
          <p className="text-sm font-body text-muted-foreground mb-3 line-clamp-2">
            {article.summary}
          </p>
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-xs font-body text-muted-foreground">
              <Calendar className="w-3.5 h-3.5" />
              {date}
            </span>
            <span className="text-xs font-body font-medium text-accent flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              Read More <ArrowRight className="w-3 h-3" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
