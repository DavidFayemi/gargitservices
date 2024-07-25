import { motion } from "framer-motion";
import illustration from "./../assets/illustration.png";
import facebook from './../assets/facebook.svg'
const Body = () => {
  return (
    <motion.div className="flex flex-row items-start justify-end h-full mt-8">
      <div className="">
        <h2 className="text-5xl font-bold mb-3">Shallu G.</h2>
        <h2 className="text-5xl font-bold mb-3">
          Fullstack Web And App Developer
        </h2>
        <p className="text-gray-200 opacity-60">
          Quality websites and apps with fast deliverables
        </p>
        <div className="my-4 mt-20">
          <a
            href=""
            className="py-2 px-3 bg-amber-600 transition-colors rounded-md hover:bg-amber-500"
            target="_blank"
          >
            E-mail me
          </a>
          <a
            href=""
            className="py-2 px-3 mx-2 bg-amber-600 transition-colors rounded-md hover:bg-amber-500"
            target="_blank"
          >
            <img src={facebook} alt="" className="w-5 inline"/>
             Facebook
          </a>
        </div>
      </div>
      <img src={illustration} alt="illustration" className="w-2/5" />
    </motion.div>
  );
};

export default Body;
