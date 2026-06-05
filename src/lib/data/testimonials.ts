export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Firebird gave our annual conference the production quality of a major arena event without losing the intimacy our delegates love. The technical team made it look effortless.",
    author: "Priya Sharma",
    role: "Director of Events, Westcoast Tech Forum",
  },
  {
    id: "t2",
    quote:
      "We've hosted our gala in three different venues over the years. Firebird is the first one that actually understood the difference between a banquet hall and a stage.",
    author: "David Chen",
    role: "Executive Director, Hope Foundation",
  },
  {
    id: "t3",
    quote:
      "From load-in to encore, the room performed. The lighting rig, the sound, the backstage flow — every detail thought-through.",
    author: "Marcus Whitfield",
    role: "Tour Manager, Atlas Live",
  },
  {
    id: "t4",
    quote:
      "Parking alone sold our board on Firebird. Add a beautiful lobby and a stage our dancers actually want to perform on — easy choice.",
    author: "Elena Rossi",
    role: "Artistic Director, PCDC Federation",
  },
];