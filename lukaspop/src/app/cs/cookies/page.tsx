// pages/cookies-policy.tsx
import Link from "next/link";
import PageWrapper from "@/components/PageWrapper";

export default function Cookies() {
  return (
    <PageWrapper>
      <section className="mx-auto max-w-7xl px-6 py-12">
        <h1 className="text-primary mb-6 text-4xl font-bold">Cookies Policy</h1>

        <p className="text-lg leading-relaxed">
          Soubory cookies jsou malé textové soubory, které se ukládají na vaše zařízení při návštěvě
          našich webových stránek. Cookies nám pomáhají analyzovat návštěvnost a zlepšovat výkon
          našich stránek.
        </p>

        <h2 className="mt-6 text-2xl font-semibold">1. Jaké cookies používáme?</h2>
        <p>Na tomto webu používáme následující typy cookies:</p>
        <ul className="ml-6 list-disc">
          <li>
            <strong>Nezbytné cookies:</strong> Cookies, které jsou nezbytné pro základní funkce webu
            (např. bezpečnostní funkce a základní navigace).
          </li>
          <li>
            <strong>Analytické cookies:</strong> Cookies, které používáme k analýze návštěvnosti a
            chování uživatelů prostřednictvím Google Analytics a Tag Manager.
          </li>
        </ul>

        <h2 className="mt-6 text-2xl font-semibold">2. Jak spravovat soubory cookies?</h2>
        <p>
          Pokud si přejete změnit nastavení cookies, můžete tak učinit prostřednictvím nastavení
          vašeho prohlížeče. Můžete cookies zakázat, odstranit nebo blokovat, ale to může ovlivnit
          některé funkce našich stránek.
        </p>

        <h2 className="mt-6 text-2xl font-semibold">3. Google Analytics a Google Tag Manager</h2>
        <p>
          Na našem webu používáme Google Analytics a Google Tag Manager, které nám pomáhají
          analyzovat návštěvnost a sledovat interakce návštěvníků s našimi stránkami. Tyto nástroje
          shromažďují anonymní údaje pomocí cookies, které nám pomáhají optimalizovat naše služby.
        </p>
        <p>
          Více informací o cookies Google Analytics a Tag Manager naleznete v jejich{" "}
          <Link
            href="https://policies.google.com/privacy"
            className="text-primary hover:underline"
            target="_blank"
          >
            zásadách ochrany soukromí
          </Link>
          .
        </p>
      </section>
    </PageWrapper>
  );
}
