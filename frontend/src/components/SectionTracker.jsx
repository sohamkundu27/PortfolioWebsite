import React, { useEffect, useRef } from 'react'
import { usePostHogTracking } from '../hooks/usePostHog'

const SectionTracker = ({ sectionId, children }) => {
  const sectionRef = useRef(null)
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
      {
        threshold: 0.3, // Track when 30% of the section is visible
        rootMargin: '0px 0px -50px 0px'
      }
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