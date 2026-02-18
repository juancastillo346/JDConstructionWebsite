 "use client";
import { useState } from "react";
import Lightbox from "./Lightbox";
import galleryNames from "../data/galleryNames";

type Gallery = {
  name: string;
  images: string[];
};

export default function PortfolioClient({ galleries }: { galleries: Gallery[] }) {
  const [lightboxImages, setLightboxImages] = useState<string[] | null>(null);
  const [startIndex, setStartIndex] = useState(0);

  function openGallery(images: string[], index = 0) {
    setLightboxImages(images);
    setStartIndex(index);
    document.body.style.overflow = "hidden";
  }
  function closeLightbox() {
    setLightboxImages(null);
    document.body.style.overflow = "";
  }

  // Render one card per folder (mini-gallery). Clicking a card opens that folder's images in the lightbox.
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleries.map((g) => {
          const cover = g.images[0];
          const display = galleryNames[g.name] ?? g.name.replace(/[_-]/g, " ");
          return (
            <button
              key={g.name}
              onClick={() => openGallery(g.images, 0)}
              className="group relative block w-full overflow-hidden rounded-lg bg-gray-100 text-left transition-shadow duration-300 hover:shadow-2xl"
            >
              <img
                src={cover}
                alt={g.name}
                loading="lazy"
                className="w-full h-56 object-cover transition-transform duration-500 transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/25 group-hover:bg-black/40 transition-colors duration-300 flex items-end">
                <div className="p-4 w-full text-white transform transition-transform duration-300 group-hover:-translate-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{display}</h3>
                    <span className="text-sm opacity-90">{g.images.length} photos</span>
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>
      {lightboxImages ? (
        <Lightbox images={lightboxImages} startIndex={startIndex} onClose={closeLightbox} />
      ) : null}
    </>
  );
}

