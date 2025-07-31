import { usePostHog } from 'posthog-js/react'

export const usePostHogTracking = () => {
  const posthog = usePostHog()

  const trackResumeDownload = () => {
    posthog.capture('resume_downloaded', {
      source: 'hero'
    })
  }

  const trackSectionView = (section) => {
    posthog.capture('section_viewed', {
      section: section
    })
  }

  return {
    trackResumeDownload,
    trackSectionView
  }
} 