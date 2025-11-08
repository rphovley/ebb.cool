'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, KeyRound, BadgeCheck, Layers, Shield, Calendar, MessageSquare, Eye, BarChart3 } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DEFAULT_DOWNLOAD_URL, getDownloadLink } from '@/lib/downloadUtils'
import { Countdown } from '@/components/ui/countdown'

const paidFeatures = [
  { icon: BarChart3, text: "Hands-Free Time Tracking" },
  { icon: Shield, text: "Site and App Blocking" },
  { icon: MessageSquare, text: "Slack & Spotify Integration" },
  { icon: Calendar, text: "Schedule Focus Sessions" },
  { icon: Eye, text: "DoomScroll Detention" },
  { icon: Layers, text: "Multiple Focus Profiles" },
]

const lifetimeFeatures = [
  { icon: BarChart3, text: "Hands-Free Time Tracking" },
  { icon: Shield, text: "Site and App Blocking" },
  { icon: MessageSquare, text: "Slack & Spotify Integration" },
  { icon: Calendar, text: "Schedule Focus Sessions" },
  { icon: Eye, text: "DoomScroll Detention" },
  { icon: Layers, text: "Multiple Focus Profiles" },
  { icon: KeyRound, text: "Early Access to New Features" },
]

const proAvatars: string[] = [
  "/images/camden.jpg",
  "/images/razvan.jpg",
  "/images/strw.jpg",
  "/images/samantha.jpg",
  "/images/joschua.jpg"
]

const lifetimeAvatars: string[] = [
  "/images/nathan.jpg",
  "/images/paul.jpg",
  "/images/tanner.jpg",
  "/images/jesco.jpg",
  "/images/chris.jpg"
]

export function PricingSection() {
  const [downloadUrl, setDownloadUrl] = useState(DEFAULT_DOWNLOAD_URL)
  const [isAnnual, setIsAnnual] = useState(false)

  useEffect(() => {
    setDownloadUrl(getDownloadLink())
  }, [])

  // October 23rd, 2025 at 22:00 CET (20:00 UTC)
  const priceChangeDate = new Date('2025-10-23T20:00:00Z')

  return (
    <section id="pricing" className="relative w-full py-12 md:py-16 lg:py-20">
      <div className="absolute inset-0 -z-10">
        {/* Multiple overlapping circles for blob effect */}
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-violet-500/10 rounded-full filter blur-2xl opacity-75"></div>
        <div className="absolute top-1/3 right-[15%] w-72 h-72 bg-violet-600/10 rounded-full filter blur-2xl opacity-75"></div>
      </div>
      <div className="container px-4 md:px-6 max-w-[1080px] mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Simple pricing</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
             Start today.
            </p>
          </div>

          {/* Countdown Component */}
          {/* <div className="pt-4">
            <Countdown
              targetDate={priceChangeDate}
              variant="pricing"
            />
          </div> */}
        </div>

        <div className="mx-auto flex justify-center max-w-[480px] px-4">
          {/* Note: Layout changed to single centered card. Restore grid with sm:grid-cols-2 when showing multiple pricing options */}
          {/* Subscription Card with Toggle */}
          <Card className="relative w-full max-w-[480px]">
            <CardHeader className="pt-4 pb-6">
              {/* Ebb Pro Badge */}
              <div className="inline-flex self-start items-center max-w-fit rounded-lg bg-yellow-400/10 px-3 py-1 text-sm font-medium text-yellow-400 mb-4 gap-1">
                <KeyRound className="h-4 w-4" />
                <span>Ebb Pro</span>
              </div>

              {/* Billing Toggle */}
              <div className="flex items-center justify-center gap-3 mb-6">
                <span className={`text-sm font-medium transition-colors ${!isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
                  Monthly
                </span>
                <button
                  onClick={() => setIsAnnual(!isAnnual)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    isAnnual ? 'bg-primary' : 'bg-muted'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      isAnnual ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
                <span className={`text-sm font-medium transition-colors ${isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
                  Annual
                </span>
              </div>
              {/* Price Display */}
              <div className="flex flex-col items-center justify-center text-center mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold">${isAnnual ? '5' : '9'}</span>
                  <span className="text-xl text-muted-foreground">/month</span>
                </div>
                {isAnnual && (
                  <p className="text-sm text-muted-foreground mt-2">Billed annually at $59</p>
                )}
              </div>

              <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Get Started
              </Button>
              <p className="text-xs text-center text-muted-foreground mt-3 w-full">
                No credit card required
              </p>
            </CardHeader>

            <CardContent className="flex flex-col items-start space-y-6 pt-2">
              {/* Feature List */}
              <ul className="grid grid-cols-2 gap-x-8 gap-y-2 w-full px-0 md:px-0">
                {paidFeatures.map((feature, index) => {
                  const Icon = feature.icon
                  return (
                    <li key={index} className="flex items-center gap-2">
                      <Icon className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm">{feature.text}</span>
                    </li>
                  )
                })}
              </ul>

              {/* Social Proof */}
              <div className="flex items-center justify-center w-full pt-4">
                <div className="flex flex-col space-y-2 items-center">
                  <div className="flex -space-x-2 overflow-hidden">
                    {proAvatars.slice(0, 5).map((src: string, index: number) => (
                      <Avatar key={index} className="inline-block h-8 w-8 rounded-full ring-2 ring-background">
                        <AvatarImage src={src} alt={`Pro user ${index + 1}`} />
                        <AvatarFallback>{`P${index + 1}`}</AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">Join dozens of pros</p>
                </div>
              </div>
            </CardContent>
          </Card>

{/* Lifetime Card - HIDDEN */}
          {/* <Card className="relative border-2 border-primary">
            <CardHeader className="pt-4 pb-6">
              {/* Lifetime Badge */}
              {/* <div className="inline-flex self-start items-center max-w-fit rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4 gap-1">
                <KeyRound className="h-4 w-4" />
                <span>Lifetime Access</span>
              </div> */}

              {/* Price Display */}
              {/* <div className="flex flex-col items-center justify-center text-center mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold">$149</span>
                  <span className="text-xl text-muted-foreground">one-time</span>
                </div>
                <CardDescription className="mt-2">Pay once, own it forever</CardDescription>
              </div> */}

              {/* <Link href={downloadUrl}>
                <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Get Started
                </Button>
              </Link>
            </CardHeader> */}

            {/* <CardContent className="flex flex-col items-start space-y-6 pt-2"> */}
              {/* Feature List */}
              {/* <ul className="grid grid-cols-2 gap-x-8 gap-y-2 w-full px-0 md:px-0">
                {lifetimeFeatures.map((feature, index) => {
                  const Icon = feature.icon
                  return (
                    <li key={index} className="flex items-center gap-2">
                      <Icon className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm">{feature.text}</span>
                    </li>
                  )
                })}
              </ul> */}

              {/* Social Proof */}
              {/* <div className="flex items-center justify-center w-full pt-4">
                <div className="flex flex-col space-y-2 items-center">
                  <div className="flex -space-x-2 overflow-hidden">
                    {lifetimeAvatars.map((src: string, index: number) => (
                      <Avatar key={index} className="inline-block h-8 w-8 rounded-full ring-2 ring-background">
                        <AvatarImage src={src} alt={`Lifetime user ${index + 1}`} />
                        <AvatarFallback>{`L${index + 1}`}</AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">Join dozens with lifetime access *</p>
                </div>
              </div>
            </CardContent>
          </Card> */}
        </div>

        {/* Money Back Guarantee Badge */}
        <div className="flex justify-center w-full mt-8">
          <div className="flex items-center gap-2 rounded-lg bg-card/30 px-4 py-3 border border-border/40">
            <BadgeCheck className="h-6 w-6 text-blue-400 flex-shrink-0" />
            <p className="text-sm text-muted-foreground">
              30-day money back guarantee
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 