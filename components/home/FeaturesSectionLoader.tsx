"use client"

import dynamic from 'next/dynamic'
import React from 'react'

const LoadedFeaturesSection = dynamic(() => 
  import('@/components/home/FeaturesSection').then(mod => mod.FeaturesSection),
  {
    ssr: false,
  }
)

export function FeaturesSectionLoader() {
  return <LoadedFeaturesSection />
} 