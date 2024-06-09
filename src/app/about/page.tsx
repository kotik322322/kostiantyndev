'use client';
import React from 'react';
import ParticlesComponent from '../components/ParticleComponent';
import darkConfig from '../data/darkConfig.json';
import Image from 'next/image';
import Logo from '../components/Logo';
import profilePic from '../../../public/profile.jpg';

const AboutPage = () => {
  return (
    <div className="w-full p-8 relative">
      <div className="bg-black -z-50 absolute top-0 bottom-0 left-0 right-0" />
      <ParticlesComponent config={darkConfig} />
      <Logo textColor="#ffffff" />

      <div className="w-full flex flex-col md:flex-row justify-center items-center  lg:gap-y-4 md:gap-x-10">
        {/* Profile Image */}
        <div className="w-full relative rounded-2xl border-2 border-solid border-dark bg-light p-4  my-10 lg:my-4 md:w-1/2 lg:w-1/3 ">
          <div className="absolute top-0 -right-3 -z-10  w-[102%] h-[103%] lg:h-[102%] rounded-[2rem] bg-dark" />
          <Image
            src={profilePic}
            alt="Kostiantyn Marfin Profile Image"
            className="w-full h-auto rounded-2xl"
          />
        </div>
        {/* Profile Image */}

        {/* Biography */}
        <div className="w-full flex flex-col items-start justify-start gap-y-4 text-light md:w-1/2 lg:w-2/3 text-sm lg:text-base">
          {/* <h2 className="text-lg lg:text-xl font-bold uppercase">Biography</h2> */}

          <p className="font-medium">
            My name is Konstantin Marfin, and I am an experienced frontend developer with a strong
            understanding and skill set in creating web applications. In my work, I utilize modern
            technologies and tools that enable me to effectively solve complex problems and create
            appealing user interfaces.
          </p>

          <p className=" font-medium">
            My core technology stack includes JavaScript, React, Next.js, and Redux Toolkit, which
            ensure high performance and flexibility of applications. Using TailwindCSS, I can
            quickly and easily build stylish and responsive interfaces, while Framer Motion adds
            animations and interactive elements, making the user experience more engaging and
            dynamic.
          </p>

          <p className="font-medium">
            I also have substantial experience working with MongoDB and Express.js, allowing me to
            develop comprehensive full-stack applications. My projects are always focused on user
            convenience and high code quality, ensuring long-term support and scalability.
          </p>
        </div>
        {/* Biography End */}
      </div>
    </div>
  );
};

export default AboutPage;
