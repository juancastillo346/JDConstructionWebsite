type Testimonial = {
  id: string;
  quote: string;
  author?: string;
  location?: string;
};

const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "J&D did an amazing job on our fence — fast, professional and the team left the site cleaner than they found it.",
    author: "Maria G.",
    location: "Pearland, TX",
  },
  {
    id: "t2",
    quote:
      "They built a new wood fence and gate for our property. Quality materials and excellent communication throughout.",
    author: "Connor L.",
    location: "Houston, TX",
  },
  {
    id: "t3",
    quote:
      "Reliable, fair pricing, and the finished product exceeded expectations. Highly recommend for any fencing needs.",
    author: "S. Ramirez",
    location: "Friendswood, TX",
  },
];

export default testimonials;

