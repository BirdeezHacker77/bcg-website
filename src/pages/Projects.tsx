import { PageHero } from '../components/PageHero'
import { Link } from 'react-router-dom'

const projects = [
  {
    name: 'Harbor Line Civil Package',
    market: 'Civil',
    detail: 'Illustrative — corridor grading, utilities, and structural excavation.',
    image:
      'https://images.unsplash.com/photo-1581094271901-8022df4466f9?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Northridge Commerce Shell',
    market: 'Commercial',
    detail: 'Illustrative — multi-tenant industrial shell with phased TI delivery.',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Ashford Residences',
    market: 'Residential',
    detail: 'Illustrative — high-spec townhome community with durable envelopes.',
    image:
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Ridge Cut Retaining Program',
    market: 'Civil',
    detail: 'Illustrative — retaining systems and pad prep for hillside access.',
    image:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Summit Office Core',
    market: 'Commercial',
    detail: 'Illustrative — core and shell with glass curtain wall coordination.',
    image:
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Lumen Custom Estate',
    market: 'Residential',
    detail: 'Illustrative — custom residence with refined interior craft.',
    image:
      'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1200&q=80',
  },
]

export function Projects() {
  return (
    <>
      <PageHero
        title="Projects"
        subtitle="Selected illustrative work across civil, commercial, and residential."
        image="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <p className="mb-10 max-w-2xl text-sm text-silver">
          Project names and photography below are illustrative placeholders for brand presentation.
          Replace with client-approved case studies when available.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.name} className="group">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-chrome/15" />
              </div>
              <div className="mt-4">
                <p className="font-display text-xs tracking-[0.22em] uppercase text-silver">
                  {project.market}
                </p>
                <h2 className="mt-1 font-display text-xl text-mist">{project.name}</h2>
                <p className="mt-2 text-sm text-silver leading-relaxed">{project.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-chrome/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-16 md:flex-row md:items-center md:justify-between md:px-8">
          <h2 className="font-display text-2xl md:text-4xl text-chrome">Have a site ready to bid?</h2>
          <Link
            to="/contact"
            className="border border-chrome/40 px-6 py-3 font-display text-sm tracking-[0.14em] uppercase text-mist hover:border-chrome/80 transition-colors self-start"
          >
            Request Bid
          </Link>
        </div>
      </section>
    </>
  )
}
