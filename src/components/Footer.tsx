import { useState } from 'react';
import type { FormEvent } from 'react';
import Reveal from './Reveal';
import { MapPin, Phone, Mail, Send, CheckCircle2, Linkedin, Twitter, Instagram } from 'lucide-react';
import { useI18n } from '../lib/i18n';

export default function Footer() {
  const { t } = useI18n();
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const links = [
    { href: '#about', label: t.nav.about },
    { href: '#sectors', label: t.nav.sectors },
    { href: '#compliance', label: t.nav.compliance },
    { href: '#stories', label: t.nav.stories },
    { href: '#process', label: t.nav.process },
    { href: '#news', label: t.nav.news },
  ];

  const inputCls =
    'w-full rounded-xl border border-line bg-bg/60 px-4 py-3.5 text-ink placeholder:text-muted/70 outline-none focus:border-gold/60 focus:ring-2 focus:ring-gold/20 transition-all text-sm';

  return (
    <footer id="contact" className="relative pt-24 md:pt-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 start-0 w-[600px] h-[400px] rounded-full bg-gold/6 blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20">
          <Reveal>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-gold/60" />
              <span className="text-gold tracking-[0.25em] uppercase text-xs font-bold">{t.nav.contact}</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-ink leading-tight">{t.footer.title}</h2>
            <p className="mt-5 text-muted text-lg leading-relaxed max-w-lg">{t.footer.sub}</p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <span className="w-12 h-12 rounded-2xl bg-gold/10 border border-gold/25 flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-gold" />
                </span>
                <div>
                  <div className="font-bold text-ink">{t.footer.hq}</div>
                  <div className="text-muted text-sm mt-1 leading-relaxed">{t.footer.hqAddr}</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="w-12 h-12 rounded-2xl bg-gold/10 border border-gold/25 flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-gold" />
                </span>
                <div>
                  <div className="font-bold text-ink">{t.footer.phone}</div>
                  <div className="text-muted text-sm mt-1" dir="ltr">+966 11 234 5678</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="w-12 h-12 rounded-2xl bg-gold/10 border border-gold/25 flex items-center justify-center shrink-0">
                  <Mail size={20} className="text-gold" />
                </span>
                <div>
                  <div className="font-bold text-ink">{t.footer.emailLabel}</div>
                  <div className="text-muted text-sm mt-1">Info@basmatalmawared.com</div>
                </div>
              </div>
            </div>

            <div className="mt-10 flex gap-3">
              {[Linkedin, Twitter, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#top"
                  aria-label="Social link"
                  className="w-11 h-11 rounded-full border border-line flex items-center justify-center text-muted hover:border-gold hover:text-gold transition-all"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <form onSubmit={submit} className="glass rounded-[2rem] p-8 md:p-10">
              {sent ? (
                <div className="h-full min-h-[380px] flex flex-col items-center justify-center text-center gap-4">
                  <CheckCircle2 size={56} className="text-gold" />
                  <p className="text-ink text-lg font-bold max-w-xs">{t.footer.sent}</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input required placeholder={t.footer.name} className={inputCls} />
                    <input required type="email" placeholder={t.footer.email} className={inputCls} />
                  </div>
                  <input placeholder={t.footer.company} className={inputCls} />
                  <textarea required rows={5} placeholder={t.footer.message} className={`${inputCls} resize-none"} />
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gold text-[#1c1610] font-bold hover:brightness-110 transition-all shadow-xl shadow-gold/20"
                  >
                    <Send size={17} className="rtl:-scale-x-100" />
                    {t.footer.send}
                  </button>
                </div>
              )}
            </form>
          </Reveal>
        </div>

        <div className="mt-20 pt-10 border-t border-line pb-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-white/90 dark:bg-[#f5efe4] p-1 ring-1 ring-gold/40">
                <img src="/logo.png" alt={`${t.brand}`} className="w-full h-full object-contain" />
              </div>
              <div className="leading-tight">
                <div className="font-extrabold text-ink">{t.nav.brand}</div>
                <div className="text-[10px] tracking-[0.2em] uppercase text-gold font-semibold">{t.nav.brandSub}</div>
              </div>
            </div>
            <nav className="flex flex-wrap justify-center gap-x-7 gap-y-2">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="text-muted text-sm font-medium hover:text-gold transition-colors">
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-3 text-center">
            <p className="text-muted/70 text-xs">{t.footer.rights}</p>
            <p className="text-muted/70 text-xs" dir="ltr">{t.footer.cr}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}