import { NavLink, Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export function Layout() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <div className="min-h-screen flex flex-col">
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled || open ? 'bg-ink/90 backdrop-blur-md border-b border-chrome/15' : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 md:px-8">
          <NavLink to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <img
              src="/bcg-logo.png"
              alt="Bird Construction Group"
              className="h-10 w-auto md:h-12"
            />
          </NavLink>

          <nav className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  `font-display text-sm tracking-[0.14em] uppercase transition-colors ${
                    isActive ? 'text-mist' : 'text-silver hover:text-mist'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              className="bg-chrome text-ink font-display text-sm tracking-[0.12em] uppercase px-4 py-2 shimmer"
            >
              Request Bid
            </NavLink>
          </nav>

          <button
            type="button"
            className="md:hidden text-mist border border-chrome/30 px-3 py-2 font-display text-xs tracking-[0.16em] uppercase"
            aria-expanded={open}
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-chrome/15 bg-ink/95 px-5 py-6">
            <nav className="flex flex-col gap-4">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.end}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `font-display text-base tracking-[0.14em] uppercase ${
                      isActive ? 'text-mist' : 'text-silver'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-chrome/15 bg-charcoal">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-12 md:flex-row md:items-end md:justify-between md:px-8">
          <div>
            <img src="/bcg-logo.png" alt="Bird Construction Group" className="h-14 w-auto mb-4" />
            <p className="max-w-md text-sm text-silver leading-relaxed">
              Bird Construction Group (BCG Inc) — precision builds across civil, commercial, and
              residential markets.
            </p>
          </div>
          <div className="text-sm text-silver space-y-1">
            <p className="font-display tracking-[0.16em] uppercase text-mist">Contact</p>
            <a className="block hover:text-mist transition-colors" href="mailto:bids@birdconstruction.group">
              bids@birdconstruction.group
            </a>
            <p>Serving civil · commercial · residential</p>
          </div>
        </div>
        <div className="metal-line" />
        <div className="mx-auto max-w-7xl px-5 py-4 md:px-8 text-xs text-silver/80">
          © {new Date().getFullYear()} Bird Construction Group Inc. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
