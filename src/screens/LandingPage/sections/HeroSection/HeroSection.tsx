import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React, { useRef } from "react";
import { Avatar, AvatarImage } from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

// Inline yellow star SVG
const Star = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="#FFD700"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2L14.8 8.6L22 9.3L17 14.1L18.4 21.2L12 17.8L5.6 21.2L7 14.1L2 9.3L9.2 8.6L12 2Z" />
  </svg>
);

export const HeroSection = (): JSX.Element => {
  const testimonialsRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (testimonialsRef.current) {
      const scrollAmount = 320;
      testimonialsRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const testimonials = [
    {
      id: 1,
      title: "Exceptional Service!",
      content:
        "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
      author: "Wade Warren",
      location: "USA, California",
      profileImage: "/profile.png",
    },
    {
      id: 2,
      title: "Efficient and Reliable",
      content:
        "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
      author: "Emelie Thomson",
      location: "USA, Florida",
      profileImage: "/profile-1.png",
    },
    {
      id: 3,
      title: "Trusted Advisors",
      content:
        "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
      author: "John Mans",
      location: "USA, Nevada",
      profileImage: "/profile-2.png",
    },
    {
      id: 4,
      title: "Smooth Experience",
      content:
        "Buying with Estatein was seamless. The agents were incredibly responsive and guided me step-by-step. Couldn't be happier!",
      author: "Laura Kip",
      location: "USA, Texas",
      profileImage: "/profile-3.png",
    },
  ];

  return (
    <section className="w-full flex flex-col gap-16 px-4 md:px-8 py-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-white text-4xl font-semibold">
            What Our Clients Say
          </h2>
          <p className="text-gray-400 text-base leading-relaxed">
            Read the success stories and heartfelt testimonials from our valued
            clients. Discover why they chose Estatein for their real estate
            needs.
          </p>
        </div>
        <Button className="bg-transparent border border-neutral-700 text-white hover:bg-neutral-800 rounded-md px-5 py-2 transition">
          View All Testimonials
        </Button>
      </div>

      {/* Scrollable Testimonials Row */}
      <div className="relative">
        <div
          ref={testimonialsRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory px-1"
        >
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="min-w-[300px] max-w-sm flex-shrink-0 bg-neutral-900 border border-neutral-800 rounded-xl p-6 text-white snap-start"
            >
              <CardContent className="p-0 space-y-5">
                <div className="flex gap-1">{[...Array(5)].map((_, i) => <Star key={i} />)}</div>

                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{testimonial.title}</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {testimonial.content}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <Avatar className="w-10 h-10 rounded-full overflow-hidden">
                    <AvatarImage
                      src={testimonial.profileImage}
                      alt={testimonial.author}
                      className="object-cover"
                    />
                  </Avatar>
                  <div className="text-sm">
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Scroll Arrows */}
        <div className="absolute -top-16 right-0 flex gap-3">
          <Button
            size="icon"
            className="bg-neutral-800 p-2 rounded-full hover:bg-neutral-700 transition"
            onClick={() => scroll("left")}
          >
            <ChevronLeftIcon className="text-white w-5 h-5" />
          </Button>
          <Button
            size="icon"
            className="bg-neutral-800 p-2 rounded-full hover:bg-neutral-700 transition"
            onClick={() => scroll("right")}
          >
            <ChevronRightIcon className="text-white w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between border-t border-neutral-800 pt-6">
        <p className="text-white text-base font-medium">
          <span className="font-bold">01</span>{" "}
          <span className="text-gray-500">of 10</span>
        </p>
      </div>
    </section>
  );
};
