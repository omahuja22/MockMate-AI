export function AuthSkeleton() {
  return (
    <div className="w-full max-w-md rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-lg)]">
      <div className="h-10 w-10 animate-pulse rounded-xl bg-muted" />
      <div className="mt-8 h-4 w-24 animate-pulse rounded bg-muted" />
      <div className="mt-4 h-8 w-3/4 animate-pulse rounded bg-muted" />
      <div className="mt-4 h-4 w-full animate-pulse rounded bg-muted" />
      <div className="mt-8 space-y-4">
        <div className="h-11 animate-pulse rounded-lg bg-muted" />
        <div className="h-11 animate-pulse rounded-lg bg-muted" />
        <div className="h-11 animate-pulse rounded-lg bg-muted" />
      </div>
    </div>
  )
}
