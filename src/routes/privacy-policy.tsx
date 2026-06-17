import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Mail, MessageCircle, Linkedin } from "lucide-react";
import logoAsset from "@/assets/acadence-logo.asset.json";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Acadence" },
      { name: "description", content: "Read the Acadence Privacy Policy to understand how client information is collected, used, stored, and protected." },
      { property: "og:title", content: "Privacy Policy — Acadence" },
      { property: "og:description", content: "Acadence Privacy Policy and service disclaimer." },
      { property: "og:image", content: logoAsset.url },
      { property: "twitter:image", content: logoAsset.url },
    ],
  }),
  component: PrivacyPolicy,
});

const tocItems = [
  { id: "introduction", label: "1. Introduction" },
  { id: "information-collected", label: "2. Information Collected" },
  { id: "how-information-is-used", label: "3. How Information Is Used" },
  { id: "data-confidentiality", label: "4. Data Confidentiality and Security" },
  { id: "client-responsibility", label: "5. Client Responsibility" },
  { id: "service-disclaimer", label: "6. Service Disclaimer" },
  { id: "data-retention", label: "7. Data Retention" },
  { id: "cookies", label: "8. Cookies and Tracking" },
  { id: "third-party-services", label: "9. Third-Party Services" },
  { id: "right-to-refuse", label: "10. Right to Refuse or Terminate Service" },
  { id: "international-users", label: "11. International Users" },
  { id: "policy-changes", label: "12. Policy Changes" },
  { id: "contact", label: "13. Contact" },
  { id: "acknowledgment", label: "Acknowledgment" },
];

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background">
        <nav className="container-prose flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={logoAsset.url} alt="Acadence logo" className="h-11 w-11 object-contain" />
            <span className="font-serif text-2xl font-semibold tracking-wide text-navy">Acadence</span>
          </Link>
          <ul className="hidden items-center gap-10 text-sm font-medium text-navy md:flex">
            {["Services", "About", "Contact"].map((l) => (
              <li key={l}>
                <Link
                  to={`/#${l.toLowerCase()}`}
                  className="relative py-2 transition-colors hover:text-gold"
                >
                  {l}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/#contact"
                className="inline-flex h-10 items-center rounded-md border border-navy px-5 text-sm font-semibold text-navy transition-all hover:bg-navy hover:text-primary-foreground"
              >
                Consult
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container-prose">
          {/* Page Header */}
          <div className="mb-12 max-w-3xl">
            <p className="eyebrow">Legal</p>
            <span className="hairline mt-5 mb-6" />
            <h1 className="font-serif text-4xl text-navy sm:text-5xl lg:text-6xl">
              Privacy Policy
            </h1>
            <p className="mt-4 text-sm font-medium text-muted-foreground">
              Last Updated: June 2026
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-[280px_1fr]">
            {/* Table of Contents */}
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
                <h2 className="font-serif text-lg text-navy">Contents</h2>
                <hr className="mt-3 border-navy/10" />
                <ul className="mt-4 space-y-2 text-sm">
                  {tocItems.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="block text-navy/80 transition-colors hover:text-gold"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* Main Content */}
            <article className="prose-privacy max-w-none">
              <section id="introduction" className="scroll-mt-28">
                <h2 className="font-serif text-2xl text-navy sm:text-3xl">1. Introduction</h2>
                <p className="mt-4 text-left text-muted-foreground">
                  Acadence ("the Service") values the privacy and confidentiality of its clients. This Privacy Policy explains how personal information is collected, used, stored, and protected when accessing the website or using academic consultancy services.
                </p>
                <p className="mt-4 text-left text-muted-foreground">
                  By using the Service, you acknowledge and agree to the practices described in this Privacy Policy.
                </p>
              </section>

              <hr className="my-10 border-navy/10" />

              <section id="information-collected" className="scroll-mt-28">
                <h2 className="font-serif text-2xl text-navy sm:text-3xl">2. Information Collected</h2>

                <h3 className="mt-8 font-serif text-xl text-navy">2.1 Information Provided by Clients</h3>
                <p className="mt-4 text-left text-muted-foreground">The following information may be collected:</p>
                <p className="mt-4 text-left font-semibold text-navy">Contact Information</p>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-left text-muted-foreground">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Phone number or WhatsApp contact</li>
                  <li>Academic institution (optional)</li>
                  <li>Subject area or field of study</li>
                </ul>
                <p className="mt-4 text-left font-semibold text-navy">Project Information</p>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-left text-muted-foreground">
                  <li>Project type (essay, dissertation, thesis, case study, research paper, etc.)</li>
                  <li>Academic requirements</li>
                  <li>Deadlines</li>
                  <li>Supporting documents and instructions</li>
                </ul>
                <p className="mt-4 text-left font-semibold text-navy">Payment Information</p>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-left text-muted-foreground">
                  <li>Billing details where applicable</li>
                  <li>Transaction references</li>
                  <li>Payment confirmations</li>
                </ul>
                <p className="mt-4 text-left font-semibold text-navy">Communication Records</p>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-left text-muted-foreground">
                  <li>Email messages</li>
                  <li>WhatsApp communications</li>
                  <li>LinkedIn messages</li>
                  <li>Revision requests and feedback</li>
                </ul>

                <h3 className="mt-8 font-serif text-xl text-navy">2.2 Information Collected Automatically</h3>
                <p className="mt-4 text-left text-muted-foreground">The website may automatically collect:</p>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-left text-muted-foreground">
                  <li>Browser type</li>
                  <li>Device type</li>
                  <li>IP address</li>
                  <li>Pages visited</li>
                  <li>Session duration</li>
                  <li>Referral source</li>
                  <li>Cookies and similar technologies</li>
                </ul>
                <p className="mt-4 text-left text-muted-foreground">
                  This information is used for operational and analytical purposes.
                </p>
              </section>

              <hr className="my-10 border-navy/10" />

              <section id="how-information-is-used" className="scroll-mt-28">
                <h2 className="font-serif text-2xl text-navy sm:text-3xl">3. How Information Is Used</h2>
                <p className="mt-4 text-left text-muted-foreground">Collected information may be used for:</p>

                <h3 className="mt-6 font-serif text-xl text-navy">3.1 Service Delivery</h3>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-left text-muted-foreground">
                  <li>Managing and delivering requested services</li>
                  <li>Communicating project updates</li>
                  <li>Processing revisions</li>
                  <li>Providing customer support</li>
                </ul>

                <h3 className="mt-6 font-serif text-xl text-navy">3.2 Operational Improvement</h3>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-left text-muted-foreground">
                  <li>Improving internal service quality</li>
                  <li>Monitoring website functionality</li>
                  <li>Enhancing user experience</li>
                  <li>Maintaining service efficiency</li>
                </ul>

                <h3 className="mt-6 font-serif text-xl text-navy">3.3 Payment and Recordkeeping</h3>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-left text-muted-foreground">
                  <li>Verifying payments</li>
                  <li>Maintaining transaction records</li>
                  <li>Preventing unauthorized activity</li>
                </ul>

                <h3 className="mt-6 font-serif text-xl text-navy">3.4 Legal and Compliance Purposes</h3>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-left text-muted-foreground">
                  <li>Complying with applicable legal obligations</li>
                  <li>Responding to lawful requests</li>
                  <li>Protecting operational integrity</li>
                </ul>
              </section>

              <hr className="my-10 border-navy/10" />

              <section id="data-confidentiality" className="scroll-mt-28">
                <h2 className="font-serif text-2xl text-navy sm:text-3xl">4. Data Confidentiality and Security</h2>
                <p className="mt-4 text-left text-muted-foreground">
                  Reasonable administrative, technical, and organizational safeguards are used to protect personal data and project materials against unauthorized access, misuse, or disclosure.
                </p>
                <p className="mt-4 text-left text-muted-foreground">
                  Project materials and personal information are treated confidentially and are not disclosed to unauthorized third parties except:
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-left text-muted-foreground">
                  <li>Where necessary for service delivery</li>
                  <li>Where required by law</li>
                  <li>Where required for technical operations (such as hosting, payment processing, or communication systems)</li>
                </ul>
                <p className="mt-4 text-left text-muted-foreground">
                  While reasonable security measures are maintained, no online transmission or storage system can be guaranteed as completely secure.
                </p>
              </section>

              <hr className="my-10 border-navy/10" />

              <section id="client-responsibility" className="scroll-mt-28">
                <h2 className="font-serif text-2xl text-navy sm:text-3xl">5. Client Responsibility</h2>
                <p className="mt-4 text-left text-muted-foreground">Clients are solely responsible for ensuring that all materials submitted:</p>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-left text-muted-foreground">
                  <li>Do not infringe copyright or third-party rights</li>
                  <li>Do not violate academic policies or institutional regulations</li>
                  <li>Do not contain unlawful, harmful, or prohibited content</li>
                </ul>
                <p className="mt-4 text-left text-muted-foreground">
                  Acadence does not assume responsibility for the legality, authenticity, or ownership of client-submitted materials.
                </p>
              </section>

              <hr className="my-10 border-navy/10" />

              <section id="service-disclaimer" className="scroll-mt-28">
                <h2 className="font-serif text-2xl text-navy sm:text-3xl">6. Service Disclaimer</h2>
                <p className="mt-4 text-left text-muted-foreground">
                  Acadence provides academic support, consultancy, editing, and assistance services.
                </p>
                <p className="mt-4 text-left text-muted-foreground">While efforts are made to maintain quality and accuracy:</p>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-left text-muted-foreground">
                  <li>No guarantees are made regarding grades, academic performance, publication outcomes, or institutional acceptance</li>
                  <li>Clients remain fully responsible for how delivered materials are used</li>
                  <li>Final submission decisions and academic compliance remain the client’s responsibility</li>
                </ul>
              </section>

              <hr className="my-10 border-navy/10" />

              <section id="data-retention" className="scroll-mt-28">
                <h2 className="font-serif text-2xl text-navy sm:text-3xl">7. Data Retention</h2>
                <p className="mt-4 text-left text-muted-foreground">Personal and project-related information may be retained:</p>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-left text-muted-foreground">
                  <li>During active service delivery</li>
                  <li>For a reasonable period after project completion for revisions, communication, or dispute handling</li>
                  <li>As required by applicable legal or operational obligations</li>
                </ul>
                <p className="mt-4 text-left text-muted-foreground">
                  Data deletion requests may be reviewed and processed subject to operational, contractual, and legal requirements.
                </p>
              </section>

              <hr className="my-10 border-navy/10" />

              <section id="cookies" className="scroll-mt-28">
                <h2 className="font-serif text-2xl text-navy sm:text-3xl">8. Cookies and Tracking</h2>
                <p className="mt-4 text-left text-muted-foreground">Cookies may be used to:</p>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-left text-muted-foreground">
                  <li>Improve website functionality</li>
                  <li>Store user preferences</li>
                  <li>Monitor website performance</li>
                  <li>Enhance security</li>
                </ul>
                <p className="mt-4 text-left text-muted-foreground">
                  Users may disable cookies through browser settings. Some website functions may be affected by doing so.
                </p>
              </section>

              <hr className="my-10 border-navy/10" />

              <section id="third-party-services" className="scroll-mt-28">
                <h2 className="font-serif text-2xl text-navy sm:text-3xl">9. Third-Party Services</h2>
                <p className="mt-4 text-left text-muted-foreground">The Service may use third-party providers for:</p>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-left text-muted-foreground">
                  <li>Website hosting</li>
                  <li>Payment processing</li>
                  <li>Communication tools</li>
                  <li>Analytics</li>
                </ul>
                <p className="mt-4 text-left text-muted-foreground">
                  These third-party services operate under their own privacy policies and security standards.
                </p>
                <p className="mt-4 text-left text-muted-foreground">
                  Acadence is not responsible for the independent practices of such third parties.
                </p>
              </section>

              <hr className="my-10 border-navy/10" />

              <section id="right-to-refuse" className="scroll-mt-28">
                <h2 className="font-serif text-2xl text-navy sm:text-3xl">10. Right to Refuse or Terminate Service</h2>
                <p className="mt-4 text-left text-muted-foreground">Acadence reserves the right to refuse, suspend, or terminate services where requests:</p>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-left text-muted-foreground">
                  <li>Violate legal requirements</li>
                  <li>Conflict with ethical standards</li>
                  <li>Present operational risks</li>
                  <li>Involve prohibited content</li>
                </ul>
                <p className="mt-4 text-left text-muted-foreground">
                  This decision may be made at sole discretion.
                </p>
              </section>

              <hr className="my-10 border-navy/10" />

              <section id="international-users" className="scroll-mt-28">
                <h2 className="font-serif text-2xl text-navy sm:text-3xl">11. International Users</h2>
                <p className="mt-4 text-left text-muted-foreground">
                  Users accessing the Service from outside their own jurisdiction acknowledge that information may be processed through systems and platforms operating internationally.
                </p>
                <p className="mt-4 text-left text-muted-foreground">
                  By using the Service, users consent to such processing where applicable.
                </p>
              </section>

              <hr className="my-10 border-navy/10" />

              <section id="policy-changes" className="scroll-mt-28">
                <h2 className="font-serif text-2xl text-navy sm:text-3xl">12. Policy Changes</h2>
                <p className="mt-4 text-left text-muted-foreground">
                  This Privacy Policy may be updated at any time without prior notice.
                </p>
                <p className="mt-4 text-left text-muted-foreground">
                  Updated versions will be published on the website with a revised "Last Updated" date.
                </p>
                <p className="mt-4 text-left text-muted-foreground">
                  Continued use of the Service after updates constitutes acceptance of the revised policy.
                </p>
              </section>

              <hr className="my-10 border-navy/10" />

              <section id="contact" className="scroll-mt-28">
                <h2 className="font-serif text-2xl text-navy sm:text-3xl">13. Contact</h2>
                <p className="mt-4 text-left text-muted-foreground">
                  For privacy-related concerns, inquiries, or requests:
                </p>
                <ul className="mt-4 space-y-3 text-left">
                  <li>
                    <a
                      href="mailto:support@acadenceconsultancy.com"
                      className="inline-flex items-center gap-2 text-navy transition-colors hover:text-gold"
                    >
                      <Mail className="h-5 w-5 text-gold" />
                      support@acadenceconsultancy.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://wa.me/918078578102"
                      className="inline-flex items-center gap-2 text-navy transition-colors hover:text-gold"
                    >
                      <MessageCircle className="h-5 w-5 text-gold" />
                      WhatsApp: +91 80785 78102
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://linkedin.com/in/yadhu-krishna-6424972bb"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-navy transition-colors hover:text-gold"
                    >
                      <Linkedin className="h-5 w-5 text-gold" />
                      LinkedIn: Acadence Consultancy
                    </a>
                  </li>
                </ul>
              </section>

              <hr className="my-10 border-navy/10" />

              <section id="acknowledgment" className="scroll-mt-28">
                <h2 className="font-serif text-2xl text-navy sm:text-3xl">Acknowledgment</h2>
                <p className="mt-4 text-left text-muted-foreground">
                  By using Acadence services, you acknowledge that you have read, understood, and agreed to this Privacy Policy.
                </p>
                <p className="mt-4 text-left font-medium text-navy">
                  Version: 1.0<br />
                  Effective Date: June 2026
                </p>
              </section>
            </article>
          </div>
        </div>
      </main>

      {/* Bottom / Footer */}
      <footer className="border-t border-border bg-offwhite py-12 md:py-16">
        <div className="container-prose">
          <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-md">
              <p className="font-serif text-xl text-navy">Acadence Privacy Policy</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Last Updated: June 2026
              </p>
            </div>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href="mailto:support@acadenceconsultancy.com"
                className="inline-flex items-center gap-2 text-navy transition-colors hover:text-gold"
              >
                <Mail className="h-4 w-4 text-gold" />
                support@acadenceconsultancy.com
              </a>
              <a
                href="https://wa.me/918078578102"
                className="inline-flex items-center gap-2 text-navy transition-colors hover:text-gold"
              >
                <MessageCircle className="h-4 w-4 text-gold" />
                WhatsApp: +91 80785 78102
              </a>
            </div>
          </div>

          <hr className="my-8 border-navy/10" />

          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-navy transition-colors hover:text-gold"
            >
              <ArrowLeft className="h-4 w-4" />
              Return to Home
            </Link>
            <p className="text-xs text-muted-foreground">
              © 2026 Acadence. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
