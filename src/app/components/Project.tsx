import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoLogoGithub } from 'react-icons/io';

interface ProjectProps {
  type: string;
  title: string;
  summary: string;
  img: StaticImageData;
  link: string;
  github: string;
}

const Project = ({ title, type, summary, img, link, github }: ProjectProps) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-5 lg:p-9  relative">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl" />

      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg">
        <Image
          src={img}
          alt={title}
          className="w-full h-auto hover:scale-105 transition-all duration-500"
          priority
        />
      </Link>

      <div className="w-full flex flex-col gap-y-2 items-start justify-between mt-4">
        <span className="text-primary font-medium text-base lg:text-xl">{type}</span>
        <Link href={link} target="_blank" className="hover:bg:underline underline-offset-2">
          <h2 className=" w-full text-left text-lg lg:text-4xl font-semibold lg:font-bold">
            {title}
          </h2>
        </Link>
        <p className=" font-medium text-dark text-sm lg:text-base">{summary}</p>

        <div className="w-full mt-2 flex items-center justify-between">
          <Link href={link} target="_blank" className="text-lg font-semibold underline">
            Visit
          </Link>
          <Link
            href={github}
            target="_blank"
            className="hover:-translate-y-1 transition-all duration-200">
            <IoLogoGithub className="text-3xl " />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Project;
