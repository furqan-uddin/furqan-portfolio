import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane } from "react-icons/fa";
import emailjs from "emailjs-com";
import { useState } from "react";

function ContactSection() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  function sendEmail(e) {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICEID,
        import.meta.env.VITE_TEMPLATEID,
        e.target,
        import.meta.env.VITE_PUBLICKEY
      )
      .then(
        () => {
          setStatus("success");
          setLoading(false);
          e.target.reset();
        },
        () => {
          setStatus("error");
          setLoading(false);
        }
      );
  }

  return (
    <section className="section-wrapper bg-white dark:bg-batBlack overflow-hidden">
    
      <div className="bg-glow top-1/4 right-[-120px] w-[300px] md:w-[420px] h-[300px] md:h-[420px] bg-batBlue/10 dark:bg-batYellow/10" />

      <div className="container-custom relative z-10 px-4 md:px-6">
      
        <div className="mb-12 md:mb-20 text-center">
          <motion.span
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4 md:mb-6 px-4 py-1.5 rounded-full
                       bg-slate-100 dark:bg-white/5
                       border border-slate-200/60 dark:border-white/10
                       text-[10px] md:text-xs font-bold uppercase tracking-[0.3em]
                       text-batBlue dark:text-batYellow"
          >
            Get in Touch
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white"
          >
            Let’s Build Something{" "}
            <span className="text-slate-400 dark:text-slate-500 block md:inline">
              Great
            </span>
          </motion.h2>
        </div>

      
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-6xl mx-auto">
      
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 glass-card p-6 md:p-10"
          >
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
              Contact Information
            </h3>

            <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-8 md:mb-10">
              I’m open to discussing projects, ideas, or opportunities where I
              can contribute and grow.
            </p>

            <div className="space-y-5 md:space-y-6">
              {[
                {
                  icon: <FaEnvelope />,
                  label: "Email",
                  value: "mohammedfurqan2108@gmail.com",
                  href: "mailto:mohammedfurqan2108@gmail.com",
                },
                {
                  icon: <FaLinkedin />,
                  label: "LinkedIn",
                  value: "mohammadfurqanuddin",
                  href: "https://www.linkedin.com/in/mohammadfurqanuddin",
                },
                {
                  icon: <FaGithub />,
                  label: "GitHub",
                  value: "furqan-uddin",
                  href: "https://github.com/furqan-uddin",
                },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div
                    className="w-10 h-10 md:w-11 md:h-11 flex-shrink-0 flex items-center justify-center rounded-xl
                               bg-white dark:bg-batBlack
                               border border-slate-200/60 dark:border-white/10
                               text-batBlue dark:text-batYellow
                               transition-colors group-hover:bg-batBlue
                               dark:group-hover:bg-batYellow
                               group-hover:text-white dark:group-hover:text-batBlack"
                  >
                    {item.icon}
                  </div>
                  <div className="min-w-0 overflow-hidden">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                      {item.label}
                    </p>
                    <p className="text-sm md:text-base text-slate-900 dark:text-white font-medium truncate">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* ===== Form ===== */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 glass-card p-6 md:p-10"
          >
            <form onSubmit={sendEmail} className="flex flex-col gap-5 md:gap-6">
              <input
                type="hidden"
                name="time"
                value={new Date().toLocaleString("en-IN", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                  timeZone: "Asia/Kolkata",
                })}
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                <Input
                  label="Name"
                  name="user_name"
                  placeholder="Bruce Wayne"
                />
                <Input
                  label="Email"
                  name="user_email"
                  type="email"
                  placeholder="bruce@waynecorp.com"
                />
              </div>

              <Textarea
                label="Message"
                name="message"
                placeholder="Tell me about your idea or project..."
              />

              <button
                type="submit"
                disabled={loading}
                className="mt-2 flex items-center justify-center gap-2
                           py-3.5 md:py-4 rounded-xl font-bold text-base md:text-lg
                           bg-batBlue dark:bg-batYellow
                           text-white dark:text-batBlack
                           transition-all active:scale-95 disabled:opacity-70"
              >
                {loading ? "Sending..." : "Send Message"}
                {!loading && <FaPaperPlane className="text-sm" />}
              </button>

              {status === "success" && (
                <p className="text-sm text-green-600 dark:text-green-400 text-center font-medium">
                  Message sent successfully. I’ll get back to you soon.
                </p>
              )}

              {status === "error" && (
                <p className="text-sm text-red-600 dark:text-red-400 text-center font-medium">
                  Failed to send message. Please try again.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


function Input({ label, name, type = "text", placeholder }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-400">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required
        placeholder={placeholder}
        className="p-3.5 md:p-4 rounded-xl bg-slate-50 dark:bg-batBlack
                   border border-slate-200/60 dark:border-white/10
                   text-sm md:text-base text-slate-900 dark:text-white
                   outline-none focus:ring-2 focus:ring-batBlue/20
                   dark:focus:ring-batYellow/20 w-full"
      />
    </div>
  );
}

function Textarea({ label, name, placeholder }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-400">
        {label}
      </label>
      <textarea
        name={name}
        required
        rows="4"
        placeholder={placeholder}
        className="p-3.5 md:p-4 rounded-xl bg-slate-50 dark:bg-batBlack
                   border border-slate-200/60 dark:border-white/10
                   text-sm md:text-base text-slate-900 dark:text-white
                   outline-none resize-none
                   focus:ring-2 focus:ring-batBlue/20
                   dark:focus:ring-batYellow/20 w-full"
      />
    </div>
  );
}

export default ContactSection;
