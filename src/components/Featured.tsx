"use client";

import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";
import CourseData from "@/data/music_courses.json";
import { Button } from "./ui/moving-border";
import Link from "next/link";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string;
}

export default function Featured() {
  const featuredCourses = CourseData.courses.filter(
    (course: Course) => course.isFeatured
  );
  return (
    <>
      <div className="text-center">
        <h2 className="text-neutral-400 tracking-wide uppercase">
          Featured Courses
        </h2>
        <h1 className="text-4xl font-bold">Learn from the best</h1>
      </div>
      <div className="m-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {featuredCourses.map((course: Course) => {
          return (
            <div key={course.id} className="flex justify-center items-center">
              <BackgroundGradient className="rounded-[22px] max-w-sm  p-4 sm:p-10 bg-white dark:bg-zinc-900">
                <Image
                  src={course.image}
                  alt="jordans"
                  height="400"
                  width="400"
                  className="object-contain"
                />
                <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                  {course.title}
                </p>

                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {course.description}
                </p>
                <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                  <span>Buy now </span>
                  <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                    {course.price}
                  </span>
                </button>
              </BackgroundGradient>
            </div>
          );
        })}
      </div>
      <div className="text-center mb-28">
        <Link href={"/courses"}>
          <Button className="bg-black">View all courses</Button>
        </Link>
      </div>
    </>
  );
}
