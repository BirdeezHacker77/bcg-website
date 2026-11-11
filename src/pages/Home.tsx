import { Link } from 'react-router-dom'

const heroImage =
  'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2400&q=80'

const disciplines = [
  {
    title: 'Civil',
    copy: 'Infrastructure and sitework delivered with survey-grade precision.',
    image:
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80',
    to: '/services#civil',
  },
  {
    title: 'Commercial',
    copy: 'Shell-to-finish builds for operators who measure in schedule certainty.',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    to: '/services#commercial',
  },
  {
    title: 'Residential',
    copy: 'High-spec homes and multi-family work with craft that holds up close.',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    to: '/services#residential',
  },
]

export function Home() {
  return (
    <>
      <section className="relative min-h-[100svh] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.55)_0%,rgba(5,5,5,0.35)_35%,rgba(5,5,5,0.88)_100%)]"
          aria-hidden
        />
        <div className="absolute inset-0 opacity-[0.12] mix-blend-overlay bg-[radial-gradient(circle_at_20%_20%,#fff,transparent_35%),radial-gradient(circle_at_80%_60%,#cfd5db,transparent_40%)]" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-28 md:px-8 md:pb-24">
          <img
            src="/bcg-logo.png"
            alt="Bird Construction Group"
            className="h-20 w-auto md:h-28 logo-enter mb-8 drop-shadow-[0_12px_40px_rgba(0,0,0,0.55)]"
          />
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-chrome max-w-4xl reveal reveal-delay-1">
            Built with elite precision.
          </h1>
          <p className="mt-5 max-w-xl text-base md:text-lg text-mist/85 reveal reveal-delay-2">
            Civil, commercial, and residential construction for owners who expect disciplined
            execution.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 reveal reveal-delay-3">
            <Link
              to="/contact"
              className="bg-chrome text-ink font-display text-sm tracking-[0.14em] uppercase px-6 py-3 shimmer"
            >
              Request a Bid
            </Link>
            <Link
              to="/projects"
              className="border border-chrome/40 text-mist font-display text-sm tracking-[0.14em] uppercase px-6 py-3 hover:border-chrome/80 transition-colors"
            >
              View Projects
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="max-w-2xl">
          <p className="font-display text-xs tracking-[0.28em] uppercase text-silver">Disciplines</p>
          <h2 className="mt-3 font-display text-3xl md:text-5xl text-chrome">
            Three markets. One standard.
          </h2>
          <p className="mt-4 text-silver leading-relaxed">
            BCG Inc brings the same field discipline across every vertical — clear scopes, tight
            coordination, and finishes that survive inspection.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {disciplines.map((item) => (
            <Link key={item.title} to={item.to} className="group block">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={item.image}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-display text-2xl text-mist tracking-wide">{item.title}</h3>
                  <p className="mt-2 text-sm text-silver">{item.copy}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-chrome/15 bg-charcoal">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-2 md:items-center md:px-8 md:py-28">
          <div>
            <p className="font-display text-xs tracking-[0.28em] uppercase text-silver">Approach</p>
            <h2 className="mt-3 font-display text-3xl md:text-5xl text-chrome">
              Industrial clarity. Zero theater.
            </h2>
            <p className="mt-5 text-silver leading-relaxed">
              We plan hard, communicate early, and protect the critical path. From earthwork through
              turnover, Bird Construction Group is built for owners who prize schedule integrity and
              craft that photographs clean — then performs for decades.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex border border-chrome/40 px-5 py-3 font-display text-sm tracking-[0.14em] uppercase text-mist hover:border-chrome/80 transition-colors"
            >
              About BCG
            </Link>
          </div>
          <div className="relative aspect-[5/4] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=80"
              alt="Construction crew and steel frame at dusk"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-chrome/20" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="font-display text-xs tracking-[0.28em] uppercase text-silver">Next step</p>
            <h2 className="mt-3 font-display text-3xl md:text-5xl text-chrome">
              Ready to bid your next build?
            </h2>
            <p className="mt-4 text-silver">
              Share scope, site, and timeline. We’ll respond with a clear path forward.
            </p>
          </div>
          <Link
            to="/contact"
            className="bg-chrome text-ink font-display text-sm tracking-[0.14em] uppercase px-6 py-3 self-start shimmer"
          >
            Contact BCG
          </Link>
        </div>
      </section>
    </>
  )
}
