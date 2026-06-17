import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, Users, BookOpen, Globe, Calendar, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import MembershipForm from "@/components/membership/MembershipForm";

const benefits = [
  { icon: BookOpen, text: "Receipt of the ISDA Journal of Decision Analytics" },
  { icon: Calendar, text: "Discounted registration at annual conferences" },
  { icon: Users, text: "Access to member-only networking events" },
  { icon: Globe, text: "Periodic job bulletins and research announcements" },
];

const membershipTypes = [
  { type: "Regular", price: "$160/year", description: "Full membership with all benefits, voting rights, and eligibility for board positions." },
  { type: "Student", price: "Free", description: "Full access for enrolled students. Affiliate status — no board office or voting." },
  { type: "Retired", price: "Free", description: "For retired professionals. Affiliate status — journal access online only." },
  { type: "Affiliate", price: "$25/year", description: "Members from developing countries. Online journal access. No voting or board eligibility." },
];

export default function Membership() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute top-0 left-1/3 w-px h-full bg-primary-foreground/5" />
        <div className="absolute top-0 left-2/3 w-px h-full bg-primary-foreground/5" />
        <div className="max-w-4xl mx-auto px-4 text-center relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-xs font-body font-semibold uppercase tracking-[0.25em] text-accent mb-4 block">Membership</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-primary-foreground mb-6">
              Join the <span className="italic">Global Community</span>
            </h1>
            <p className="text-base lg:text-lg font-body text-primary-foreground/70 max-w-2xl mx-auto mb-8">
              Become part of a worldwide network of researchers, educators, and practitioners advancing decision analytics.
            </p>
            <button
              onClick={() => setShowForm(true)}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-accent-foreground font-body font-semibold text-sm rounded hover:bg-accent/90 transition-colors"
            >
              Apply for Membership <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-20 lg:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Advantages"
            title="Benefits of Membership"
            description="ISDA's approach is problem-centered and methodology-agnostic. We encourage diverse perspectives united by analytical rigor."
          />
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {benefits.map((b, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-4 p-5 rounded-lg border border-border"
              >
                <div className="w-10 h-10 rounded bg-accent/10 flex items-center justify-center shrink-0">
                  <b.icon className="w-5 h-5 text-accent" />
                </div>
                <p className="font-body text-sm text-foreground/80 leading-relaxed">{b.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Types & Fees */}
      <section id="types" className="py-20 lg:py-28 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Membership Types"
            title="Choose Your Membership"
            description="Select the membership type that best fits your career stage and location."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {membershipTypes.map((m, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="font-body text-lg font-semibold text-foreground mb-1">{m.type}</h3>
                <p className="font-display text-2xl text-accent mb-3">{m.price}</p>
                <p className="text-sm font-body text-muted-foreground leading-relaxed">{m.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      {showForm && (
        <div className="fixed inset-0 z-50 bg-primary/60 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setShowForm(false)}>
          <div onClick={(e) => e.stopPropagation()} className="max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <MembershipForm onClose={() => setShowForm(false)} />
          </div>
        </div>
      )}
    </div>
  );
}
