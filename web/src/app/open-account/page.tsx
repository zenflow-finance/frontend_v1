import SectionHeading from "@/components/SectionHeading";
import SectionShell from "@/components/SectionShell";
import { openDematAssets } from "@/content/openDematAssets";
import {
  dematAdvantages,
  dematBenefits,
  dematConsiderations,
  dematDefinition,
  dematTerms,
  dematTypes,
  goodDematFeatures,
  openDematHero,
  openDematOffers,
  openDematProcess,
  openDematSteps,
  openDematWhyChoose,
  rocketAppFeatures,
  tradingOptions
} from "@/content/openDematContent";

// Responsive image helper to swap web/tablet/mobile placeholders.
function ResponsiveImage({
  asset,
  className = ""
}: {
  asset: typeof openDematAssets.hero;
  className?: string;
}) {
  return (
    <picture>
      <source media="(max-width: 640px)" srcSet={asset.mobile} />
      <source media="(max-width: 1024px)" srcSet={asset.tab} />
      <img
        src={asset.web}
        alt={asset.alt}
        className={className}
        loading="lazy"
      />
    </picture>
  );
}

// Open Demat Account landing page.
// Layout is kept close to the reference while using Zenflow branding.
export default function OpenAccountPage() {
  return (
    <main>
      {/* Hero section with form and offers */}
      <section className="relative overflow-hidden bg-ivory/80">
        <div className="container-base grid gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ink/70">
              Join Zenflow Family!
            </p>
            <h1 className="mt-4 text-4xl font-semibold text-ink md:text-5xl">
              Open a{" "}
              <span className="text-zen-saffron">Demat Account</span>
            </h1>

            <div className="mt-6 rounded-[28px] border border-ink/10 bg-white px-6 py-5 shadow-sm">
              <div className="grid gap-6 text-sm text-ink/70 md:grid-cols-3">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zen-saffron/15 text-zen-saffron text-2xl">
                    ₹
                  </div>
                  <div>
                    <p className="text-2xl font-semibold text-ink">₹0</p>
                    <p className="text-sm text-ink/70">AMC Charges*</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 md:border-l md:border-ink/10 md:pl-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zen-saffron/15 text-zen-saffron text-xl">
                    ↓
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-ink">Low</p>
                    <p className="text-sm text-ink/70">Brokerage*</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 md:border-l md:border-ink/10 md:pl-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zen-saffron/15 text-zen-saffron text-xl">
                    %
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-ink">Low MTF</p>
                    <p className="text-sm text-ink/70">Interest*</p>
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-6 text-lg text-ink/70">
              Open Demat and Trading account in 3 minutes
            </p>

            <div className="mt-4 rounded-2xl bg-ink p-3 shadow-deep sm:flex sm:items-center sm:gap-3">
              <div className="flex flex-1 items-center rounded-xl bg-white px-4 py-3 text-sm">
                <span className="text-ink/60">+91</span>
                <span className="mx-3 h-5 w-px bg-ink/10" />
                <input
                  type="tel"
                  placeholder="Enter Number"
                  className="w-full bg-transparent text-sm text-ink placeholder:text-ink/40 focus:outline-none"
                />
              </div>
              <button className="mt-3 w-full rounded-xl bg-zen-saffron px-5 py-3 text-sm font-semibold text-white shadow-glow sm:mt-0 sm:w-auto">
                Open Demat Account
              </button>
            </div>

            <p className="mt-3 text-xs text-ink/50">
              By clicking “Open Demat Account”, you agree to our Terms &
              Conditions and confirm that you have read our Privacy Policy.
            </p>
            <div className="mt-3 flex items-start gap-2 text-xs text-ink/50">
              <span className="mt-1 inline-block h-3 w-3 rounded-full border border-zen-saffron" />
              <p>
                I authorize Zenflow to contact me via SMS, messages, promotional,
                and informational content.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-6 text-sm text-ink/70">
              <span>10K+ App Downloads and Growing!</span>
              <span>4.5 Play Store Rating</span>
              <span>Advance Investing & Trading Tools</span>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <ResponsiveImage
              asset={openDematAssets.hero}
              className="w-full max-w-xl rounded-[32px] border border-ink/10 shadow-deep"
            />
          </div>
        </div>
      </section>

      {/* What we offer strip */}
      <section className="bg-white">
        <div className="container-base py-12">
          <h2 className="text-center text-3xl font-semibold text-ink">
            What Do <span className="text-zen-saffron">We Offer?</span>
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {openDematOffers.map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-ink/10 bg-ivory/60 px-4 py-3"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zen-saffron/15 text-sm font-semibold text-zen-saffron">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <span className="text-sm font-medium text-ink">{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-ink/50">
            Placeholder icons shown as numbered badges. Replace with custom
            icons later.
          </p>
        </div>
      </section>

      {/* Steps section */}
      <SectionShell className="py-14">
        <SectionHeading
          eyebrow="How It Works"
          title="How to open a Demat account online with Zenflow"
          subtitle="Get your Demat account ready within minutes in simple steps."
        />
        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="space-y-4">
            {openDematSteps.map((step) => (
              <div
                key={step.step}
                className="card border-ink/10 bg-white/90"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zen-saffron">
                  {step.step}
                </p>
                <p className="mt-2 text-sm font-medium text-ink">{step.title}</p>
              </div>
            ))}
            <button className="mt-2 rounded-full bg-ink px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-ivory">
              Open Demat Account
            </button>
          </div>
          <ResponsiveImage
            asset={openDematAssets.steps}
            className="w-full rounded-[32px] border border-ink/10 shadow-sm"
          />
        </div>
      </SectionShell>

      {/* Why choose section */}
      <SectionShell className="bg-ivory/60 py-14">
        <SectionHeading
          eyebrow="Why Zenflow"
          title="Why choose Zenflow?"
          subtitle="Speed, clarity, and compliant onboarding from day one."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {openDematWhyChoose.map((item) => (
            <div key={item} className="card border-ink/10">
              <p className="text-sm text-ink/70">{item}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      {/* Awards section */}
      <SectionShell className="py-14">
        <SectionHeading
          eyebrow="Trust"
          title="We are highly awarded and trusted"
          subtitle="Replace this placeholder with real awards and badges."
        />
        <div className="mt-8">
          <ResponsiveImage
            asset={openDematAssets.awards}
            className="w-full rounded-[32px] border border-ink/10"
          />
        </div>
      </SectionShell>

      {/* Rocket app section */}
      <SectionShell className="bg-ivory/60 py-14">
        <SectionHeading
          eyebrow="Rocket"
          title="Our investing & trading platform Rocket app"
          subtitle="Built for super traders and long-term investors."
        />
        <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <ResponsiveImage
            asset={openDematAssets.app}
            className="w-full rounded-[32px] border border-ink/10"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {rocketAppFeatures.map((feature) => (
              <div key={feature} className="card border-ink/10">
                <p className="text-sm font-medium text-ink">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      {/* Demat definition */}
      <SectionShell className="py-14">
        <SectionHeading
          eyebrow="Basics"
          title="What is a Demat account?"
          subtitle="A quick primer before you begin."
        />
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <p className="text-sm text-ink/70">{dematDefinition}</p>
          <ResponsiveImage
            asset={openDematAssets.demat}
            className="w-full rounded-[32px] border border-ink/10"
          />
        </div>
      </SectionShell>

      {/* Types of demat accounts */}
      <SectionShell className="bg-ivory/60 py-14">
        <SectionHeading
          eyebrow="Types"
          title="Types of Demat accounts"
          subtitle="Choose the account that matches your profile."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {dematTypes.map((type) => (
            <div key={type.title} className="card border-ink/10">
              <p className="text-sm font-semibold text-ink">{type.title}</p>
              <p className="mt-2 text-sm text-ink/70">{type.description}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      {/* Key benefits */}
      <SectionShell className="py-14">
        <SectionHeading
          eyebrow="Benefits"
          title="Key benefits of opening a Demat account online"
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {dematBenefits.map((benefit) => (
            <div key={benefit} className="card border-ink/10">
              <p className="text-sm text-ink/70">{benefit}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      {/* Common terms */}
      <SectionShell className="bg-ivory/60 py-14">
        <SectionHeading
          eyebrow="Glossary"
          title="Common Demat account terms you should know"
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {dematTerms.map((term) => (
            <div key={term.title} className="card border-ink/10">
              <p className="text-sm font-semibold text-ink">{term.title}</p>
              <p className="mt-2 text-sm text-ink/70">{term.description}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      {/* Trading options */}
      <SectionShell className="py-14">
        <SectionHeading
          eyebrow="Instruments"
          title="Trading & investment options with a Zenflow Demat account"
        />
        <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {tradingOptions.map((option) => (
            <div key={option} className="card border-ink/10">
              <p className="text-sm text-ink/70">{option}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      {/* How to open */}
      <SectionShell className="bg-ivory/60 py-14">
        <SectionHeading
          eyebrow="Process"
          title="How to open a Demat account with Zenflow"
        />
        <ol className="mt-8 space-y-3 text-sm text-ink/70">
          {openDematProcess.map((item) => (
            <li key={item} className="card border-ink/10">
              {item}
            </li>
          ))}
        </ol>
      </SectionShell>

      {/* Good demat features */}
      <SectionShell className="py-14">
        <SectionHeading
          eyebrow="Quality"
          title="Features of a good Demat account"
        />
        <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {goodDematFeatures.map((item) => (
            <div key={item} className="card border-ink/10">
              <p className="text-sm text-ink/70">{item}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      {/* Things to consider */}
      <SectionShell className="bg-ivory/60 py-14">
        <SectionHeading
          eyebrow="Checklist"
          title="Things to consider before opening a Demat account"
        />
        <div className="mt-8 space-y-3">
          {dematConsiderations.map((item) => (
            <div key={item} className="card border-ink/10">
              <p className="text-sm text-ink/70">{item}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      {/* Advantages */}
      <SectionShell className="py-14">
        <SectionHeading
          eyebrow="Advantages"
          title="Zenflow Demat account advantages"
        />
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {dematAdvantages.map((item) => (
            <div key={item} className="card border-ink/10">
              <p className="text-sm text-ink/70">{item}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      {/* Compliance block (Zenflow wording placeholder) */}
      <SectionShell className="py-12">
        <div className="card border-ink/10 bg-white">
          <h3 className="text-lg font-semibold text-ink">
            Compliance & Disclosures
          </h3>
          <p className="mt-3 text-sm text-ink/70">
            Zenflow is preparing regulatory registrations and memberships that
            will be published here prior to launch. Disclosures are provided
            for investor awareness and will be finalized with legal counsel.
          </p>
          <div className="mt-4 grid gap-4 text-xs text-ink/60 md:grid-cols-2">
            <div>
              <p className="font-semibold text-ink/70">
                SEBI Registration No. (Placeholder)
              </p>
              <p>Zenflow Finance Pvt. Ltd.</p>
              <p>Registered Address Line 1</p>
              <p>Registered Address Line 2</p>
            </div>
            <div>
              <p className="font-semibold text-ink/70">
                Investor Disclaimer (Placeholder)
              </p>
              <p>
                Investments in securities markets are subject to market risks.
                Read all related documents carefully before investing.
              </p>
              <p>Subject to IPV verification.</p>
            </div>
          </div>
        </div>
      </SectionShell>
    </main>
  );
}
