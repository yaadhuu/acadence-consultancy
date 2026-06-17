import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Mail, MessageCircle, Linkedin } from "lucide-react";
import logoAsset from "@/assets/acadence-logo.asset.json";

export const Route = createFileRoute("/terms-of-service")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Acadence" },
      { name: "description", content: "Read the Acadence Terms of Service to understand the rules, responsibilities, and disclaimers for using our academic consultancy services." },
      { property: "og:title", content: "Terms of Service — Acadence" },
      { property: "og:description", content: "Acadence Terms of Service and user agreement." },
      { property: "og:image", content: logoAsset.url },
      { property: "twitter:image", content: logoAsset.url },
    ],
  }),
  component: TermsOfService,
});

const tocItems = [
  { id: "acceptance", label: "1. Acceptance of Terms" },
  { id: "nature-of-services", label: "2. Nature of Services" },
  { id: "user-responsibilities", label: "3. User Responsibilities" },
  { id: "prohibited-use", label: "4. Prohibited Use" },
  { id: "payments", label: "5. Payments" },
  { id: "revisions", label: "6. Revisions" },
  { id: "delivery", label: "7. Delivery" },
  { id: "intellectual-property", label: "8. Intellectual Property" },
  { id: "confidentiality", label: "9. Confidentiality" },
  { id: "no-guarantees", label: "10. No Guarantees" },
  { id: "limitation-of-liability", label: "11. Limitation of Liability" },
  { id: "right-to-refuse", label: "12. Right to Refuse Service" },
  { id: "third-party-services", label: "13. Third-Party Services" },
  { id: "modifications", label: "14. Modifications" },
  { id: "severability", label: "15. Severability" },
  { id: "contact", label: "16. Contact" },
  { id: "acknowledgment", label: "Acknowledgment" },
];

function TermsOfService() {
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
              Terms of Service
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
              <section id="acceptance" className="scroll-mt-28">
                <h2 className="font-serif text-2xl text-navy sm:text-3xl">1. Acceptance of Terms</h2>
                <p className="mt-4 text-left text-muted-foreground">
                  By accessing or using Acadence services ("the Service"), you acknowledge and agree to these Terms of Service.
                </p>
                <p className="mt-4 text-left text-muted-foreground">
                  If you do not agree to these Terms, you must discontinue use of the Service.
                </p>
              </section>

              <hr className="my-10 border-navy/10" />

              <section id="nature-of-services" className="scroll-mt-28">
                <h2 className="font-serif text-2xl text-navy sm:text-3xl">2. Nature of Services</h2>
                <p className="mt-4 text-left text-muted-foreground">
                  Acadence provides academic consultancy, research support, editing, proofreading, and related assistance.
                </p>
                <p className="mt-4 text-left text-muted-foreground">
                  Services are intended for guidance, reference, and educational support purposes only.
                </p>
                <p className="mt-4 text-left text-muted-foreground">
                  Acadence does not act as an academic institution, publisher, or certification authority.
                </p>
              </section>

              <hr className="my-10 border-navy/10" />

              <section id="user-responsibilities" className="scroll-mt-28">
                <h2 className="font-serif text-2xl text-navy sm:text-3xl">3. User Responsibilities</h2>
                <p className="mt-4 text-left text-muted-foreground">By using the Service, you agree that:</p>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-left text-muted-foreground">
                  <li>All information provided by you is accurate and complete</li>
                  <li>Materials submitted belong to you or are lawfully provided</li>
                  <li>You are responsible for reviewing all delivered work before use</li>
                  <li>You are solely responsible for how delivered materials are used</li>
                </ul>
                <p className="mt-4 text-left text-muted-foreground">
                  Acadence is not responsible for misuse, unauthorized submission, or violation of institutional policies by clients.
                </p>
              </section>

              <hr className="my-10 border-navy/10" />

              <section id="prohibited-use" className="scroll-mt-28">
                <h2 className="font-serif text-2xl text-navy sm:text-3xl">4. Prohibited Use</h2>
                <p className="mt-4 text-left text-muted-foreground">You agree not to use the Service for:</p>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-left text-muted-foreground">
                  <li>Illegal activities</li>
                  <li>Fraudulent activities</li>
                  <li>Copyright infringement</li>
                  <li>Submission of unlawful content</li>
                  <li>Activities that violate academic or institutional regulations</li>
                  <li>Harassment, abuse, or threats toward service providers</li>
                </ul>
                <p className="mt-4 text-left text-muted-foreground">
                  Acadence reserves the right to refuse or terminate service for such activities.
                </p>
              </section>

              <hr className="my-10 border-navy/10" />

              <section id="payments" className="scroll-mt-28">
                <h2 className="font-serif text-2xl text-navy sm:text-3xl">5. Payments</h2>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-left text-muted-foreground">
                  <li>Pricing is communicated before work begins.</li>
                  <li>Work may begin only after payment confirmation where applicable.</li>
                  <li>Additional requests outside original scope may require additional charges.</li>
                  <li>Payment obligations remain valid once work has commenced.</li>
                </ul>
                <p className="mt-4 text-left text-muted-foreground">
                  Acadence reserves the right to pause or withhold delivery in case of non-payment.
                </p>
              </section>

              <hr className="my-10 border-navy/10" />

              <section id="revisions" className="scroll-mt-28">
                <h2 className="font-serif text-2xl text-navy sm:text-3xl">6. Revisions</h2>
                <p className="mt-4 text-left text-muted-foreground">
                  Reasonable revisions may be provided where necessary and within the original project scope.
                </p>
                <p className="mt-4 text-left text-muted-foreground">
                  Acadence reserves the right to determine whether revision requests fall within the agreed scope.
                </p>
                <p className="mt-4 text-left text-muted-foreground">
                  Requests that significantly alter the original project may be treated as new work.
                </p>
              </section>

              <hr className="my-10 border-navy/10" />

              <section id="delivery" className="scroll-mt-28">
                <h2 className="font-serif text-2xl text-navy sm:text-3xl">7. Delivery</h2>
                <p className="mt-4 text-left text-muted-foreground">
                  Estimated delivery timelines may be communicated based on project requirements.
                </p>
                <p className="mt-4 text-left text-muted-foreground">However:</p>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-left text-muted-foreground">
                  <li>Timelines are estimates only</li>
                  <li>Delivery may depend on client responsiveness</li>
                  <li>Delays caused by incomplete information, external issues, or scope changes are not the responsibility of Acadence</li>
                </ul>
                <p className="mt-4 text-left text-muted-foreground">
                  Acadence does not guarantee fixed deadlines unless explicitly agreed.
                </p>
              </section>

              <hr className="my-10 border-navy/10" />

              <section id="intellectual-property" className="scroll-mt-28">
                <h2 className="font-serif text-2xl text-navy sm:text-3xl">8. Intellectual Property</h2>
                <p className="mt-4 text-left text-muted-foreground">
                  Upon full payment, clients may use delivered materials for personal, academic, or professional purposes.
                </p>
                <p className="mt-4 text-left text-muted-foreground">
                  Acadence retains ownership of internal methodologies, templates, systems, and operational frameworks used to produce the work.
                </p>
                <p className="mt-4 text-left text-muted-foreground">
                  Client-submitted materials remain the responsibility of the client.
                </p>
                <p className="mt-4 text-left text-muted-foreground">
                  Acadence does not claim ownership over client-provided content.
                </p>
              </section>

              <hr className="my-10 border-navy/10" />

              <section id="confidentiality" className="scroll-mt-28">
                <h2 className="font-serif text-2xl text-navy sm:text-3xl">9. Confidentiality</h2>
                <p className="mt-4 text-left text-muted-foreground">
                  Acadence treats project materials and communications as confidential.
                </p>
                <p className="mt-4 text-left text-muted-foreground">However, confidentiality may be limited where:</p>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-left text-muted-foreground">
                  <li>Disclosure is legally required</li>
                  <li>Technical operations require limited access</li>
                  <li>Security or operational integrity is at risk</li>
                </ul>
                <p className="mt-4 text-left text-muted-foreground">
                  Absolute confidentiality cannot be guaranteed.
                </p>
                <p className="mt-4 text-left text-muted-foreground">
                  For information on data handling, refer to the{" "}
                  <Link to="/privacy-policy" className="text-navy underline transition-colors hover:text-gold">
                    Privacy Policy
                  </Link>.
                </p>
              </section>

              <hr className="my-10 border-navy/10" />

              <section id="no-guarantees" className="scroll-mt-28">
                <h2 className="font-serif text-2xl text-navy sm:text-3xl">10. No Guarantees</h2>
                <p className="mt-4 text-left text-muted-foreground">Acadence makes no guarantees regarding:</p>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-left text-muted-foreground">
                  <li>Academic grades</li>
                  <li>Institutional acceptance</li>
                  <li>Publication outcomes</li>
                  <li>Supervisor approval</li>
                  <li>Research results</li>
                  <li>Professional outcomes</li>
                </ul>
                <p className="mt-4 text-left text-muted-foreground">
                  All services are provided on a reasonable-effort basis.
                </p>
              </section>

              <hr className="my-10 border-navy/10" />

              <section id="limitation-of-liability" className="scroll-mt-28">
                <h2 className="font-serif text-2xl text-navy sm:text-3xl">11. Limitation of Liability</h2>
                <p className="mt-4 text-left text-muted-foreground">
                  To the fullest extent permitted:
                </p>
                <p className="mt-4 text-left text-muted-foreground">Acadence shall not be liable for:</p>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-left text-muted-foreground">
                  <li>Academic penalties</li>
                  <li>Institutional disciplinary actions</li>
                  <li>Rejections or failed submissions</li>
                  <li>Indirect losses</li>
                  <li>Consequential damages</li>
                  <li>Third-party claims arising from client use of deliverables</li>
                </ul>
                <p className="mt-4 text-left text-muted-foreground">
                  Total liability, if any, shall not exceed the amount paid for the specific service.
                </p>
              </section>

              <hr className="my-10 border-navy/10" />

              <section id="right-to-refuse" className="scroll-mt-28">
                <h2 className="font-serif text-2xl text-navy sm:text-3xl">12. Right to Refuse Service</h2>
                <p className="mt-4 text-left text-muted-foreground">
                  Acadence reserves the right to refuse, suspend, or terminate services at any time where:
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-left text-muted-foreground">
                  <li>Requests are unethical</li>
                  <li>Requests are unlawful</li>
                  <li>Requests exceed operational capacity</li>
                  <li>Client behavior becomes abusive or disruptive</li>
                  <li>Risk to service integrity is identified</li>
                </ul>
                <p className="mt-4 text-left text-muted-foreground">
                  Such decisions remain at the sole discretion of Acadence.
                </p>
              </section>

              <hr className="my-10 border-navy/10" />

              <section id="third-party-services" className="scroll-mt-28">
                <h2 className="font-serif text-2xl text-navy sm:text-3xl">13. Third-Party Services</h2>
                <p className="mt-4 text-left text-muted-foreground">
                  Acadence may use third-party tools, platforms, payment providers, and communication systems.
                </p>
                <p className="mt-4 text-left text-muted-foreground">
                  Acadence is not responsible for independent actions, outages, or policies of such third parties.
                </p>
                <p className="mt-4 text-left text-muted-foreground">
                  Use of such services may be subject to their own terms.
                </p>
              </section>

              <hr className="my-10 border-navy/10" />

              <section id="modifications" className="scroll-mt-28">
                <h2 className="font-serif text-2xl text-navy sm:text-3xl">14. Modifications</h2>
                <p className="mt-4 text-left text-muted-foreground">
                  Acadence reserves the right to update or modify these Terms at any time.
                </p>
                <p className="mt-4 text-left text-muted-foreground">
                  Updated versions will be posted on the website.
                </p>
                <p className="mt-4 text-left text-muted-foreground">
                  Continued use of the Service after updates constitutes acceptance of revised Terms.
                </p>
              </section>

              <hr className="my-10 border-navy/10" />

              <section id="severability" className="scroll-mt-28">
                <h2 className="font-serif text-2xl text-navy sm:text-3xl">15. Severability</h2>
                <p className="mt-4 text-left text-muted-foreground">
                  If any part of these Terms is found unenforceable, the remaining provisions shall remain valid and enforceable.
                </p>
              </section>

              <hr className="my-10 border-navy/10" />

              <section id="contact" className="scroll-mt-28">
                <h2 className="font-serif text-2xl text-navy sm:text-3xl">16. Contact</h2>
                <p className="mt-4 text-left text-muted-foreground">
                  For questions regarding these Terms:
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
                  By using Acadence services, you confirm that you have read, understood, and agreed to these Terms of Service.
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
              <p className="font-serif text-xl text-navy">Acadence Terms of Service</p>
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
