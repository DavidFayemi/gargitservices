import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: "-100vh" }}
      transition={{
        delay: 0.25,
        duration: 0.4,
        type: "spring",
        stiffness: 108,
      }}
      animate={{ opacity: 1, y: 0 }}
      className="text-2xl text-gray-100 flex flex-row mb-4 items-center"
    >
      <Link to="/">
        <h1 className="text-3xl font-semibold">
          <span className="">gargit</span>
          <span className="text-amber-600">services</span>
        </h1>
      </Link>
      <nav className="flex items-center justify-around flex-1 text-xl">
        <ul className="flex justify-evenly flex-1">
          <li className="capitalize hover:text-amber-600 hover:underline">
            <Link to="/about">About</Link>
          </li>
          <li className="capitalize hover:text-amber-600 hover:underline">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="capitalize hover:text-amber-600 hover:underline">
            <Link to="/skills">Skills</Link>
          </li>
          <li className="capitalize hover:text-amber-600 hover:underline">
            <Link to="/resume">Resume</Link>
          </li>
        </ul>
        <a
          href="https://www.freelancer.com/users/l.php?url=https%3A%2F%2Fwww.freelancer.com%2Fu%2Fgargitservices&sig=76d62ea2dc38e460d4b3b099aaf0dd5f718163a60efde51c813ad3207bf17a67"
          className="py-2 px-3 bg-amber-600 transition-colors rounded-md hover:bg-amber-500"
          target="_blank"
        >
          Hire me
        </a>
      </nav>
    </motion.div>
  );
};

export default Nav;
