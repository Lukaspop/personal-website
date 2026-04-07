import Link from "next/link";
import PageWrapper from "@/components/PageWrapper";
import Head from "next/head";
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
            We respect your privacy and are committed to protecting your personal data. This
            document explains what information we collect, how we use it, and the options you have
            for protecting your data.
          </p>

          <div className="mt-12 space-y-4">
            <h2 className="text-2xl font-semibold">1. Data Collection</h2>
            <p className="leading-relaxed text-neutral-400">
              On this website, we only collect anonymized data used for traffic analysis and
              improving website performance. This data includes:
            </p>
            <ul className="ml-6 list-disc text-neutral-400">
              <li>
                IP address, device type, browser, and other usage information that helps us improve
                our services.
              </li>
            </ul>
          </div>

          <div className="mt-12 space-y-4">
            <h2 className="text-2xl font-semibold">2. Google Analytics and Google Tag Manager</h2>
            <p className="leading-relaxed text-neutral-400">
              This website uses Google Analytics and Google Tag Manager for traffic analysis and
              conversion tracking. Google Analytics collects anonymized data about visitor behavior,
              which helps us understand how users interact with our site. Google Tag Manager enables
              us to efficiently manage analytical and marketing tools on our website.
            </p>
            <p className="text-neutral-400">
              For more information about how Google Analytics handles your data, please read their{" "}
              <Link
                href="https://policies.google.com/privacy"
                className="text-primary hover:underline"
                target="_blank"
              >
                privacy policy
              </Link>
              .
            </p>
          </div>

          <div className="mt-12 space-y-4">
            <h2 className="text-2xl font-semibold">3. Your Rights</h2>
            <p className="leading-relaxed text-neutral-400">
              You have the right to access the information we collect about you, and the right to
              correct or delete it. If you have any questions about the processing of your data,
              please contact us at{" "}
              <a href="mailto:hello@lukaspop.com" className="text-primary hover:underline">
                hello@lukaspop.com
              </a>
              .
            </p>
          </div>

          <div className="mt-12 space-y-4">
            <h2 className="text-2xl font-semibold">4. Cookies Policy Links</h2>
            <p className="leading-relaxed text-neutral-400">
              For more information about the use of cookies and how to manage them, please read our{" "}
              <Link href="/cookies" className="text-primary hover:underline">
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
