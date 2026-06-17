import React from "react";
import { Link } from "react-router-dom";
import { Mail, Linkedin, Twitter, Youtube } from "lucide-react";

const footerLinks = [
  {
    title: "Society",
    links: [
      { label: "About ISDA", path: "/about" },
      { label: "Leadership", path: "/leadership" },
      { label: "Bylaws", path: "/bylaws" },
      { label: "News", path: "/news" },
    ],
  },
  {
    title: "Membership",
    links: [
      { label: "Join Now", path: "/membership" },
      { label: "Benefits", path: "/membership#benefits" },
      { label: "Membership Types", path: "/membership#types" },
    ],
  },
  {
    title: "Academic",
    links: [
      { label: "Journal", path: "/journal" },
      { label: "Conferences", path: "/conferences" },
      { label: "Special Interest Groups", path: "/colleges" },
      { label: "Regional Chapters", path: "/chapters" },
    ],
  },
];

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  { icon: Mail, href: "mailto:contact@isda.org", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Hairline accent */}
      <div className="h-0.5 bg-accent w-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-display text-lg font-bold">IS</span>
              </div>
              <div>
                <span className="font-display text-lg text-primary-foreground leading-none block">ISDA</span>
                <span className="text-xs text-primary-foreground/60 font-body tracking-wide">International Society of Decision Analytics</span>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/70 font-body leading-relaxed max-w-sm mb-6">
              Advancing the science and practice of decision analytics through rigorous research, global collaboration, and knowledge dissemination.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h3 className="font-body text-xs font-semibold uppercase tracking-widest text-primary-foreground/40 mb-4">
                {col.title}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm font-body text-primary-foreground/70 hover:text-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/40 font-body">
            © {new Date().getFullYear()} International Society of Decision Analytics. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/about" className="text-xs text-primary-foreground/40 hover:text-accent font-body transition-colors">
              Privacy Policy
            </Link>
            <Link to="/about" className="text-xs text-primary-foreground/40 hover:text-accent font-body transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
