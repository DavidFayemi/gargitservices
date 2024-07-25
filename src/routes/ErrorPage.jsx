import { motion } from "framer-motion";
const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.7,
      duration: 0.5,
    },
  },
  exit: {
    x: "-100vw",
  },
};
const Error = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="flex flex-1 itemse-center justify-center flex-col min-h-full w-screen"
    >
      <h1 className="text-4xl opacity-60">Oops</h1>
      <p className="italic opacity-55">Sorry that page can&apos;t be found</p>
    </motion.div>
  );
};

export default Error;
