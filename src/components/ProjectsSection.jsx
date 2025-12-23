import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

function ProjectsSection() {
  return (
    <section className="section-wrapper bg-white dark:bg-batBlack">
      <div className="bg-glow top-1/4 left-[-120px] w-[420px] h-[420px] bg-batBlue/10 dark:bg-batYellow/10" />

      <div className="container-custom relative z-10">
        <div className="mb-20 text-center">
          <motion.span
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-6 px-4 py-1.5 rounded-full
                       bg-slate-100 dark:bg-white/5
                       border border-slate-200/60 dark:border-white/10
                       text-xs font-bold uppercase tracking-[0.3em]
                       text-batBlue dark:text-batYellow"
          >
            Portfolio
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-section"
          >
            Featured{" "}
            <span className="text-slate-400 dark:text-slate-500">Work</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            viewport={{ once: true }}
            className="mt-6 max-w-2xl mx-auto text-base md:text-lg
                       text-slate-600 dark:text-slate-400"
          >
            A selection of projects where I focused on clarity, scalability, and
            solving real-world problems.
          </motion.p>
        </div>

        {/* ===== Projects Grid ===== */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default ProjectsSection;
