import { PageHero } from '../components/PageHero'
import { Link } from 'react-router-dom'

export function About() {
  return (
    <>
      <PageHero
        title="About"
        subtitle="Bird Construction Group is an elite builder focused on disciplined delivery."
        image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-start">
          <div>
            <p className="font-display text-xs tracking-[0.28em] uppercase text-silver">BCG Inc</p>
            <h2 className="mt-3 font-display text-3xl md:text-5xl text-chrome">
              Strength. Precision. Presence.
            </h2>
            <div className="mt-6 space-y-5 text-silver leading-relaxed">
              <p>
                Bird Construction Group operates at the intersection of industrial rigor and modern
                craft. We were built for owners who want a contractor that communicates clearly,
                protects the critical path, and finishes work that holds up under close inspection.
              </p>
              <p>
                Across civil infrastructure, commercial facilities, and residential builds, our
                teams share one standard: plan thoroughly, execute cleanly, and leave the site
                better than we found it.
              </p>
              <p>
                The eagle mark is more than branding — it signals how we work: sharp focus,
                decisive action, and a standard that sits above commodity construction.
              </p>
            </div>
          </div>

          <div className="border border-chrome/20 bg-steel/60 p-8">
            <img src="/bcg-logo.png" alt="Bird Construction Group logo" className="h-20 w-auto" />
            <div className="metal-line my-8" />
            <dl className="space-y-6">
              <div>
                <dt className="font-display text-xs tracking-[0.22em] uppercase text-silver">
                  Markets
                </dt>
                <dd className="mt-2 text-mist">Civil · Commercial · Residential</dd>
              </div>
              <div>
                <dt className="font-display text-xs tracking-[0.22em] uppercase text-silver">
                  Focus
                </dt>
                <dd className="mt-2 text-mist">Schedule integrity, craft quality, clean turnover</dd>
              </div>
              <div>
                <dt className="font-display text-xs tracking-[0.22em] uppercase text-silver">
                  Engagement
                </dt>
                <dd className="mt-2 text-mist">Bid packages, negotiated work, design-assist partners</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="border-y border-chrome/15 bg-charcoal">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <h2 className="font-display text-2xl md:text-4xl text-chrome">How we work</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              {
                step: '01',
                title: 'Scope clarity',
                copy: 'We pressure-test drawings, site constraints, and sequencing before mobilization.',
              },
              {
                step: '02',
                title: 'Field discipline',
                copy: 'Crews protect quality and schedule with daily coordination that stays visible.',
              },
              {
                step: '03',
                title: 'Clean closeout',
                copy: 'Documentation, punch, and turnover are treated as part of the craft — not an afterthought.',
              },
            ].map((item) => (
              <div key={item.step}>
                <p className="font-display text-sm tracking-[0.2em] text-silver">{item.step}</p>
                <h3 className="mt-2 font-display text-xl text-mist">{item.title}</h3>
                <p className="mt-3 text-sm text-silver leading-relaxed">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="font-display text-2xl md:text-3xl text-chrome">
            Let’s talk about your next project.
          </p>
          <Link
            to="/contact"
            className="bg-chrome text-ink font-display text-sm tracking-[0.14em] uppercase px-6 py-3 self-start shimmer"
          >
            Contact
          </Link>
        </div>
      </section>
    </>
  )
}
