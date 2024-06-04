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
  themeColor: string;
}

const socials = [
  { href: 'https://github.com/kotik322322', icon: FaGithubSquare, delay: 1 },
  { href: 'https://twitter.com/kotik322322', icon: FaTwitterSquare, delay: 1.2 },
  { href: 'https://facebook.com/kotik322322', icon: FaFacebookSquare, delay: 1.4 },
  { href: 'https://youtube.com', icon: FaInstagramSquare, delay: 1.6 },
];

const Socials = ({ themeColor }: SocialsProps) => {
  return (
    <div className="fixed bottom-0 left-8 flex flex-col items-center gap-y-3 ">
      {socials.map((socials) => (
        <motion.div
          key={socials.href}
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1, 1.5, 1] }}
          transition={{ type: 'spring', duration: 1, delay: socials.delay }}>
          <Link href={socials.href} className="text-inherit">
            <socials.icon className="text-2xl rounded-full hover:scale-125 transition-transform duration-200" />
          </Link>
        </motion.div>
      ))}

      <motion.div
        style={{ backgroundColor: themeColor }}
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
