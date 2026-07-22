import { Link } from 'react-router-dom'

import { footerGroups, socialLinks } from '@/components/features/footer/footer.constants'
import { Logo } from '@/components/common/Logo'
import { appPaths } from '@/routes/paths'

export function FooterSection() {
  return (
    <footer className="border-t border-border bg-card px-4 py-12 sm:px-6 lg:px-8" aria-label="Footer">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_1.9fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-6 text-muted-foreground">
            Calm, personalized interview readiness for students and the institutions helping
            them prepare.
          </p>
          <form className="mt-6 max-w-sm" aria-label="Newsletter placeholder">
            <label htmlFor="footer-email" className="text-sm font-medium text-foreground">
              Product updates
            </label>
            <div className="mt-3 flex gap-2">
              <input
                id="footer-email"
                type="email"
                placeholder="Email address"
                className="min-w-0 flex-1 rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground outline-none transition focus-visible:ring-3 focus-visible:ring-ring/40"
              />
              <button
                type="button"
                className="rounded-lg border border-border bg-foreground px-4 py-2 text-sm font-medium text-background transition hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40"
              >
                Join
              </button>
            </div>
          </form>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {footerGroups.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h2 className="text-sm font-semibold text-foreground">{group.title}</h2>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link}>
                    <Link
                      to={appPaths.home}
                      className="text-sm text-muted-foreground transition hover:text-foreground focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 MockMate AI. All rights reserved.</p>
        <nav aria-label="Social links">
          <ul className="flex gap-4">
            {socialLinks.map((link) => (
              <li key={link}>
                <Link
                  to={appPaths.home}
                  className="transition hover:text-foreground focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  )
}
