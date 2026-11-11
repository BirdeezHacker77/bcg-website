import { PageHero } from '../components/PageHero'
import { Link } from 'react-router-dom'

const services = [
  {
    id: 'civil',
    title: 'Civil',
    lead: 'Groundwork that sets the tone for every phase that follows.',
    points: [
      'Site development, grading, and utilities',
      'Roads, pads, and drainage systems',
      'Structural excavation and retaining works',
    ],
    image:
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 'commercial',
    title: 'Commercial',
    lead: 'Facilities engineered for operations — not just opening day.',
    points: [
      'Office, industrial, and mixed-use shells',
      'Tenant improvements and core fit-outs',
      'Phased deliveries for live campuses',
    ],
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 'residential',
    title: 'Residential',
    lead: 'Homes and multi-family projects finished to a standard that lasts.',
    points: [
      'Custom and production residential builds',
      'Multi-family and townhome delivery',
      'High-spec interiors and exterior envelopes',
    ],
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80',
  },
]

export function Services() {
  return (
    <>
      <PageHero
        title="Services"
        subtitle="Civil, commercial, and residential construction under one exacting standard."
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2000&q=80"
      />

      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24 space-y-24">
        {services.map((service, index) => (
          <section
            key={service.id}
            id={service.id}
            className={`grid gap-10 md:grid-cols-2 md:items-center ${
              index % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''
            }`}
          >
            <div className="relative aspect-[5/4] overflow-hidden">
              <img src={service.image} alt="" className="h-full w-full object-cover" />
              <div className="absolute inset-0 ring-1 ring-inset ring-chrome/20" />
            </div>
            <div>
              <p className="font-display text-xs tracking-[0.28em] uppercase text-silver">
                Discipline 0{index + 1}
              </p>
              <h2 className="mt-3 font-display text-3xl md:text-5xl text-chrome">{service.title}</h2>
              <p className="mt-4 text-silver leading-relaxed">{service.lead}</p>
              <ul className="mt-6 space-y-3">
                {service.points.map((point) => (
                  <li key={point} className="flex gap-3 text-mist/90">
                    <span className="mt-2 h-px w-6 shrink-0 bg-chrome/60" aria-hidden />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>

      <section className="border-t border-chrome/15 bg-charcoal">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-16 md:flex-row md:items-center md:justify-between md:px-8">
          <div>
            <h2 className="font-display text-2xl md:text-4xl text-chrome">Need a scoped proposal?</h2>
            <p className="mt-2 text-silver">Tell us the market, site, and target start.</p>
          </div>
          <Link
            to="/contact"
            className="bg-chrome text-ink font-display text-sm tracking-[0.14em] uppercase px-6 py-3 self-start shimmer"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </>
  )
}
