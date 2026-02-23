import testimonials from "@/data/testimonials";
import TestimonialsClient from "./TestimonialsClient";

export default function TestimonialsServer() {
  return (
    <section id="testimonials" className="py-10 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8">Testimonials</h2>
        <TestimonialsClient items={testimonials} />
      </div>
    </section>
  );
}

