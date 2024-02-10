import React from "react";
import { Outfit } from "next/font/google";
import Image from "next/image";

const outfit = Outfit({ subsets: ["latin"] });

const TeamDetails = ({img,name})=>{
    return(
      <>
        <div>
          <div className="shadow-three rounded-sm  p-6 lg:mt-0 ">
              <div className="relative h-20 w-20 overflow-hidden rounded-full ml-6">
                          <Image
                            src={`/images/blog/${img}`}
                            alt="author"
                            fill
                          />
              </div>
              </div>
                  <div className="w-full flex ml-4">
                        <span className="text-base font-large text-body-color pl-4">
                             {name}
                             <span className="flex justify-center items-center"><p>PICT</p></span>
                        </span>
                   </div>
                             
        </div>
      </>
    )
}
const AboutPage = () => {
  return (
    <section className={`${outfit.className} bg-[url('/images/hero-bg.jpg')]`}>
      <div className={` bg-[#060435dd]`}>
        <div className="font-inter container flex h-screen max-w-screen-2xl items-center justify-center py-14">
          <div className="md:w-1/2">
            <h1 className="my-2 text-5xl leading-relaxed text-gray-200">
              <span className="text-sky-300 hover:text-cyan-300">About Us</span>{" "}
            </h1>
            <div>
             <p className="text-justify"><span className="ml-20">Welcome to Ant Esport, the leading provider of innovative</span>
              solutions for the esports community. At Ant Esport, we are
              dedicated to revolutionizing the way esports tournaments are
              organized and managed. With a passion for gaming and a commitment
              to excellence, our team brings together years of experience in
              technology, gaming, and event management. We understand the unique
              needs and challenges of the esports industry, and we are committed
              to providing cutting-edge solutions to address them.</p>{"    "}
              <p className="text-justify"><span className="ml-20">Our mission is to empower tournament organizers, teams, and players with the</span>
              tools they need to succeed in the fast-paced world of esports.
              Whether you're a seasoned professional or just starting out, our
              platform offers a comprehensive suite of features designed to
              streamline tournament management and enhance the overall esports
              experience.</p>{"    "}
              <p className="text-justify">
              <span className="ml-20">From seamless team registration to efficient match</span>
              scheduling, live streaming integration, and real-time score
              tracking, our platform provides everything you need to organize,
              manage, and participate in esports tournaments with ease. Join us
              in shaping the future of esports. Together, we can take your
              tournament experience to the next level. Get started with Ant
              Esport today!
            </p>
            </div>
            <div className="flex justify-center items-start flex-col">
            <h1 className="my-2 text-2xl leading-relaxed text-gray-200">
              <span className="text-sky-300 hover:text-cyan-300">Who We Are ? </span>{" "}
            </h1>
            <div className="flex w-full justify-between items-center ">
            <TeamDetails img="ayush.jpg" name="Ayush Bulbule"/>
            <TeamDetails img="pranay.jpg" name="Pranay Chavhan"/>
            <TeamDetails img="yadh.jpg" name="Yadhnesh Gangurde"/>
            <TeamDetails img="sumit.jpg" name="Sumati Suryavanshi"/>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
