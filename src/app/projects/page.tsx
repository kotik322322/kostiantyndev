'use client';
import React from 'react';
import ParticlesComponent from '../components/ParticleComponent';
import darkConfig from '../data/darkConfig.json';
import Logo from '../components/Logo';
import FeaturedProject from '../components/FeaturedProject';
import project1 from '../../../public/website1.jpg';
import project2 from '../../../public/website2.jpg';
import Project from '../components/Project';

const ProjectsPage = () => {
  return (
    <div className="w-full h-auto p-8 ">
      <div className="bg-black -z-50 absolute top-0 bottom-0 left-0 right-0" />

      <ParticlesComponent config={darkConfig} />
      <Logo textColor="#ffffff" />

      <div className="grid grid-cols-12 gap-12 gap-x-0 lg:gap-x-16 mt-10">
        <div className="col-span-12">
          <FeaturedProject
            title="Nike"
            summary="For my portfolio, I developed a mock Nike website using Next.js, Redux Toolkit, MongoDB, TailwindCSS, Framer Motion, and TypeScript. This project showcases my ability to create responsive, dynamic web applications with a sleek design and smooth animations. It demonstrates my skills in full-stack development, state management, and modern frontend technologies."
            link={'https://github.com/kotik322322/next-nike-v2'}
            type={'Featured Project'}
            img={project1}
            github={'https://github.com/kotik322322/next-nike-v2'}
          />
        </div>
        <div className="col-span-12 lg:col-span-6">
          <Project
            title="Portfolio Website"
            summary="This is my portfolio website project. It showcases my skills and expertise in web development using Next.js, TailwindCSS, Framer Motion, and TypeScript. The site is designed to provide a dynamic and interactive user experience while highlighting my professional capabilities."
            link={'https://github.com/kotik322322/kostiantyndev'}
            type={'Project'}
            img={project2}
            github={'https://github.com/kotik322322/kostiantyndev'}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
