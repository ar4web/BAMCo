import { useEffect, useState } from 'react';
import { Moon, Sun, Languages, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useI18n } from '../lib/i18n';

export default function Navbar() {
  const { t, lang, toggleLang, dark, toggleDark } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#about', label: t.nav.about },
    { href: '#sectors', label: t.nav.sectors },
    { href: '#compliance', label: t.nav.compliance },
    { href: '#stories', label: t.nav.stories },
    { href: '#process', label: t.nav.process },
    { href: '#news', label: t.nav.news },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'backdrop-blur-xl bg-[color-mix(in_srgb,var(--surface)_72%,transparent)] border-b border-line shadow-[0_8px_32px_rgba(0,0,0,0.12)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-[76px] flex items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-xl bg-white/90 dark:bg-[#f5efe4] p-1 shadow-lg shadow-black/20 ring-1 ring-gold/40 overflow-hidden">
            <img src="/logo.png" alt={`${t.brand} logo`} className="w-full h-full object-contain" />
          </div>
          <div className="leading-tight">
            <div className="font-extrabold text-lg tracking-wide text-white drop-shadow-sm group-hover:text-gold transition-colors" style={{ color: scrolled ? 'var(--ink)' : undefined }}>
              {t.nav.brand}
            </div>
            <div className="text-[10px] tracking-[0.2em] uppercase text-gold font-semibold">
              {t.nav.brandSub}
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors hover:text-gold ${
                scrolled ? 'text-ink/80' : 'text-white/85'
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleDark}
            aria-label="Toggle dark mode"
            className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all hover:border-gold hover:text-gold ${
              scrolled ? 'border-line text-ink/70' : 'border-white/25 text-white/85'
            }`}
          >
            {dark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <button
            onClick={toggleLang}
            className={`h-10 px-4 rounded-full flex items-center gap-2 border text-sm font-bold transition-all hover:border-gold hover:text-gold ${
              scrolled ? 'border-line text-ink/80' : 'border-white/25 text-white/90'
            }`}
          >
            <Languages size={15} />
            {lang === 'en' ? 'العربية' : 'EN'}
          </button>
          <a
            href="#contact"
            className="hidden md:inline-flex h-10 items-center px-5 rounded-full bg-gold text-[#1c1610] text-sm font-bold hover:brightness-110 transition-all shadow-lg shadow-gold/25"
          >
            {t.nav.contact}
          </a>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className={`lg:hidden w-10 h-10 rounded-full flex items-center justify-center border ${
              scrolled ? 'border-line text-ink/80' : 'border-white/25 text-white'
            }`}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden backdrop-blur-xl bg-[color-mix(in_srgb,var(--surface)_90%,transparent)] border-b border-line"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {[...links, { href: '#contact', label: t.nav.contact }].map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-ink/85 font-medium border-b border-line/50 last:border-0 hover:text-gold transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}