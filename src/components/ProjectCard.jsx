"use client";
import Image from "next/image";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTiltRef } from "@/lib/utils";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  const { ref, handleMouseMove, handleMouseLeave } = useTiltRef(8);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="glass rounded-2xl overflow-hidden h-full flex flex-col group cursor-pointer transition-all duration-300"
      style={{ transformStyle: 'preserve-3d' }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-52 md:h-60 overflow-hidden" style={{ transformStyle: 'preserve-3d' }}>
        <Image
          src={imgUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07070d]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-fuchsia-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
          {previewUrl && (
            <Link href={previewUrl} target="_blank" rel="noopener noreferrer" className="glass p-3.5 rounded-full hover:bg-white/15 transition-all duration-300 hover:scale-110 group/link">
              <EyeIcon className="h-5 w-5 text-white group-hover/link:text-violet-300" />
            </Link>
          )}
          <Link href={gitUrl} target="_blank" rel="noopener noreferrer" className="glass p-3.5 rounded-full hover:bg-white/15 transition-all duration-300 hover:scale-110 group/link">
            <CodeBracketIcon className="h-5 w-5 text-white group-hover/link:text-violet-300" />
          </Link>
        </div>

        <div className="absolute top-3 right-3 glass px-3 py-1 rounded-full text-xs text-white/80">
          {title.includes("NPM") ? "CLI" : title.includes("VS Code") ? "Extension" : title.includes("MarkTap") ? "Extension" : "Web App"}
        </div>
      </div>

      <div className="p-5 flex flex-col flex-grow" style={{ transformStyle: 'preserve-3d' }}>
        <h5 className="text-lg font-bold text-white mb-2 group-hover:text-violet-300 transition-colors duration-300">{title}</h5>
        <p className="text-gray-400 text-sm leading-relaxed flex-grow">{description}</p>

        <div className="flex gap-4 mt-4 pt-4 border-t border-white/5">
          {previewUrl && (
            <Link href={previewUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-violet-400 hover:text-violet-300 font-medium transition-all duration-300 hover:translate-x-1 inline-flex items-center gap-1">
              Live Demo <span className="text-xs">→</span>
            </Link>
          )}
          <Link href={gitUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white font-medium transition-all duration-300 inline-flex items-center gap-1">
            View Code <span className="text-xs">→</span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
