import { useId } from 'react'
import { ChevronDown } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

import { cn } from '@/lib/utils'

type FaqAccordionItemProps = {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
  shouldReduceMotion: boolean
}

export function FaqAccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
  shouldReduceMotion,
}: FaqAccordionItemProps) {
  const panelId = useId()
  const buttonId = useId()

  return (
    <div className="rounded-2xl border border-border bg-card shadow-[var(--shadow-xs)]">
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 rounded-2xl px-5 py-5 text-left text-sm font-semibold text-foreground outline-none transition-colors duration-200 hover:bg-muted/40 focus-visible:ring-3 focus-visible:ring-ring/40"
        >
          <span>{question}</span>
          <ChevronDown
            aria-hidden="true"
            className={cn(
              'size-4 shrink-0 text-muted-foreground transition-transform duration-200',
              isOpen ? 'rotate-180' : 'rotate-0',
            )}
          />
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: shouldReduceMotion ? 'auto' : 0, opacity: shouldReduceMotion ? 1 : 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: shouldReduceMotion ? 'auto' : 0, opacity: shouldReduceMotion ? 1 : 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.22, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 text-sm leading-6 text-muted-foreground">{answer}</p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}
