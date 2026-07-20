import Reveal from './Reveal';
import CountUp from './CountUp';
import { useI18n } from '../lib/i18n';

export default function Stats() {
  const { t } = useI18n();
  return (
    <section id="stats" className="relative -mt-20 z-20 px-5 md:px-8">
      <Reveal className="max-w-6xl mx-auto">
        <div className="glass rounded-3xl px-6 py-10 md:px-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {t.stats.map((s, i) => (
            <div key={i} className="text-center relative">
              {i > 0 && (
                <span className="hidden lg:block absolute top-1/2 -translate-y-1/2 start-0 h-12 w-px bg-line" />
              )}
              <div className="text-3xl md:text-5xl font-extrabold text-gold">
                <CountUp value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-muted text-sm md:text-base font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
