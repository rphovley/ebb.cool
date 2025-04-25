'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { PostHogProvider as PHProvider } from 'posthog-js/react'
import posthog from 'posthog-js'
import React, { Suspense, useEffect } from 'react'

if (typeof window !== 'undefined') {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    capture_pageview: false // Disable automatic pageview capture, as we capture manually
  })
}

export function PostHogPageview(): React.ReactElement | null {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (pathname) {
      let url = window.origin + pathname
      if (searchParams && searchParams.toString()) {
        url = url + `?${searchParams.toString()}`
      }
      posthog.capture(
        '$pageview',
        {
          '$current_url': url,
        }
      )
    }
  }, [pathname, searchParams])

  return null
}

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  return (
    <PHProvider client={posthog}>
      <Suspense>
        <PostHogPageview />
      </Suspense>
      {children}
    </PHProvider>
  )
} 