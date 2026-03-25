"use client";
import { useEffect } from "react";
import * as CookieConsent from "vanilla-cookieconsent";
import "vanilla-cookieconsent/dist/cookieconsent.css";

const CookieConsentComponent = ({ language = "en" }) => {
  useEffect(() => {
    document.documentElement.classList.add("cc--darkmode");

    CookieConsent.run({
      onChange: function ({ changedCategories, changedServices }) {
        if (changedCategories.includes("analytics")) {
          if (CookieConsent.acceptedCategory("analytics")) {
            console.log("Analytics category was just enabled");
          } else {
            console.log("Analytics category was just disabled");
          }

          if (changedServices["analytics"]?.includes("Google Analytics")) {
            if (CookieConsent.acceptedService("Google Analytics", "analytics")) {
              console.log("Google Analytics was just enabled");
            } else {
              console.log("Google Analytics was just disabled");
            }
          }
        }
      },
      categories: {
        necessary: {
          enabled: true,
          readOnly: true,
        },
        analytics: {},
      },
      guiOptions: {
        consentModal: {
          position: "bottom center",
          layout: "cloud inline",
          flipButtons: true,
          equalWeightButtons: true,
        },
      },
      language: {
        default: language, // Používáme přímo jazyk z prop `language`
        translations: {
          en: {
            consentModal: {
              title: "We use cookies",
              description:
                "This website uses cookies to ensure you get the best experience on our website.",
              acceptAllBtn: "Accept all",
              acceptNecessaryBtn: "Reject all",
              showPreferencesBtn: "Manage Individual preferences",
            },
            preferencesModal: {
              title: "Manage your cookie preferences",
              acceptAllBtn: "Accept all",
              acceptNecessaryBtn: "Reject all",
              savePreferencesBtn: "Save Preferences",
              closeIconLabel: "Close modal",
              sections: [
                {
                  title: "Strictly Necessary cookies",
                  description:
                    "These cookies are essential for the proper functioning of the website and cannot be disabled.",
                  linkedCategory: "necessary",
                },
                {
                  title: "Performance and Analytics",
                  description:
                    "These cookies collect information about how you use our website. All of the data is anonymized and cannot be used to identify you.",
                  linkedCategory: "analytics",
                },
                {
                  title: "More information",
                  description:
                    'For any queries in relation to my policy on cookies and your choices, please <a href="/cookies">visit the cookie policy page</a>',
                },
              ],
            },
          },
          cs: {
            consentModal: {
              title: "Používáme cookies",
              description: "Tato stránka používá cookies pro zajištění nejlepšího zážitku na webu.",
              acceptAllBtn: "Přijmout vše",
              acceptNecessaryBtn: "Odmítnout vše",
              showPreferencesBtn: "Spravovat individuální preference",
            },
            preferencesModal: {
              title: "Spravujte preference cookies",
              acceptAllBtn: "Přijmout vše",
              acceptNecessaryBtn: "Odmítnout vše",
              savePreferencesBtn: "Uložit preference",
              closeIconLabel: "Zavřít modal",
              sections: [
                {
                  title: "Nezbytné cookies",
                  description:
                    "Tyto cookies jsou nezbytné pro správné fungování webu a nelze je zakázat.",
                  linkedCategory: "necessary",
                },
                {
                  title: "Výkonnostní a analytické cookies",
                  description:
                    "Tyto cookies shromažďují informace o tom, jak používáte náš web. Všechna data jsou anonymizována a nelze je použít k identifikaci.",
                  linkedCategory: "analytics",
                },
                {
                  title: "Více informací",
                  description:
                    'Pro jakékoli dotazy ohledně mojí politiky cookies a vašich možností, prosím <a href="/cs/cookies">navštivte stránku cookies</a>',
                },
              ],
            },
          },
        },
      },
    });
  }, [language]);

  return null;
};

export default CookieConsentComponent;
