import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { base44 } from "@/api/base44Client";
import SectionHeading from "@/components/ui/SectionHeading";
import OfficerCard from "@/components/cards/OfficerCard";

export default function BoardPreview() {
  const [officers, setOfficers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    base44.entities.Officer.filter({ is_active: true }, "sort_order", 8)
      .then(setOfficers)
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin mx-auto" />
        </div>
      </section>
    );
  }

  if (officers.length === 0) return null;

  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Board Members"
          title="Leading the Organization to Success"
          description="Meet the distinguished scholars and practitioners guiding ISDA's mission and strategic direction."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {officers.map((officer) => (
            <OfficerCard key={officer.id} officer={officer} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/leadership"
            className="inline-flex items-center gap-2 text-sm font-body font-medium text-accent hover:underline"
          >
            View All Board Members <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
