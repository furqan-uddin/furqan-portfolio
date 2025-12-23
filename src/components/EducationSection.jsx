import { motion } from "framer-motion";
import svvvLogo from "../assets/svvvLogo.png";
import mpBoardLogo from "../assets/mpBoardLogo.png";

function EducationSection() {
  const timelineData = [
    {
      title: "B.Tech in Computer Science & Engineering",
      institution: "Shri Vaishnav Vidyapeeth Vishwavidyalaya, Indore",
      period: "2022 – Present",
      score: "CGPA: 8.086",
      logo: svvvLogo,
      highlight: true,
    },
    {
      title: "Higher Secondary (12th)",
      institution: "Saint Umar Higher Secondary School, Indore",
      period: "MP Board",
      score: "85.2%",
      logo: mpBoardLogo,
    },
    {
      title: "Secondary (10th)",
      institution: "Saint Umar Higher Secondary School, Indore",
      period: "MP Board",
      score: "87%",
      logo: mpBoardLogo,
    },
  ];

  return (
    <section className="section-wrapper bg-white dark:bg-batBlack">
      
      <div className="bg-glow top-0 right-[-120px] w-[420px] h-[420px] bg-batBlue/10 dark:bg-batYellow/10" />

      <div className="container-custom relative z-10">
      
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-section"
          >
            Academic{" "}
            <span className="text-slate-400 dark:text-slate-500">Journey</span>
          </motion.h2>

          <div className="mx-auto mt-4 h-1.5 w-16 rounded-full bg-batBlue dark:bg-batYellow" />
        </div>

        {/* TIMELINE */}
        <div className="relative max-w-5xl mx-auto">
          {/* CENTER LINE (desktop only) */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 h-full w-[2px] bg-slate-200 dark:bg-white/10" />

          <div className="space-y-20">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-start gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-20">
                  <div
                    className={`
                      w-30 h-30 rounded-full
                      bg-white dark:bg-batGray
                      border-2
                      flex items-center justify-center
                      shadow-lg
                      ${
                        item.highlight
                          ? "border-batBlue dark:border-batYellow"
                          : "border-slate-300 dark:border-white/10"
                      }
                    `}
                  >
                    <img
                      src={item.logo}
                      alt="Institution logo"
                      className="w-20 h-20  rounded-full object-contain"
                    />
                  </div>
                </div>

              
                <div
                  className={`w-full md:w-[45%] ${
                    index % 2 === 0 ? "md:text-right" : "md:text-left"
                  }`}
                >
                  <div className="glass-card p-6 md:p-8">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-batBlue dark:text-batYellow">
                      {item.period}
                    </span>

                    <h3 className="mt-2 text-lg md:text-xl font-bold text-slate-900 dark:text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-slate-600 dark:text-slate-400">
                      {item.institution}
                    </p>

                    <div
                      className={`mt-4 flex ${
                        index % 2 === 0 ? "md:justify-end" : "justify-start"
                      }`}
                    >
                      <span
                        className="px-4 py-1.5 rounded-lg text-sm font-bold
                                       bg-white dark:bg-batBlack
                                       border border-slate-200/60 dark:border-white/10
                                       text-slate-700 dark:text-slate-300"
                      >
                        {item.score}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="md:hidden flex items-center gap-3">
                  <img
                    src={item.logo}
                    alt="Institution logo"
                    className="w-20 h-20 rounded-full bg-white dark:bg-batGray p-2 border border-slate-200/60 dark:border-white/10"
                  />
                </div>

                <div className="hidden md:block w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default EducationSection;
