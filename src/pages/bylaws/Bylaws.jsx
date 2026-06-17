import React from "react";
import { motion } from "framer-motion";
import { Scale, FileText } from "lucide-react";

const bylawSections = [
  {
    title: "Article I — Name and Purpose",
    content: "The name of this organization shall be the International Society of Decision Analytics (ISDA). The purposes of the Society are to extend and integrate knowledge that contributes to the improved understanding and practice of decision analytics; to disseminate information on decision analytics to managers, scientists, educators, students, and the general public; and to promote improvement of decision analytics and its teaching in public and private organizations throughout the world.",
  },
  {
    title: "Article II — Membership",
    content: "Any person interested in advancing the goals of the Society may become a member upon payment of the prescribed dues. Membership categories include Regular, Student, Retired, and Affiliate. Regular members enjoy full voting rights and eligibility for all offices. Affiliate members cannot hold offices on the ISDA Board and do not have voting rights in ISDA elections.",
  },
  {
    title: "Article III — Board of Directors",
    content: "The Board of Directors shall consist of the President, President-elect, Past Presidents (for three years), Vice Presidents, Regional Vice Presidents, Secretary, Board Members at large, the Founder, and the Executive Director. The Board shall have general supervision of the affairs of the Society between business meetings.",
  },
  {
    title: "Article IV — Officers",
    content: "The officers of the Society shall be a President, President-elect, Vice Presidents (Finance, Meetings, Membership, Education, Colleges, Publications, Communications, Industry), Regional Vice Presidents (Americas, Australasia, Europe, Africa & Middle East), and a Secretary. Officers shall be elected by majority vote of the membership.",
  },
  {
    title: "Article V — Elections",
    content: "Elections shall be conducted annually by electronic ballot. The Nominating Committee shall prepare a slate of candidates for each open position. Additional nominations may be made by petition of at least twenty members in good standing.",
  },
  {
    title: "Article VI — Meetings",
    content: "The Society shall hold an annual conference. Special meetings may be called by the President or by the Board of Directors. Regional and special interest group meetings may be organized by the respective Vice Presidents and chairs.",
  },
  {
    title: "Article VII — Dues",
    content: "Annual dues shall be set by the Board of Directors. Changes in dues require approval by a majority vote of the Board. The Board may establish special fee categories for students, retired members, and members from developing countries.",
  },
  {
    title: "Article VIII — Special Interest Groups (Colleges)",
    content: "The Board authorizes the creation of special interest groups in areas of importance to decision analytics. Any twenty or more members in good standing may apply for the creation of a college. Each college shall elect its own officers and operate under the general oversight of the Vice President for Colleges.",
  },
  {
    title: "Article IX — Amendments",
    content: "These bylaws may be amended by a two-thirds vote of the members voting, provided that the proposed amendment has been submitted in writing to the membership at least thirty days before the vote.",
  },
];

export default function Bylaws() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute top-0 left-1/3 w-px h-full bg-primary-foreground/5" />
        <div className="absolute top-0 left-2/3 w-px h-full bg-primary-foreground/5" />
        <div className="max-w-4xl mx-auto px-4 text-center relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-xs font-body font-semibold uppercase tracking-[0.25em] text-accent mb-4 block">Governance</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-primary-foreground mb-6">
              Bylaws & <span className="italic">Constitution</span>
            </h1>
            <p className="text-base lg:text-lg font-body text-primary-foreground/70 max-w-2xl mx-auto">
              The governing document of the International Society of Decision Analytics, establishing the framework for our organization.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* TOC */}
          <div className="mb-12 p-6 bg-muted/50 rounded-lg border border-border">
            <h2 className="font-body text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
              <FileText className="w-4 h-4 text-accent" /> Table of Contents
            </h2>
            <ol className="space-y-1.5">
              {bylawSections.map((s, idx) => (
                <li key={idx}>
                  <a href={`#section-${idx}`} className="text-sm font-body text-muted-foreground hover:text-accent transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </div>

          {/* Sections */}
          <div className="space-y-12">
            {bylawSections.map((s, idx) => (
              <motion.div
                key={idx}
                id={`section-${idx}`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-2xl text-foreground mb-4 pb-3 border-b border-border flex items-center gap-2">
                  <Scale className="w-5 h-5 text-accent" /> {s.title}
                </h2>
                <p className="font-body text-foreground/80 leading-relaxed">{s.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
