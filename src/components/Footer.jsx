import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-white dark:bg-batBlack border-t border-slate-100 dark:border-white/5">
      <div className="container-custom py-14">
  
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
       
          <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-60 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                Available for opportunities
              </span>
            </div>

            <p className="text-sm font-medium text-slate-900 dark:text-white">
              © {new Date().getFullYear()}{" "}
              <span className="font-bold text-batBlue dark:text-batYellow">
                Mohammad Furqanuddin
              </span>
            </p>
          </div>


          <div className="flex items-center gap-4">
            {[
              {
                icon: <FaGithub />,
                href: "https://github.com/furqan-uddin",
                label: "GitHub",
              },
              {
                icon: <FaLinkedin />,
                href: "https://www.linkedin.com/in/mohammadfurqanuddin",
                label: "LinkedIn",
              },
              {
                icon: <FaEnvelope />,
                href: "mailto:mohammedfurqan2108@gmail.com",
                label: "Email",
              },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-11 h-11 flex items-center justify-center rounded-full
                           bg-slate-50 dark:bg-white/5
                           border border-slate-200/60 dark:border-white/10
                           text-slate-600 dark:text-slate-400
                           hover:text-batBlue dark:hover:text-batYellow
                           transition-colors"
              >
                <span className="text-lg">{social.icon}</span>
              </a>
            ))}
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-xs font-bold uppercase tracking-widest
                       text-slate-400 hover:text-batBlue dark:hover:text-batYellow
                       transition-colors"
          >
            Back to top
            <span
              className="w-10 h-10 flex items-center justify-center rounded-full
                         border border-slate-200/60 dark:border-white/10
                         group-hover:bg-batBlue dark:group-hover:bg-batYellow
                         group-hover:text-white dark:group-hover:text-batBlack
                         transition-all"
            >
              <FaArrowUp />
            </span>
          </button>
        </div>

        <div
          className="mt-12 pt-8 border-t border-slate-100 dark:border-white/[0.03]
                flex flex-col items-center justify-center gap-4
                text-[11px] font-bold uppercase tracking-widest text-slate-400"
        >
          <p className="italic normal-case text-center">
            Powered with 💛 by furqan.
          </p>

          {/* <div className="flex gap-6">
            <span>React</span>
            <span>Tailwind</span>
            <span>Framer Motion</span>
          </div> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
