import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, ChevronDown } from 'lucide-react';
import { useI18n } from '../lib/i18n';

export default function Hero() {
  const { t, dir } = useI18n();
  const Arrow = dir === 'rtl' ? ArrowLeft : ArrowRight;

  return (
    <section id="top" className="relative h-[100svh] min-h-[640px] overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/hero.mp4"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#14100c]/70 via-[#14100c]/45 to-[#14100c]/95" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(20,16,12,0.55)_100%)]" />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-5 md:px-8 flex flex-col justify-center items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white/90 text-xs md:text-sm tracking-widest uppercase font-semibold mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          {t.hero.kicker}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.12] max-w-4xl"
        >
          {t.hero.title1}{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e3c084] via-gold to-[#9a7433]">
            {t.hero.title2}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-6 text-white/75 text-base md:text-xl max-w-2xl leading-relaxed"
        >
          {t.hero.sub}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.72 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gold text-[#1c1610] font-bold text-base hover:brightness-110 transition-all shadow-2xl shadow-gold/30"
          >
            {t.hero.cta1}
            <Arrow size={18} className="transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
          </a>
          <a
            href="#sectors"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-white font-semibold hover:bg-white/20 transition-all"
          >
            {t.hero.cta2}
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#stats"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/60 hover:text-gold transition-colors"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">{t.hero.scroll}</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
          <ChevronDown size={20} />
        </motion.div>
      </motion.a>
    </section>
  );
}
