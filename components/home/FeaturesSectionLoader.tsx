"use client"

import dynamic from 'next/dynamic'
import React from 'react'
import { Skeleton } from "@/components/ui/skeleton"

const LoadingSkeleton = () => (
  <section className="w-full pt-10 md:pt-16 pb-20 md:pb-32 px-4 md:px-6">
    <div className="container mx-auto max-w-[1140px]">
      <div className="max-w-5xl mx-auto">
        <Skeleton className="w-full h-[700px] md:h-[672px]" />
      </div>
    </div>
  </section>
)

const LoadedFeaturesSection = dynamic(() => 
  import('@/components/home/FeaturesSection').then(mod => mod.FeaturesSection),
  {
    ssr: false,
    loading: LoadingSkeleton 
  }
)

export function FeaturesSectionLoader() {
  return <LoadedFeaturesSection />
} 