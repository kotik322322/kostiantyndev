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
import Project from '../components/Project';

const WorkPage = () => {
  return (
    <div
      className="
      w-full h-auto p-8">
      <ParticlesComponent config={darkConfig} />
      <Logo textColor="#ffffff" />

      <div className="grid grid-cols-12 gap-12 gap-x-0 lg:gap-x-16 mt-10">
        <div className="col-span-12">
          <FeaturedProject
            title="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum."
            summary="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum."
            link={'/link'}
            type={'Featured Project'}
            img={project1}
            github={'https://github.com/kotik322322/next-nike-v2'}
          />
        </div>
        <div className="col-span-12 lg:col-span-6">
          <Project
            title="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum."
            summary="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum."
            link={'/link'}
            type={'Website'}
            img={project1}
            github={'https://github.com/kotik322322/next-nike-v2'}
          />
        </div>
        <div className="col-span-12 lg:col-span-6">
          <Project
            title="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum."
            summary="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum."
            link={'/link'}
            type={'Website'}
            img={project1}
            github={'https://github.com/kotik322322/next-nike-v2'}
          />
        </div>
      </div>
    </div>
  );
};

export default WorkPage;
