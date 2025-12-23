import { motion } from "framer-motion";

function AboutSection() {
  return (
    <section className="section-wrapper bg-white dark:bg-batBlack">
    
      <div className="bg-glow top-1/2 left-[-120px] -translate-y-1/2 w-[320px] h-[320px] bg-batBlue/10 dark:bg-batYellow/10" />

      <div className="container-custom relative z-10">
        
        <motion.span
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 mb-4 text-xs font-bold uppercase tracking-widest text-batBlue dark:text-batYellow"
        >
          <span className="h-[2px] w-6 bg-batBlue dark:bg-batYellow" />
          The Story
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="heading-section mb-10"
        >
          About <span className="text-slate-400 dark:text-slate-500">Me</span>
        </motion.h2>

        
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          viewport={{ once: true }}
          className="max-w-3xl space-y-6 text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-400"
        >
          <p>
            I’m{" "}
            <span className="font-semibold text-slate-900 dark:text-white">
              Mohammad Furqanuddin
            </span>
            , a Computer Science student currently pursuing my B.Tech at{" "}
            <span className="font-medium text-slate-800 dark:text-slate-200">
              Shri Vaishnav Vidyapeeth Vishwavidyalaya, Indore
            </span>
            .
          </p>

          <p className="pl-4 border-l-2 border-slate-200 dark:border-white/10">
            I work primarily with the{" "}
            <span className="font-semibold text-batBlue dark:text-batYellow">
              MERN stack
            </span>{" "}
            and integrate AI into web applications where it adds genuine value.
            I focus less on showcasing technologies and more on building
            software that feels{" "}
            <span className="italic text-slate-800 dark:text-slate-200">
              purposeful
            </span>
            .
          </p>

          <p>
            Currently, I’m focused on strengthening my fundamentals and
            understanding systems deeply. My goal is to grow into a developer
            who takes{" "}
            <span className="font-medium italic text-slate-900 dark:text-white">
              ownership of products
            </span>{" "}
            — not just tasks.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;
