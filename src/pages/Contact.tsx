import { useState } from 'react'
import type { FormEvent } from 'react'
import { PageHero } from '../components/PageHero'

const MAILTO = 'bids@birdconstruction.group'
const FORMSPREE_ENDPOINT = '' // set e.g. https://formspree.io/f/xxxxxx when ready

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'sent' | 'error'>('idle')

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') || '')
    const email = String(data.get('email') || '')
    const phone = String(data.get('phone') || '')
    const market = String(data.get('market') || '')
    const message = String(data.get('message') || '')

    if (FORMSPREE_ENDPOINT) {
      try {
        const res = await fetch(FORMSPREE_ENDPOINT, {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body: data,
        })
        if (!res.ok) throw new Error('Formspree error')
        setStatus('sent')
        form.reset()
        return
      } catch {
        setStatus('error')
        return
      }
    }

    const subject = encodeURIComponent(`Bid request — ${market || 'General'} — ${name}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMarket: ${market}\n\n${message}`,
    )
    window.location.href = `mailto:${MAILTO}?subject=${subject}&body=${body}`
    setStatus('sent')
  }

  return (
    <>
      <PageHero
        title="Contact"
        subtitle="Request a bid or start a conversation about your next build."
        image="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-[0.9fr_1.1fr] md:px-8 md:py-24">
        <div>
          <p className="font-display text-xs tracking-[0.28em] uppercase text-silver">Reach BCG</p>
          <h2 className="mt-3 font-display text-3xl text-chrome">Tell us about the work.</h2>
          <p className="mt-4 text-silver leading-relaxed">
            Include site location, target start, and whether you need civil, commercial, or
            residential delivery. We’ll follow up with next steps.
          </p>
          <div className="mt-8 space-y-3 text-sm">
            <a className="block text-mist hover:underline" href={`mailto:${MAILTO}`}>
              {MAILTO}
            </a>
            <p className="text-silver">
              Form mode:{' '}
              <span className="text-mist">
                {FORMSPREE_ENDPOINT ? 'Formspree endpoint configured' : 'client-side mailto fallback'}
              </span>
            </p>
            <p className="text-silver/80 text-xs leading-relaxed">
              Placeholder note: set <code className="text-mist">FORMSPREE_ENDPOINT</code> in{' '}
              <code className="text-mist">Contact.tsx</code> to switch from mailto to Formspree.
              Email address above is a brand placeholder until production inbox is confirmed.
            </p>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="border border-chrome/20 bg-steel/40 p-6 md:p-8 space-y-5"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm">
              <span className="font-display text-xs tracking-[0.18em] uppercase text-silver">
                Name
              </span>
              <input
                required
                name="name"
                className="mt-2 w-full bg-ink border border-chrome/25 px-3 py-3 text-mist outline-none focus:border-chrome/60"
              />
            </label>
            <label className="block text-sm">
              <span className="font-display text-xs tracking-[0.18em] uppercase text-silver">
                Email
              </span>
              <input
                required
                type="email"
                name="email"
                className="mt-2 w-full bg-ink border border-chrome/25 px-3 py-3 text-mist outline-none focus:border-chrome/60"
              />
            </label>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm">
              <span className="font-display text-xs tracking-[0.18em] uppercase text-silver">
                Phone
              </span>
              <input
                name="phone"
                className="mt-2 w-full bg-ink border border-chrome/25 px-3 py-3 text-mist outline-none focus:border-chrome/60"
              />
            </label>
            <label className="block text-sm">
              <span className="font-display text-xs tracking-[0.18em] uppercase text-silver">
                Market
              </span>
              <select
                name="market"
                defaultValue="Commercial"
                className="mt-2 w-full bg-ink border border-chrome/25 px-3 py-3 text-mist outline-none focus:border-chrome/60"
              >
                <option>Civil</option>
                <option>Commercial</option>
                <option>Residential</option>
                <option>Mixed / Other</option>
              </select>
            </label>
          </div>

          <label className="block text-sm">
            <span className="font-display text-xs tracking-[0.18em] uppercase text-silver">
              Project details
            </span>
            <textarea
              required
              name="message"
              rows={6}
              className="mt-2 w-full bg-ink border border-chrome/25 px-3 py-3 text-mist outline-none focus:border-chrome/60 resize-y"
              placeholder="Site, timeline, square footage, drawings available…"
            />
          </label>

          <button
            type="submit"
            className="bg-chrome text-ink font-display text-sm tracking-[0.14em] uppercase px-6 py-3 shimmer"
          >
            Send Request
          </button>

          {status === 'sent' && (
            <p className="text-sm text-mist">
              {FORMSPREE_ENDPOINT
                ? 'Thanks — your request was submitted.'
                : 'Opening your email client with the bid request drafted.'}
            </p>
          )}
          {status === 'error' && (
            <p className="text-sm text-red-300">
              Something went wrong submitting the form. Email {MAILTO} directly.
            </p>
          )}
        </form>
      </section>
    </>
  )
}
