"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Target, Calendar, Shield, TrendingUp, Trophy } from 'lucide-react'
import { DEFAULT_DOWNLOAD_URL, getDownloadLink } from '@/lib/downloadUtils'

interface Step {
  number: string
  title: string
  description: string
  icon: React.ReactNode
  media: {
    type: 'video' | 'image'
    src: string
    poster?: string
  }[]
}


const steps: Step[] = [
  {
    number: "01",
    title: "Set Your Goals with Tides",
    description: "Stop feeling overwhelmed. Set achievable daily or weekly targets that match your actual capacity—and finally stick to them.",
    icon: <Target className="h-6 w-6" />,
    media: [{
      type: 'video',
      src: 'https://demoairbnbbucket.s3.us-east-2.amazonaws.com/ebb-steps-web/tides.mov',
    }]
  },
  {
    number: "02",
    title: "Schedule Focus Sessions",
    description: "Work when you're at your best. Plan sessions around your peak energy hours so every minute of focus actually counts.",
    icon: <Calendar className="h-6 w-6" />,
    media: [{
      type: 'video',
      src: 'https://demoairbnbbucket.s3.us-east-2.amazonaws.com/ebb-steps-web/schedule-demo.mov',
    }]
  },
  {
    number: "03",
    title: "Enter Focus & Block Distractions",
    description: "One click to enter deep work. Distracting apps and websites are blocked automatically—no willpower required.",
    icon: <Shield className="h-6 w-6" />,
    media: [
      {
        type: 'video',
        src: 'https://demoairbnbbucket.s3.us-east-2.amazonaws.com/ebb-steps-web/start-focus.mov',
      },
      {
        type: 'image',
        src: 'https://demoairbnbbucket.s3.us-east-2.amazonaws.com/ebb-steps-web/block-example.png',
      }
    ]
  },
  {
    number: "04",
    title: "Track Your Progress",
    description: "See exactly where your time goes. Screen time insights on steroids—understand your patterns and celebrate real wins.",
    icon: <TrendingUp className="h-6 w-6" />,
    media: [{
      type: 'video',
      src: 'https://demoairbnbbucket.s3.us-east-2.amazonaws.com/ebb-steps-web/track-productivity.mov',
    }]
  },
]

export function StepsSection() {
  const [activeStep, setActiveStep] = useState(0)
  const [activeMediaIndex, setActiveMediaIndex] = useState(0)
  const [downloadUrl, setDownloadUrl] = useState(DEFAULT_DOWNLOAD_URL)

  useEffect(() => {
    setDownloadUrl(getDownloadLink())
  }, [])

  return (
    <section className="w-full py-20 md:py-32 px-4 md:px-6 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-[1140px]">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            From Distracted to Focused in 4 Steps
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Turn your goals into reality with a simple system that blocks distractions and builds lasting focus habits
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left: Step Cards */}
          <div className="space-y-4 order-2 md:order-1">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`relative p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                  activeStep === index
                    ? 'border-primary bg-primary/5 shadow-lg shadow-primary/10'
                    : 'border-border bg-card hover:border-primary/50'
                }`}
                onClick={() => {
                  setActiveStep(index)
                  setActiveMediaIndex(0)
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-start gap-4">
                  {/* Step Number */}
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-colors ${
                    activeStep === index
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {step.number}
                  </div>

                  <div className="flex-1">
                    {/* Title with Icon */}
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`transition-colors ${
                        activeStep === index ? 'text-primary' : 'text-muted-foreground'
                      }`}>
                        {step.icon}
                      </div>
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Active Indicator */}
                {activeStep === index && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute left-0 top-1/2 -translate-y-1/2 h-29   w-1 bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.div>
            ))}
          </div>

          {/* Right: Media Display */}
          <div className="sticky top-8 order-1 md:order-2">
            <div className="relative aspect-[3/2] rounded-2xl overflow-hidden bg-muted border-2 border-border shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeStep}-${activeMediaIndex}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0"
                >
                  {steps[activeStep].media[activeMediaIndex].type === 'video' ? (
                    <video
                      src={steps[activeStep].media[activeMediaIndex].src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <img
                      src={steps[activeStep].media[activeMediaIndex].src}
                      alt={steps[activeStep].title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Step Indicator */}
              <div className="absolute bottom-4 right-4 bg-background/90 backdrop-blur-sm px-4 py-2 rounded-full border border-border">
                <span className="text-sm font-medium">
                  Step {activeStep + 1} of {steps.length}
                </span>
              </div>

              {/* Media Navigation (if multiple media items) */}
              {steps[activeStep].media.length > 1 && (
                <div className="absolute bottom-4 left-4 flex gap-2">
                  {steps[activeStep].media.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveMediaIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        activeMediaIndex === index
                          ? 'bg-primary w-8'
                          : 'bg-background/50 hover:bg-background/75'
                      }`}
                      aria-label={`View media ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-4">
            <p className="text-muted-foreground">
              Ready to transform your productivity?
            </p>
            <a
              href={downloadUrl}
              className="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
            >
              Start Your First Focus Session
            </a>
            <p className="text-sm text-muted-foreground">
              Free download • No credit card required "Only your Soul"
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
