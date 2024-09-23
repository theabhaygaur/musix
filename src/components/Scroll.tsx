"use client";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

function Scroll() {
  const musicSchoolContent = [
    {
      title: "Discover Your Sound with Us: A Personal Journey in Music Mastery",
      description:
        "Embark on a musical journey that is uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.",
    },
    {
      title: "Discover Your Sound with Us: A Personal Journey in Music Mastery",
      description:
        "Embark on a musical journey that is uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.",
    },
    {
      title: "Discover Your Sound with Us: A Personal Journey in Music Mastery",
      description:
        "Embark on a musical journey that is uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.",
    },
    {
      title: "Live Feedback & Engagement",
      description:
        "Immerse yourself in an interactive learning experience where feedback is immediate, just like real-time changes in a collaborative project. This approach enhances your understanding and mastery of music concepts and performance techniques.",
    },
    {
      title: "Cutting-Edge Curriculum",
      description:
        "Our curriculum is continuously updated to include the latest music education trends and technologies, ensuring you are always learning with the most current and effective methods. Say goodbye to outdated materials and welcome an education that evolves with the industry.",
    },
    {
      title: "Limitless Learning Opportunities",
      description:
        "With our expansive resource library and dynamic course offerings, you will never find yourself without something new to explore. Our platform provides continuous opportunities for growth, ensuring your musical skills are always advancing.",
    },
  ];

  return (
    <div className=" h-[80%] md:h-screen w-full  mt-20  md:py-20 ">
      <StickyScroll content={musicSchoolContent} />
    </div>
  );
}

export default Scroll;
