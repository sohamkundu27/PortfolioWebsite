'use client'

import { PostHogProvider } from 'posthog-js/react'

interface PostHogProviderWrapperProps {
  children: React.ReactNode
}

export default function PostHogProviderWrapper({ children }: PostHogProviderWrapperProps) {
  return (
    <PostHogProvider 
      apiKey="phc_Aebmrx2jMYgTMr6l38B2MWFevX6oLihukV8m6r0G00x"
      options={{
        api_host: 'https://us.i.posthog.com',
      }}
    >
      {children}
    </PostHogProvider>
  )
} 