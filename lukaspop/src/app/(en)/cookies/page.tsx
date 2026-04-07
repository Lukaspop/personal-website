import Link from "next/link";
import PageWrapper from "@/components/PageWrapper";
import Head from "next/head";
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
            This website uses cookies to ensure proper functioning and to improve the user
            experience. They help us analyze traffic and optimize the website's performance.
          </p>

          <div className="mt-12 space-y-4">
            <h2 className="text-2xl font-semibold">What Cookies Do We Use?</h2>
            <ul className="space-y-3 text-neutral-400">
              <li>
                <strong className="text-white">Essential Cookies</strong> – These ensure basic
                website functions such as security and navigation (legal basis: legitimate
                interest).
              </li>
              <li>
                <strong className="text-white">Analytical Cookies</strong> – These help us
                understand how visitors use the site (Google Analytics, Tag Manager). These cookies
                are only stored with your consent.
              </li>
            </ul>
          </div>

          <div className="mt-12 space-y-4">
            <h2 className="text-2xl font-semibold">How to Manage Cookies?</h2>
            <p className="leading-relaxed text-neutral-400">
              You can change your cookie settings in your browser or through the cookie bar. You can
              withdraw your consent at any time.
            </p>
          </div>

          <div className="mt-12 space-y-4">
            <h2 className="text-2xl font-semibold">Tools Used</h2>
            <p className="leading-relaxed text-neutral-400">
              This website uses Google Analytics and Google Tag Manager for traffic analysis and
              user behavior tracking. Data is anonymized and used solely for improving the website.
            </p>
            <p className="text-neutral-400">
              For more information, please refer to the{" "}
              <Link
                href="https://policies.google.com/privacy"
                className="text-primary hover:underline"
                target="_blank"
              >
                Google Privacy Policy
              </Link>
              .
            </p>
          </div>

          <div className="mt-12 space-y-4">
            <h2 className="text-2xl font-semibold">Retention Period</h2>
            <p className="text-neutral-400">
              Cookies are stored for as long as necessary for their function, but no longer than the
              period specified by third parties (e.g., Google Analytics).
            </p>
          </div>

          <div className="mt-12 space-y-4">
            <h2 className="text-2xl font-semibold">Data Controller</h2>
            <p className="text-neutral-400">
              The data controller is Lukáš Pop. If you have any questions, you can contact me at{" "}
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
