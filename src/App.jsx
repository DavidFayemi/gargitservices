import { AnimatePresence } from "framer-motion";
import Nav from "./components/Nav";
import Home from "./routes/Home";
import About from "./routes/About";
import Projects from "./routes/Projects";
import Resume from "./routes/Resume";
import Skills from "./routes/Skills";
import ErrorPage from "./routes/ErrorPage";

import { Route, Routes, useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();
  return (
    <div className="flex flex-col min-h-screen bg-neutral-950 sm:p-10 text-gray-100 text-xl min-w-full p-5">
      <Nav />
      <AnimatePresence mode="sync">
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;
