'use client'

import { useEffect, useRef } from 'react'
import { usePostHogTracking } from '@/hooks/usePostHog'

interface SectionTrackerProps {
  sectionId: string
  children: React.ReactNode
}

export const SectionTracker = ({ sectionId, children }: SectionTrackerProps) => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { trackSectionView } = usePostHogTracking()
  const hasTracked = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTracked.current) {
            trackSectionView(sectionId)
            hasTracked.current = true
          }
        })
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [sectionId, trackSectionView])

  return (
    <div ref={sectionRef}>
      {children}
    </div>
  )
}

export default SectionTracker 