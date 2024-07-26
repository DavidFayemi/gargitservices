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
const About = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h1 className="text-5xl font-bold mb-3 text-amber-600">
        About gargitservices
      </h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis nam vel
        magni. Neque totam voluptates beatae, error ab in, quam ipsa sint qui
        obcaecati natus amet placeat cupiditate odit minus assumenda nisi.
        Cupiditate, ex doloremque. Voluptatem, vero. Accusantium odit minima
        sint provident in nihil esse eius libero quam totam? Porro nisi maxime
        unde quae nobis, iure veritatis debitis molestiae eligendi dolorem
        consectetur et eveniet perspiciatis earum. Inventore illo praesentium
        mollitia facere possimus fugit obcaecati enim ad pariatur! Totam
        corporis minus nam numquam at est rerum in ab, autem eligendi dolor
        nesciunt minima mollitia, aliquid fuga libero, a maxime! Ullam, quos.
      </p>
    </motion.div>
  );
};

export default About;
