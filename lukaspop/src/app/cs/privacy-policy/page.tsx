import Link from "next/link";
import PageWrapper from "@/components/PageWrapper";
import Head from "next/head";
export const metadata = {
  title: "Privacy Policy",
  alternates: {
    canonical: "https://lukaspop.com/cs/privacy-policy",
  },
};
export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <link rel="alternate" href="https://lukaspop.com/cs/privacy-policy" hrefLang="cs" />
        <link rel="alternate" href="https://lukaspop.com/privacy-policy" hrefLang="en" />
        <link rel="alternate" href="https://lukaspop.com/privacy-policy" hrefLang="x-default" />
      </Head>

      <PageWrapper>
        <section className="py-24">
          <h1 className="text-primary mb-6 text-5xl font-bold">Privacy Policy</h1>

          <p className="text-lg leading-relaxed text-neutral-400">
            Respektujeme vaše soukromí a zavazujeme se chránit vaše osobní údaje. Tento dokument
            vysvětluje, jaké informace shromažďujeme, jak je používáme a jaké možnosti máte k
            dispozici pro ochranu vašich údajů.
          </p>

          <div className="mt-12 space-y-4">
            <h2 className="text-2xl font-semibold">1. Shromažďování osobních údajů</h2>
            <p className="leading-relaxed text-neutral-400">
              Na tomto webu shromažďujeme pouze anonymní údaje, které používáme pro analýzu
              návštěvnosti a zlepšení výkonu webu. Tyto údaje zahrnují:
            </p>
            <ul className="ml-6 list-disc text-neutral-400">
              <li>
                IP adresa, typ zařízení, prohlížeč a další informace o používání webu, které nám
                pomáhají zlepšit naše služby.
              </li>
            </ul>
          </div>

          <div className="mt-12 space-y-4">
            <h2 className="text-2xl font-semibold">2. Google Analytics a Google Tag Manager</h2>
            <p className="leading-relaxed text-neutral-400">
              Tento web používá Google Analytics a Google Tag Manager pro analýzu návštěvnosti a
              sledování konverzí. Google Analytics shromažďuje anonymizované údaje o chování
              návštěvníků, které nám pomáhají pochopit, jak uživatelé používají naše stránky. Google
              Tag Manager nám umožňuje efektivně spravovat analytické a marketingové nástroje na
              našem webu.
            </p>
            <p className="text-neutral-400">
              Pro více informací o tom, jak Google Analytics zpracovává vaše údaje, si prosím
              přečtěte jejich{" "}
              <Link
                href="https://policies.google.com/privacy"
                className="text-primary hover:underline"
                target="_blank"
              >
                zásady ochrany soukromí
              </Link>
              .
            </p>
          </div>

          <div className="mt-12 space-y-4">
            <h2 className="text-2xl font-semibold">3. Vaše práva</h2>
            <p className="leading-relaxed text-neutral-400">
              Máte právo na přístup k informacím, které o vás shromažďujeme, a právo na jejich
              opravu nebo odstranění. Pokud máte jakékoliv otázky ohledně zpracování vašich údajů,
              kontaktujte nás na e-mailové adrese{" "}
              <a href="mailto:hello@lukaspop.com" className="text-primary hover:underline">
                hello@lukaspop.com
              </a>
              .
            </p>
          </div>

          <div className="mt-12 space-y-4">
            <h2 className="text-2xl font-semibold">4. Odkazy na Cookies Policy</h2>
            <p className="leading-relaxed text-neutral-400">
              Pro více informací o použití cookies a jejich správě si prosím přečtěte naši{" "}
              <Link href="/cs/cookies" className="text-primary hover:underline">
                Cookies Policy
              </Link>
              .
            </p>
          </div>
        </section>
      </PageWrapper>
    </>
  );
}
