import React from 'react'

// This layout applies only to routes within the (utility) group
export default function UtilityLayout({ children }: { children: React.ReactNode }) {
  // Minimal structure, inherits fonts/globals from root layout
  return <>{children}</>
} 