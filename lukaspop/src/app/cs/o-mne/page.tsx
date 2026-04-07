import PageWrapper from "@/components/PageWrapper";
import { Timeline } from "@/components/Timeline/Timeline";
import Image from "next/image";
import TechStack from "@/components/Techstack";
import Head from "next/head";

export const metadata = {
  title: "O mně",
  description:
    "My name is Lukas Pop, and this page outlines my experiences and significant steps that have brought me to where I am now.",
  alternates: {
    canonical: "https://lukaspop.com/cs/o-mne",
  },
};

export default function OMne() {
  const data = [
    {
      year: "2011",
      title: "ZUŠ",
      description:
        "Základní umělecká škola. Tady to asi všechno začalo, poprvé jsem se zde totiž setkal s uměním. Během deseti let, jsem měl možnost vyzkoušet si několik forem umění a vyvíjela se mi zde má kreativita.",
    },
    {
      year: "2019",
      title: "První technické zmínky",
      description:
        "Ani nevím, co mě k tomu vedlo, ale každopádně v té době vznikly moje první řádky HTML někde v nějakém online learning programu.",
    },
    {
      year: "2021",
      title: "SPŠSE",
      description:
        "Nástup na střední průmyslovou školu informatiky, tohle byl pro mě klíčový bod, kdy moje hraní s kódem dostalo konečně nějakou formu.",
    },
    {
      year: "2023",
      title: "Dreamind",
      description:
        "Moje první praxe ve firmě, kde jsem se pak ukázal i následující rok. Pomáhal jsem zde s vývojem aplikace v Reactu.",
    },
    {
      year: "2025",
      title: "Maturita",
      description:
        "Dokončení střední školy, která mě naučila mnohem více, než jsem si původně myslel.",
    },
    {
      year: "2025",
      title: "Erasmus+ & Digital Funnel",
      description:
        "Po škole jsem hned letěl na Erasmus do Irska, kde jsem nasbíral mnoho zkušeností, hlavně se spoluprací, a víc se dostal k SEO.",
    },
    {
      year: "2025",
      title: "Vysoká škola",
      description:
        "Nástup na vysokou školu byl pro mě docela chaotický, ale věřím, že se časem dostanu k tématům která jsou mi bližší, protože bakalářské studium je zatím velmi obecné.",
    },

    {
      year: "2025",
      title: "Freelancing & Digital Funnel",
      description:
        "Spolupráce s Digital Funnelem mi vydržela i po Erasmu, kolega mi dokonce i dohodil zakázku pro místní kapelu, za což mu dodnes moc děkuji. If you’re reading this, thanks, Gene.",
    },
    {
      year: "2026",
      title: "Budoucnost",
      description:
        "Budoucnost moc předurčit nejde, ale pokud chcete být její součástí, neváhejte se mi ozvat.",
      dashed: true,
    },
  ];

  return (
    <>
      <Head>
        <link rel="alternate" href="https://lukaspop.com/cs/o-mne" hrefLang="cs" />
        <link rel="alternate" href="https://lukaspop.com/about-me" hrefLang="en" />
        <link rel="alternate" href="https://lukaspop.com/about-me" hrefLang="x-default" />
      </Head>
      <PageWrapper>
        <section className="mx-auto grid min-h-[calc(100vh-64px)] max-w-7xl items-center gap-14 py-16 lg:grid-cols-2">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              O mně
            </h1>

            <p className="text-lg leading-relaxed text-neutral-300">
              Ahoj, jmenuji se Lukáš a na této stránce najdete přehled mých zkušeností, toho, čemu
              se věnuji, a co mě přivedlo k tvorbě webů.
            </p>

            <p className="leading-relaxed text-neutral-400">
              Weby jsou pro mě svým způsobem formou umění, která kromě své vizuální stránky napomáhá
              značkám růst a oslovovat nové zákazníky.
            </p>

            <div className="grid gap-4 pt-4 sm:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-xs tracking-wider text-neutral-500 uppercase">Zaměření</p>

                <p className="mt-2 text-sm leading-relaxed text-neutral-300">
                  Frontend a webový vývoj
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-xs tracking-wider text-neutral-500 uppercase">Mimo tech</p>

                <p className="mt-2 text-sm leading-relaxed text-neutral-300">
                  Fitness, budoucí osobní trenér
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 scale-110 rounded-full bg-gradient-to-tr from-pink-500/20 via-purple-500/10 to-blue-500/20 blur-3xl" />

              <div className="relative h-[240px] w-[240px] overflow-hidden rounded-full border border-white/10 sm:h-[300px] sm:w-[300px] lg:h-[360px] lg:w-[360px]">
                <Image
                  src="/private-images/ImageOfMyself.webp"
                  alt="Lukas Pop"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl py-16 md:py-24">
          <div className="mb-10 max-w-2xl md:mb-12">
            <h2 className="text-3xl font-semibold text-white md:text-4xl">V čem mám zkušenosti</h2>

            <p className="mt-3 text-neutral-400">
              Nejradši se zabývám frontendovým vývojem, protože v něm mám nejvíce zkušeností, ale
              nebráním se ani jiným technologiím.
            </p>
          </div>

          <TechStack />
        </section>

        <Timeline
          data={data}
          heading="Můj příběh"
          subheading="Cesta, která mě přivedla až tam, kde teď jsem."
        />
      </PageWrapper>
    </>
  );
}
