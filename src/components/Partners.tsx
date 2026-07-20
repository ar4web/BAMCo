import { SectionHeader } from './Reveal';
import { useI18n } from '../lib/i18n';

const partners = [
  'NEOM', 'RED SEA GLOBAL', 'ARAMCO', 'SABIC', 'ACWA POWER',
  'MA\u2019ADEN', 'ROSHN', 'DIRIYAH', 'STC', 'ALMARAI', 'QIDDIYA', 'SEC',
];

export default function Partners() {
  const { t } = useI18n();
  const row = [...partners, ...partners];
  return (
    <section className="py-20 md:py-24 overflow-hidden bg-surface/60">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionHeader kicker={t.partners.kicker} title={t.partners.title} />
      </div>
      <div dir="ltr" className="relative mt-12 marquee-mask">
        <div className="flex w-max animate-marquee gap-6 hover:[animation-play-state:paused]">
          {row.map((p, i) => (
            <div
              key={i}
              className="shrink-0 px-10 py-6 rounded-2xl border border-line bg-surface/80 flex items-center justify-center"
            >
              <span className="text-lg md:text-xl font-extrabold tracking-[0.18em] text-muted whitespace-nowrap transition-colors hover:text-gold">
                {p}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
