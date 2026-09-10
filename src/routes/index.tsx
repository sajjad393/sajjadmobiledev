import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Smartphone,
  Apple,
  Bot,
  Blocks,
  Server,
  Gauge,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  ArrowRight,
  Menu,
  X,
  Star,
} from "lucide-react";
import photo from "@/assets/sajjad.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sajjad Ahmed — Senior Flutter & Mobile App Developer" },
      {
        name: "description",
        content:
          "Senior Flutter developer with 7+ years building cross-platform mobile apps for iOS and Android — crypto trading, blockchain, real-time and AI-powered products.",
      },
      { property: "og:title", content: "Sajjad Ahmed — Senior Flutter & Mobile App Developer" },
      {
        property: "og:description",
        content:
          "7+ years crafting fast, scalable Flutter, iOS and Android apps. Available for freelance and full-time roles.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const STATS = [
  { value: "7+", label: "Years experience" },
  { value: "40+", label: "Apps shipped" },
  { value: "4", label: "Companies" },
  { value: "30+", label: "Published apps" },
];

const SKILLS = [
  {
    icon: Smartphone,
    title: "Flutter & Dart",
    body: "Cross-platform apps with custom widgets, advanced animations, clean architecture and state management.",
    tags: ["Flutter", "Dart", "MVVM", "Bloc / Provider"],
  },
  {
    icon: Apple,
    title: "iOS Native",
    body: "Swift, UIKit and SwiftUI apps built to Apple guidelines, profiled for performance and shipped to the App Store.",
    tags: ["Swift", "UIKit", "SwiftUI", "App Store"],
  },
  {
    icon: Bot,
    title: "Android Native",
    body: "Java and Kotlin apps with Material design, sensors, background services, Room and coroutines.",
    tags: ["Java", "Kotlin", "Room", "Coroutines"],
  },
  {
    icon: Blocks,
    title: "Blockchain & NFT",
    body: "Wallet integration, NFT display and transactions, smart contracts and decentralised app features.",
    tags: ["Web3", "Solidity", "Wallets", "NFT"],
  },
  {
    icon: Server,
    title: "APIs & Real-time",
    body: "REST integrations, WebSockets for live market data, Firebase auth, storage and cloud functions.",
    tags: ["REST", "WebSockets", "Firebase", "JSON"],
  },
  {
    icon: Gauge,
    title: "Quality & Performance",
    body: "Unit, integration and UI testing, profiling, memory and battery tuning, release management.",
    tags: ["Testing", "Profiling", "CI releases"],
  },
];

const EXPERIENCE = [
  {
    company: "Digital Code",
    role: "Mobile Apps Developer",
    period: "2024 — Present",
    points: [
      "Built spot, futures and P2P trading plus staking modules in Flutter.",
      "Streamed real-time market data over WebSockets for high-frequency screens.",
      "Implemented secure wallet management and blockchain transaction flows.",
      "Owned a scalable, maintainable Flutter architecture across the app.",
    ],
  },
  {
    company: "IR Solutions",
    role: "Sr. Mobile Apps Developer",
    period: "2022 — 2024",
    points: [
      "Designed and maintained iOS applications in Swift, shipped to the App Store.",
      "Integrated NFT wallets, display and transaction processing into iOS apps.",
      "Worked with smart contracts and blockchain APIs for DApp features.",
      "Optimised performance and ran thorough release testing.",
    ],
  },
  {
    company: "Hypertext Solutions",
    role: "Mobile Apps Developer",
    period: "2019 — 2021",
    points: [
      "Delivered Flutter apps for Android and iOS with custom widgets and animations.",
      "Translated complex UI/UX designs into responsive, interactive interfaces.",
      "Integrated Firebase auth, realtime database, storage and cloud functions.",
      "Also built native iOS (Swift, UIKit, SwiftUI) and Android products.",
    ],
  },
  {
    company: "QuellX Code",
    role: "Android Developer",
    period: "2017 — 2018",
    points: [
      "Developed native Android apps in Java with Material design principles.",
      "Handled sensor data and background services for interactive features.",
      "Consumed REST APIs with Retrofit and OkHttp, managed JSON parsing.",
      "Used Room and SQLite with Coroutines and RxJava for smooth UI.",
    ],
  },
];

const PROJECTS = [
  {
    name: "BNQ Global Exchange",
    kind: "Crypto trading app",
    body: "Spot, futures, P2P trading and staking with live WebSocket market data, secure wallets and blockchain transactions.",
    tags: ["Flutter", "WebSockets", "Blockchain", "Wallets"],
    link: "https://www.bnqglobal.com/",
  },
  {
    name: "NFT Marketplace App",
    kind: "iOS + blockchain",
    body: "Native iOS app with wallet connection, NFT galleries and smart-contract backed transactions built for transparency.",
    tags: ["Swift", "NFT", "Solidity", "DApp"],
    link: null,
  },
  {
    name: "Enterprise Flutter Suite",
    kind: "Cross-platform",
    body: "Long-lived Flutter products maintained and optimised across many devices, with Firebase backends and custom animation systems.",
    tags: ["Flutter", "Firebase", "MVVM", "Testing"],
    link: null,
  },
];

const MARQUEE = [
  "Flutter",
  "Dart",
  "Swift",
  "SwiftUI",
  "Kotlin",
  "Java",
  "Firebase",
  "WebSockets",
  "REST APIs",
  "Blockchain",
  "NFT",
  "MVVM",
  "Room",
  "Coroutines",
];

function Portfolio() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "border-b border-border bg-background/80 backdrop-blur-xl" : ""
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#home" className="font-display text-lg font-bold tracking-tight">
            sajjad<span className="text-gradient">.dev</span>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03] md:inline-flex"
          >
            Hire me
          </a>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="rounded-lg border border-border p-2 text-foreground md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {open && (
          <nav className="border-t border-border bg-background/95 px-5 pb-5 pt-2 backdrop-blur-xl md:hidden">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="block border-b border-border py-3 text-sm text-muted-foreground"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 block rounded-full bg-primary py-3 text-center text-sm font-semibold text-primary-foreground"
            >
              Hire me
            </a>
          </nav>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="bg-hero-glow relative overflow-hidden pb-20 pt-32 md:pb-28 md:pt-40">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-[1.15fr_0.85fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-xs font-medium text-muted-foreground">
              <span className="size-2 rounded-full bg-primary" />
              Available for freelance & full-time
            </span>

            <h1 className="mt-6 font-display text-4xl leading-[1.05] font-extrabold sm:text-5xl md:text-6xl">
              Senior Flutter developer building{" "}
              <span className="text-gradient">mobile apps</span> people keep opening.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              I'm Sajjad Ahmed — 7+ years turning ideas into fast, scalable apps for iOS and
              Android. Crypto trading platforms, blockchain wallets, real-time systems and
              AI-powered products, shipped end to end.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="glow-ring inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
              >
                View my work <ArrowRight className="size-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                Get in touch
              </a>
            </div>

            <dl className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-4">
              {STATS.map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-2xl font-bold text-primary md:text-3xl">
                    {s.value}
                  </dt>
                  <dd className="mt-1 text-xs text-muted-foreground">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative mx-auto w-full max-w-sm">
            <div className="animate-float glass-card glow-ring relative overflow-hidden rounded-4xl p-3">
              <img
                src={photo.url}
                alt="Portrait of Sajjad Ahmed, senior Flutter developer"
                className="aspect-square w-full rounded-3xl object-cover"
              />
              <div className="flex items-center justify-between px-3 py-4">
                <div>
                  <p className="font-display text-base font-semibold">Sajjad Ahmed</p>
                  <p className="text-xs text-muted-foreground">Mobile application developer</p>
                </div>
                <span className="flex items-center gap-1 text-xs text-primary">
                  <Star className="size-3.5 fill-current" /> 7+ yrs
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="overflow-hidden border-y border-border bg-surface/40 py-4">
        <div className="animate-marquee flex w-max gap-10 pr-10">
          {[...MARQUEE, ...MARQUEE].map((m, i) => (
            <span
              key={`${m}-${i}`}
              className="font-mono text-xs tracking-widest whitespace-nowrap text-muted-foreground uppercase"
            >
              {m}
            </span>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <Section id="about" eyebrow="About" title="Mobile engineering, end to end">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-5 text-muted-foreground">
            <p className="leading-relaxed">
              I specialise in Flutter, Dart, Android and iOS. Over the last seven years I've
              designed and delivered scalable cross-platform applications, integrating REST APIs,
              WebSockets, Firebase services, blockchain technologies and AI-powered features.
            </p>
            <p className="leading-relaxed">
              My strengths sit in mobile architecture, state management, performance optimisation
              and real-time systems — taking enterprise products from concept through to launch on
              both the Google Play Store and the Apple App Store.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Clean, maintainable architecture",
                "Real-time & high-frequency UI",
                "Store submission & release",
                "Design-faithful interfaces",
              ].map((f) => (
                <div key={f} className="flex items-start gap-2 text-sm">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-3xl p-6">
            <h3 className="font-display text-sm tracking-widest text-primary uppercase">
              Education
            </h3>
            <p className="mt-4 font-display text-lg font-semibold">BS Computer Science</p>
            <p className="text-sm text-muted-foreground">Hazara University</p>
            <p className="mt-1 font-mono text-xs text-muted-foreground">2012 — 2016</p>

            <div className="mt-6 border-t border-border pt-6">
              <h3 className="font-display text-sm tracking-widest text-primary uppercase">
                Based in
              </h3>
              <p className="mt-3 flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                Islamabad, Pakistan
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* SKILLS */}
      <Section id="skills" eyebrow="Skills" title="What I bring to your product">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((s) => (
            <article
              key={s.title}
              className="glass-card group rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
            >
              <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                <s.icon className="size-5" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience" eyebrow="Experience" title="Where I've been building">
        <ol className="relative space-y-6 border-l border-border pl-6 md:pl-10">
          {EXPERIENCE.map((e) => (
            <li key={e.company} className="relative">
              <span className="absolute -left-[31px] top-2 size-3 rounded-full bg-primary md:-left-[47px]" />
              <div className="glass-card rounded-3xl p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <h3 className="font-display text-lg font-semibold">{e.company}</h3>
                    <p className="text-sm text-primary">{e.role}</p>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">{e.period}</span>
                </div>
                <ul className="mt-4 space-y-2">
                  {e.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
                      <span className="leading-relaxed">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" eyebrow="Projects" title="Selected work">
        <div className="grid gap-5 md:grid-cols-3">
          {PROJECTS.map((p) => (
            <article
              key={p.name}
              className="glass-card flex flex-col rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
            >
              <p className="font-mono text-[11px] tracking-widest text-primary uppercase">
                {p.kind}
              </p>
              <h3 className="mt-3 font-display text-xl font-semibold">{p.name}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-surface-2 px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                >
                  Visit site <ArrowRight className="size-4" />
                </a>
              )}
            </article>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" eyebrow="Contact" title="Let's build your next app">
        <div className="glass-card glow-ring rounded-4xl p-7 md:p-10">
          <p className="max-w-xl text-muted-foreground">
            Have a mobile product in mind, or need an experienced Flutter engineer on your team?
            I'd love to hear about it.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <ContactCard
              icon={Mail}
              label="Email"
              value="sajjadahmed393@gmail.com"
              href="mailto:sajjadahmed393@gmail.com"
            />
            <ContactCard
              icon={Phone}
              label="Phone"
              value="+92 314 9783282"
              href="tel:+923149783282"
            />
            <ContactCard
              icon={Linkedin}
              label="LinkedIn"
              value="linkedin.com/in/sajjad-a"
              href="https://www.linkedin.com/in/sajjad-a/"
            />
          </div>
          <a
            href="mailto:sajjadahmed393@gmail.com"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            Start a conversation <ArrowRight className="size-4" />
          </a>
        </div>
      </Section>

      <footer className="border-t border-border py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Sajjad Ahmed. All rights reserved.</p>
          <p className="font-mono">Flutter · iOS · Android</p>
        </div>
      </footer>
    </div>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <p className="font-mono text-xs tracking-[0.25em] text-primary uppercase">{eyebrow}</p>
        <h2 className="mt-3 mb-10 font-display text-3xl font-bold md:text-4xl">{title}</h2>
        {children}
      </div>
    </section>
  );
}

function ContactCard({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer noopener"
      className="rounded-2xl border border-border bg-surface/60 p-5 transition-colors hover:border-primary"
    >
      <span className="inline-flex size-9 items-center justify-center rounded-xl bg-primary/15 text-primary">
        <Icon className="size-4" />
      </span>
      <p className="mt-3 font-mono text-[11px] tracking-widest text-muted-foreground uppercase">
        {label}
      </p>
      <p className="mt-1 text-sm break-all text-foreground">{value}</p>
    </a>
  );
}
