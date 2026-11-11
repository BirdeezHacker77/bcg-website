type PageHeroProps = {
  title: string
  subtitle: string
  image: string
}

export function PageHero({ title, subtitle, image }: PageHeroProps) {
  return (
    <section className="relative min-h-[42vh] md:min-h-[48vh] flex items-end overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${image})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/35" aria-hidden />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-12 pt-28 md:px-8 md:pb-16">
        <p className="font-display text-xs tracking-[0.28em] uppercase text-silver mb-3 reveal">
          Bird Construction Group
        </p>
        <h1 className="font-display text-4xl md:text-6xl font-extrabold tracking-tight text-chrome reveal reveal-delay-1">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-silver text-base md:text-lg reveal reveal-delay-2">
          {subtitle}
        </p>
      </div>
    </section>
  )
}
