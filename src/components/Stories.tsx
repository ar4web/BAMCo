import { useCallback, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { SectionHeader } from './Reveal';
import Reveal from './Reveal';
import { useI18n } from '../lib/i18n';

const photos = ['/images/story-1.jpg', '/images/story-2.jpg', '/images/story-3.jpg'];

export default function Stories() {
  const { t, dir } = useI18n();
  const [index, setIndex] = useState(0);
  const [dirn, setDirn] = useState(1);
  const total = t.stories.items.length;

  const go = useCallback(
    (d: number) => {
      setDirn(d);
      setIndex((i) => (i + d + total) % total);
    },
    [total]
  );

  useEffect(() => {
    const id = setInterval(() => go(1), 7000);
    return () => clearInterval(id);
  }, [go]);

  const item = t.stories.items[index];

  return (
    <section id="stories" className="py-24 md:py-32 px-5 md:px-8">
      <div className="max-w-5xl mx-auto">
        <SectionHeader kicker={t.stories.kicker} title={t.stories.title} />

        <Reveal delay={0.1}>
          <div className="relative mt-14 glass rounded-[2.5rem] p-8 md:p-14 overflow-hidden min-h-[340px]">
            <Quote size={90} className="absolute -top-3 -start-3 text-gold/10 rtl:-scale-x-100" />
            <AnimatePresence mode="wait" custom={dirn}>
              <motion.div
                key={index}
                initial={{ opacity: 0, x: dirn * 48 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: dirn * -48 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="relative"
              >
                <p className="text-ink text-lg md:text-2xl leading-relaxed font-medium">
                  “{item.quote}”
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <img
                    src={photos[index]}
                    alt={item.name}
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-gold/50"
                  />
                  <div>
                    <div className="font-bold text-ink">{item.name}</div>
                    <div className="text-muted text-sm">{item.role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-8 end-8 flex items-center gap-3">
              <button
                onClick={() => go(-1)}
                aria-label="Previous"
                className="w-11 h-11 rounded-full border border-line flex items-center justify-center text-ink/70 hover:border-gold hover:text-gold transition-all"
              >
                {dir === 'rtl' ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
              </button>
              <button
                onClick={() => go(1)}
                aria-label="Next"
                className="w-11 h-11 rounded-full bg-gold text-[#1c1610] flex items-center justify-center hover:brightness-110 transition-all"
              >
                {dir === 'rtl' ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
              </button>
            </div>

            <div className="absolute bottom-10 start-8 md:start-14 flex gap-2">
              {t.stories.items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirn(i > index ? 1 : -1); setIndex(i); }}
                  aria-label={`Story ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === index ? 'w-8 bg-gold' : 'w-3 bg-line'
                  }`}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
