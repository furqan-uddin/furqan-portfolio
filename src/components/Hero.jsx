import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ReactTyped } from "react-typed";

function Hero() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.15 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-batBlack">
      {/* Background Ambient Glows */}
      <div className="bg-glow top-[-120px] left-[-120px] w-[420px] h-[420px] bg-batBlue/20 dark:bg-batYellow/20" />
      <div className="bg-glow bottom-[-120px] right-[-120px] w-[360px] h-[360px] bg-purple-500/10 dark:bg-batBlue/20" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="container-custom pt-28 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center"
      >
        {/* Left Content Side */}
        <div className="text-center lg:text-left">
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 px-3 py-1.5 mb-6
                       rounded-full bg-slate-100 dark:bg-white/5
                       border border-slate-200/60 dark:border-white/10"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-batBlue dark:bg-batYellow opacity-60 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-batBlue dark:bg-batYellow" />
            </span>
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-slate-500 dark:text-batYellow">
              Built with care • Shipped with purpose
            </span>
          </motion.div>

          <motion.h1 variants={item} className="heading-hero">
            Hi👋,
            <div className="block">
              {" "}
              {/* Moves the following line to its own row */}
              <span className="text-slate-900 dark:text-white">I’m </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-batBlue to-indigo-500 dark:from-batYellow dark:to-yellow-300">
                <ReactTyped
                  strings={["Mohammad Furqanuddin;"]}
                  typeSpeed={125}
                  backSpeed={50}
                  loop={true}
                  showCursor={true}
                  cursorChar="|"
                />
              </span>
            </div>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 text-lg sm:text-xl md:text-2xl font-semibold text-slate-800 dark:text-slate-200"
          >
            Software Developer
          </motion.p>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl mx-auto lg:mx-0 text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-400"
          >
            I build modern,{" "}
            <span className="font-medium text-slate-900 dark:text-white">
              scalable
            </span>{" "}
            and thoughtful web applications using the MERN stack, integrating AI
            where it adds genuine value.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Link
              to="/projects"
              className="btn-primary px-8 py-4 rounded-xl text-base"
            >
              View Projects →
            </Link>

            <Link
              to="/contact"
              className="px-8 py-4 rounded-xl font-bold border border-slate-200 dark:border-white/10
                         text-slate-900 dark:text-white
                         hover:bg-slate-50 dark:hover:bg-white/5
                         transition-all active:scale-95 text-center"
            >
              Let's Talk
            </Link>
          </motion.div>
        </div>

        {/* Right Visual Side - System Architecture Mockup */}
        <motion.div
          variants={item}
          className="flex justify-center items-center relative scale-75 sm:scale-90 lg:scale-100"
        >
          {/* Abstract Background Grid */}
          <div className="absolute inset-0 flex items-center justify-center opacity-20 dark:opacity-10 pointer-events-none">
            <div className="w-[500px] h-[500px] border border-slate-200 dark:border-white/10 rounded-full" />
            <div className="absolute w-[350px] h-[350px] border border-slate-200 dark:border-white/10 rounded-full" />
            <div className="absolute w-[200px] h-[200px] border border-slate-200 dark:border-white/10 rounded-full" />
          </div>

          {/* Main Visual Container */}
          <div className="relative w-72 sm:w-80 h-[360px] sm:h-[420px] lg:h-[450px] flex items-center justify-center">
            {/* Central Core (AI/Logic Symbol) */}
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 20px rgba(37,99,235,0.2)",
                  "0 0 40px rgba(37,99,235,0.4)",
                  "0 0 20px rgba(37,99,235,0.2)",
                ],
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="relative z-20 w-32 h-32 glass-card flex items-center justify-center rounded-[2.5rem] border border-batBlue/30 dark:border-batYellow/30"
            >
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="w-16 h-16 border-t-2 border-r-2 border-batBlue dark:border-batYellow rounded-full"
                />
                <div className="absolute inset-0 flex items-center justify-center font-black text-2xl text-batBlue dark:text-batYellow">
                  F
                </div>
              </div>
            </motion.div>

            {/* Floating Tech Nodes */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-0 glass-card p-4 flex items-center gap-3 shadow-xl"
            >
              <div className="w-2 h-2 rounded-full bg-batBlue dark:bg-batYellow animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                MERN_STACK
              </span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute bottom-12 left-0 glass-card p-4 flex items-center gap-3 shadow-xl"
            >
              <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                SYSTEM_LOGIC
              </span>
            </motion.div>

            {/* Connecting System Lines */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 320 450"
            >
              <motion.path
                d="M160 100 L160 50 L240 50"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-slate-200 dark:text-white/10"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              />
              <motion.path
                d="M160 350 L160 400 L80 400"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-slate-200 dark:text-white/10"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                  delay: 1.5,
                }}
              />
            </svg>

            {/* Vertical Scanning Pulse */}
            <motion.div
              animate={{ top: ["10%", "90%", "10%"] }}
              transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
              className="absolute left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent via-batBlue/50 dark:via-batYellow/50 to-transparent"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
