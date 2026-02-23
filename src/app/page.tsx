import FooterFeature from "@/components/FooterFeature";
import HeroMedia from "@/components/HeroMedia";
import TestimonialsServer from "@/components/TestimonialsServer";
import PortfolioServer from "../components/PortfolioServer";
import ScrollFix from "@/components/ScrollFix";
import { tiles } from "@/data/home";

export default function Home() {
  return (
    <main className="text-black">
      <ScrollFix />
      <HeroMedia
        titleTop={`J&D'S Metals and General Construction`}
        centerText={"Building Excellence For Over 10 Years"}
        bottomText={
          "Serving Manvel, Alvin, Angleton, Friendswood, Pearland, Humble, Sugarland, Missouri City, Galveston, Houston and surrounding areas."
        }
        headerPhone={"832-933-1631"}
      />
      <PortfolioServer />
      <TestimonialsServer />
      <FooterFeature tiles={tiles} />
    </main>
  );
}
