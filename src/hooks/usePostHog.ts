import { usePostHog } from 'posthog-js/react'

export const usePostHogTracking = () => {
  const posthog = usePostHog()

  const trackResumeDownload = () => {
    posthog?.capture('resume_downloaded', { source: 'hero' })
  }

  const trackSectionView = (section: string) => {
    posthog?.capture('section_viewed', { section })
  }

  return {
    trackResumeDownload,
    trackSectionView
  }
} 