import { motion } from "framer-motion";
import illustration from "./../assets/illustration.png";
import facebook from "./../assets/facebook.svg";
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
const Body = () => {
  return (
    <motion.div
      className="flex flex-col sm:flex-row items-start justify-end h-full mt-8"
      variants={containerVariants}
      initial="hidden"
      exit="exit"
      animate="visible"
    >
      <div className="">
        <h2 className="text-5xl font-bold mb-3 text-amber-600">Shallu G.</h2>
        <h2 className="text-5xl font-bold mb-3">
          Fullstack Web And App Developer
        </h2>
        <p className="text-gray-200 opacity-60">
          Quality websites and apps with fast deliverables
        </p>
        <div className="my-4 mt-20 flex flex-col sm:flex-row items-center">
          <a
            href=""
            className="py-2 px-3 my-3 bg-amber-600 transition-colors rounded-md hover:bg-amber-500 sm:w-auto w-full"
            target="_blank"
          >
            E-mail me
          </a>
          <a
            href=""
            className="py-2 px-3 mx-2 my-3 bg-amber-600 transition-colors rounded-md hover:bg-amber-500 sm:w-auto w-full"
            target="_blank"
          >
            <img src={facebook} alt="F" className="w-5 inline text-center" />
            Facebook
          </a>
        </div>
      </div>
      <motion.img
        src={illustration}
        alt="illustration"
        className="sm:w-2/5 w-full"
        initial={{ opacity: 0, x: "100vw" }}
        transition={{ delay: 1, type: "tween", duration: 0.4 }}
        animate={{ opacity: 1, x: 0 }}
      />
    </motion.div>
  );
};

export default Body;
