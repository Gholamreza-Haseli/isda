import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { base44 } from "@/api/base44Client";
import SectionHeading from "@/components/ui/SectionHeading";
import OfficerCard from "@/components/cards/OfficerCard";

const categoryLabels = {
  president: "President",
  vice_president: "Vice Presidents",
  board_member: "Board Members",
  regional_vp: "Regional Vice Presidents",
  secretary: "Secretary",
  executive: "Executive Team",
  coordinator: "Coordinators",
  past_president: "Past Presidents",
  founder: "Founder",
};

const categoryOrder = ["president", "past_president", "vice_president", "regional_vp", "board_member", "secretary", "executive", "coordinator", "founder"];

export default function Leadership() {
  const [officers, setOfficers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const filter = params.get("filter");
    if (filter) setActiveFilter(filter);

    base44.entities.Officer.filter({ is_active: true }, "sort_order")
      .then(setOfficers)
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const categories = [...new Set(officers.map((o) => o.category))];
  const sortedCategories = categoryOrder.filter((c) => categories.includes(c));

  const filtered = activeFilter === "all"
    ? officers
    : officers.filter((o) => o.category === activeFilter);

  const groupedOfficers = {};
  filtered.forEach((o) => {
    if (!groupedOfficers[o.category]) groupedOfficers[o.category] = [];
    groupedOfficers[o.category].push(o);
  });

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute top-0 left-1/3 w-px h-full bg-primary-foreground/5" />
        <div className="absolute top-0 left-2/3 w-px h-full bg-primary-foreground/5" />
        <div className="max-w-4xl mx-auto px-4 text-center relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-xs font-body font-semibold uppercase tracking-[0.25em] text-accent mb-4 block">Leadership</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-primary-foreground mb-6">
              Board of <span className="italic">Directors</span>
            </h1>
            <p className="text-base lg:text-lg font-body text-primary-foreground/70 max-w-2xl mx-auto">
              The distinguished scholars and practitioners who guide ISDA's mission, strategy, and global outreach.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 border-b border-border bg-background sticky top-16 lg:top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 overflow-x-auto">
          <div className="flex items-center gap-2 min-w-max">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-4 py-2 text-xs font-body font-medium rounded transition-colors ${
                activeFilter === "all" ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              All
            </button>
            {sortedCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 text-xs font-body font-medium rounded transition-colors whitespace-nowrap ${
                  activeFilter === cat ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                {categoryLabels[cat] || cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Officers Grid */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center py-20">
              <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin mx-auto" />
            </div>
          ) : filtered.length === 0 ? (
            <p className="text-center text-muted-foreground font-body py-20">No officers found.</p>
          ) : (
            <div className="space-y-16">
              {(activeFilter === "all" ? sortedCategories : [activeFilter]).map((cat) => {
                const group = groupedOfficers[cat];
                if (!group || group.length === 0) return null;
                return (
                  <div key={cat}>
                    <h2 className="font-display text-2xl text-foreground mb-6 pb-3 border-b border-border">
                      {categoryLabels[cat] || cat}
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                      {group.map((officer) => (
                        <OfficerCard key={officer.id} officer={officer} />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
