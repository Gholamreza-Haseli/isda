import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { base44 } from "@/api/base44Client";
import { ArrowLeft, Mail, Globe, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

export default function OfficerDetail() {
  const { id } = useParams();
  const [officer, setOfficer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    base44.entities.Officer.filter({ id })
      .then((res) => setOfficer(res[0] || null))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!officer) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-muted-foreground font-body">Officer not found.</p>
        <Link to="/leadership" className="text-sm font-body text-accent hover:underline flex items-center gap-1">
          <ArrowLeft className="w-4 h-4" /> Back to Leadership
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-px h-full bg-primary-foreground/5" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-primary-foreground/5" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Link to="/leadership" className="inline-flex items-center gap-1.5 text-xs font-body text-primary-foreground/60 hover:text-accent mb-8 transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Leadership
          </Link>

          <div className="grid lg:grid-cols-3 gap-10 items-start">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-1"
            >
              <div className="aspect-square rounded-lg overflow-hidden border border-primary-foreground/10 shadow-xl">
                {officer.photo_url ? (
                  <img src={officer.photo_url} alt={officer.full_name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-primary-foreground/10">
                    <span className="font-display text-6xl text-primary-foreground/20">
                      {officer.full_name?.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-primary-foreground mb-2">
                {officer.full_name}
              </h1>
              <p className="text-lg font-body text-accent mb-1">{officer.title}</p>
              {officer.term && <p className="text-sm font-body text-primary-foreground/50 mb-4">{officer.term}</p>}
              {officer.affiliation && (
                <p className="text-base font-body text-primary-foreground/70 mb-6">{officer.affiliation}</p>
              )}

              <div className="flex flex-wrap items-center gap-3">
                {officer.email && (
                  <a href={`mailto:${officer.email}`} className="inline-flex items-center gap-1.5 px-4 py-2 bg-accent text-accent-foreground text-sm font-body font-medium rounded hover:bg-accent/90 transition-colors">
                    <Mail className="w-4 h-4" /> Contact
                  </a>
                )}
                {officer.website_url && (
                  <a href={officer.website_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-4 py-2 border border-primary-foreground/20 text-primary-foreground text-sm font-body font-medium rounded hover:border-accent hover:text-accent transition-colors">
                    <Globe className="w-4 h-4" /> Website
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bio Content */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {officer.bio && (
            <div className="mb-12">
              <h2 className="font-display text-2xl text-foreground mb-4 pb-3 border-b border-border">Biography</h2>
              <div className="font-body text-foreground/80 leading-relaxed whitespace-pre-line">{officer.bio}</div>
            </div>
          )}

          {officer.research_interests && (
            <div className="mb-12">
              <h2 className="font-display text-2xl text-foreground mb-4 pb-3 border-b border-border flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-accent" /> Research Interests
              </h2>
              <p className="font-body text-foreground/80 leading-relaxed">{officer.research_interests}</p>
            </div>
          )}

          {officer.publications_summary && (
            <div className="mb-12">
              <h2 className="font-display text-2xl text-foreground mb-4 pb-3 border-b border-border">Key Publications</h2>
              <div className="font-body text-foreground/80 leading-relaxed whitespace-pre-line">{officer.publications_summary}</div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
