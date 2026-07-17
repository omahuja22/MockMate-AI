import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Section } from '@/components/layout/Section'
import { appPaths } from '@/routes/paths'

export function NotFoundPage() {
  return (
    <Section
      kicker="404"
      title="Page not found"
      description="The requested route does not exist."
      actions={
        <Button asChild variant="outline">
          <Link to={appPaths.home}>Back to home</Link>
        </Button>
      }
    />
  )
}