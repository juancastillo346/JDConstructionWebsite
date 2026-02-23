import PortfolioClient from "./PortfolioClient";
import { getGalleries } from "@/lib/getGalleries";

export default function PortfolioServer() {
  const galleries = getGalleries();

  return (
    <section id="portfolio" className="bg-emerald-900 py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-white mb-4 sm:mb-6">
          Recent Work
        </h2>
        <PortfolioClient galleries={galleries} />
      </div>
    </section>
  );
}

