
import { motion } from "framer-motion";

const ProjectTag = ({ name, onClick, isSelected }) => {
  return (
    <motion.button
      onClick={() => onClick(name)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`px-6 py-3 rounded-full text-lg font-semibold cursor-pointer transition-all duration-300 ${
        isSelected
          ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg border-2 border-purple-400"
          : "glass text-gray-300 hover:text-white border-2 border-gray-600 hover:border-purple-400"
      }`}
    >
      {name}
    </motion.button>
  );
};

export default ProjectTag;
