import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

import { FaqAccordionItem } from '@/components/features/faq/FaqAccordionItem'
import { faqCopy, faqItems } from '@/components/features/faq/faq.constants'
import { LandingSectionHeader } from '@/components/features/landing/LandingSectionHeader'
import {
  createItemVariants,
  createSectionVariants,
} from '@/components/features/landing/landingMotion'

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const shouldReduceMotion = Boolean(useReducedMotion())
  const sectionVariants = createSectionVariants(shouldReduceMotion)
  const itemVariants = createItemVariants(shouldReduceMotion)

  return (
    <section
      aria-labelledby="faq-title"
      className="bg-muted/30 px-4 py-18 sm:px-6 lg:px-8 lg:py-24"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
        className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16"
      >
        <motion.div variants={itemVariants}>
          <LandingSectionHeader
            id="faq-title"
            title={faqCopy.title}
            description={faqCopy.description}
            align="left"
            className="lg:sticky lg:top-24"
          />
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-3">
          {faqItems.map((item, index) => (
            <FaqAccordionItem
              key={item.question}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onToggle={() => {
                setOpenIndex((currentIndex) => (currentIndex === index ? null : index))
              }}
              shouldReduceMotion={shouldReduceMotion}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
