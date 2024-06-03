import React from 'react';
import Link from 'next/link';
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({ weight:"400", subsets: ['latin'],});

interface LogoProps {
  textColor: string;
}

const Logo = ({ textColor }: LogoProps) => {
  return (
    <Link href={'/'} style={{color:textColor}} className={`${pacifico.className} absolute top-7 text-xl left-20  font-bold`}>
      KD
    </Link>
  );
};

export default Logo;
