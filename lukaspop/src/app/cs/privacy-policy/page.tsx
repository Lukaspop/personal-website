// pages/privacy-policy.tsx
import Link from "next/link";
import PageWrapper from "@/components/PageWrapper";

export default function PrivacyPolicy() {
  return (
    <PageWrapper>
      <section className="mx-auto max-w-7xl px-6 py-12">
        <h1 className="text-primary mb-6 text-4xl font-bold">Privacy Policy</h1>

        <p className="text-lg leading-relaxed">
          Respektujeme vaše soukromí a zavazujeme se chránit vaše osobní údaje. Tento dokument
          vysvětluje, jaké informace shromažďujeme, jak je používáme a jaké možnosti máte k
          dispozici, pokud jde o ochranu vašich údajů.
        </p>

        <h2 className="mt-6 text-2xl font-semibold">1. Shromažďování osobních údajů</h2>
        <p>
          Na našich stránkách shromažďujeme pouze anonymní údaje, které používáme pro analýzu
          návštěvnosti a zlepšení výkonu webu. Tyto údaje zahrnují:
        </p>
        <ul className="ml-6 list-disc">
          <li>
            IP adresa, typ zařízení, prohlížeč a další informace o vašem používání webu, které nám
            pomáhají zlepšovat naše služby.
          </li>
        </ul>

        <h2 className="mt-6 text-2xl font-semibold">2. Google Analytics a Google Tag Manager</h2>
        <p>
          Na tomto webu používáme Google Analytics a Google Tag Manager pro analýzu návštěvnosti
          webu a sledování konverzí. Google Analytics shromažďuje anonymní údaje o chování
          návštěvníků, které nám pomáhají porozumět, jak uživatelé používají naše stránky. Google
          Tag Manager nám umožňuje efektivně spravovat a nasazovat analytické a marketingové
          nástroje na našem webu.
        </p>
        <p>
          Pro více informací o tom, jak Google Analytics zpracovává vaše údaje, si prosím přečtěte
          jejich{" "}
          <Link
            href="https://policies.google.com/privacy"
            className="text-primary hover:underline"
            target="_blank"
          >
            zásady ochrany soukromí
          </Link>
          .
        </p>

        <h2 className="mt-6 text-2xl font-semibold">3. Vaše práva</h2>
        <p>
          Máte právo na přístup k informacím, které o vás shromažďujeme, a právo na jejich opravu
          nebo odstranění. Pokud máte jakékoliv otázky ohledně zpracování vašich údajů, kontaktujte
          nás na e-mailové adrese [email@lukaspop.com].
        </p>

        <h2 className="mt-6 text-2xl font-semibold">4. Odkazy na Cookies Policy</h2>
        <p>
          Pro více informací o použití cookies a jejich správě si prosím přečtěte naši{" "}
          <Link href="/cookies" className="text-primary hover:underline">
            Cookies Policy
          </Link>
          .
        </p>
      </section>
    </PageWrapper>
  );
}
