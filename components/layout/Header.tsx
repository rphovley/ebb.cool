'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Download } from 'lucide-react'
import { Logo } from '@/components/ui/Logo'
import { DEFAULT_DOWNLOAD_URL, getDownloadLink } from '@/lib/downloadUtils'
import { Countdown } from '@/components/ui/countdown'

export function Header() {
  const [downloadUrl, setDownloadUrl] = useState(DEFAULT_DOWNLOAD_URL)

  useEffect(() => {
    setDownloadUrl(getDownloadLink())
  }, [])

  const navItems = [
    { label: "Features", href: "#features" },
    { label: "Community", href: "#community" },
    { label: "1-Star Reviews", href: "#testimonials" },
    { label: "Pricing", href: "#pricing" },
  ]

  const priceChangeDate = new Date('2025-09-28T00:00:00')

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-20 max-w-[1140px] items-center justify-between px-4 md:px-6 lg:px-8">
        <div className="mr-4 flex items-start gap-10">
          <Logo width={36} height={36} />
          <div className="block">
            <Link href="#pricing">
            <Countdown 
                targetDate={priceChangeDate} 
                variant="navbar"
              />
            </Link>
          </div>
        </div>
        
        <div className="flex items-center space-x-6">
          <nav className="hidden items-center space-x-6 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          
          <Link href={downloadUrl}>
            <Button>
              Download
              <Download className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
} 