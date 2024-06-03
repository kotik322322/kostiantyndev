'use client';
import React, { useEffect } from 'react';
import ParticlesComponent from '../components/ParticleComponent';
import darkConfig from '../data/darkConfig.json';
import Socials from '../components/Socials';
import spacemanImg from '../../../public/spaceman.png';
import Image from 'next/image';
import { motion, useAnimate } from 'framer-motion';
import Logo from '../components/Logo';


import codeImage from '../../../public/code.png';

const AboutPage = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const animateToTop = async () => {
      await animate(scope.current, { top: '10%', right: '5%' }, { duration: 1.5 });
      await animate(
        scope.current,
        { x: [0, -30, 0], y: [0, -30, 0] },
        { duration: 4, ease: 'easeInOut', repeat: Infinity },
      );
    };

    animateToTop();
  }, [animate, scope]);
  return (
    <div className="w-full min-h-screen relative flex flex-col justify-center items-center text-white overflow-hidden  ">
      <ParticlesComponent config={darkConfig} />
      <Logo textColor='#ffffff'/>
      {/* <h3 className='fixed top-10 left-4 text-[calc(4rem+5vw)] font-bold text-white/30'>About</h3> */}
      <motion.div ref={scope} className="absolute -bottom-[120px] right-0">
        <Image src={spacemanImg} width={65} height={100} alt="" />
      </motion.div>
      <Socials themeColor="#ffffff" />
      
      <Image src={codeImage} alt="" className='w-3/4 lg:w-1/2 max-h-screen'/>
      {/* <div className='flex flex-col items-center justify-center'>
        <Image src={codeImage} alt="" className='w-full'/>
        <div className='text-white px-8'>
          <h2 className='text-base text-white/75'>Hi, Im Kostiantyn Marfin</h2>
          <p>Im a Frontend Developer</p>
          <p>
            I specialize in crafting dynamic and user-friendly interfaces to enhance user
            interaction. My approach to front-end development is grounded in modern technologies and
            best practices.
          </p>
        </div>
      L</div> */}
      {/* <div className="w-[208px] px-6 py-9 italic text-sm border-2 border-white z-50 backdrop-blur-sm">
        <span className=' block mb-4'>
          As a web developer based in Limassol, I&apos;m passionate about crafting websites that are
          not just functional but also beautifully simple.
        </span>

        <span>
          {' '}
          Every line of code is a brushstroke to me, and each website is a canvas where I express my
          vision. Let&apos;s connect through social media and bring your ideas to life!
        </span>
      </div> */}
    </div>
  );
};

export default AboutPage;
