import { motion } from "framer-motion";

function LifeBeyondCode() {
  return (
    <section className="section-wrapper bg-white dark:bg-batBlack">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
      
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden lg:flex flex-col gap-4"
          >
            <div className="h-28 w-full rounded-2xl bg-slate-100 dark:bg-batGray/30" />
            <div className="h-28 w-2/3 rounded-2xl bg-batBlue/10 dark:bg-batYellow/10" />
          </motion.div>

      
          <div className="lg:col-span-2">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="heading-section mb-6"
            >
              Life{" "}
              <span className="italic text-batBlue dark:text-batYellow">
                Beyond
              </span>{" "}
              Code
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
              viewport={{ once: true }}
              className="relative glass-card p-8"
            >
  
              <span className="absolute -top-4 -left-4 text-5xl font-serif text-batBlue/20 dark:text-batYellow/10">
                “
              </span>

              <p className="text-base md:text-lg leading-relaxed text-slate-700 dark:text-slate-300 italic">
                Outside of software, I enjoy playing cricket and writing poetry.
                These pursuits keep me grounded, reinforcing values like{" "}
                <span className="font-semibold text-batBlue dark:text-batYellow">
                  patience
                </span>{" "}
                and{" "}
                <span className="font-semibold text-batBlue dark:text-batYellow">
                  focus
                </span>{" "}
                — qualities that quietly influence every line of code I ship.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LifeBeyondCode;
