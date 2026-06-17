import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  BookOpen, FileText, GraduationCap, Library, Microscope,
  PenLine, ShieldCheck, Clock3, Scale, Award, Briefcase,
  Search, Shield, Lock, Mail, Linkedin, MessageCircle, ArrowRight,
} from "lucide-react";
import logoAsset from "@/assets/acadence-logo.asset.json";
import heroAsset from "@/assets/hero-academic-v2.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Acadence — Advancing Academic Research & Scholarship" },
      { name: "description", content: "Bespoke consultancy, structural editing, and research support for scholars worldwide. Backed by 7 years of rigorous academic practice." },
      { property: "og:title", content: "Acadence — Advancing Academic Research & Scholarship" },
      { property: "og:description", content: "Bespoke consultancy, structural editing, and research support for scholars worldwide." },
      { property: "og:image", content: logoAsset.url },
      { property: "twitter:image", content: logoAsset.url },
    ],
  }),
  component: Index,
});

const services = [
  { icon: FileText, title: "Research Manuscripts", desc: "Comprehensive support in structuring and refining scholarly research." },
  { icon: PenLine, title: "Academic Essays", desc: "Methodological guidance and bespoke drafting for coursework." },
  { icon: GraduationCap, title: "Postgraduate Theses", desc: "Expert advisory on structuring complex, long-form academic arguments." },
  { icon: Library, title: "Literature Reviews", desc: "Critical analysis and synthesis of current academic journals." },
  { icon: Microscope, title: "Case Study Analysis", desc: "In-depth, analytical frameworks applied to complex scenarios." },
  { icon: BookOpen, title: "Editorial Refinement", desc: "Meticulous proofreading to elevate clarity and academic tone." },
  { icon: ShieldCheck, title: "Originality Verification", desc: "Rigorous cross-referencing to ensure complete academic integrity." },
  { icon: Clock3, title: "Timeline Management", desc: "Strategic planning to meet your strictest submission deadlines." },
];

const pillars = [
  { icon: Briefcase, title: "Sustained Expertise", desc: "7+ years of dedicated academic support across diverse disciplines." },
  { icon: Search, title: "Rigorous Quality Control", desc: "Every manuscript undergoes thorough peer-level editorial review." },
  { icon: Shield, title: "Ethical Practice", desc: "Bespoke consultancy strictly authored to your brief, never resold." },
  { icon: Lock, title: "Protected Privacy", desc: "Your identity, institutional affiliation, and data remain strictly confidential." },
];

const trustItems = [
  { icon: Scale, label: "Academic Integrity Assured" },
  { icon: Award, label: "Subject-Matter Specialists" },
  { icon: Clock3, label: "Strict Deadline Adherence" },
  { icon: Lock, label: "Discreet & Confidential" },
];

function Index() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header
        className={`fixed inset-x-0 top-0 z-50 bg-background transition-all duration-300 ${
          scrolled ? "border-b border-border shadow-[0_1px_12px_rgba(0,31,63,0.06)]" : "border-b border-transparent"
        }`}
      >
        <nav className="container-prose flex h-20 items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <img src={logoAsset.url} alt="Acadence logo" className="h-11 w-11 object-contain" />
            <span className="font-serif text-2xl font-semibold tracking-wide text-navy">Acadence</span>
          </a>
          <ul className="hidden items-center gap-10 text-sm font-medium text-navy md:flex">
            {["Services", "About", "Contact"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="relative py-2 transition-colors hover:text-gold">
                  {l}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="inline-flex h-10 items-center rounded-md border border-navy px-5 text-sm font-semibold text-navy transition-all hover:bg-navy hover:text-primary-foreground"
              >
                Consult
              </a>
            </li>
          </ul>
          <a
            href="#contact"
            className="inline-flex h-10 items-center rounded-md bg-navy px-4 text-sm font-semibold text-primary-foreground md:hidden"
          >
            Consult
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container-prose grid items-center gap-14 lg:grid-cols-[1.1fr_1fr]">
          <div className="fade-up">
            <p className="eyebrow">A Scholarly Consultancy</p>
            <span className="hairline mt-5 mb-6" />
            <h1 className="font-serif text-4xl leading-[1.08] text-navy sm:text-5xl lg:text-6xl">
              Advancing Academic <span className="italic text-gold">Research</span> & Scholarship
            </h1>
            <p className="mt-6 font-serif text-xl italic text-navy/80 sm:text-2xl">
              Bespoke consultancy, structural editing, and research support for scholars worldwide.
            </p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Backed by 7 years of rigorous academic practice.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <a
                href="#contact"
                className="group inline-flex h-14 items-center gap-3 rounded-md bg-navy px-8 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-all hover:bg-gold hover:text-navy"
              >
                Discuss Your Research
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#services" className="text-sm font-semibold uppercase tracking-wider text-navy underline-offset-8 hover:text-gold hover:underline">
                Explore Services
              </a>
            </div>
          </div>

          <div className="relative fade-up">
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-gold/15 to-navy/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl shadow-[0_30px_60px_-20px_rgba(0,31,63,0.35)] ring-1 ring-navy/10">
              <img
                src={heroAsset.url}
                alt="Scholarly desk with academic volumes, fountain pen and research manuscript"
                width={1732}
                height={1628}
                className="aspect-[5/4] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-xl border border-border bg-card p-5 shadow-[var(--shadow-card)] sm:block">
              <p className="font-serif text-3xl text-navy">7<span className="text-gold">+</span></p>
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Years of Practice</p>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-border bg-offwhite">
        <div className="container-prose grid gap-8 py-10 md:grid-cols-2 lg:grid-cols-4 md:py-12">
          {trustItems.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center justify-center gap-4 text-center md:justify-start md:text-left">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gold/12 text-gold">
                <Icon className="h-5 w-5" strokeWidth={1.5} />
              </span>
              <p className="font-serif text-lg text-navy">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 md:py-32">
        <div className="container-prose">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Our Disciplines</p>
            <span className="hairline mt-5 mb-6" />
            <h2 className="font-serif text-3xl text-navy sm:text-4xl lg:text-5xl">
              A Complete Suite of Scholarly Services
            </h2>
            <p className="mt-5 text-muted-foreground">
              Tailored academic support delivered with the discretion and precision of a senior consultancy.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {services.map(({ icon: Icon, title, desc }) => (
              <article
                key={title}
                className="group relative overflow-hidden rounded-xl border border-border bg-card p-8 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[var(--shadow-card-hover)]"
              >
                <div className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100" />
                <div className="flex items-start gap-5">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-lg border border-gold/30 bg-gold/8 text-gold">
                    <Icon className="h-6 w-6" strokeWidth={1.4} />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-serif text-xl text-navy">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PILLARS / ABOUT */}
      <section id="about" className="border-t border-border bg-offwhite py-24 md:py-32">
        <div className="container-prose">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Pillars of Excellence</p>
            <span className="hairline mt-5 mb-6" />
            <h2 className="font-serif text-3xl text-navy sm:text-4xl lg:text-5xl">
              The Principles That Define Our Practice
            </h2>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {pillars.map(({ icon: Icon, title, desc }) => (
              <article
                key={title}
                className="relative rounded-xl border border-border/60 bg-navy-tint p-8 text-center shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[var(--shadow-card-hover)]"
              >
                <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-navy/8 text-navy">
                  <Icon className="h-12 w-12" strokeWidth={1.3} />
                </span>
                <h3 className="mt-6 font-serif text-xl font-bold text-navy">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative overflow-hidden bg-navy py-24 text-primary-foreground md:py-32">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, var(--color-gold) 0, transparent 40%), radial-gradient(circle at 80% 80%, var(--color-gold) 0, transparent 40%)",
          }}
        />
        <div className="container-prose relative">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Begin Your Consultation</p>
            <span className="mx-auto mt-5 block h-px w-12 bg-gold" />
            <h2 className="mt-6 font-serif text-3xl sm:text-4xl lg:text-5xl">
              Begin Your <span className="italic text-gold">Consultation</span>
            </h2>
            <p className="mt-5 text-base text-primary-foreground/75 sm:text-lg">
              Connect directly with our specialists to outline your research requirements and methodology.
            </p>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              <a
                href="https://wa.me/918078578102"
                className="group inline-flex h-14 min-h-[48px] items-center justify-center gap-3 rounded-lg bg-[#25D366] px-6 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(37,211,102,0.6)] transition-all duration-300 hover:brightness-110 hover:shadow-[0_14px_36px_-10px_rgba(37,211,102,0.7)]"
              >
                <MessageCircle className="h-5 w-5" /> WhatsApp
              </a>
              <a
                href="https://linkedin.com/in/yadhu-krishna-6424972bb"
                target="_blank" rel="noreferrer"
                className="group inline-flex h-14 min-h-[48px] items-center justify-center gap-3 rounded-lg bg-[#0A66C2] px-6 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(10,102,194,0.6)] transition-all duration-300 hover:brightness-110 hover:shadow-[0_14px_36px_-10px_rgba(10,102,194,0.7)]"
              >
                <Linkedin className="h-5 w-5" /> LinkedIn
              </a>
              <a
                href="mailto:yeadhukrishna.p@gmail.com"
                className="group inline-flex h-14 min-h-[48px] items-center justify-center gap-3 rounded-lg bg-[#6B7280] px-6 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(107,114,128,0.5)] transition-all duration-300 hover:brightness-110 hover:shadow-[0_14px_36px_-10px_rgba(107,114,128,0.6)]"
              >
                <Mail className="h-5 w-5" /> Email
              </a>
            </div>

            <p className="mt-10 text-xs uppercase tracking-[0.22em] text-primary-foreground/50">
              yeadhukrishna.p@gmail.com
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-navy-deep py-16 text-primary-foreground/80">
        <div className="container-prose">
          <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
            <div>
              <div className="flex items-center gap-3">
                <img src={logoAsset.url} alt="Acadence logo" className="h-12 w-12 object-contain" />
                <span className="font-serif text-2xl text-primary-foreground">Acadence</span>
              </div>
              <p className="mt-4 max-w-sm font-serif italic text-gold">Excellence in Every Word.</p>
              <p className="mt-4 max-w-sm text-sm text-primary-foreground/60">
                A discreet academic writing consultancy serving scholars, researchers, and postgraduate candidates.
              </p>
            </div>
            <div>
              <h4 className="font-serif text-base text-primary-foreground">Navigate</h4>
              <span className="mt-3 block h-px w-8 bg-gold" />
              <ul className="mt-5 space-y-3 text-sm">
                {["Home", "Services", "About", "Contact"].map((l) => (
                  <li key={l}>
                    <a href={l === "Home" ? "#top" : `#${l.toLowerCase()}`} className="hover:text-gold">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-serif text-base text-primary-foreground">Legal</h4>
              <span className="mt-3 block h-px w-8 bg-gold" />
              <ul className="mt-5 space-y-3 text-sm">
                <li><a href="#" className="hover:text-gold">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-gold">Terms of Service</a></li>
                <li><a href="mailto:yeadhukrishna.p@gmail.com" className="hover:text-gold">yeadhukrishna.p@gmail.com</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-primary-foreground/50 md:flex-row">
            <p>© 2026 Acadence. All rights reserved.</p>
            <p className="uppercase tracking-[0.22em]">Crafted with scholarly precision</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
