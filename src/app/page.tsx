"use client";

import FooterFeature from "@/components/FooterFeature";
import HeroMedia from "@/components/HeroMedia";
import IssueSpotlight from "@/components/IssueSpotlight";
import { issueSpotlight, tiles } from "@/data/home";

export default function Home() {
  return (
    <main className="text-black pb-24">
      <HeroMedia
        titleTop={`J&D'S Metals and General Construction`}
        centerText={"Building Excellence For Over 10 Years"}
        bottomText={
          "Serving Manvel, Alvin, Angleton, Friendswood, Pearland, Humble, Sugarland, Missouri City, Galveston, Houston and surrounding areas."
        }
        headerPhone={"832-933-1631"}
      />
      <section id="portfolio" className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-black mb-6">
            Portfolio
          </h2>
          <div className="min-h-[40vh] flex items-center justify-center text-black/70">
            Portfolio content coming soon.
          </div>
        </div>
      </section>
      <div id="issues">
        <IssueSpotlight {...issueSpotlight} />
      </div>
      <FooterFeature tiles={tiles} />
    </main>
  );
}
