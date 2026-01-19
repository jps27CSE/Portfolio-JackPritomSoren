import { motion } from "framer-motion";

const TabButton = ({ active, selectTab, children }) => {
  return (
    <motion.button
      onClick={selectTab}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative px-6 py-3 rounded-full font-semibold transition-all duration-300 overflow-hidden ${
        active
          ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
          : "glass text-gray-300 hover:text-white hover:bg-white/10"
      }`}
    >
      <span className="relative z-10">{children}</span>
      {!active && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 hover:opacity-100 transition-opacity duration-300"
          layoutId="activeTab"
        />
      )}
    </motion.button>
  );
};

export default TabButton;
