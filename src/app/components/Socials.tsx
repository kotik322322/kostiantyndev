'use client';
import { color, motion } from 'framer-motion';
import React, { useState } from 'react';
import Link from 'next/link';
import {
  FaGithubSquare,
  FaTwitterSquare,
  FaFacebookSquare,
  FaInstagramSquare,
} from 'react-icons/fa';

interface SocialsProps {
  themeColor: string
}

const Socials = ({themeColor}:SocialsProps) => {
  return (
    <div className="fixed bottom-0 left-8 flex flex-col items-center gap-y-3 ">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: 'spring', duration: 1, delay: 1 }}>
        <Link style={{ color: 'inherit' }} href={'https://github.com/kotik322322'}>
          <FaGithubSquare className="text-2xl rounded-full" />
        </Link>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: 'spring', duration: 1, delay: 1.2 }}>
        <Link href={'https://twitter.com/kotik322322'} style={{ color: 'inherit' }}>
          <FaTwitterSquare className="text-2xl rounded-full" />
        </Link>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: 'spring', duration: 1, delay: 1.4 }}>
        <Link href={'https://facebook.com/kotik322322'} style={{ color: 'inherit' }}>
          <FaFacebookSquare className="text-2xl rounded-full" />
        </Link>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: 'spring', duration: 1, delay: 1.6 }}>
        <Link href={'https://youtube.com'} style={{ color: 'inherit' }}>
          <FaInstagramSquare className="text-2xl rounded-full" />
        </Link>
      </motion.div>

      <motion.div
      style={{backgroundColor:themeColor}}
        className={`w-[2px]`}
        initial={{
          height: 0,
        }}
        animate={{
          height: '6rem',
        }}
        transition={{
          type: 'spring',
          duration: 1,
          delay: 0.8,
        }}
      />
    </div>
  );
};

export default Socials;
