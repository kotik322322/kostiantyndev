'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

interface CustomLinkProps {
  href: string;
  title: string;
  className?: string;
}

export const CustomLink = ({ href, title, className }: CustomLinkProps) => {
  const pathName = usePathname();
  return (
    <motion.div 
    initial={{ rotate: 45, top: '25%', right: -100 }}
    animate={{
      top: '6%',
      right: '15px',
  
      transition: { duration: 1, delay: 0.5, type: 'spring' },
    }}
    whileHover={{ scale: 1.1 }}
    className="absolute font-bold text-base z-50 w-20 flex justify-center items-center"
    >
      <Link href={href} className={`${className} relative group font-semibold`}>
        {title}
        <span
          className={`h-[1px] inline-block w-0  bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300`}>
          &nbsp;
        </span>
      </Link>
    </motion.div>
  );
};
