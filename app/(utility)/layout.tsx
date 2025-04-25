import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true, // Allow following links on these pages if necessary
    nocache: true, // Prevent caching
    googleBot: {
      index: false,
      follow: false, // Be explicit with Googlebot
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

// This layout applies only to routes within the (utility) group
export default function UtilityLayout({ children }: { children: React.ReactNode }) {
  // Minimal structure, inherits fonts/globals from root layout
  return <>{children}</>
} 