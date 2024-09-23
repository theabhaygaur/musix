import { BackgroundBeams } from "@/components/ui/background-beams";
import Image from "next/image";
function page() {
  return (
    <>
      <div
        className="flex text-center  md:h-auto flex-col  md:mt-32 md:py-12 pt-36 
      "
      >
        <h1 className="text-lg md:text-7xl font-bold">About Us</h1>
        <p className="text-sm mt-5 text-center max-w-lg mx-auto opacity-50">
          Welcome to our music school! We are a dedicated team of musicians and
          educators who are passionate about sharing the joy of music with
          others. Our mission is to provide high-quality music education and
          performance opportunities to students of all ages and skill levels.
        </p>
        <div className="image mx-auto w-[90%] md:w-full h-[12rem] md:h-full justify-center items-center flex mt-12 mb-5">
          <Image
            src="/images/music.jpg"
            alt="About"
            width={900}
            height={200}
            className="rounded-xl"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center h-auto md:h-screen mt-32 md:mt-0 mb-20">
        <h1 className="text-xl  md:text-3xl font-bold">Our Team</h1>
        <p className="text-sm mt-5 text-center max-w-lg mx-auto opacity-50">
          Our team consists of experienced musicians and educators who are
          committed to helping students achieve their musical goals.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 text-center w-auto items-center mt-10 ">
          <div className="team-member relative h-[14rem] w-[10rem] hover:scale-110 transition-all duration-300">
            <div className="rounded-full w-[10rem] h-[10rem] overflow-hidden  ">
              <Image
                src="/images/team1.jpg"
                alt="Team Member 1"
                width={300}
                height={300}
              />
              <div className="absolute bottom-0 left-0 w-full  opacity-50 flex flex-col items-center justify-center">
                <h2 className="text-white text-xl font-bold">Jane Doe</h2>
                <p className="text-white text-[0.7rem]">Founder and CEO</p>
              </div>
            </div>
          </div>
          <div className="team-member relative h-[14rem] w-[10rem] hover:scale-110 transition-all duration-300">
            <div className="rounded-full w-[10rem] h-[10rem] overflow-hidden">
              <Image
                src="/images/team2.jpg"
                alt="Team Member 1"
                width={300}
                height={300}
              />
              <div className="absolute bottom-0 left-0 w-full  opacity-50 flex flex-col items-center justify-center">
                <h2 className="text-white text-xl font-bold">Peter Scott</h2>
                <p className="text-white text-[0.7rem]">Founder and CEO</p>
              </div>
            </div>
          </div>
          <div className="team-member relative h-[14rem] w-[10rem] hover:scale-110 transition-all duration-300">
            <div className="rounded-full w-[10rem] h-[10rem] overflow-hidden">
              <Image
                src="/images/team3.jpg"
                alt="Team Member 3"
                width={300}
                height={300}
              />
              <div className="absolute bottom-0 left-0 w-full  opacity-50 flex flex-col items-center justify-center">
                <h2 className="text-white text-xl font-bold">Stacey Smith</h2>
                <p className="text-white text-[0.7rem]">Founder and CEO</p>
              </div>
            </div>
          </div>
          <div className="team-member relative h-[14rem] w-[10rem] hover:scale-110 transition-all duration-300">
            <div className="rounded-full w-[10rem] h-[10rem] overflow-hidden">
              <Image
                src="/images/team4.jpg"
                alt="Team Member 4"
                width={300}
                height={300}
              />
              <div className="absolute bottom-0 left-0 w-full  opacity-50 flex flex-col items-center justify-center">
                <h2 className="text-white text-xl font-bold">Bob Martin</h2>
                <p className="text-white text-[0.7rem]">Founder and CEO</p>
              </div>
            </div>
          </div>
          <div className="team-member relative h-[14rem] w-[10rem] hover:scale-110 transition-all duration-300">
            <div className="rounded-full w-[10rem] h-[10rem] overflow-hidden">
              <Image
                src="/images/team5.jpg"
                alt="Team Member 5"
                width={300}
                height={300}
              />
              <div className="absolute bottom-0 left-0 w-full  opacity-50 flex flex-col items-center justify-center">
                <h2 className="text-white text-xl font-bold">Pete Thompson</h2>
                <p className="text-white text-[0.7rem]">Founder and CEO</p>
              </div>
            </div>
          </div>
          <div className="team-member relative h-[14rem] w-[10rem] hover:scale-110 transition-all duration-300">
            <div className="rounded-full w-[10rem] h-[10rem] overflow-hidden">
              <Image
                src="/images/team6.jpg"
                alt="Team Member 6"
                width={300}
                height={300}
              />
              <div className="absolute bottom-0 left-0 w-full  opacity-50 flex flex-col items-center justify-center">
                <h2 className="text-white text-xl font-bold">Angela Cruz</h2>
                <p className="text-white text-[0.7rem]">Founder and CEO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BackgroundBeams />
    </>
  );
}

export default page;
