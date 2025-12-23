import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

function ProjectCard({ project }) {
  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.45, ease: "easeOut" },
        },
      }}
      className="group flex flex-col h-full glass-card overflow-hidden"
    >
      <div className="relative aspect-video overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-slate-200 dark:bg-batBlack flex items-center justify-center">
            <span className="text-slate-400 dark:text-slate-600 text-sm">
              Project Preview
            </span>
          </div>
        )}

        <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      <div className="flex flex-col flex-grow p-6 md:p-7">
        <div className="flex items-start justify-between gap-4 mb-4">
          <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
            {project.title}
          </h3>

          <div className="flex items-center gap-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub repository"
              className="w-9 h-9 flex items-center justify-center rounded-full
                         bg-white dark:bg-batBlack
                         border border-slate-200/60 dark:border-white/10
                         text-slate-600 dark:text-slate-400
                         hover:text-batBlue dark:hover:text-batYellow
                         transition-colors"
            >
              <FaGithub size={16} />
            </a>

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live demo"
                className="w-9 h-9 flex items-center justify-center rounded-full
                           bg-batBlue dark:bg-batYellow
                           text-white dark:text-batBlack
                           transition-transform active:scale-95"
              >
                <FaExternalLinkAlt size={14} />
              </a>
            )}
          </div>
        </div>

        <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wide
                         rounded-md
                         bg-slate-100 dark:bg-white/5
                         text-slate-600 dark:text-slate-400
                         border border-slate-200/60 dark:border-white/10"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
