 "use client";
import { useState } from "react";

type Item = {
  id: string;
  quote: string;
  author?: string;
  location?: string;
};

export default function TestimonialsClient({ items }: { items: Item[] }) {
  const [index, setIndex] = useState(0);
  const item = items[index];

  function prev() {
    setIndex((i) => (i - 1 + items.length) % items.length);
  }
  function next() {
    setIndex((i) => (i + 1) % items.length);
  }

  return (
    <div className="relative">
      <div className="mx-auto max-w-3xl">
        <blockquote className="bg-gray-50 p-8 rounded-lg shadow-sm text-center">
          <p className="text-lg md:text-xl leading-relaxed text-black/90">&ldquo;{item.quote}&rdquo;</p>
          <footer className="mt-4 text-sm text-black/70">
            {item.author ? <span className="font-semibold">{item.author}</span> : null}
            {item.location ? <span className="ml-2">— {item.location}</span> : null}
          </footer>
        </blockquote>
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button onClick={prev} className="px-3 py-2 rounded bg-black/5 hover:bg-black/10">‹ Prev</button>
        <div className="text-sm text-black/60">{index + 1} / {items.length}</div>
        <button onClick={next} className="px-3 py-2 rounded bg-black/5 hover:bg-black/10">Next ›</button>
      </div>
    </div>
  );
}

