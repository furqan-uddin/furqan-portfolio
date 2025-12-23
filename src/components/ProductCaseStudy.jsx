import { motion } from "framer-motion";

function ProductCaseStudy({ title, sections }) {
  return (
    <section className="section-wrapper bg-surface dark:bg-batBlack">
      {/* Vertical Guide Line (Desktop only) */}
      <div
        className="hidden md:block absolute inset-y-0 left-1/2 -translate-x-1/2 w-px
                      bg-gradient-to-b from-slate-200 via-slate-100 to-transparent
                      dark:from-white/10 dark:via-white/5 dark:to-transparent"
      />

      <div className="container-custom relative z-10 max-w-4xl">
        <div className="mb-20">
          <motion.span
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4 px-3 py-1 rounded-md
                       bg-batBlue dark:bg-batYellow
                       text-[10px] font-black uppercase tracking-[0.2em]
                       text-white dark:text-batBlack"
          >
            Case Study
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-section"
          >
            {title}
          </motion.h2>
        </div>

        {/* ===== Timeline ===== */}
        <div className="space-y-16">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true, margin: "-40px" }}
              className="relative pl-10 md:pl-16"
            >
              {/* Timeline Node */}
              <div className="absolute left-0 top-1 flex flex-col items-center">
                <div className="w-3.5 h-3.5 rounded-full bg-batBlue dark:bg-batYellow" />
                <div className="w-px h-full bg-slate-200 dark:bg-white/10 mt-1" />
              </div>

              <div className="glass-card p-7 md:p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs font-black text-slate-300 dark:text-slate-600 tracking-tight">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white">
                    {section.heading}
                  </h3>
                </div>

                <div className="text-sm md:text-base leading-relaxed text-slate-600 dark:text-slate-400">
                  {section.content}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ===== Bottom Divider ===== */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 flex justify-center"
        >
          <div className="h-1 w-10 rounded-full bg-slate-200 dark:bg-white/10" />
        </motion.div>
      </div>
    </section>
  );
}

export default ProductCaseStudy;
