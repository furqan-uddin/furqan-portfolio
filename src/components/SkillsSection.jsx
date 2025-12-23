import { motion } from "framer-motion";
import {
  FaCode,
  FaDatabase,
  FaTools,
  FaCogs,
  FaServer,
  FaLaptopCode,
} from "react-icons/fa";

function SkillsSection() {
  const skills = [
    {
      title: "Frontend",
      icon: <FaLaptopCode />,
      items: ["HTML", "CSS", "Tailwind", "JS", "React.js"],
    },
    {
      title: "Backend",
      icon: <FaServer />,
      items: ["Node.js", "Express.js", "REST APIs"],
    },
    { title: "Languages", icon: <FaCode />, items: ["C", "C++", "JavaScript"] },
    { title: "Database", icon: <FaDatabase />, items: ["MongoDB", "MySQL"] },
    {
      title: "Dev Tools",
      icon: <FaTools />,
      items: ["Git", "GitHub", "Postman", "Selenium"],
    },
    {
      title: "Systems",
      icon: <FaCogs />,
      items: ["DBMS", "Testing", "Problem Solving"],
    },
  ];

  return (
    <section className="relative px-6 md:px-20 py-24 bg-gray-50 dark:bg-batBlack overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4"
          >
            Technical{" "}
            <span className="text-gray-400 dark:text-gray-500">Arsenal</span>
          </motion.h2>
          <div className="h-1 w-20 bg-blue-600 dark:bg-batYellow rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group p-8 rounded-2xl bg-white dark:bg-batGray/20 border border-gray-200 dark:border-white/5 hover:border-blue-600/30 dark:hover:border-batYellow/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 dark:hover:shadow-none"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-gray-50 dark:bg-batBlack text-2xl text-blue-600 dark:text-batYellow group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {skill.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-semibold rounded-lg bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 border border-transparent dark:border-white/5 group-hover:bg-blue-50 dark:group-hover:bg-batYellow/10 dark:group-hover:text-batYellow transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
