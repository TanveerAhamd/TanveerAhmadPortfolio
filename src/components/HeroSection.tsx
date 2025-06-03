import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { TypeAnimation } from 'react-type-animation';
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Links } from "@/data/links";

const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [shouldPlay, setShouldPlay] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (isInView) {
      setShouldPlay(true);
    }
  }, [isInView]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 relative overflow-hidden"
      ref={ref}
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-indigo-50 opacity-70"></div>

      {/* Animated background elements */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1,
        }}
      />

      <div className="section-container flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="flex flex-col max-w-xl space-y-6 text-center lg:text-left">
          <motion.span
            className="text-sm md:text-base font-medium text-primary opacity-90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-balance">👋</span>Hello! I'm
          </motion.span>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Tanveer{" "}
            <motion.span
              className="highlight-text"
              initial={{ backgroundSize: "0% 3px" }}
              animate={{ backgroundSize: "100% 3px" }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              .Ahmad
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {shouldPlay && (
              <TypeAnimation
                sequence={[
                  '🚀 MERN Stack Developer', 3000,
                  '👨‍💻 Junior Full-Stack Engineer', 4000,
                  '🎨 Figma to Code with React + Tailwind', 4000,
                  '🤖 Can build IoT Projects with Arduino', 4000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                cursor={true}
                className={`text-primary text-xl md:text-2xl font-semibold typing-cursor`}
                style={{
                  animationPlayState: paused ? "paused" : "running",
                }}
              />
            )}
          </motion.p>

          <motion.p
            className="text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Building elegant solutions to complex problems with modern
            technologies.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            {/* Buttons */}
            <motion.div className="flex flex-row items-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a href="#contact">
                  <Button className="min-w-[120px] py-3 text-base">Contact Me</Button>
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a href="#projects">
                  <Button variant="outline" className="min-w-[120px] py-3 text-base">
                    View Projects
                  </Button>
                </a>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <div className="flex items-center gap-4 ml-0 lg:ml-4 mt-4 lg:mt-0">
              {[Github, Linkedin, Mail].map((Icon, idx) => {
                const labels = ["GitHub", "LinkedIn", "Email"];
                const urls = [Links.github, Links.linkedin, Links.email];
                return (
                  <motion.a
                    key={idx}
                    href={urls[idx]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary transition-colors p-2"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={labels[idx]}
                  >
                    <Icon size={24} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Right Code Box */}
        <motion.div
          className="w-full max-w-md"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 1.2,
            type: "spring",
            stiffness: 100,
          }}
        >
          <div className="relative">
            <motion.div
              className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-primary/5 rounded-2xl"
              animate={{ rotate: [0, 6, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="relative bg-codebg border border-gray-200 p-6 rounded-2xl shadow-sm"
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex justify-between items-center mb-6">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="text-xs text-gray-500">developer.js</div>
              </div>
              <div className="space-y-2 font-mono text-sm">
                <div className="text-gray-500">{"// Software Engineer"}</div>
                <div><span className="text-pink-600">const</span> <span className="text-blue-600">developer</span> = <span className="text-orange-500">{"{"}</span></div>
                <div className="pl-6"><span className="text-purple-600">name</span>: <span className="text-green-600">'Tanveer | Ahmad'</span>,</div>
                <div className="pl-6"><span className="text-purple-600">skills</span>: [<span className="text-green-600">'React'</span>, <span className="text-green-600">'Node.js'</span>, <span className="text-green-600">'Express'</span>],</div>
                <div className="pl-6"><span className="text-purple-600">focuses</span>: [<span className="text-green-600">'Full-Stack'</span>, <span className="text-green-600">'UI/UX'</span>],</div>
                <div className="pl-6"><span className="text-purple-600">learning</span>: <span className="text-green-600">'Always'</span></div>
                <div><span className="text-orange-500">{"}"}</span>;</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
