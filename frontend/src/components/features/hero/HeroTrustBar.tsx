import { heroTrustSignals } from '@/components/features/hero/hero.constants'

export function HeroTrustBar() {
  return (
    <ul className="grid gap-3 sm:grid-cols-3" aria-label="MockMate AI trust signals">
      {heroTrustSignals.map(({ label, description, icon: Icon }) => (
        <li
          key={label}
          className="rounded-xl border border-border bg-card px-4 py-3 shadow-[var(--shadow-xs)]"
        >
          <div className="flex items-start gap-3">
            <span className="mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Icon aria-hidden="true" className="size-4" />
            </span>
            <div>
              <p className="text-sm font-medium text-foreground">{label}</p>
              <p className="mt-1 text-xs leading-5 text-muted-foreground">{description}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}
