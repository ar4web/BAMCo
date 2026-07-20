import Reveal, { SectionHeader } from './Reveal';
import { CalendarDays, ArrowUpRight } from 'lucide-react';
import { useI18n } from '../lib/i18n';

const images = ['/images/news-1.jpg', '/images/news-2.jpg', '/images/news-3.jpg'];

export default function News() {
  const { t } = useI18n();
  return (
    <section id="news" className="py-24 md:py-32 px-5 md:px-8 bg-surface/60">
      <div className="max-w-7xl mx-auto">
        <SectionHeader kicker={t.news.kicker} title={t.news.title} />
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {t.news.items.map((n, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <article className="group glass rounded-3xl overflow-hidden h-full flex flex-col hover:-translate-y-1.5 transition-transform duration-300">
                <div className="relative overflow-hidden aspect-[16/10]">
                  <img
                    src={images[i]}
                    alt={n.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  <span className="absolute top-4 start-4 px-3.5 py-1.5 rounded-full bg-gold text-[#1c1610] text-xs font-bold">
                    {n.tag}
                  </span>
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-muted text-xs font-semibold tracking-wide">
                    <CalendarDays size={14} className="text-gold" />
                    {n.date}
                  </div>
                  <h3 className="mt-3 text-lg font-extrabold text-ink leading-snug group-hover:text-gold transition-colors">
                    {n.title}
                  </h3>
                  <p className="mt-3 text-muted text-sm leading-relaxed flex-1">{n.desc}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-gold font-bold text-sm">
                    {t.news.readMore}
                    <ArrowUpRight size={15} className="rtl:-scale-x-100 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
