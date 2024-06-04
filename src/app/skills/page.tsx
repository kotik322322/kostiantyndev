'use client';
import React from 'react';
import { motion } from 'framer-motion';
import ParticlesComponent from '../components/ParticleComponent';
import darkConfig from '../data/darkConfig.json';
import Logo from '../components/Logo';

interface SkillProps {
  name: string;
  x: string;
  y: string;
}

const Skill = ({ name, x, y }: SkillProps) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold text-sm bg-white py-1.5 px-3 text-black shadow-white cursor-pointer absolute
      md:py-3 md:px-6
       md:text-base"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}>
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <div className="relative w-full min-h-screen p-8 flex flex-col ">
      <div className="bg-black -z-50 absolute top-0 bottom-0 left-0 right-0" />
      <Logo textColor="white" />
      <ParticlesComponent config={darkConfig} />
      <h2
        className="inline-block absolute top-20 lg:top-0  right-1/2 translate-x-1/2 z-50 font-bold text-4xl  text-center text-white
      lg:text-8xl
      ">
        Skills
      </h2>

      <div
        className="w-full relative flex items-center justify-center rounded-full bg-circularLight lg:bg-circularLightLg flex-1
      h-[80%] lg:h-[100%]">
        <motion.div className="flex items-center justify-center rounded-full font-semibold  text-black p-5 cursor-pointer bg-white">
          Web
        </motion.div>

        <Skill name="HTML" x="35vw" y="-25vh" />
        <Skill name="CSS" x="35vw" y="-5vh" />
        <Skill name="Javascript" x="-35vw" y="25vh" />
        <Skill name="React" x="-20vw" y="5vh" />
        <Skill name="NextJs" x="5vw" y="-32vh" />
        <Skill name="Redux Toolkit" x="15vw" y="35vh" />
        <Skill name="MongoDb" x="-7vw" y="27vh" />
        <Skill name="ExpressJs" x="-22vw" y="-33vh" />
        <Skill name="Tailwind CSS" x="30vw" y="18vh" />
        <Skill name="Git" x="-35vw" y="-10vh" />
      </div>
    </div>
  );
};

export default Skills;
