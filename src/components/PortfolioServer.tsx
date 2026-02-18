import PortfolioClient from "./PortfolioClient";
import { getGalleries } from "@/lib/getGalleries";

export default function PortfolioServer() {
  const galleries = getGalleries();

  return (
    <section id="portfolio" className="bg-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-black mb-6">
          Portfolio
        </h2>
        <PortfolioClient galleries={galleries} />
      </div>
    </section>
  );
}

