"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Target, Calendar, Shield, TrendingUp, Trophy } from 'lucide-react'

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
    title: "Setup Your Goals with Tides",
    description: "Define your daily or weekly commitments. Tides are your commitment to focused work—set targets that align with your goals.",
    icon: <Target className="h-6 w-6" />,
    media: [{
      type: 'video',
      src: '/ebb-steps-web/tides.mov',
    }]
  },
  {
    number: "02",
    title: "Schedule Focus Sessions",
    description: "Plan ahead and make the most of your productive hours. Schedule sessions to align with your energy levels and commitments.",
    icon: <Calendar className="h-6 w-6" />,
    media: [{
      type: 'video',
      src: '/ebb-steps-web/schedule-demo.mov',
    }]
  },
  {
    number: "03",
    title: "Start Focus & Block Distractions",
    description: "Jump automatically from a scheduled session or start a focus session whenever it's convenient. Block distracting apps and websites to stay in the zone.",
    icon: <Shield className="h-6 w-6" />,
    media: [
      {
        type: 'video',
        src: '/ebb-steps-web/start-focus.mov',
      },
      {
        type: 'image',
        src: '/ebb-steps-web/block-example.png',
      }
    ]
  },
  {
    number: "04",
    title: "Track Your Time & Progress",
    description: "Like screen time on steroids. See exactly where your time goes and monitor your productivity patterns.",
    icon: <TrendingUp className="h-6 w-6" />,
    media: [{
      type: 'video',
      src: '/ebb-steps-web/track-time.mov',
    }]
  },
]

export function StepsSection() {
  const [activeStep, setActiveStep] = useState(0)
  const [activeMediaIndex, setActiveMediaIndex] = useState(0)

  return (
    <section className="w-full py-20 md:py-32 px-4 md:px-6 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-[1140px]">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Four Steps to Achieve Your Goals
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Set goals, stay focused, and build lasting habits that drive real progress
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
                    className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-l-2xl"
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
      </div>
    </section>
  )
}
