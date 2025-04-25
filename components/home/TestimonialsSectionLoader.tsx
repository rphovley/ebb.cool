"use client"

import dynamic from 'next/dynamic'
import React from 'react'

const LoadedTestimonialsSection = dynamic(() => 
  import('@/components/home/TestimonialsSection').then(mod => mod.TestimonialsSection),
  {
    ssr: false,
  }
)

export function TestimonialsSectionLoader() {
  return <LoadedTestimonialsSection />
} 