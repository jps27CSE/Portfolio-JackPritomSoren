import { motion } from "framer-motion";

const ProjectTag = ({ name, onClick, isSelected }) => {
  return (
    <motion.button
      onClick={() => onClick(name)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
        isSelected
          ? "text-white shadow-lg shadow-violet-500/20"
          : "glass text-gray-400 hover:text-white border border-white/5 hover:border-violet-500/30"
      }`}
    >
      {isSelected && (
        <motion.div
          layoutId="activeTag"
          className="absolute inset-0 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-xl border border-violet-500/30"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
      <span className="relative z-10">{name}</span>
    </motion.button>
  );
};

export default ProjectTag;
