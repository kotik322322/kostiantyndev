import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoLogoGithub } from 'react-icons/io';

interface FeaturedProjectProps {
  type: string;
  title: string;
  summary: string;
  img: StaticImageData;
  link: string;
  github: string;
}

const FeaturedProject = ({ type, title, summary, img, link, github }: FeaturedProjectProps) => {
  return (
    <article className="w-full p-5 lg:p-9 flex flex-col lg:flex-row items-center justify-between gap-y-3 relative rounded-3xl rounded-br-2xl border border-solid border-dark bg-light shadow-2xl">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl" />

      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg">
        <Image
          src={img}
          alt={title}
          className="w-full h-auto hover:scale-105 transition-all duration-500"
        />
      </Link>

      <div className="w-full flex flex-col gap-y-2 xl:gap-y-8 items-start justify-between pl-2 lg:pl-6 ">
        <span className="text-primary font-medium text-base lg:text-lg xl:text-xl">{type}</span>
        <Link href={link} target="_blank" className="hover:underline underline-offset-2">
          <h2 className="w-full text-left text-lg lg:text-3xl xl:text-4xl font-semibold lg:font-bold ">
            {title}
          </h2>
        </Link>
        <p className=" font-medium text-dark text-sm lg:text-base">{summary}</p>

        <div className="mt-3 flex items-center justify-center gap-x-4">
          <Link
            href={github}
            target="_blank"
            className="hover:-translate-y-1 transition-all duration-200">
            <IoLogoGithub className="text-[32px]" />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="rounded-lg bg-dark text-light py-1 px-4 lg:px-10 text-base lg:text-lg font-semibold hover:-translate-y-1 transition-all duration-200">
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

export default FeaturedProject;
