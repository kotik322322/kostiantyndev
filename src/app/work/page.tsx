'use client';
import React from 'react';
import ParticlesComponent from '../components/ParticleComponent';
import darkConfig from '../data/darkConfig.json';
import Typed from 'typed.js';

import codeImage from '../../../public/code.png';
import Image from 'next/image';
import Logo from '../components/Logo';
import FeaturedProject from '../components/FeaturedProject';
import project1 from '../../../public/website1.jpg';

const WorkPage = () => {
  return (
    <div className="
    w-full 
    px-6">
      <ParticlesComponent config={darkConfig} />
      <Logo textColor="#000000" />

      <FeaturedProject
        title="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum."
        summary="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum."
        link={'/link'}
        type={'Featured Project'}
        img={project1}
        github={'https://github.com/kotik322322/next-nike-v2'}
      />
    </div>
  );
};

export default WorkPage;
