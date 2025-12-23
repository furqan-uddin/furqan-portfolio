import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
  
      <div className="bg-glow top-[-120px] left-[-120px] w-[420px] h-[420px] bg-batBlue/20 dark:bg-batYellow/20" />
      <div className="bg-glow bottom-[-120px] right-[-120px] w-[360px] h-[360px] bg-purple-500/10 dark:bg-batBlue/20" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="container-custom pt-28 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center"
      >
        
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
            Hi, I’m{" "}
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-batBlue to-indigo-500 dark:from-batYellow dark:to-yellow-200">
              Mohammad Furqanuddin
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 text-lg sm:text-xl md:text-2xl font-semibold text-slate-800 dark:text-slate-200"
          >
            MERN Stack Developer
            <span className="px-2 text-slate-400 dark:text-slate-600">/</span>
            AI Enthusiast
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
              Contact Me
            </Link>
          </motion.div>
        </div>

        
        <motion.div
          variants={item}
          className="hidden lg:flex justify-center items-center relative"
        >
          <div className="absolute w-72 h-72 rounded-full bg-batBlue/10 dark:bg-batYellow/10 blur-2xl" />

          <div
            className="relative w-72 h-72 rounded-3xl bg-white dark:bg-batGray/40
                          border border-slate-200/60 dark:border-white/5
                          flex items-center justify-center overflow-hidden"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-3"
            >
              <div
                className="w-16 h-16 rounded-2xl bg-white dark:bg-white/5
                              border border-slate-200/60 dark:border-white/10
                              flex items-center justify-center shadow-sm text-2xl"
              >
                ⚡
              </div>
              <p className="text-sm font-medium text-slate-400 dark:text-slate-500">
                Visualizing Ideas
              </p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
