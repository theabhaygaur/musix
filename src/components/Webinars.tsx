import React from "react";
import Link from "next/link";
import { Button } from "./ui/moving-border";
import { HoverEffect } from "./ui/card-hover-effect";

const featuredWebinars = [
  {
    title: "Understanding Music Theory",
    description:
      "Dive deep into the fundamentals of music theory and enhance your musical skills.",
    slug: "understanding-music-theory",
    isFeatured: true,
  },
  {
    title: "The Art of Songwriting",
    description:
      "Learn the craft of songwriting from experienced musicians and songwriters.",
    slug: "the-art-of-songwriting",
    isFeatured: true,
  },
  {
    title: "Mastering Your Instrument",
    description:
      "Advanced techniques to master your musical instrument of choice.",
    slug: "mastering-your-instrument",
    isFeatured: true,
  },
  {
    title: "Music Production Essentials",
    description:
      "Get started with music production with this comprehensive overview.",
    slug: "music-production-essentials",
    isFeatured: true,
  },
  // Added two more webinars
  {
    title: "Live Performance Techniques",
    description:
      "Enhance your live performance skills with expert tips and strategies.",
    slug: "live-performance-techniques",
    isFeatured: true,
  },
  {
    title: "Digital Music Marketing",
    description:
      "Learn how to promote your music effectively in the digital age.",
    slug: "digital-music-marketing",
    isFeatured: true,
  },
];

function Webinars() {
  return (
    <div className="md:p-12 py-12 px-3 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 ">
        <div className="text-center">
          <h2 className="text-neutral-400 tracking-wide uppercase">
            Featured Webinars
          </h2>
          <h1 className="text-4xl font-bold">Enhance your musical journey</h1>
        </div>
        <div className="m-10">
          <HoverEffect
            items={featuredWebinars.map((webinar) => {
              return {
                title: webinar.title,
                description: webinar.description,
                link: `/webinars/${webinar.slug}`,
              };
            })}
          />
        </div>
        <div className="text-center mb-28">
          <Link href={"/courses"}>
            <Button className="bg-black">View all webinars</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Webinars;
