import Reveal, { SectionHeader } from './Reveal';
import { Search, UserCheck, PlaneTakeoff, Headset } from 'lucide-react';
import { useI18n } from '../lib/i18n';

const icons = [Search, UserCheck, PlaneTakeoff, Headset];

export default function Process() {
  const { t } = useI18n();
  return (
    <section id="process" className="py-24 md:py-32 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader kicker={t.process.kicker} title={t.process.title} />
        <div className="relative mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="hidden lg:block absolute top-[52px] inset-x-16 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
          {t.process.steps.map((s, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={i} delay={i * 0.12}>
                <div className="relative text-center px-4">
                  <div className="relative inline-flex">
                    <div className="w-[104px] h-[104px] rounded-full glass flex items-center justify-center">
                      <Icon size={36} className="text-gold" />
                    </div>
                    <span className="absolute -top-1 -end-1 w-8 h-8 rounded-full bg-gold text-[#1c1610] text-sm font-extrabold flex items-center justify-center shadow-lg shadow-gold/30">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl font-extrabold text-ink">{s.title}</h3>
                  <p className="mt-2.5 text-muted leading-relaxed text-sm">{s.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
