'use client';
import React, { useEffect } from 'react';
import ParticlesComponent from '../components/ParticleComponent';
import darkConfig from '../data/darkConfig.json';
import Socials from '../components/Socials';
import spacemanImg from '../../../public/spaceman.png';
import Image from 'next/image';
import { motion, useAnimate } from 'framer-motion';
import Logo from '../components/Logo';
import profilePic from '../../../public/profile.jpg';

const AboutPage = () => {
  return (
    <div className="w-full p-8 relative bg-black -z-50">
      <ParticlesComponent config={darkConfig} />
      <Logo textColor="#ffffff" />

      <div className="w-full flex flex-col justify-center items-center gap-y-4">

        {/* Profile Image */}
        <div className="w-full relative rounded-2xl border-2 border-solid border-dark bg-light p-4 lg:p-8 ">
          <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
          <Image
            src={profilePic}
            alt="Kostiantyn Marfin Profile Image"
            className="w-full h-auto rounded-2xl"
          />
        </div>
        {/* Profile Image */}

        {/* Biography */}
        <div className="w-full flex flex-col items-start justify-start gap-y-4 text-light">
          <h2 className="text-lg font-bold uppercase">
            Biography
          </h2>

          <p className="font-medium text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, neque tenetur. Ea
            dolorem minus quam, exercitationem eos, magni quidem, inventore praesentium cupiditate
            ad perferendis. Voluptatibus, ullam enim quia dolorem incidunt impedit libero dolorum?
            Repellendus, eveniet neque, labore laboriosam aperiam, natus perspiciatis officiis
            aliquam cumque ea maxime accusamus nesciunt!
          </p>

          <p className=" font-medium text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, neque tenetur. Ea
            dolorem minus quam, exercitationem eos, magni quidem, inventore praesentium cupiditate
            ad perferendis. Voluptatibus, ullam enim quia dolorem incidunt impedit libero dolorum?
            Repellendus, eveniet neque, labore laboriosam aperiam, natus perspiciatis officiis
            aliquam cumque ea maxime accusamus nesciunt!
          </p>

          <p className="font-medium text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, neque tenetur. Ea
            dolorem minus quam, exercitationem eos, magni quidem, inventore praesentium cupiditate
            ad perferendis. Voluptatibus, ullam enim quia dolorem incidunt impedit libero dolorum?
            Repellendus, eveniet neque, labore laboriosam aperiam, natus perspiciatis officiis
            aliquam cumque ea maxime accusamus nesciunt!
          </p>
        </div>
        {/* Biography End */}
      </div>
    </div>
  );
};

export default AboutPage;
