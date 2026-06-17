import React from "react";
import HeroSection from "@/components/home/HeroSection";
import MissionSection from "@/components/home/MissionSection";
import BoardPreview from "@/components/home/BoardPreview";
import JournalPreview from "@/components/home/JournalPreview";
import ConferencesPreview from "@/components/home/ConferencesPreview";
import NewsletterBar from "@/components/home/NewsletterBar";

const heroImage = "https://media.base44.com/images/public/6a315f3e0c2ff1269fa3f98f/37f12e208_generated_d86fba5c.png";
const networkImage = "https://media.base44.com/images/public/6a315f3e0c2ff1269fa3f98f/0082b7162_generated_b526c731.png";
const journalImage = "https://media.base44.com/images/public/6a315f3e0c2ff1269fa3f98f/2843616fd_generated_6590b1df.png";

export default function Home() {
  return (
    <div>
      <HeroSection heroImage={heroImage} networkImage={networkImage} />
      <MissionSection />
      <BoardPreview />
      <JournalPreview journalImage={journalImage} />
      <ConferencesPreview />
      <NewsletterBar />
    </div>
  );
}
