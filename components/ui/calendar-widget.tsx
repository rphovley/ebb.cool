"use client"

import { useState, useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import Script from 'next/script'
import Image from 'next/image'

export function CalendarWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasAutoOpened, setHasAutoOpened] = useState(false)
  const [scriptLoaded, setScriptLoaded] = useState(false)
  const targetRef = useRef<HTMLDivElement>(null)

  // Auto-open after 3 seconds on first visit
  useEffect(() => {
    if (!hasAutoOpened) {
      const timer = setTimeout(() => {
        setIsOpen(true)
        setHasAutoOpened(true)
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [hasAutoOpened])

  useEffect(() => {
    if (scriptLoaded && isOpen && targetRef.current && typeof window !== 'undefined') {
      // Small delay to ensure widget is mounted
      setTimeout(() => {
        if (targetRef.current) {
          // Clear any existing content
          targetRef.current.innerHTML = ''

          // Load the Google Calendar scheduling button
          if ((window as any).calendar?.schedulingButton) {
            (window as any).calendar.schedulingButton.load({
              url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ0qpXzXXFI2rM6rnYbqMvuhskiydIQzLks3mOFFJVPFym_Xa7eRia006_F6B2qm_DVpdhsrjB78?gv=true',
              color: '#7c3aed',
              label: 'Schedule a Time',
              target: targetRef.current,
            })
          }
        }
      }, 100)
    }
  }, [scriptLoaded, isOpen])

  return (
    <>
      {/* Load Google Calendar Scripts */}
      <link
        href="https://calendar.google.com/calendar/scheduling-button-script.css"
        rel="stylesheet"
      />
      <Script
        src="https://calendar.google.com/calendar/scheduling-button-script.js"
        strategy="lazyOnload"
        onLoad={() => setScriptLoaded(true)}
      />

      {/* Floating Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen ? (
          <button
            onClick={() => setIsOpen(true)}
            className="group relative"
          >
            {/* Headshot with ring effect */}
            <div className="relative h-14 w-14 rounded-full ring-2 ring-primary/20 ring-offset-2 ring-offset-background transition-all hover:ring-primary/40 hover:ring-offset-4 shadow-lg">
              <Image
                src="/images/luis.jpg"
                alt="Chat with us"
                fill
                className="rounded-full object-cover"
              />
              {/* Online indicator */}
              <div className="absolute bottom-0 right-0 h-4 w-4 rounded-full bg-green-500 ring-2 ring-background"></div>
            </div>

            {/* Tooltip on hover */}
            <div className="absolute bottom-full right-0 mb-2 px-3 py-1.5 bg-foreground text-background text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
              Chat with us
            </div>
          </button>
        ) : (
          <div className="bg-background/95 backdrop-blur-lg border rounded-lg shadow-xl p-4 w-80 animate-in slide-in-from-bottom-5">
            {/* Header with headshot */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 rounded-full ring-2 ring-primary/20">
                  <Image
                    src="/images/luis.jpg"
                    alt="Team member"
                    fill
                    className="rounded-full object-cover"
                  />
                  <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 ring-2 ring-background"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Book a Call</h3>
                  <p className="text-xs text-muted-foreground">Usually responds in 1 hour</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Content */}
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Schedule a quick chat to learn more about Ebb or get personalized productivity tips.
              </p>

              {/* Google Calendar Scheduling Button Target */}
              <div ref={targetRef} className="w-full [&_button]:w-full [&_button]:justify-center [&_button]:text-base [&_button]:font-semibold [&_button]:py-3 [&_button]:text-white"></div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
