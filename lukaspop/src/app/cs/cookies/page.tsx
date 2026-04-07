import Link from "next/link";
import PageWrapper from "@/components/PageWrapper";
import Head from "next/head";
export const metadata = {
  title: "Cookies",
  alternates: {
    canonical: "https://lukaspop.com/cs/cookies",
  },
};
export default function Cookies() {
  return (
    <>
      <Head>
        <link rel="alternate" href="https://lukaspop.com/cs/cookies" hrefLang="cs" />
        <link rel="alternate" href="https://lukaspop.com/cs/cookies" hrefLang="en" />
        <link rel="alternate" href="https://lukaspop.com/cs/cookies" hrefLang="x-default" />
      </Head>
      <PageWrapper>
        <section className="py-24">
          <h1 className="text-primary mb-8 text-5xl font-bold">Cookies</h1>

          <p className="text-lg leading-relaxed text-neutral-400">
            Tento web používá cookies pro zajištění správného fungování a zlepšení uživatelského
            zážitku. Pomáhají mi analyzovat návštěvnost a optimalizovat výkon stránky.
          </p>

          <div className="mt-12 space-y-4">
            <h2 className="text-2xl font-semibold">Jaké cookies používám?</h2>

            <ul className="space-y-3 text-neutral-400">
              <li>
                <strong className="text-white">Nezbytné cookies</strong> – zajišťují základní funkce
                webu, jako je bezpečnost a navigace (právní základ: oprávněný zájem).
              </li>
              <li>
                <strong className="text-white">Analytické cookies</strong> – pomáhají mi pochopit,
                jak návštěvníci používají web (Google Analytics, Tag Manager). Tyto cookies jsou
                ukládány pouze s vaším souhlasem.
              </li>
            </ul>
          </div>

          <div className="mt-12 space-y-4">
            <h2 className="text-2xl font-semibold">Jak cookies spravovat?</h2>

            <p className="leading-relaxed text-neutral-400">
              Nastavení cookies můžete změnit ve svém prohlížeči nebo prostřednictvím cookie lišty.
              Svůj souhlas můžete kdykoliv odvolat.
            </p>
          </div>

          <div className="mt-12 space-y-4">
            <h2 className="text-2xl font-semibold">Používané nástroje</h2>

            <p className="leading-relaxed text-neutral-400">
              Tento web využívá Google Analytics a Google Tag Manager pro analýzu návštěvnosti a
              chování uživatelů. Data jsou anonymizovaná a slouží pouze ke zlepšení webu.
            </p>

            <p className="text-neutral-400">
              Více informací najdete v{" "}
              <Link
                href="https://policies.google.com/privacy"
                className="text-primary hover:underline"
                target="_blank"
              >
                zásadách ochrany soukromí Google
              </Link>
              .
            </p>
          </div>

          <div className="mt-12 space-y-4">
            <h2 className="text-2xl font-semibold">Doba uchování</h2>

            <p className="text-neutral-400">
              Cookies jsou ukládány po dobu nezbytnou k jejich funkci, maximálně však po dobu
              stanovenou třetími stranami (např. Google Analytics).
            </p>
          </div>

          <div className="mt-12 space-y-4">
            <h2 className="text-2xl font-semibold">Správce</h2>

            <p className="text-neutral-400">
              Správcem osobních údajů je Lukáš Pop. V případě dotazů mě můžete kontaktovat na{" "}
              <a href="mailto:hello@lukaspop.com" className="text-primary hover:underline">
                hello@lukaspop.com
              </a>
              .
            </p>
          </div>
        </section>
      </PageWrapper>
    </>
  );
}
