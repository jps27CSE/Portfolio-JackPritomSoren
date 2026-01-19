"use client";
import Image from "next/image";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { motion } from "framer-motion";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <motion.div
      className="glass rounded-2xl overflow-hidden backdrop-blur-xl h-full flex flex-col group cursor-pointer"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-52 md:h-72 overflow-hidden">
        <Image
          src={imgUrl}
          alt={`${title} - Project showcase by Jack Pritom Soren, Full Stack Software Engineer`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="flex gap-4">
            {previewUrl && (
              <Link
                href={previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-4 rounded-full hover:bg-white/20 transition-all duration-300 group/link"
              >
                <EyeIcon className="h-6 w-6 text-white group-hover/link:text-purple-300" />
              </Link>
            )}
            <Link
              href={gitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-4 rounded-full hover:bg-white/20 transition-all duration-300 group/link"
            >
              <CodeBracketIcon className="h-6 w-6 text-white group-hover/link:text-purple-300" />
            </Link>
          </div>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h5 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
          {title}
        </h5>
        <p className="text-gray-300 text-sm leading-relaxed flex-grow">
          {description}
        </p>

        <div className="flex gap-3 mt-4">
          {previewUrl && (
            <Link
              href={previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-purple-400 hover:text-purple-300 font-medium transition-colors duration-300"
            >
              Live Demo →
            </Link>
          )}
          <Link
            href={gitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 hover:text-white font-medium transition-colors duration-300"
          >
            View Code →
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
