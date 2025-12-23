import { Link, useLocation } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaBars, FaTimes } from "react-icons/fa";
import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  /* ===== Scroll detection ===== */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ===== Close menu on route change ===== */
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Education", path: "/education" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50">

      <div
        className={`transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}
      >
        <div
          className={`container-custom flex items-center justify-between transition-all duration-300 ${
            scrolled ? "glass-card rounded-full px-6 py-3" : "bg-transparent"
          }`}
        >
          
          <Link
            to="/"
            className="flex items-center gap-3 font-black tracking-tight text-slate-900 dark:text-white"
          >
            <div className="w-9 h-9 rounded-xl bg-batBlue dark:bg-batYellow flex items-center justify-center text-white dark:text-batBlack text-sm">
              F
            </div>
            <span className="hidden sm:block">Furqan</span>
          </Link>

          <div className="hidden md:flex items-center gap-1 rounded-full bg-slate-100/70 dark:bg-white/5 border border-slate-200/60 dark:border-white/5 p-1">
            {navLinks.map((link) => {
              const active = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all ${
                    active
                      ? "bg-white dark:bg-batGray text-batBlue dark:text-batYellow shadow-sm"
                      : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-batYellow"
            >
              {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
            </motion.button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center text-slate-900 dark:text-white"
              aria-label="Toggle menu"
            >
              {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* ===== Mobile Menu ===== */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-4 right-4 mt-3 glass-card p-4 flex flex-col gap-2"
          >
            {navLinks.map((link) => {
              const active = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-5 py-3 rounded-xl text-sm font-bold uppercase tracking-wide transition-colors ${
                    active
                      ? "bg-batBlue/10 text-batBlue dark:bg-batYellow/10 dark:text-batYellow"
                      : "text-slate-600 dark:text-slate-400"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
