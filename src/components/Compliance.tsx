import Reveal, { SectionHeader } from './Reveal';
import CountUp from './CountUp';
import { ShieldCheck, BadgeCheck, Award, FileCheck2 } from 'lucide-react';
import { useI18n } from '../lib/i18n';

const badgeIcons = [ShieldCheck, FileCheck2, Award, BadgeCheck];

export default function Compliance() {
  const { t } = useI18n();
  return (
    <section id="compliance" className="relative py-24 md:py-32 px-5 md:px-8 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 start-1/4 w-[500px] h-[500px] rounded-full bg-gold/8 blur-[120px]" />
        <div className="absolute bottom-0 end-1/4 w-[400px] h-[400px] rounded-full bg-gold/6 blur-[100px]" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <SectionHeader kicker={t.compliance.kicker} title={t.compliance.title} sub={t.compliance.sub} />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.compliance.metrics.map((m, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="glass rounded-3xl p-8 h-full text-center hover:-translate-y-1.5 transition-transform duration-300">
                <div className="text-4xl md:text-5xl font-extrabold text-gold">
                  <CountUp value={m.value} suffix={m.suffix} />
                </div>
                <p className="mt-3 text-muted font-medium leading-snug">{m.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {t.compliance.badges.map((b, i) => {
              const Icon = badgeIcons[i % badgeIcons.length];
              return (
                <span
                  key={i}
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-gold/30 bg-gold/8 text-ink font-semibold text-sm"
                >
                  <Icon size={17} className="text-gold" />
                  {b}
                </span>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
