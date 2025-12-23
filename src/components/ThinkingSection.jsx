import { motion } from "framer-motion";
import { FaLightbulb, FaCode, FaUserFriends, FaHeart } from "react-icons/fa";

const principles = [
  {
    icon: FaLightbulb,
    title: "Start with Why",
    description:
      "I begin by understanding why something should exist before deciding how to build it. Solving the right problem matters more than adding features.",
  },
  {
    icon: FaCode,
    title: "Clarity over Cleverness",
    description:
      "I value readable, explainable code over solutions that only look impressive. If I can’t explain it clearly, it isn’t complete.",
  },
  {
    icon: FaUserFriends,
    title: "Responsible Use of Tools",
    description:
      "I use libraries when they make sense, but I ensure I understand what I’m using and why. Learning is responsibility in code.",
  },
  {
    icon: FaHeart,
    title: "Empathy in Engineering",
    description:
      "Good software respects users and developers alike. I care about UX, edge cases, and long-term maintainability.",
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

function ThinkingSection() {
  return (
    <section className="section-wrapper bg-white dark:bg-batBlack">
      <div className="bg-glow top-[-120px] right-[-120px] w-[420px] h-[420px] bg-batBlue/10 dark:bg-batYellow/10" />

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 mb-4 text-xs font-bold uppercase tracking-widest text-batBlue dark:text-batYellow"
            >
              <span className="h-[2px] w-6 bg-batBlue dark:bg-batYellow" />
              Philosophy
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="heading-section"
            >
              How I Think About{" "}
              <span className="block text-slate-400 dark:text-slate-500">
                Building Software
              </span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-sm text-base md:text-lg text-slate-600 dark:text-slate-400 lg:text-right"
          >
            Principles that guide how I design, build, and refine software.
          </motion.p>
        </div>

        {/* ===== Principles Grid ===== */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {principles.map((p, index) => (
            <motion.div
              key={index}
              variants={item}
              className="glass-card p-7 flex flex-col gap-5"
            >
              <div className="w-12 h-12 rounded-xl bg-white dark:bg-batGray/50 border border-slate-200/60 dark:border-white/10 flex items-center justify-center text-batBlue dark:text-batYellow text-xl">
                <p.icon />
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {p.title}
                </h3>
                <p className="text-sm md:text-base leading-relaxed text-slate-600 dark:text-slate-400">
                  {p.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ===== Personal Note ===== */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 glass-card p-8 border-l-4 border-batBlue dark:border-batYellow"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-3">
            Beyond the IDE
          </p>

          <p className="text-base md:text-lg italic leading-relaxed text-slate-800 dark:text-slate-200">
            “Outside of software, I enjoy playing cricket and writing poetry.
            These interests keep me grounded and creative — a balance that
            quietly reflects in every product I build.”
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default ThinkingSection;
