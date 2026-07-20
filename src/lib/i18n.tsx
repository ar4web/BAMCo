import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';

export type Lang = 'en' | 'ar';

const translations = {
  en: {
    nav: {
      about: 'About',
      sectors: 'Sectors',
      compliance: 'Compliance',
      stories: 'Success Stories',
      process: 'Process',
      news: 'News',
      contact: 'Contact',
      brand: 'BASMAT ALMAWARED',
    brandSub: 'Company Limited',
    },
    hero: {
      kicker: 'Saudi Arabia · Est. 2013',
      title1: 'Powering the Kingdom\\u2019s',
      title2: 'Workforce of Tomorrow',
      sub: 'Premium manpower solutions trusted by the Kingdom\\u2019s most ambitious projects — from giga-developments to national healthcare.',
      cta1: 'Request Workforce',
      cta2: 'Explore Sectors',
      scroll: 'Scroll to discover',
    },
    stats: [
      { value: 18500, suffix: '+', label: 'Deployed Professionals' },
      { value: 320, suffix: '+', label: 'Corporate Clients' },
      { value: 15, suffix: '', label: 'Years of Excellence' },
      { value: 98, suffix: '%', label: 'Client Retention' },
    ],
    about: {
      kicker: 'Who We Are',
      title: 'A Legacy of Trust, Built on People',
      p1: 'Basmat Almawared Company Limited, founded in 2013 by Muhammed Faleh Almutairy, is one of Saudi Arabia\\\\\\\\u2019s leading workforce partners, delivering vetted, trained, and fully compliant talent across the Kingdom\\\\\\\\u2019s most critical sectors. Muhammed Faleh Almutairy serves as the Founder and CEO.',
      p2: 'Aligned with Saudi Vision 2030, we bridge global talent with national ambition — combining rigorous sourcing, Saudization expertise, and end-to-end government relations under one roof.',
      points: ['Ministry of HR licensed & Platinum Nitaqat rated', 'ISO 9001:2015 certified operations', 'In-house visa, Iqama & GRO services', 'Dedicated account teams, 24/7 support'],
      arTitle: 'إرثٌ من الثقة، أساسه الإنسان',
      arText: 'مسار لحلول القوى العاملة شريكٌ وطني رائد في تمكين الكفاءات، نواكب رؤية المملكة 2030 بحلولٍ متكاملة تجمع بين الاستقطاب العالمي والالتزام المحلي.',
      badge: 'Vision 2030 Aligned',
    },
    sectors: {
      kicker: 'Industries We Serve',
      title: 'Sector-Specialized Workforce',
      sub: 'Six divisions, one standard of excellence.',
      items: [
        { title: 'Construction & Giga-Projects', desc: 'Skilled trades, engineers & site supervision for NEOM-scale delivery.' },
        { title: 'Healthcare & Medical', desc: 'Licensed physicians, nurses & allied health professionals.' },
        { title: 'Hospitality & Tourism', desc: 'Five-star service teams for hotels, resorts & events.' },
        { title: 'Logistics & Supply Chain', desc: 'Warehouse operations, fleet drivers & port personnel.' },
        { title: 'Energy & Industrial', desc: 'Certified technicians for oil, gas & petrochemical plants.' },
        { title: 'Facility Management', desc: 'Integrated soft & hard FM staffing at scale.' },
      ],
    },
    compliance: {
      kicker: 'Compliance & Impact',
      title: 'Governed by Standards. Measured by Impact.',
      sub: 'Every placement is backed by airtight compliance and transparent reporting.',
      metrics: [
        { value: 100, suffix: '%', label: 'Wage Protection (WPS) compliance' },
        { value: 72, suffix: 'h', label: 'Average mobilization time' },
        { value: 40, suffix: '%', label: 'Saudization across managed contracts' },
        { value: 0, suffix: '', label: 'Labor disputes in the last 3 years' },
      ],
      badges: ['MHRSD Licensed', 'ISO 9001:2015', 'Nitaqat Platinum', 'GOSI Compliant'],
    },
    partners: { kicker: 'Trusted By', title: 'Partners in National Ambition' },
    stories: {
      kicker: 'Success Stories',
      title: 'Results Our Clients Talk About',
      items: [
        { quote: 'بصمة المواريد mobilized 1,200 skilled workers to our giga-project site in under six weeks — with zero compliance flags. Their GRO team is simply the best we\\\\u2019ve worked with.', name: 'Eng. Khalid Al-Otaibi', role: 'Projects Director, National Development Co.' },
        { quote: 'Staffing three new hospitals simultaneously seemed impossible. بصمة المواريد delivered 340 licensed clinicians on schedule, all credentialed and DataFlow-verified.', name: 'Dr. Reema Al-Harbi', role: 'COO, Gulf Healthcare Group' },
        { quote: 'From seasonal peaks to permanent teams, بصمة المواريد has been our single workforce partner for eight years. Retention on their placements outperforms our own hires.', name: 'Faisal Al-Dossary', role: 'VP Operations, Red Dune Hospitality' },
      ],
    },
    gallery: { kicker: 'Our World', title: 'On the Ground, Across the Kingdom' },
    process: {
      kicker: 'How We Work',
      title: 'From Brief to Deployment in Four Steps',
      steps: [
        { title: 'Discover', desc: 'We map your workforce needs, site conditions & compliance scope.' },
        { title: 'Source & Vet', desc: 'Global sourcing, skills testing, medicals & document verification.' },
        { title: 'Mobilize', desc: 'Visas, flights, Iqama, housing & induction — fully managed.' },
        { title: 'Support', desc: 'Payroll, GRO, replacements & 24/7 account management.' },
      ],
    },
    news: {
      kicker: 'Latest News',
      title: 'Insights & Announcements',
      readMore: 'Read More',
      items: [
        { date: 'Jan 2025', tag: 'Announcement', title: 'Basmat Almawared Company Limited signs strategic MoU to staff Red Sea coastal developments', desc: 'A multi-year agreement covering 4,000+ hospitality and FM roles across new resort destinations.' },
        { date: 'Dec 2024', tag: 'Partnership', title: 'New training academy launched with TVTC for technical trades', desc: 'Certifying 1,500 Saudi technicians annually in welding, HVAC and industrial electrics.' },
        { date: 'Nov 2024', tag: 'Recognition', title: 'Basmat Almawared Company Limited awarded Nitaqat Platinum status for third consecutive year', desc: 'Recognizing sustained Saudization leadership across all managed contracts.' },
      ],
    },
    footer: {
      title: 'Let\\\\u2019s Build Your Workforce',
            sub: 'Tell us about your project. A dedicated account director will respond within one business day.',
            name: 'Full Name',
            email: 'Info@basmatalmawared.com',
            company: 'Company',
            message: 'Tell us about your workforce needs...',
            send: 'Send Inquiry',
            sent: 'Inquiry received — we\\\\u2019ll be in touch shortly.',
            hq: 'Headquarters',
            hqAddr: '6465 4388 Prince Saad Ibn Abdulrahman Al Awal Rd, As Salam, Riyadh 14226, Saudi Arabia',
            phone: 'Phone',
            emailLabel: 'Email',
            links: 'Quick Links',
            rights: '© 2025 Basmat Almawared Company Limited. All rights reserved.',
            cr: 'CR 1010-XXXXXX · MHRSD License 45-XXXX',
    },
  },
  ar: {
    nav: {
      about: 'من نحن',
      sectors: 'القطاعات',
      compliance: 'الامتثال',
      stories: 'قصص النجاح',
      process: 'آلية العمل',
      news: 'الأخبار',
      contact: 'تواصل معنا',
      brand: 'بصمة المواريد',
      brandSub: 'لحلول القوى العاملة',
    },
    hero: {
      kicker: 'المملكة العربية السعودية · تأسست 2013',
      title1: 'نُمكِّن قوى المملكة',
      title2: 'العاملة نحو الغد',
      sub: 'حلول قوى عاملة متميزة تثق بها أكثر مشاريع المملكة طموحاً — من المشاريع العملاقة إلى القطاع الصحي الوطني.',
      cta1: 'اطلب قوى عاملة',
      cta2: 'استكشف القطاعات',
      scroll: 'مرر للاكتشاف',
    },
    stats: [
      { value: 18500, suffix: '+', label: 'كادر تم توظيفه' },
      { value: 320, suffix: '+', label: 'عميل من الشركات' },
      { value: 15, suffix: '', label: 'عاماً من التميّز' },
      { value: 98, suffix: '%', label: 'نسبة ولاء العملاء' },
    ],
    about: {
      kicker: 'من نحن',
      title: 'إرثٌ من الثقة، أساسه الإنسان',
      p1: 'بصمة المواريد المحدودة، fondée في 2013 بواسطة محمد فالح المطيري، هي شريكٌ وطني رائد في تمكين الكفاءات، نقدّم كوادر مؤهلة ومدرّبة وملتزمة بالأنظمة في أهم القطاعات الحيوية. محمد فالح المطيري يشغل منصب المؤسس والرئيس التنفيذي.',
      p2: 'انسجاماً مع رؤية المملكة 2030، نربط الكفاءات العالمية بالطموح الوطني — عبر استقطاب دقيق، وخبرة في التوطين، وخدمات علاقات حكومية متكاملة.',
      points: ['مرخصون من وزارة الموارد البشرية بتصنيف نطاقات بلاتيني', 'عمليات معتمدة بشهادة الآيزو 9001:2015', 'خدمات تأشيرات وإقامات وعلاقات حكومية داخلية', 'فرق حسابات مخصصة ودعم على مدار الساعة'],
      arTitle: 'A Legacy of Trust, Built on People',
      arText: 'بصمة المواريد المحدودة شريكٌ وطني رائد في تمكين الكفاءات، نواكب رؤية المملكة 2030 بحلولٍ متكاملة تجمع بين الاستقطاب العالمي والالتزام المحلي.',
      badge: 'متوافقون مع رؤية 2030',
    },
    sectors: {
      kicker: 'القطاعات التي نخدمها',
      title: 'قوى عاملة متخصصة لكل قطاع',
      sub: 'ست إدارات متخصصة، ومعيار واحد من التميّز.',
      items: [
        { title: 'الإنشاءات والمشاريع العملاقة', desc: 'حرفيون ومهندسون وإشراف مواقع بمستوى مشاريع نيوم.' },
        { title: 'الرعاية الصحية والطبية', desc: 'أطباء وممرضون وكوادر صحية مساندة مرخصة.' },
        { title: 'الضيافة والسياحة', desc: 'فرق خدمة خمس نجوم للفنادق والمنتجعات والفعاليات.' },
        { title: 'الخدمات اللوجستية وسلاسل الإمداد', desc: 'عمليات مستودعات وسائقو أساطيل وكوادر موانئ.' },
        { title: 'الطاقة والقطاع الصناعي', desc: 'فنيون معتمدون لمنشآت النفط والغاز والبتروكيماويات.' },
        { title: 'إدارة المرافق', desc: 'كوادر متكاملة للخدمات الفنية والمساندة على نطاق واسع.' },
      ],
    },
    compliance: {
      kicker: 'الامتثال والأثر',
      title: 'نلتزم بالمعايير، ونقاس بالأثر.',
      sub: 'كل توظيف مدعوم بامتثال صارم وتقارير شفافة.',
      metrics: [
        { value: 100, suffix: '%', label: 'الالتزام بنظام حماية الأجور' },
        { value: 72, suffix: ' ساعة', label: 'متوسط زمن التوطين والتجهيز' },
        { value: 40, suffix: '%', label: 'نسبة التوطين في العقود المُدارة' },
        { value: 0, suffix: '', label: 'نزاعات عمالية خلال 3 سنوات' },
      ],
      badges: ['ترخيص وزارة الموارد البشرية', 'آيزو 9001:2015', 'نطاقات بلاتيني', 'ملتزمون بالتأمينات'],
    },
    partners: { kicker: 'موضع ثقة', title: 'شركاء في الطموح الوطني' },
    stories: {
      kicker: 'قصص النجاح',
      title: 'نتائج يتحدث عنها عملاؤنا',
      items: [
        { quote: 'وفّرت بصمة المواريد 1,200 عامل ماهر لموقع مشروعنا العملاق في أقل من ستة أسابيع — دون أي ملاحظات امتثال. فريق علاقاتهم الحكومية هو الأفضل الذي تعاملنا معه.', name: 'م. خالد العتيبي', role: 'مدير المشاريع، شركة التنمية الوطنية' },
        { quote: 'كان تشغيل ثلاثة مستشفيات جديدة في آن واحد يبدو مستحيلاً. سلّمت بصمة المواريد 340 كادراً طبياً مرخصاً في الموعد، جميعهم موثقو الشهادات.', name: 'د. ريما الحربي', role: 'الرئيس التنفيذي للعمليات، مجموعة الخليج الصحية' },
        { quote: 'من مواسم الذروة إلى الفرق الدائمة، بصمة المواريد شريكنا الوحيد للقوى العاملة منذ ثماني سنوات. معدل استبقاء كوادرهم يتفوق على تعييناتنا الداخلية.', name: 'فيصل الدوسري', role: 'نائب رئيس العمليات، ضيافة الكثيب الأحمر' },
      ],
    },
    gallery: { kicker: 'عالمنا', title: 'حضورٌ ميداني في أنحاء المملكة' },
    process: {
      kicker: 'آلية العمل',
      title: 'من الطلب إلى التشغيل في أربع خطوات',
      steps: [
        { title: 'الاكتشاف', desc: 'نحدد احتياجاتكم من القوى العاملة وظروف الموقع ونطاق الامتثال.' },
        { title: 'الاستقطاب والفرز', desc: 'استقطاب عالمي واختبارات مهارات وفحوصات طبية وتوثيق مستندات.' },
        { title: 'التجهيز والنقل', desc: 'تأشيرات وتذاكر وإقامات وسكن وتهيئة — بإدارة كاملة منا.' },
        { title: 'الدعم المستمر', desc: 'روابط وعلاقات حكومية واستبدالات وإدارة حسابات على مدار الساعة.' },
      ],
    },
    news: {
      kicker: 'آخر الأخبار',
      title: 'رؤى وإعلانات',
      readMore: 'اقرأ المزيد',
      items: [
        { date: 'يناير 2025', tag: 'إعلان', title: 'بصمة المواريد المحدودة توقّع مذكرة تفاهم استراتيجية لتوظيف كوادر مشاريع البحر الأحمر', desc: 'اتفاقية متعددة السنوات تغطي أكثر من 4,000 وظيفة في الضيافة وإدارة المرافق.' },
        { date: 'ديسمبر 2024', tag: 'شراكة', title: 'إطلاق أكاديمية تدريب جديدة بالشراكة مع المؤسسة العامة للتدريب التقني', desc: 'اعتماد 1,500 فني سعودي سنوياً في اللحام والتكييف والكهرباء الصناعية.' },
        { date: 'نوفمبر 2024', tag: 'تكريم', title: 'بصمة المواريد المحدودة تحصد تصنيف نطاقات البلاتيني للعام الثالث على التوالي', desc: 'تقديراً لريادتها المستمرة في التوطين عبر جميع العقود المُدارة.' },
      ],
    },
    footer: {
      title: 'لنبنِ قواكم العاملة вместе',
      sub: 'حدّثنا عن مشروعك، وسيتواصل معك مدير حسابات مختص خلال يوم عمل واحد.',
      name: 'الاسم الكامل',
      email: 'Info@basmatalmawared.com',
      company: 'اسم الشركة',
      message: 'حدّثنا عن احتياجاتكم من القوى العاملة...',
      send: 'إرسال الطلب',
      sent: 'تم استلام طلبكم — سنتواصل معكم قريباً.',
      hq: 'المقر الرئيسي',
      hqAddr: '6465 4388 شارع الأمير سعد بن عبد الرحمن الأول، السلام، الرياض 14226',
      phone: 'الهاتف',
      emailLabel: 'البريد الإلكتروني',
      links: 'روابط سريعة',
      rights: '© 2025 بصمة المواريد المحدودة. جميع الحقوق محفوظة.',
      cr: 'س.ت 1010-XXXXXX · ترخيص وزارة الموارد البشرية 45-XXXX',
    },
  },
};

export type Dict = (typeof translations)['en'];

interface I18nCtx {
  lang: Lang;
  t: Dict;
  dir: 'ltr' | 'rtl';
  toggleLang: () => void;
  dark: boolean;
  toggleDark: () => void;
}

const Ctx = createContext<I18nCtx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en');
  const [dark, setDark] = useState(true);

  const dir: 'ltr' | 'rtl' = lang === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang, dir]);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  return (
    <Ctx.Provider
      value={{
        lang,
        t: translations[lang] as Dict,
        dir,
        toggleLang: () => setLang((l) => (l === 'en' ? 'ar' : 'en')),
        dark,
        toggleDark: () => setDark((d) => !d),
      }}
    >
      {children}
    </Ctx.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}