import { motion } from "framer-motion";

export const LoadingSpinner = () => (
  <div className="flex items-center justify-start mt-2 mb-4">
    <div className="flex space-x-2">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: ["0%", "50%", "0%"],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            repeatDelay: 0.2,
            delay: i * 0.2,
          }}
          className="w-2 h-2 bg-blue-500 rounded-full"
        />
      ))}
    </div>
    <span className="ml-2 text-sm text-zinc-500 dark:text-zinc-400">
      Assistant is typing...
    </span>
  </div>
);
