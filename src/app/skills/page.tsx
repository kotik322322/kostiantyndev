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

const SkillsList = [
  { name: 'HTML', x: '35vw', y: '-25vh' },
  { name: 'CSS', x: '35vw', y: '-5vh' },
  { name: 'Javascript', x: '-35vw', y: '25vh' },
  { name: 'React', x: '-20vw', y: '5vh' },
  { name: 'NextJs', x: '5vw', y: '-32vh' },
  { name: 'Redux Toolkit', x: '15vw', y: '35vh' },
  { name: 'MongoDb', x: '-7vw', y: '27vh' },
  { name: 'ExpressJs', x: '-22vw', y: '-33vh' },
  { name: 'Tailwind CSS', x: '30vw', y: '18vh' },
  { name: 'Git', x: '-35vw', y: '-10vh' },
  { name: 'TypeScript', x: '20vw', y: '-20vh' },
];

const Skill = ({ name, x, y }: SkillProps) => {
  return (
    <motion.div
      className="absolute flex items-center justify-center rounded-full font-semibold text-sm bg-white py-1.5 px-3 text-black shadow-white cursor-pointer md:py-3 md:px-6 md:text-base"
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
    <div className="relative flex flex-col w-full min-h-screen p-8">
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

        {SkillsList.map(({ name, x, y }, key) => (
          <Skill name={name} x={x} y={y} key={name}/>
        ))}
      </div>
    </div>
  );
};

export default Skills;





// const Skillss = () => {
//   return (
//     <div className="">
//       <div className="absolute inset-0 bg-black -z-50" />
//       <Logo textColor="white" />
//       <ParticlesComponent config={darkConfig} />
//       <h2 className="absolute z-50 text-4xl font-bold text-center text-white top-20 right-1/2 translate-x-1/2 lg:text-8xl lg:top-0">
//         Skills
//       </h2>
//       <div className="relative flex items-center justify-center w-full h-[80%] lg:h-[100%] bg-circularLight lg:bg-circularLightLg rounded-full">
//         <motion.div className="flex items-center justify-center p-5 font-semibold text-black bg-white rounded-full cursor-pointer">
//           Web
//         </motion.div>
//         {[
//           { name: 'HTML', x: '35vw', y: '-25vh' },
//           { name: 'CSS', x: '35vw', y: '-5vh' },
//           { name: 'Javascript', x: '-35vw', y: '25vh' },
//           { name: 'React', x: '-20vw', y: '5vh' },
//           { name: 'NextJs', x: '5vw', y: '-32vh' },
//           { name: 'Redux Toolkit', x: '15vw', y: '35vh' },
//           { name: 'MongoDb', x: '-7vw', y: '27vh' },
//           { name: 'ExpressJs', x: '-22vw', y: '-33vh' },
//           { name: 'Tailwind CSS', x: '30vw', y: '18vh' },
//           { name: 'Git', x: '-35vw', y: '-10vh' },
//         ].map((skill) => (
//           <Skill key={skill.name} name={skill.name} x={skill.x} y={skill.y} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Skillss;
