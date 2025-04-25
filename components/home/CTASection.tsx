'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { EbbIcon } from "../icons/EbbIcon"
import { DEFAULT_DOWNLOAD_URL, getDownloadLink } from '@/lib/downloadUtils'

export function CTASection() {
  const [downloadUrl, setDownloadUrl] = useState(DEFAULT_DOWNLOAD_URL)

  useEffect(() => {
    setDownloadUrl(getDownloadLink())
  }, [])

  return (
    <section id="cta" className="relative w-full border-t">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-violet-600/15 rounded-full filter blur-2xl opacity-70"></div>
        <div className="absolute -top-5 right-[15%] w-56 h-56 bg-violet-700/15 rounded-full filter blur-2xl opacity-70"></div>
      </div>
      <div className="container px-4 md:px-6 max-w-[1140px] mx-auto py-20 md:py-24 lg:py-32">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl flex items-center justify-center">
              Ready to <EbbIcon className="ml-2 mr-1 w-16 h-16 sm:w-14 sm:h-14 md:w-18 md:h-18 relative -top-2" />?
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Try for free today
            </p>
          </div>
          <div className="space-x-4">
            <Link href={downloadUrl}>
              <Button size="lg">Download Free</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
} 