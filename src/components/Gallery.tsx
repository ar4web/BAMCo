import Reveal, { SectionHeader } from './Reveal';
import { useI18n } from '../lib/i18n';

const items = [
  { src: '/images/gallery-1.jpg', span: 'md:col-span-2 md:row-span-2' },
  { src: '/images/gallery-2.jpg', span: '' },
  { src: '/images/gallery-3.jpg', span: '' },
  { src: '/images/gallery-4.jpg', span: '' },
  { src: '/images/gallery-5.jpg', span: 'md:col-span-2' },
  { src: '/images/gallery-6.jpg', span: '' },
];

export default function Gallery() {
  const { t } = useI18n();
  return (
    <section className="py-24 md:py-32 px-5 md:px-8 bg-surface/60">
      <div className="max-w-7xl mx-auto">
        <SectionHeader kicker={t.gallery.kicker} title={t.gallery.title} />
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] md:auto-rows-[220px] gap-4">
          {items.map((g, i) => (
            <Reveal key={i} delay={i * 0.06} className={g.span}>
              <div className="group relative w-full h-full rounded-3xl overflow-hidden ring-1 ring-line">
                <img
                  src={g.src}
                  alt={`${t.brand} gallery`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14100c]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}